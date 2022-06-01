
const train_model = require('../model/conn') // connection to database
import {train_data} from '../types/train.types' // train data type
export async function gettrain () {
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
export async function addtrain (new_train: train_data) {
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
  let query_build:any = {}; 
    for(let i in updated_train)
        query_build[i] = updated_train[i];
  console.log(query_build);
  return new Promise(async (resolve, reject) => {
    try {
      const data = await train_model.train_model.update(query_build, {
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