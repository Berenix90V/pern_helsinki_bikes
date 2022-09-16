import pandas as pd
import pandera as pa
from pandera import Column, Check

file_path = 'fetch_data/data/originals/'
output_path = 'fetch_data/data/definitive/'

stations_file = 'stations.csv'
trips_files = ['2021-05.csv']

# validation schema


for file_name in trips_files:
    # Read csv file
    df = pd.read_csv(file_path + file_name)

    # Rename column with datetime
    df.rename(columns = {'Departure':'Departure_datetime', 'Return':'Return_datetime'}, inplace = True)

    # Conversion from string to date
    df['Departure_datetime'] = df['Departure_datetime'].str.replace('T', ' ')
    df['Return_datetime'] = df['Return_datetime'].str.replace('T', ' ')
    df['Departure_datetime'] = pd.to_datetime(df['Departure_datetime'], format='%Y-%m-%d %H:%M:%S')
    df['Return_datetime'] = pd.to_datetime(df['Return_datetime'], format='%Y-%m-%d %H:%M:%S')

    # Replace all spaces in column names with _
    df.columns = df.columns.str.replace(' ', '_')

    # delete rows with null values
    df = df.dropna()



    print(df.dtypes)

    df.to_csv(output_path + file_name, index=False)