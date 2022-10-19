import {sequelize} from '../db/connection'
import {Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'
import {Entity} from "./Entity";
import {IStationAttributes} from "./IStationAttributes";
const {DataTypes} = require("sequelize");

class Station extends Entity implements IStationAttributes{
    declare StationID: CreationOptional<number>
    declare Nimi: string
    declare Namn: string
    declare Name: string
    declare Osoite: string
    declare Adress: string
    declare Kaupunki: CreationOptional<string>
    declare Stad: CreationOptional<string>
    declare Operaattor: CreationOptional<string | null>
    declare Kapasiteet: number
    declare x: number
    declare y: number

    static createNew(): Promise<Station> {
        return Station.create()
    }

    static fetchAll(): Promise<Station[]> {
        return Station.findAll({
            attributes: ['Station_ID', 'Nimi', 'Namn', 'Name']
        })
    }
}


Station.init({
    StationID:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nimi:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Namn:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Osoite:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Adress:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Kaupunki:{
        type: DataTypes.STRING,
        defaultValue: "Helsinki"
    },
    Stad:{
        type: DataTypes.STRING,
        defaultValue: "Helsingfors"
    },
    Operaattor:{
        type: DataTypes.STRING
    },
    Kapasiteet:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    x:{
        type: DataTypes.FLOAT
    },
    y:{
        type: DataTypes.FLOAT
    }
}, {
    tableName: 'stations',
    sequelize // passing the `sequelize` instance is required
})







export {Station}

// TODO: after having changed the database setting up default values for Kaupunki and Stad, come here to check if some change is needed