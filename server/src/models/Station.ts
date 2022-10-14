import {sequelize} from '../db/connection'
import {Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'
const {DataTypes} = require("sequelize");

class Station extends Model<InferAttributes<Station>, InferCreationAttributes<Station>> {
    declare StationID: CreationOptional<number>
    declare Nimi: string
    declare Namn: string
    declare Name: string
    declare Osoite: string
    declare Adress: string
    declare Kaupunki: string
    declare Stad: string
    declare Operaattor: string | null
    declare Kapasiteet: number
    declare x: number
    declare y: number

    static fetchAll: () => Promise<Station[]>;
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



Station.fetchAll = async function () {
    return await Station.findAll({
        attributes: ['Station_ID', 'Nimi', 'Namn', 'Name']
    })
}



export {Station}

// TODO: after having changed the database setting up default values for Kaupunki and Stad, come here to check if some change is needed