# Pern_application_bikes
## Data
### Data fetch
Save the csv files in the path `/fetch_data/data/originals/`, creating the necessary diretories \
The names of the files are:
- 2021-05.csv, 
- 2021-06.csv, 
- 2021-07.csv, 
- stations.csv

### Database creation
Open psql and enter in localhost, database: postgres, default port, with the default user `postgres` and create the database `helsinki_bikes` with the command:
`CREATE DATABASE helsinki_bikes;`

### Data validation
Install `pandas` and `pandera` with one of the following commands, depending on your python installation:
- `py -m pip install pandera`  
- `pip install pandera` 

Execute python script `/fetch_data/validate_data.py`

### Database population
Create your `.env` file in the same directory of the python script `populate_db`, `fetch_data`.
The file must contain the following variables, substitute the values with your configuration:

DB_HOST = 'localhost' \
DB_PORT = 5432  \
DB_USER = 'postgres_user'\
DB_PASSWORD = 'postgres_password'\
DATABASE = 'helsinki_bikes'

Run the python script `/fetch_data/populate_db`.

## Backend
The backend is structured as a Rest API.
Create your own `.env` file with the following variables (change them according to your configuration):

PORT=3006
PG_HOST='localhost'
PG_PORT=5432
PG_USER='postgres'
PG_PASSWORD='postgres'
PG_DATABASE='helsinki_bikes'

If database connection has to be tested, run the file with working directory `server`, so that it can grab the env variables from the `.env` file
in the server folder.

The methods of the API are the following.
### Stations
- GET `/api/v1/stations` : Get all the stations
- POST `/api/v1/stations` : Create new station
- GET `/api/v1/stations/:id` : Get station by id
- PUT `/api/v1/stations/:id` : Update station given the id
- DELETE `/api/v1/stations/:id` : Delete a station given the id


## Tests
Implemented jest with typescript following the official guide and other sources:
- https://jestjs.io/docs/getting-started
- https://medium.com/@natnael.awel/how-to-setup-testing-for-typescript-with-express-js-example-83d3efbb6fd4

Run the following command:
`pnpm install jest supertest ts-jest types@jest`

Configure jest which creates `jest.config.js`:
`npx ts-jest config:init`

Added to the config file: 
```
transform: {
"^.+\\.(ts|tsx)$": "ts-jest"
}
```
