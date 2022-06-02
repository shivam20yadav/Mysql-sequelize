"use strict";
/**
 * this file is used for validtion using express validator to check the input data for train add/update/delete
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.train_validation_update_delete_train = exports.train_validation_add_train = void 0;
const express_validator_1 = require("express-validator"); // express validator is used for validation
const train_common = __importStar(require("../common/train.common.function")); // train common function is used for common validation for train
exports.train_validation_add_train = [
    // add train
    (0, express_validator_1.check)('train_name').not().isEmpty(),
    (0, express_validator_1.check)('train_number').not().isEmpty(),
    (0, express_validator_1.check)('train_name').custom((value) => {
        return train_common.findtrainname(value).then((result) => {
            if (result.length > 0) {
                throw new Error('train name already exists');
            }
            return true;
        });
    }),
    (0, express_validator_1.check)('train_number').custom((value) => {
        return train_common.findtrainnumber(value).then((result) => {
            if (result.length > 0) {
                throw new Error('train number already exists');
            }
            return true;
        });
    })
];
exports.train_validation_update_delete_train = [
    (0, express_validator_1.check)('train_number').not().isEmpty(),
    (0, express_validator_1.check)('train_name').custom((value) => {
        return train_common.findtrainname(value).then((result) => {
            if (result.length === 0) {
                throw new Error('train name does not exists');
            }
            return true;
        });
    })
];
