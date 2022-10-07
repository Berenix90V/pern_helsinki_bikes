const express = require('express')
const router = express.Router()

const {getAllStations, createStation, getStationByID, updateStationByID, deleteStationByID} = require('../controllers/stations')


router.route('/').get(getAllStations).post(createStation)
router.route('/:id').get(getStationByID).put(updateStationByID).delete(deleteStationByID)


module.exports = router