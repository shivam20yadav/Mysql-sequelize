import * as train_model from '../model/train.model'

export async function gettrain () {
  return new Promise((resolve, reject) => {
    train_model.getdata().then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}
export async function addtrain (new_train: {}) {
  return new Promise((resolve, reject) => {
    train_model.addtrain(new_train).then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}
export async function deletetrain (train_name: string) {
  return new Promise((resolve, reject) => {
    train_model.deletetrain(train_name).then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}
export async function updatetrain (train_name: string, updated_train:Request | any) {
  return new Promise((resolve, reject) => {
    const query_build:any = {} 
    for (const i in updated_train) { query_build[i] = updated_train[i] }
    train_model.updatetrain(train_name, query_build).then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}
