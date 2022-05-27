const user_data = require('./conn')
export async function getdata () {
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
export async function adduser (new_user: {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await user_data.model.create(new_user)
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
export async function delete_user (username: string) {
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
export async function update_user (user_name:string, updated_user:Request | any) {
  return new Promise(async (resolve, reject) => {
    console.log(updated_user)
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
