/**
 * this file used for user routes
 */

import express from 'express' // express is the framework
import * as user_controller from '../controller/user.controller' // user controller is defined in user.controller.ts
const { check, validationResult } = require('express-validator')
const user_route = express.Router() // create express router

user_route.get('/getuser', user_controller.getuser) // get user

user_route.post('/adduser', [
  check('username').isLength({ min: 1 }).withMessage('username is required'), // username is required
  check('password').isLength({ min: 1 }).withMessage('password is required'), // password is required
  check('firstname').isLength({ min: 1 }).withMessage('firstname is required'), // firstname is required
  check('lastname').isLength({ min: 1 }).withMessage('lastname is required') // lastname is required
], user_controller.adduser)// add user

user_route.delete('/deleteuser/:username', user_controller.deleteuser) // delete user
user_route.put('/updateuser/:username', user_controller.updateuser) // update user
module.exports = user_route
