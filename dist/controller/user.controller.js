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
exports.user_controller = void 0;
const express_validator_1 = require("express-validator");
const user_services = __importStar(require("../services/user.services"));
class user_controller {
    static getuser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_services.user_service.getuser().then((result) => {
                res.send(result);
            }).catch((err) => {
                res.status(500).send(err);
            });
        });
    }
    static adduser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const new_user = req.body;
            yield user_services.user_service.adduser(new_user).then((result) => {
                res.send('user added');
            }).catch((err) => {
                res.send(err);
            });
        });
    }
    static deleteuser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const username = req.params.username;
            yield user_services.user_service.delete_user(username).then((result) => {
                res.send('user deleted');
            }).catch((err) => {
                res.send(err);
            });
        });
    }
    static updateuser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const err = (0, express_validator_1.validationResult)(req);
            if (!err.isEmpty()) {
                return res.status(422).json({ errors: err.array() });
            }
            const username = req.params.username;
            yield user_services.user_service.update_user(username, req.body).then((result) => {
                res.send('user updated');
            }).catch((err) => {
                res.send(err);
            });
        });
    }
}
exports.user_controller = user_controller;
