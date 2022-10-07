const sequelize = require('sequelize')
const db = require('../db/connection')
const {DataTypes} = require("sequelize");
const Module = require("module");

const Station = db.define('Station', {
    StationID:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nimi:{
        type: DataTypes.STRING
    },
    Namn:{
        type: DataTypes.STRING
    },
    Osoite:{
        type: DataTypes.STRING
    },
    Adress:{
        type: DataTypes.STRING
    },
    Kaupunki:{
        type: DataTypes.STRING
    },
    Stad:{
        type: DataTypes.STRING
    },
    Operaattor:{
        type: DataTypes.STRING
    },
    Kapasiteet:{
        type: DataTypes.INTEGER
    },
    x:{
        type: DataTypes.FLOAT
    },
    y:{
        type: DataTypes.FLOAT
    }
})

module.exports = Station

// TODO: after having changed the database setting up default values for Kaupunki and Stad, come here to check if some change is needed