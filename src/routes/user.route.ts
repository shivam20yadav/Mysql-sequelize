/**
 * this file used for user routes
 */

import express from 'express' // express is the framework
import * as user_controller from '../controller/user.controller' // user controller is defined in user.controller.ts
import * as user_validation from '../rules/user.rules' // user rules is defined in user.rules.ts

const user_route = express.Router() // create express router

user_route.get('/getuser', user_controller.user_controller.getuser) // get user
user_route.post('/adduser', user_validation.user_validation_add_user, user_controller.user_controller.adduser)// add user
user_route.delete('/deleteuser/:username', user_validation.user_validation_update_delete_user, user_controller.user_controller.deleteuser) // delete user
user_route.put('/updateuser/:username', user_validation.user_validation_update_delete_user, user_controller.user_controller.updateuser) // update user
module.exports = user_route
