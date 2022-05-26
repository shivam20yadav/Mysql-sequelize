"use strict";
/**
 * this file is used for routes
 * it contains the routes for the app
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // express is the framework
const user_route = require('./user.route'); // routes for a user are defined in user.route.ts
const route = express_1.default.Router(); // create express router
route.use('/user', user_route); // use user routes
module.exports = route; // export router for use in app.ts  