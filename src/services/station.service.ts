const station =require('../model/conn') // connection to database
import {station_data} from '../types/station.types' // station data type
export async function getdata () {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await station.station_model.findAll()
      data.map((station_data: { dataValues: any; }) => station_data.dataValues)
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
export async function addstation (newstation : station_data) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await station.station_model.create() //put data in () tpes
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
export async function updatestation (station_name:string, updated_station:Request | any) {
  let query_build:any = {}; 
    for(let i in updated_station)
        query_build[i] = updated_station[i];
  return new Promise(async (resolve, reject) => {
    try {
      const data = await station.station_model.update(query_build, {
        where: {
          station_name
        }
      })
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
export async function deletestation (station_name:string) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await station.station_model.destroy({
        where: {
          station_name
        }
      })
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}

