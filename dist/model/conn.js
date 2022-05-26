"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conn = void 0;
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config({ path: './src/config/.env' });
console.log("-------------------------------------");
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PWD);
console.log(process.env.DB_NAME);
console.log("-------------------------------------");
exports.conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DATABASE
});
