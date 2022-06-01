import * as user_model from '../model/user.model'

export async function getuser () {
  return new Promise((resolve, reject) => {
    user_model.getdata().then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}
export async function adduser (new_user: {}) {
  return new Promise((resolve, reject) => {
    user_model.adduser(new_user).then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}
export async function delete_user (username: string) {
  return new Promise((resolve, reject) => {
    user_model.delete_user(username).then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}
export async function update_user (user_name:string, updated_user:Request | any) {
  return new Promise((resolve, reject) => {
    const query_build:any = {} 
    for (const i in updated_user) { query_build[i] = updated_user[i] }
    user_model.update_user(user_name, query_build).then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}
/**
 *  [
  check('username').isLength({ min: 2 }).withMessage('username is required'), // username is required
  check('password').isLength({ min: 7 }).withMessage('password is required'), // password is required
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
],
 * ==============================================================================================
 [
  check('username').custom((value: string, { req }: any) => {
    return user_common.findusername(value).then((result:any) => { // find username in database and check if it exists
      if (result.length === 0) {
        throw new Error('username not found')
      }
      return true
    })
  })
],
 * ===============================================================================================
check('username').custom((value: string, { req }: any) => {
    return user_common.findusername(value).then((result:any) => { // find username if exists send error
      if (result.length <= 0) {
        throw new Error('username does not exists')
      }
      if (result.length > 0) {
        return true
      }
    })
  }),
 * 
 */