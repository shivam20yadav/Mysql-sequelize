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
exports.train_service = void 0;
const train_model = require('../model/conn'); // train data type
class train_service {
    static gettrain() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield train_model.train_model.findAll();
                data.map((train_data) => train_data.dataValues);
                resolve(data);
            }
            catch (e) {
                reject(e);
            }
        }));
    }
    static addtrain(new_train) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield train_model.train_model.create(new_train);
                resolve(data);
            }
            catch (e) {
                reject(e);
            }
        }));
    }
    static updatetrain(train_name, updated_train) {
        const query_build = {};
        for (const i in updated_train)
            query_build[i] = updated_train[i];
        console.log(query_build);
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield train_model.train_model.update(query_build, {
                    where: {
                        train_name
                    }
                });
                resolve(data);
            }
            catch (e) {
                reject(e);
            }
        }));
    }
    static deletetrain(train_name) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield train_model.train_model.destroy({
                    where: {
                        train_name
                    }
                });
                resolve(data);
            }
            catch (e) {
                reject(e);
            }
        }));
    }
}
exports.train_service = train_service;
