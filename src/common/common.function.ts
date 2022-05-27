const user_data  = require('./conn');
export async function findusername(username:string){
    return new Promise(async (resolve,reject) => {
        try{
            const data = await user_data.model.findOne({
                where: {
                    username: username
                }
            });
            resolve(data);
        }catch(e){
            reject(e);
        }
    });
}
