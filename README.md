# pern_application_bikes
## Data fetch
The csv files are stored in the path `/fetch_data/data/originals/`. \
Their names are:
- 2021-05.csv, 
- 2021-06.csv, 
- 2021-07.csv, 
- stations.csv

Open psql and enter in localhost, database postgres, default port, with the default user postgres and create the database helsinki_bikes with the command:
`CREATE DATABASE helsinki_bikes;`

## Data validation
Before executing the python script install `pandas` and `pandera` with one of the following commands:
- `py -m pip install pandera`  
- `pip install pandera` 

Execute python script `validate_data.py`

The checks and triggers are insert after the import of csv to not slow it down.
