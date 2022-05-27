"use strict"
/**
 *  this file is used for the main app
 *  it contains the main app component
 */
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod }
}
Object.defineProperty(exports, "__esModule", { value: true })
const express_1 = __importDefault(require("express")) // express is the framework
const body_parser_1 = __importDefault(require("body-parser")) // body-parser is a middleware for express
const dotenv_1 = __importDefault(require("dotenv")) // dotenv is a module for loading environment variables from a .env file into process.env
const route = require('./routes/index.route') // routes are defined in index.route.ts
const sequelize = require('./model/conn') // sequelize is the connection to the database
dotenv_1.default.config({ path: 'src/config/.env' }) // load environment variables from .env file
const app = (0, express_1.default)() // create express app
sequelize.sequelize.sync() // sync the database
// sequelize.sequelize.sync({force: true}); // force the database to sync
app.use(body_parser_1.default.json()) // parse json
app.use(body_parser_1.default.urlencoded({ extended: true })) // parse urlencoded
app.use('/', route) // use routes
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`) // log server start
})
