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
    user_model.update_user(user_name, updated_user).then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}
