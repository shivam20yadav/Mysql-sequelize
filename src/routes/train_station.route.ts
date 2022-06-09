/**
 * this route is used for routes for addding which train go which station.
 */
import express from 'express' // express is the framework
import * as train_station_controller from '../controller/train_station.controller' // train station controller is defined in train_station.controller.ts
const train_station = express.Router() // create express router

train_station.post('/addtrainstation', ) //
train_station.delete('/deletestation/:station_name', ) //
train_station.put('/updatestation/:station_name', ) //

train_station.get('/gettrainstation/:train_number', ) // this route is used to get all the train stations by train number
train_station.get('/getstationtrain/:station_name',) // this route is used to get all the train by station name
