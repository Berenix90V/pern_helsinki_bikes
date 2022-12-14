import express from "express"
const router = express.Router()

import {getAllStations, createStation, getStationByID, updateStationByID, deleteStationByID} from '../controllers/stations'


router.route('/').get(getAllStations).post(createStation)
router.route('/:id').get(getStationByID).put(updateStationByID).delete(deleteStationByID)


export {router}