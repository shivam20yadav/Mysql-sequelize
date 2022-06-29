const train_station_model = require('../model/conn') // train data type

export class train_station_service {
    constructor() { }
    static async getdata() {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await train_station_model.train_station_model.findAll()
                data.map((train_station_data: { dataValues: any; }) => train_station_data.dataValues)
                resolve(data)
            } catch (e) {
                reject(e)
            }
        })
    }
    static async get_train_name_and_station_name(){
        return new Promise(async (resolve, reject) => {
            try {
                const data = await train_station_model.train_station_model.findAll({
                    include: [{
                        model: train_station_model.train_model,
                        attributes: ['train_name']
                    }, {
                        model: train_station_model.station_model,
                        attributes: ['station_name']
                    }]
                })
                data.map((train_station_data: { dataValues: any; }) => train_station_data.dataValues)
                resolve(data)
            } catch (e) {
                console.log(e);
                
                reject(e)
            }
        })
    }
    static async adddata(train_station_data: { train_id: number; station_id: number; }) {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await train_station_model.train_station_model.create(train_station_data)
                resolve(data)
            } catch (e) {
                reject(e)
            }
        })
    }
}