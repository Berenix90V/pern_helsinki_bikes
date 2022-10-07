// package to manage env variables
require("dotenv").config()

// package to manage login
const morgan = require('morgan')

const express = require('express')
const app = express()

// const db = require("./db/connection")


// import the routes for stations
const stations = require('./routes/stations')

// If the env variable is not defined we can set up a default value with the syntax " || number"
const port = process.env.PORT || 3000


// MIDDLEWARE
// useful to access the body of post request, unless this the property body is undefined
app.use(express.json())

// HOME
app.get('/', (req,res) =>{

    res.send('Helsinki bikes app')
})

// Routes
app.use('/api/v1/stations', stations)

app.listen(port, ()=>{
    console.log(`Server is up and listening to port ${port}`)
});