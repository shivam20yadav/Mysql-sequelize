/**
 *  this file is used for the main app
 *  it contains the main app component
 */

import express, { Express, Request, Response } from 'express' // express is the framework
import bodyParser from 'body-parser' // body-parser is a middleware for express
import dotenv from 'dotenv' // dotenv is a module for loading environment variables from a .env file into process.env
const route = require('./routes/index.route') // routes are defined in index.route.ts
const sequelize = require('./model/conn') // sequelize is the connection to the database
dotenv.config({ path: 'src/config/.env' }) // load environment variables from .env file

const app: Express = express() // create express app
sequelize.sequelize.sync() // sync the database
// sequelize.sequelize.sync({force: true}); // force the database to sync
app.use(bodyParser.json()) // parse json
app.use(bodyParser.urlencoded({ extended: true })) // parse urlencoded
app.use('/', route) // use routes

app.listen(process.env.PORT, () => { // listen on port
  console.log(`Server started on port ${process.env.PORT}`) // log server start
})
