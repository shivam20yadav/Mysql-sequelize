"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({ path: './src/config/.env' });
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.model = require('../types/user')(sequelize, Sequelize);
module.exports = db;
