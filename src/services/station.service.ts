import * as station_model from '../model/station.model'

export async function getdata () {
  return new Promise((resolve, reject) => {
    station_model.getdata().then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
}
export async function addstation (new_station: {}) {
  return new Promise((resolve, reject) => {
    station_model.addstation(new_station).then((result) => {
      resolve(result)
    }).catch((err) => {
      reject(err)
    })
  })
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
