import {Response, Request} from "express";
import {Station} from '../entity/Station'


const getAllStations = (req: Request, res: Response) => {
    console.log("get all stations")
    Station.fetchAll()
        .then((allStations: Station[]) =>
            res.status(200).json({
                status: "success",
                data: {
                    stations: allStations,
                    length: allStations.length
                }
            })
        )
        .catch(
            (err: any) => res.status(404).json({
                status: "Data not found",
                error: err
            })
        )
}

const createStation = (req: Request,res: Response) => {
    console.log(req.body)
    //const data = Station.createNewStation()
    res.status(201).json({
        status: "success",
        data: {
            Name: req.body.name
        }
    })
}

const getStationByID = (req:Request, res: Response) => {
    console.log(req.params)
    res.status(200).json({
        status: "success",
        data: {
            StationID: req.params.id
        }
    })
}

const updateStationByID = (req: Request,res: Response) =>{
    console.log(req.params.id)
    console.log(req.body)
    res.status(200).json({
        status: "success",
        data: {
            stations: req.body.name
        }
    })
}

const deleteStationByID = (req: Request,res: Response) =>{
    res.status(204).json({
        status: "success"
    })
}


export {
    getAllStations,
    createStation,
    getStationByID,
    updateStationByID,
    deleteStationByID
}