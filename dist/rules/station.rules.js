"use strict";
/**
 * this file is used for validtion using express validator to check the input data for
 * station name is taken, is valid or not
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.station_validation_update_delete_station = exports.station_validation_add_station = void 0;
const express_validator_1 = require("express-validator");
const station_common = __importStar(require("../common/station.common.function"));
exports.station_validation_add_station = [
    (0, express_validator_1.check)('station_name').isLength({ min: 2 }).withMessage('station name is required'),
    (0, express_validator_1.check)('station_name').not().isEmpty().withMessage('station name is required'),
    (0, express_validator_1.check)('station_name').custom((value) => {
        return station_common.findstationname(value).then((result) => {
            if (result.length > 0) {
                throw new Error('station name already exists');
            }
            return true;
        });
    })
];
exports.station_validation_update_delete_station = [
    (0, express_validator_1.check)('station_name').isLength({ min: 2 }).withMessage('station name is required'),
    (0, express_validator_1.check)('station_name').custom((value) => {
        return station_common.findstationname(value).then((result) => {
            if (result.length === 0) {
                throw new Error('station name does not exists');
            }
            return true;
        });
    })
];
