const train_model = require('../model/conn')

export async function findtrainname (train_name:string) {
    return new Promise(async (resolve, reject) => {
        try {
        const data = await train_model.model.findAll({
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
export async function findtrainnumber(train_number:string) {
    return new Promise(async (resolve, reject) => {
        try {
        const data = await train_model.model.findAll({
            where: {
            train_number
            }
        })
        resolve(data)
        } catch (e) {
        reject(e)
        }
    })    
}
