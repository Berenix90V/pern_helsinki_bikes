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

## Database
In a first instance sequelize was chosen, but it was too painful to find a work-around every now and then.
Main problems:
1. in the method query it doesn't support passing a table as a variable: it escapes.
2. if inheritance is supported it is only in limited usage. It wasn't possible to have the following structure properly working: an abstract class Entity that 
extends sequelize models and then 2 subclasses (Station and Trip) that extends Entity. The problem was subtle and it came up only after a while: filtering with 
the findOne method (the same with other filtering methods) and using the `where` clause threw an error because it doesn't recognise the field.
Making the Station directly inherit from Model `Station extends Model<InferAttributes<Station>, InferCreationAttributes<Station>>`, the error was fixed.
Apparently station's attributes are not passed to InferAttributes, that takes only the attributes directly from Entity (so no one).

The first problem was not a bigger one because it was limited in testing environment, where the use of rough query is a substitute of the funcions that have to be tested.
The min problem was the second one> what is the point of using an ORM if I have to limit my object oriented programming?

### Conversion to typeorm
The conversion to this was quite straightforward, except for an error of ` Duplicate identifier 'IteratorResult'` in `node_modules/.pnpm/@types+es6-shim@0.31.42/node_modules/@types/es6-shim/index.d.ts:6:11 ` and 
`node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es2015.iterable.d.ts:41:6`.
After a research I find out that it's due to some version problems, maybe some library (typeorm, since before the error was absent) is using previous version types of typescript.
Solved adding `"skipLibCheck": true` to the tsconfig file.

## Backend
### Technology in use
In a first moment I used plain Javascript, but then I was forced to convert the project in typescript because I needed some features that only oop has.
### Structure
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
