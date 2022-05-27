const station_model = require('../model/conn')

export async function findstationname (station_name:string) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await station_model.train_station_model.findAll({
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
