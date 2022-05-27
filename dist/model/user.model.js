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
exports.update_user = exports.delete_user = exports.adduser = exports.getdata = void 0;
const user_data = require('./conn');
function getdata() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_data.model.findAll();
                data.map((user) => user.dataValues);
                resolve(data);
            }
            catch (e) {
                reject(e);
            }
        }));
    });
}
exports.getdata = getdata;
function adduser(new_user) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_data.model.create(new_user);
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
                const data = yield user_data.model.destroy({
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
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            console.log(updated_user);
            try {
                const data = yield user_data.model.update(updated_user, {
                    where: {
                        username: user_name
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
exports.update_user = update_user;
