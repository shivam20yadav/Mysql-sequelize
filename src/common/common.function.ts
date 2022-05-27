const data_model = require('../model/conn')
export async function findusername (username:string) {
    return new Promise(async (resolve, reject) => {
        try {
        const data = await data_model.model.findAll({
            where: {
            username
            }
        })
        resolve(data)
        } catch (e) {
        reject(e)
        }
    })
}
export async function checkemail (email:string) {
    return new Promise(async (resolve, reject) => {
        try {
        const data = await data_model.model.findAll({
            where: {
            email
            }
        })
        resolve(data)
        } catch (e) {
        reject(e)
        }
    })
}
export async function checkphone (phonenumber:string) {
    return new Promise(async (resolve, reject) => {
        try {
        const data = await data_model.model.findAll({
            where: {
            phonenumber
            }
        })
        resolve(data)
        } catch (e) {
        reject(e)
        }
    })
}