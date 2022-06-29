/**
 * this route is used for routes for addding which train go which station.
 */
import express from 'express' // express is the framework
import * as train_station_controller from '../controller/train_station.controller' // train station controller is defined in train_station.controller.ts
const train_station = express.Router() // create express router

train_station.get('/show', train_station_controller.get_data_by_train) // add train station
train_station.post('/add', train_station_controller.add_data) // add train station
train_station.get('/train_station_name', train_station_controller.train_station_name) // add train station
module.exports = train_station