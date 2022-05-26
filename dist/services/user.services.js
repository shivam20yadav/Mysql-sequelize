"use strict";
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
const user_model = __importStar(require("../model/user.model"));
function getuser() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            user_model.getdata().then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    });
}
exports.getuser = getuser;
function adduser(new_user) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.adduser = adduser;
function delete_user(username) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            var something;
            function find_one() {
                return __awaiter(this, void 0, void 0, function* () {
                    const mypromisse = new Promise((resolve, reject) => {
                        user_model.findusername(username, (err, result) => {
                            if (result == 0) {
                                resolve(result);
                            }
                            if (result == 1) {
                                reject("User not found");
                            }
                        });
                    });
                    something = yield mypromisse;
                });
            }
            find_one().then(() => {
                if (something == 0) {
                    user_model.delete_user(username, (err, result) => {
                        if (err)
                            throw err;
                        resolve(result);
                    });
                }
            }).catch((err) => {
                reject(err);
            });
        });
    });
}
exports.delete_user = delete_user;
function update_user(user_name, updated_user) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            user_model.findusername(user_name, (err, result) => {
                if (result == 1) {
                    reject("User not found");
                }
                if (result == 0) {
                    let query_build = "";
                    for (let i in updated_user) {
                        query_build += `${i} = "${updated_user[i]}" ,`;
                    }
                    query_build = query_build.substring(0, query_build.length - 1);
                    user_model.update_user(query_build, user_name, (err, result) => {
                        if (err)
                            throw err;
                        resolve(result);
                    });
                }
            });
        });
    });
}
exports.update_user = update_user;
