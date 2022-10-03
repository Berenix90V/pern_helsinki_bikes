import pandas as pd
import sqlalchemy as sqla
from dotenv import dotenv_values
from io import StringIO

from sqlalchemy import MetaData, Column, String, Integer, Float, DateTime, ForeignKey, CheckConstraint

config = dotenv_values()
path_string = f"postgresql://{config['DB_USER']}:{config['DB_PASSWORD']}@{config['DB_HOST']}:{config['DB_PORT']}/{config['DATABASE']}"
engine = sqla.create_engine(path_string)

file_path = 'fetch_data/data/definitive/'
trips_files = [file_path + '2021-0{}.csv'.format(m) for m in range(5, 8)]
stations_file = 'stations.csv'

# create tables
meta = MetaData()

stations = sqla.Table(
    'stations', meta,
    Column('Station_ID', Integer, primary_key=True),
    Column('Nimi', String),
    Column('Namn', String),
    Column('Name', String),
    Column('Osoite', String),
    Column('Adress', String),
    Column('Kaupunki', String),
    Column('Stad', String),
    Column('Operaattor', String),
    Column('Kapasiteet', Integer),
    Column('x', Float),
    Column('y', Float),
)

trips = sqla.Table(
    'trips', meta,
    Column('Trip_ID', Integer, primary_key=True),
    Column('Departure_datetime', DateTime),
    Column('Return_datetime', DateTime),
    Column('Departure_station_id', Integer, ForeignKey("stations.Station_ID"), nullable=False),
    Column('Departure_station_name', String),
    Column('Return_station_id', Integer, ForeignKey("stations.Station_ID"), nullable=False),
    Column('Return_station_name', String),
    Column('Covered_distance_m', Float, CheckConstraint('"Covered_distance_m">=10')),
    Column('Duration_sec', Integer, CheckConstraint('"Duration_sec">=10')),
)

meta.create_all(engine)


# It populates trip tables using a stream
def populate(engine, df, table, if_exists='append', sep='\t', encoding='utf8', index=True):
    # Create Table
    df[:0].to_sql(table, engine, if_exists=if_exists)

    # Prepare data
    output = StringIO()
    df.to_csv(output, sep=sep, header=False, encoding=encoding, index=index)
    output.seek(0)

    # Insert data
    connection = engine.raw_connection()
    cursor = connection.cursor()
    cursor.copy_from(output, table, sep=sep, null='')
    connection.commit()
    cursor.close()


# tables population
df = pd.read_csv(file_path + stations_file)
populate(engine, df, "stations", index=False)

df = pd.concat(map(pd.read_csv, trips_files), ignore_index=True)
populate(engine, df, "trips")
