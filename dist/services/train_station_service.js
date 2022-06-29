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
exports.train_station_service = void 0;
const train_station_model = require('../model/conn'); // train data type
class train_station_service {
    constructor() { }
    static getdata() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const data = yield train_station_model.train_station_model.findAll();
                    data.map((train_station_data) => train_station_data.dataValues);
                    resolve(data);
                }
                catch (e) {
                    reject(e);
                }
            }));
        });
    }
    static get_train_name_and_station_name() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const data = yield train_station_model.train_station_model.findAll({
                        include: [{
                                model: train_station_model.train_model,
                                attributes: ['train_name']
                            }, {
                                model: train_station_model.station_model,
                                attributes: ['station_name']
                            }]
                    });
                    data.map((train_station_data) => train_station_data.dataValues);
                    resolve(data);
                }
                catch (e) {
                    console.log(e);
                    reject(e);
                }
            }));
        });
    }
    static adddata(train_station_data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const data = yield train_station_model.train_station_model.create(train_station_data);
                    resolve(data);
                }
                catch (e) {
                    reject(e);
                }
            }));
        });
    }
}
exports.train_station_service = train_station_service;
