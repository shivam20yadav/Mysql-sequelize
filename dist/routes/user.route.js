"use strict";
/**
 * this file used for user routes
 */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // express is the framework
const user_controller = __importStar(require("../controller/user.controller")); // user controller is defined in user.controller.ts
const { check, validationResult } = require('express-validator');
const user_route = express_1.default.Router(); // create express router 
user_route.get('/getuser', user_controller.getuser); // get user
user_route.post('/adduser', [
    check('username').isLength({ min: 1 }).withMessage('username is required'),
    check('password').isLength({ min: 1 }).withMessage('password is required'),
    check('firstname').isLength({ min: 1 }).withMessage('firstname is required'),
    check('lastname').isLength({ min: 1 }).withMessage('lastname is required') // lastname is required
], user_controller.adduser); // add user
user_route.delete('/deleteuser/:username', user_controller.deleteuser); // delete user
user_route.put('/updateuser/:username', user_controller.updateuser); // update user
module.exports = user_route;
