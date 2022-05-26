const user_data  = require('../types/user');

export async function getdata(){
    try{
    const user = await user_data.findAll()
    console.log(user);
    }
    catch(error){
        console.log(error);
    }
}
export const adduser = async( new_user : {},callback: (err:Error | null, result?: any) => void) => {
    user_data.create(new_user).then((result: any) => {
        console.log(result);
    }).catch((err: any) => {
        console.log(err);
    })        
}
export const findusername = async(username: string, callback: Function) => {
    
};
export const delete_user = async(username: string, callback: (err:Error | null, result?: any) => void) => {
    
};
export const update_user = async(query_str:string, username:string,callback: (err:Error | null, result?: any) => void) =>{
    
}
