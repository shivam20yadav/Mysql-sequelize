/**
 * this file user for validtion using express validator to check the input data for user add/update/delete
 */
import { check } from 'express-validator' // express validator is used for validation
import * as user_common from '../common/user.common.function' // train common function is used for common validation for train

export const user_validation_add_user = [
  // add user
  check('username').isLength({ min: 2 }).withMessage('username is required'), // username is required
  check('userpassword').isLength({ min: 7 }).withMessage('password length must be > 7'), // password is required
  check('firstname').isLength({ min: 2 }).withMessage('firstname is required'), // firstname is required
  check('lastname').isLength({ min: 2 }).withMessage('lastname is required'), // lastname is required
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
    return user_common.checkemail(value).then((result:any) => { // check email is already exists
      if (result.length > 0) {
        throw new Error('email already exists')
      }
      return true
    })
  }),
  check('phonenumber').custom((value: string, { req }: any) => {
    return user_common.checkphone(value).then((result:any) => { // check phone number
      if (result.length > 0) {
        throw new Error('phonenumber already exists')
      }
      return true
    })
  })
]

export const user_validation_update_delete_user = [
  // update delete user validtion 
  check('username').custom((value: string, { req }: any) => {
    return user_common.findusername(value).then((result:any) => { // find username in database and check if it exists
      if (result.length === 0) {
        throw new Error('username not found')
      }
      return true
    })
  })

]
