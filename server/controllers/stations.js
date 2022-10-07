
const getAllStations = async (req, res) => {
    console.log("get all stations")
    res.status(200).json({
        status: "success",
        data: {
            stations: ["station1", "station2"]
        }
    })
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