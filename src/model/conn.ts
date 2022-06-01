/**
 * this file is used for connect the database
 * and create the table if not exist 
 * and export the connection
 */
const Sequelize = require('sequelize') // import sequelize
const dotenv = require('dotenv') // import dotenv
dotenv.config({ path: './src/config/.env' }) // load the env file
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, { // create the connection
  host: process.env.DB_HOST, // host
  dialect: 'mysql', // dialect of the database
  pool: { // pool of the connection
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
const db:any = {} // create the object
db.Sequelize = Sequelize // export the sequelize
db.sequelize = sequelize // export the connection

db.model = require('./user.model')(sequelize, Sequelize) // user model
db.train_model = require('./train.model')(sequelize, Sequelize) // train model
db.station_model = require('./station.model')(sequelize, Sequelize) // station model

module.exports = db // export the connection
