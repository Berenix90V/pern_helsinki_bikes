import pandas as pd
import sqlalchemy as sqla
from dotenv import dotenv_values
from io import StringIO

config = dotenv_values()
path_string = f"postgresql://{config['DB_USER']}:{config['DB_PASSWORD']}@{config['DB_HOST']}:{config['DB_PORT']}/{config['DATABASE']}"
engine = sqla.create_engine(path_string)

file_path = 'fetch_data/data/definitive/'
trips_files = ['2021-0{}.csv'.format(m) for m in range(5, 8)]


def populate(engine, df, table, if_exists='append', sep='\t', encoding='utf8'):
    # Create Table
    df[:0].to_sql(table, engine, if_exists=if_exists)

    # Prepare data
    output = StringIO()
    df.to_csv(output, sep=sep, header=False, encoding=encoding)
    output.seek(0)

    # Insert data
    connection = engine.raw_connection()
    cursor = connection.cursor()
    cursor.copy_from(output, table, sep=sep, null='')
    connection.commit()
    cursor.close()


for file_name in trips_files:
    print(file_name)
    df = pd.read_csv(file_path + file_name)
    populate(engine, df, "Trips")
