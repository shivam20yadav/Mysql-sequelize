// connection to database
import {station_data} from '../types/station.types' ;
const station =require('../model/conn') // station data type
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
      const data = await station.station_model.create(newstation) // put data in () tpes
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
export async function updatestation (station_name:string, updated_station:Request | any) {
  const query_build:any = {}; 
  for (const i in updated_station)
    query_build[i] = updated_station[i]
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
