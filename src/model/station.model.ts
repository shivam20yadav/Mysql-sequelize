const station = require('./conn')

export async function getdata () {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await station.train_station_model.findAll()
      data.map((station_data: { dataValues: any; }) => station_data.dataValues)
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
export async function addstation (new_station: {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await station.train_station_model.create(new_station)
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}
export async function updatestation (station_name:string, updated_station:Request | any) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await station.train_station_model.update(updated_station, {
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
      const data = await station.train_station_model.destroy({
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
