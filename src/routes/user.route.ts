/**
 * this file used for user routes
 */

import express from 'express' // express is the framework
import * as user_controller from '../controller/user.controller' // user controller is defined in user.controller.ts
import * as user_common from '../common/common.function' // common functions are defined in common.function.ts
const { check, validationResult } = require('express-validator')
const user_route = express.Router() // create express router

user_route.get('/getuser', user_controller.getuser) // get user

user_route.post('/adduser', [
  check('username').isLength({ min: 1 }).withMessage('username is required'), // username is required
  check('password').isLength({ min: 1 }).withMessage('password is required'), // password is required
  check('firstname').isLength({ min: 1 }).withMessage('firstname is required'), // firstname is required
  check('lastname').isLength({ min: 1 }).withMessage('lastname is required'), // lastname is required
  check('email').isEmail().withMessage('email is required'), // email is required
  check('phonenumber').isNumeric().withMessage('phonenumber is required'), // phonenumber is required
  check('username').custom((value: string, { req }: any) => {
      return user_common.findusername(value).then((result:any) => {
         if (result.length > 0) {
             throw new Error('username already exists')
         }
         return true
      })
   }),
   check('email').custom((value: string, { req }: any) => {
      return user_common.checkemail(value).then((result:any) => {
         if (result.length > 0) {
               throw new Error('email already exists')
         }
         return true
      })
   }),
   check('phonenumber').custom((value: string, { req }: any) => {
      return user_common.checkphone(value).then((result:any) => {
         if (result.length > 0) {
               throw new Error('phonenumber already exists')
         }
         return true
      })
   })
], user_controller.adduser)// add user

user_route.delete('/deleteuser/:username', user_controller.deleteuser) // delete user
user_route.put('/updateuser/:username',
   check('username').custom((value: string, { req }: any) => {
      return user_common.findusername(value).then((result:any) => {
         if (result.length <= 0) {
               throw new Error('username does not exists');
         }
         if(result.length > 0) {
            return true;
         }
      })
   }),
   user_controller.updateuser) // update user
module.exports = user_route;
