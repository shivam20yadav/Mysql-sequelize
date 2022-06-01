import * as station_model from '../model/station.model' // station model
import express from 'express' // express is the framework
import { validationResult } from 'express-validator'
import { rejects } from 'assert'
const { check } = require('express-validator') // express validator is used for validation
export async function getdata () {
  return new Promise((resolve, reject) => {
    station_model.getdata().then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}
export async function addstation (req: express.Request) {

  /*return new Promise((resolve, reject) => {
    station_model.addstation(req).then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })*/
}
export async function updatestation (station_name:string, updated_station:Request | any) {
  return new Promise((resolve, reject) => {
    const query_build:any = {} 
    for (const i in updated_station) { query_build[i] = updated_station[i] }
    station_model.updatestation(station_name, query_build).then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}
export async function deletestation (station_name:string) {
  return new Promise((resolve, reject) => {
    station_model.deletestation(station_name).then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}

