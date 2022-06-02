"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletestation = exports.updatestation = exports.addstation = exports.getdata = void 0;
const station = require('../model/conn'); // station data type
function getdata() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield station.station_model.findAll();
                data.map((station_data) => station_data.dataValues);
                resolve(data);
            }
            catch (e) {
                reject(e);
            }
        }));
    });
}
exports.getdata = getdata;
function addstation(newstation) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield station.station_model.create(newstation); // put data in () tpes
                resolve(data);
            }
            catch (e) {
                reject(e);
            }
        }));
    });
}
exports.addstation = addstation;
function updatestation(station_name, updated_station) {
    return __awaiter(this, void 0, void 0, function* () {
        const query_build = {};
        for (const i in updated_station)
            query_build[i] = updated_station[i];
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield station.station_model.update(query_build, {
                    where: {
                        station_name
                    }
                });
                resolve(data);
            }
            catch (e) {
                reject(e);
            }
        }));
    });
}
exports.updatestation = updatestation;
function deletestation(station_name) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield station.station_model.destroy({
                    where: {
                        station_name
                    }
                });
                resolve(data);
            }
            catch (e) {
                reject(e);
            }
        }));
    });
}
exports.deletestation = deletestation;
