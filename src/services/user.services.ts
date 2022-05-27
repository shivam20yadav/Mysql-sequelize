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
    let query_build = ""; 
    for(let i in updated_user)
    {
        query_build += `${i} = "${updated_user[i]}" ,`;
    }
    console.log(query_build);
    user_model.update_user(user_name, query_build).then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}
