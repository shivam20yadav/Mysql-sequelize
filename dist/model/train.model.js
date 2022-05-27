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
exports.deletetrain = exports.updatetrain = exports.addtrain = exports.getdata = void 0;
/**
 * in this file we perform train add update delete and get opration
 */
const train_model = require('./conn');
function getdata() {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
exports.getdata = getdata;
function addtrain(new_train) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield train_model.train_model.create(new_train);
                resolve(data);
            }
            catch (e) {
                reject(e);
            }
        }));
    });
}
exports.addtrain = addtrain;
function updatetrain(train_name, updated_train) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield train_model.train_model.update(updated_train, {
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
    });
}
exports.updatetrain = updatetrain;
function deletetrain(train_name) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
exports.deletetrain = deletetrain;
