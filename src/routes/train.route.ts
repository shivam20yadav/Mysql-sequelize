/**
 * this file created for train route
 */

import express from 'express' // express is the framework
import * as train_controller from '../controller/train.controller' // train controller is defined in train.controller.ts
import * as train_validation from '../rules/train.rules' // train rules is defined in train.rules.ts

const train_route = express.Router() // create express router

train_route.get('/gettrain', train_controller.gettrain) // get train

train_route.post('/addtrain', train_validation.train_validation_add_train, train_controller.addtrain) 

train_route.delete('/deletetrain/:train_name', train_validation.train_validation_update_delete_train, train_controller.deletetrain) 

train_route.put('/updatetrain/:train_name', train_validation.train_validation_update_delete_train, train_controller.updatetrain)

module.exports = train_route // export router for use in app.ts
