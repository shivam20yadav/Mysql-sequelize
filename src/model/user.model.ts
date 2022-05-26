import { conn } from './conn';
import {OkPacket,RowDataPacket} from "mysql2";
import { user_data } from "../types/user";

export const all_data = async() =>{
    conn.query("SELECT * FROM train_booking.user_master", (err:Error, result:RowDataPacket[]) => {
        if (err) throw err;
        
    });
}
export async function getdata(){
    return new Promise((resolve,reject) => {
        conn.query("SELECT * FROM train_booking.user_master", (err:Error, result:RowDataPacket[]) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}
export const adduser = async(newuser:user_data,callback: (err:Error | null, result?: any) => void) => {
    const sql = "INSERT INTO train_booking.user_master (first_name,last_name,user_name,user_pass) VALUES (?,?,?,?)";
    conn.query(sql,[newuser.firstname,newuser.lastname,newuser.user_name,newuser.user_pass],(err:Error | null,result?:RowDataPacket[]) => {
        if(err) throw err;
        callback(null,result);
    });
}
export const findusername = async(username: string, callback: Function) => {
    const querystr = `select * from train_booking.user_master where user_name = ?`;
    conn.query(querystr,username, (err:Error,result?:any) => {
        if(err) {
            callback(err + "error is here loving");
        }
        const row = (<RowDataPacket> result)[0];  
        if(row) {
            callback(null,0);
        }
        else {
            callback(null,1);
        }
    });
};
export const delete_user = async(username: string, callback: (err:Error | null, result?: any) => void) => {
    const querystr = `delete from train_booking.user_master where user_name = ?`;
    conn.query(querystr,username, (err:Error,result?:any) => {
        if(err) {
            callback(err);
        }
        callback(null,result);
    });
};
export const update_user = async(query_str:string, username:string,callback: (err:Error | null, result?: any) => void) =>{
    const upd_query = `UPDATE train_booking.user_master SET ${query_str} WHERE user_name = "${username}"`;
    conn.query(upd_query, (err:Error,result?:any) => {
        console.log("----------------------------------------------");
        console.log(upd_query + " sdsdkjfv");
        console.log("----------------------------------------------");
        if(err) {
            callback(err);
        }
        callback(null,result);
    });
}
