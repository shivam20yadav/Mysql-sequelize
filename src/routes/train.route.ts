/**
 * this file created for train route
 */

import express from 'express' // express is the framework
import * as train_controller from '../controller/train.controller' // train controller is defined in train.controller.ts
const { check } = require('express-validator') // express validator is used for validation
const train_route = express.Router() // create express router

train_route.get('/gettrain', train_controller.gettrain) // get train
train_route.post('/addtrain', [], train_controller.addtrain) // add train
train_route.delete('/deletetrain/:train_name', [], train_controller.deletetrain) // delete train
train_route.put('/updatetrain/:train_name', [], train_controller.updatetrain) // update train

module.exports = train_route // export router for use in app.ts
