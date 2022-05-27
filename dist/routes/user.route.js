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
const user_common = __importStar(require("../common/common.function")); // common functions are defined in common.function.ts
const { check, validationResult } = require('express-validator');
const user_route = express_1.default.Router(); // create express router
user_route.get('/getuser', user_controller.getuser); // get user
user_route.post('/adduser', [
    check('username').isLength({ min: 1 }).withMessage('username is required'),
    check('password').isLength({ min: 1 }).withMessage('password is required'),
    check('firstname').isLength({ min: 1 }).withMessage('firstname is required'),
    check('lastname').isLength({ min: 1 }).withMessage('lastname is required'),
    check('email').isEmail().withMessage('email is required'),
    check('phonenumber').isNumeric().withMessage('phonenumber is required'),
    check('username').custom((value, { req }) => {
        return user_common.findusername(value).then((result) => {
            if (result.length > 0) {
                throw new Error('username already exists');
            }
            return true;
        });
    }),
    check('email').custom((value, { req }) => {
        return user_common.checkemail(value).then((result) => {
            if (result.length > 0) {
                throw new Error('email already exists');
            }
            return true;
        });
    }),
    check('phonenumber').custom((value, { req }) => {
        return user_common.checkphone(value).then((result) => {
            if (result.length > 0) {
                throw new Error('phonenumber already exists');
            }
            return true;
        });
    })
], user_controller.adduser); // add user
user_route.delete('/deleteuser/:username', [
    check('username').custom((value, { req }) => {
        return user_common.findusername(value).then((result) => {
            if (result.length === 0) {
                throw new Error('username not found');
            }
            return true;
        });
    })
], user_controller.deleteuser); // delete user
user_route.put('/updateuser/:username', check('username').custom((value, { req }) => {
    return user_common.findusername(value).then((result) => {
        if (result.length <= 0) {
            throw new Error('username does not exists');
        }
        if (result.length > 0) {
            return true;
        }
    });
}), user_controller.updateuser); // update user
module.exports = user_route;
