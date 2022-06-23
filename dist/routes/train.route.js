"use strict";
/**
 * this file created for train route
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
const train_controller = __importStar(require("../controller/train.controller")); // train controller is defined in train.controller.ts
const train_validation = __importStar(require("../rules/train.rules")); // train rules is defined in train.rules.ts
const train_route = express_1.default.Router(); // create express router
train_route.get('/gettrain', train_controller.train_controller.gettrain); // get train
train_route.post('/addtrain', train_validation.train_validation_add_train, train_controller.train_controller.addtrain);
train_route.delete('/deletetrain/:train_name', train_validation.train_validation_update_delete_train, train_controller.train_controller.deletetrain);
train_route.put('/updatetrain/:train_name', train_validation.train_validation_update_delete_train, train_controller.train_controller.updatetrain);
module.exports = train_route; // export router for use in app.ts
