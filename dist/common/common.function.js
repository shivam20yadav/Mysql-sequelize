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
exports.checkphone = exports.checkemail = exports.findusername = void 0;
const data_model = require('../model/conn');
function findusername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield data_model.model.findAll({
                    where: {
                        username
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
exports.findusername = findusername;
function checkemail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield data_model.model.findAll({
                    where: {
                        email
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
exports.checkemail = checkemail;
function checkphone(phonenumber) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield data_model.model.findAll({
                    where: {
                        phonenumber
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
exports.checkphone = checkphone;
