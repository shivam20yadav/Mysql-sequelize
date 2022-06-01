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
exports.update_user = exports.delete_user = exports.adduser = exports.getuser = void 0;
/**
 * In this file we perform user add update delete and get opration
 */
const user_data_ = require('../model/conn'); // connection to database
function getuser() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_data_.model.findAll();
                data.map((user) => user.dataValues);
                resolve(data);
            }
            catch (e) {
                reject(e);
            }
        }));
    });
}
exports.getuser = getuser;
function adduser(new_user) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_data_.model.create(new_user);
                resolve(data);
            }
            catch (e) {
                reject(e);
            }
        }));
    });
}
exports.adduser = adduser;
function delete_user(username) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_data_.model.destroy({
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
exports.delete_user = delete_user;
function update_user(user_name, updated_user) {
    return __awaiter(this, void 0, void 0, function* () {
        let query_build = {};
        for (let i in updated_user)
            query_build[i] = updated_user[i];
        console.log(query_build);
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_data_.model.update(query_build, {
                    where: {
                        username: user_name
                    }
                });
                console.log(data);
                resolve(data);
            }
            catch (e) {
                reject(e);
            }
        }));
    });
}
exports.update_user = update_user;
