/**
 * this file is used for station route
 */
import express from 'express' // express is the framework
import * as station_controller from '../controller/station.controller' // station controller is defined in station.controller.ts
import * as station_check from '../rules/station.rules' // station rules is defined in station.rules.ts
const station_route = express.Router() // create express router

station_route.get('/getstation', station_controller.station_model.getstation) // get station

station_route.post('/addstation', station_check.station_validation_add_station, station_controller.station_model.addstation)

station_route.delete('/deletestation/:station_name', station_check.station_validation_update_delete_station, station_controller.station_model.deletestation)

station_route.put('/updatestation/:station_name', station_check.station_validation_update_delete_station, station_controller.station_model.updatestation)

module.exports = station_route // export router for use in app.ts
