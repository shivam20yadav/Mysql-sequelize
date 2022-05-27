/**
 * In this file we perform user add update delete and get opration
 */
const user_data = require('./conn')
export async function getdata () {   // get all user data
  return new Promise(async (resolve, reject) => {
    try {
      const data = await user_data.model.findAll()
      data.map((user: { dataValues: any; }) => user.dataValues)
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
export async function adduser (new_user: {}) {  // add new user
  return new Promise(async (resolve, reject) => {
    try {
      const data = await user_data.model.create(new_user)
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
export async function delete_user (username: string) { // delete user by username
  return new Promise(async (resolve, reject) => {
    try {
      const data = await user_data.model.destroy({
        where: {
          username
        }
      })
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
export async function update_user (user_name:string, updated_user:Request | any) { // update user by username 
  return new Promise(async (resolve, reject) => {
    try {
      const data = await user_data.model.update(updated_user, {
        where: {
          username: user_name
        }
      })
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
