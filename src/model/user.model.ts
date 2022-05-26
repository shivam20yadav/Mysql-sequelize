const user_data  = require('./conn');
export async function getdata(){
    return new Promise(async (resolve,reject) => {
        try{
            const data = await user_data.model.findAll();
            data.map((user: { dataValues: any; }) => user.dataValues);
            resolve(data);
        }catch(e){
            reject(e);
        }
    });
}
export async function adduser(new_user: {}) {
    return new Promise(async (resolve,reject) => {
        try{
            const data = await user_data.model.create(new_user);
            resolve(data);
        }
        catch(e){
            reject(e);
        }
    });
}
/*
export const adduser = async( new_user : {},callback: (err:Error | null, result?: any) => void) => {
    try{
        const data = await user_data.model.create(new_user);
        console.log(data);
        
    }catch(e){
       console.log(e);
    }    
}*/
export const findusername = async(username: string, callback: Function) => {
    
};
export const delete_user = async(username: string, callback: (err:Error | null, result?: any) => void) => {
    
};
export const update_user = async(query_str:string, username:string,callback: (err:Error | null, result?: any) => void) =>{
    
}
