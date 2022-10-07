const Station = require('../models/Station')


const getAllStations = (req, res) => {
    console.log("get all stations")
    Station.findAll({
        attributes: ['Station_ID', 'Nimi']
    })
        .then(allStations =>
            res.status(200).json({
                status: "success",
                data: {
                    stations: allStations
                }
            })
        )
        .catch(
            err => res.status(404).json({
                status: "Data not found",
                error: err
            })
        )
}

const createStation = (req,res) => {
    console.log(req.body)
    res.status(201).json({
        status: "success",
        data: {
            stations: req.body.name
        }
    })
}

const getStationByID = (req, res) => {
    console.log(req.params)
    res.status(200).json({
        status: "success",
        data: {
            stations: "station 1"
        }
    })
}

const updateStationByID = (req,res) =>{
    console.log(req.params.id)
    console.log(req.body)
    res.status(200).json({
        status: "success",
        data: {
            stations: req.body.name
        }
    })
}

const deleteStationByID = (req,res) =>{
    res.status(204).json({
        status: "success"
    })
}


module.exports = {
    getAllStations,
    createStation,
    getStationByID,
    updateStationByID,
    deleteStationByID
}