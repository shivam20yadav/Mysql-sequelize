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
exports.update_user = exports.delete_user = exports.findusername = exports.adduser = exports.getdata = exports.all_data = void 0;
const userdata = require('../types/user');
const all_data = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.all_data = all_data;
function getdata() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.getdata = getdata;
const adduser = (new_user, callback) => __awaiter(void 0, void 0, void 0, function* () {
    userdata.create(new_user).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
});
exports.adduser = adduser;
const findusername = (username, callback) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.findusername = findusername;
const delete_user = (username, callback) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.delete_user = delete_user;
const update_user = (query_str, username, callback) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.update_user = update_user;
