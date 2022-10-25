// package to manage env variables
require("dotenv").config()

// package to manage login
// const morgan = require('morgan')

import express, { Express, Request, Response } from 'express';
const app = express()

// import the routes for stations
import {router as stations} from './routes/stations'

// import db connection
import {connect_to_db} from "./db/db_connection"
connect_to_db()


// If the env variable is not defined we can set up a default value with the syntax " || number"
const port = process.env.PORT || 3000


// MIDDLEWARE
// useful to access the body of post request, unless this the property body is undefined
app.use(express.json())

// HOME

app.get('/', (req: Request,res: Response) =>{
    res.send('Helsinki bikes app')
})

// Routes
app.use('/api/v1/stations', stations)

app.listen(port, ()=>{
    console.log(`Server is up and listening to port ${port}`)
});

export default app