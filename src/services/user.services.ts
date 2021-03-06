/**
 * In this file we perform user add update delete and get opration
 */
 // connection to database
import {user_data} from '../types/user.types';
const user_data_ = require('../model/conn') // user data type

export class user_service{
 static getuser () { // get all user data
    return new Promise(async (resolve, reject) => {
      try {
        const data = await user_data_.model.findAll()
        data.map((user: { dataValues: any; }) => user.dataValues)
        resolve(data)
      } catch (e) {
        reject(e)
      }
    })
  }
  static adduser (new_user:user_data) { // add new user
    return new Promise(async (resolve, reject) => {
      try {
        const data = await user_data_.model.create(new_user)
        resolve("user added")
      } catch (e) {
        reject(e)
      }
    })
  }
   static delete_user (username: string) { // delete user by username
    return new Promise(async (resolve, reject) => {
      try {
        const data = await user_data_.model.destroy({
          where: {
            username
          }
        })
        resolve("user deleted")
      } catch (e) {
        reject(e)
      }
    })
  }
  static update_user (user_name:string, updated_user:Request | any) { // update user by username 
    const query_build:any = {}; 
    for (const i in updated_user)
      query_build[i] = updated_user[i]
    return new Promise(async (resolve, reject) => {
      try {
        const data = await user_data_.model.update(query_build, {
          where: {
            username: user_name
          }
        })
        resolve("user updated")
      } catch (e) {
        reject(e)
      }
    })
  }
}
