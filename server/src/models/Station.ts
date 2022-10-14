const db = require('../db/connection')
const {DataTypes} = require("sequelize");

const Station = db.define('stations', {
    Station_ID:{
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
})



Station.fetchAll = async function () {
    return await Station.findAll({
        attributes: ['Station_ID', 'Nimi', 'Namn', 'Name']
    })
}

Station.createNewStation =  async function(data){
    const notNullAttributes = {}
    for( let key in Station.getAttributes() ){
        if(Station.getAttributes()[key].allowNull === false){
            notNullAttributes[key] = Station.getAttributes()[key]
        }
    }
    notNullAttributes.forEach(([key, value]) => {
        if (!(key in data)){
            console.log("Mandatory field: {} absent", key)
        }
    })
    return await Station.create({...data})
}

module.exports = Station

// TODO: after having changed the database setting up default values for Kaupunki and Stad, come here to check if some change is needed