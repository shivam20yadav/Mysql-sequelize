/**
 * in this file we perform train add update delete and get opration
 */
const train_model = require('./conn')
export async function getdata () {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await train_model.train_model.findAll()
      data.map((train_data: { dataValues: any; }) => train_data.dataValues)
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
export async function addtrain (new_train: {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await train_model.train_model.create(new_train)
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
export async function updatetrain (train_name:string, updated_train:Request | any) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await train_model.train_model.update(updated_train, {
        where: {
          train_name
        }
      })
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
export async function deletetrain (train_name:string) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await train_model.train_model.destroy({
        where: {
          train_name
        }
      })
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
