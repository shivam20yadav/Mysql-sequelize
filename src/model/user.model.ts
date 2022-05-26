import {OkPacket,RowDataPacket} from "mysql2";


export const all_data = async() =>{
    
}
export async function getdata(){
    return new Promise((resolve,reject) => {
        
    });
}
export const adduser = async( new_user : {},callback: (err:Error | null, result?: any) => void) => {
    console.log(new_user);
}
export const findusername = async(username: string, callback: Function) => {
    
};
export const delete_user = async(username: string, callback: (err:Error | null, result?: any) => void) => {
    
};
export const update_user = async(query_str:string, username:string,callback: (err:Error | null, result?: any) => void) =>{
    
}
