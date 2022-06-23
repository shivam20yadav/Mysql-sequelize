"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * this route is used for routes for addding which train go which station.
 */
const express_1 = __importDefault(require("express")); // express is the framework
const train_station = express_1.default.Router(); // create express router
train_station.post('/addtrainstation'); //
train_station.delete('/deletestation/:station_name'); //
train_station.put('/updatestation/:station_name'); //
train_station.get('/gettrainstation/:train_number'); // this route is used to get all the train stations by train number
train_station.get('/getstationtrain/:station_name'); // this route is used to get all the train by station name
