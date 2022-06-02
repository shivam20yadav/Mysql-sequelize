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
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_validation_update_delete_user = exports.user_validation_add_user = void 0;
/**
 * this file user for validtion using express validator to check the input data for user add/update/delete
 */
const express_validator_1 = require("express-validator"); // express validator is used for validation
const user_common = __importStar(require("../common/user.common.function")); // train common function is used for common validation for train
exports.user_validation_add_user = [
    // add user
    (0, express_validator_1.check)('username').isLength({ min: 2 }).withMessage('username is required'),
    (0, express_validator_1.check)('userpassword').isLength({ min: 7 }).withMessage('password length must be > 7'),
    (0, express_validator_1.check)('firstname').isLength({ min: 2 }).withMessage('firstname is required'),
    (0, express_validator_1.check)('lastname').isLength({ min: 2 }).withMessage('lastname is required'),
    (0, express_validator_1.check)('email').isEmail().withMessage('email is required'),
    (0, express_validator_1.check)('phonenumber').isNumeric().withMessage('phonenumber is required'),
    (0, express_validator_1.check)('username').custom((value, { req }) => {
        return user_common.findusername(value).then((result) => {
            if (result.length > 0) {
                throw new Error('username already exists');
            }
            return true;
        });
    }),
    (0, express_validator_1.check)('email').custom((value, { req }) => {
        return user_common.checkemail(value).then((result) => {
            if (result.length > 0) {
                throw new Error('email already exists');
            }
            return true;
        });
    }),
    (0, express_validator_1.check)('phonenumber').custom((value, { req }) => {
        return user_common.checkphone(value).then((result) => {
            if (result.length > 0) {
                throw new Error('phonenumber already exists');
            }
            return true;
        });
    })
];
exports.user_validation_update_delete_user = [
    // update delete user validtion 
    (0, express_validator_1.check)('username').custom((value, { req }) => {
        return user_common.findusername(value).then((result) => {
            if (result.length === 0) {
                throw new Error('username not found');
            }
            return true;
        });
    })
];
