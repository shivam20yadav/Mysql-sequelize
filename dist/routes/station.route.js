"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * this file is used for station route
 */
const express_1 = __importDefault(require("express")); // express is the framework
const station_controller = __importStar(require("../controller/station.controller")); // station controller is defined in station.controller.ts
const station_check = __importStar(require("../rules/station.rules")); // station rules is defined in station.rules.ts
const station_route = express_1.default.Router(); // create express router
station_route.get('/getstation', station_controller.getstation); // get station
station_route.post('/addstation', station_check.station_validation_add_station, station_controller.addstation);
station_route.delete('/deletestation/:station_name', station_check.station_validation_update_delete_station, station_controller.deletestation);
station_route.put('/updatestation/:station_name', station_check.station_validation_update_delete_station, station_controller.updatestation);
module.exports = station_route; // export router for use in app.ts
