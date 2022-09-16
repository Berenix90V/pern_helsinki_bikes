import pandas as pd

file_path = 'fetch_data/data/originals/'
output_path = 'fetch_data/data/definitive/'

stations_file = 'stations.csv'
trips_files = ['2021-05.csv']

for file_name in trips_files:
    # Read csv file
    df = pd.read_csv(file_path + file_name)

    # separate date and time in departure and in return
    df[['Departure_date','Departure_time']] = df['Departure'].str.split('T', expand=True)
    df.drop(['Departure'], axis=1, inplace=True)

    df[['Return_date','Return_time']] = df['Return'].str.split('T', expand=True)
    df.drop(['Return'], axis=1, inplace=True)

    # sort the columns in the right order (departure and return dates and time for first)
    cols = df.columns.tolist()
    cols = cols[-4:] + cols[:-4]
    df = df[cols]

    # Replace all spaces in column names with _
    df.columns = df.columns.str.replace(' ', '_')

    # delete rows with null values
    df = df.dropna()

    print(df.dtypes)

    df.to_csv(output_path + file_name, index=False)