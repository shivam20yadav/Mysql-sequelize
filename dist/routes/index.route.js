"use strict";
/**
 * this file is used for routes
 * it contains the routes for the app
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // express is the framework
const user_route = require('./user.route'); // routes for a user are defined in user.route.ts
const train_route = require('./train.route'); // routes for a train are defined in train.route.ts
const station_route = require('./station.route'); // routes for a station are defined in station.route.ts
const train_station = require('./train_station.route'); // routes for a train station are defined in train_station.route.ts
const booking = require('./booking.route'); // routes for a booking are defined in booking.route.ts
const route = express_1.default.Router(); // create express router
route.use('/user', user_route); // use user routes
route.use('/train', train_route); // use train routes
route.use('/station', station_route); // use station routes
route.use('/t_s', train_station); // use for addding which train going to which station
route.use('/booking', booking); // use for booking
module.exports = route; // export router for use in app.ts
