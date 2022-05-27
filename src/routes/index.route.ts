/**
 * this file is used for routes
 * it contains the routes for the app
 */

import express from 'express' // express is the framework
const user_route = require('./user.route') // routes for a user are defined in user.route.ts
const train_route = require('./train.route') // routes for a train are defined in train.route.ts
const route = express.Router() // create express router
route.use('/user', user_route) // use user routes
route.use('/train', train_route) // use train routes
module.exports = route // export router for use in app.ts
