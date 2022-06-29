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
exports.user_service = void 0;
const user_data_ = require('../model/conn'); // user data type
class user_service {
    static getuser() {
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
    }
    static adduser(new_user) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_data_.model.create(new_user);
                resolve("user added");
            }
            catch (e) {
                reject(e);
            }
        }));
    }
    static delete_user(username) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_data_.model.destroy({
                    where: {
                        username
                    }
                });
                resolve("user deleted");
            }
            catch (e) {
                reject(e);
            }
        }));
    }
    static update_user(user_name, updated_user) {
        const query_build = {};
        for (const i in updated_user)
            query_build[i] = updated_user[i];
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_data_.model.update(query_build, {
                    where: {
                        username: user_name
                    }
                });
                resolve("user updated");
            }
            catch (e) {
                reject(e);
            }
        }));
    }
}
exports.user_service = user_service;
