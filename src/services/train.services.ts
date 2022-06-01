import * as train_model from '../model/train.model'
import express from 'express' // express is the framework
import { check } from 'express-validator'//express validator is used for validation
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


/**
 * /**
 * , [ // add train
  check('train_name').not().isEmpty(),
  check('train_number').not().isEmpty(),
  check('train_name').custom((value: any) => {
    return train_common.findtrainname(value).then((result: any) => {
      if (result.length > 0) {
        throw new Error('train name already exists')
      }
      return true
    })
  })
]
 * ========================================================================
 * [ // delete train
  check('train_name').custom((value: string, { req }: any) => {
    return train_common.findtrainname(value).then((result: any) => {
      if (result.length === 0) {
        throw new Error('train name not found')
      }
      return true
    })
  })
],
 */
/**
 *  [ // update train
  check('train_name').custom((value: string, { req }: any) => {
    return train_common.findtrainname(value).then((result: any) => {
      if (result.length <= 0) {
        throw new Error('train name does not exists')
      }
      return true
    })
  })
],
 */