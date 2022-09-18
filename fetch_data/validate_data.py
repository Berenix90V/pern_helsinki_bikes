import pandas as pd
import pandera as pa
from pandera import Column, Check
import re as re

file_path = 'fetch_data/data/originals/'
output_path = 'fetch_data/data/definitive/'

stations_file = 'stations.csv'
trips_files = ['2021-0{}.csv'.format(m) for m in range(5,8) ]

stations = pd.read_csv(file_path + stations_file)
stations.drop('FID', axis = 1)

# validation schema
schema = pa.DataFrameSchema(
    {
        "Departure_datetime": Column(str, Check.str_matches("^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$")),
        "Return_datetime": Column(str, Check.str_matches("^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$")),
        "Departure_station_id": Column(int, Check.isin(stations['ID']), nullable = False),
        "Departure_station_name": Column(str),
        "Return_station_id": Column(int, Check.isin(stations['ID']), nullable = False),
        "Return_station_name": Column(str),
        "Covered_distance_(m)": Column(float, Check.greater_than_or_equal_to(10.0)),
        "Duration_(sec.)": Column(int, Check.greater_than_or_equal_to(10))
    }
)

for file_name in trips_files:

    # Read csv file
    df = pd.read_csv(file_path + file_name, nrows = 5)

    # FIX COLUMN NAMES
    # Rename column with datetime
    df.rename(columns = {'Departure':'Departure_datetime', 'Return':'Return_datetime'}, inplace = True)

    # Replace all spaces in column names with _
    df.columns = df.columns.str.replace(' ', '_')

    # VALIDATION
    try:
        df = schema.validate(df, lazy=True)
    except pa.errors.SchemaErrors as err:
        print("Schema errors and failure cases:")
        print(err.failure_cases)
        print("\nDataFrame object that failed validation:")
        print(err.data)

    # DATA ELABORATION
    # Conversion from string to proper datetime format
    df['Departure_datetime'] = df['Departure_datetime'].str.replace('T', ' ')
    df['Return_datetime'] = df['Return_datetime'].str.replace('T', ' ')
    df['Departure_datetime'] = pd.to_datetime(df['Departure_datetime'], format='%Y-%m-%d %H:%M:%S')
    df['Return_datetime'] = pd.to_datetime(df['Return_datetime'], format='%Y-%m-%d %H:%M:%S')

    # Conversion of invalid names for postgres
    specialChars = "!#$%^&*()."
    for specialChar in specialChars:
        df.columns = df.columns.str.replace(specialChar, '')

    # delete rows with null values
    df = df.dropna()

    print(df.dtypes)

    # RETURN VALIDATED AND ELABORATED DATA
    df.to_csv(output_path + file_name, index=False)