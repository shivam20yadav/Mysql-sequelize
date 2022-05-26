import * as user_model from '../model/user.model';
import { user_data } from '../types/user';

export async function getuser() {
    return new Promise((resolve,reject) => {
        user_model.getdata().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    });
} 
export async function adduser(new_user: user_data) {
    if(new_user.firstname && new_user.lastname && new_user.user_name && new_user.user_pass){
        if(!new_user.firstname.match(/^[A-Z][a-z]{1,20}$/) && new_user.lastname.match(/^[A-Z][a-z]{1,20}$/))
        {
            
        }
        var something: unknown;
        async function find_one() {
            const mypromisse = new Promise((resolve,reject) => {
                user_model.findusername(new_user.user_name,(err: any,result: unknown) => {
                    if(result == 1) 
                    {
                        resolve(result);
                    }
                    if(result == 0)
                    {
                        reject("User already exists");
                    }
                });
            }); 
            something = await mypromisse;
        }
        find_one().then(() => {
            if(something == 1){
                user_model.adduser(new_user,(err,result) => {
                    if(err) throw err;
                    return result;
                });
            }
        }).catch((err) => {
            console.log(err);
        });  
    }else{
        return new Promise((resolve,reject) => {
            reject('Please fill all fields');
        });
    }
}
export async function delete_user(username: string) {

    return new Promise((resolve,reject) => 
    {
        var something: unknown;
        async function find_one() 
        {
            const mypromisse = new Promise((resolve,reject) => 
            {
                user_model.findusername(username,(err: any,result: unknown) => 
                {
                    if(result == 0) 
                    {
                        resolve(result);
                    }
                    if(result == 1)
                    {
                        reject("User not found");
                    }
                });
            }); 
            something = await mypromisse;
        }
        find_one().then(() => {
            if(something == 0){
                user_model.delete_user(username,(err,result) => {
                    if(err) throw err;
                    resolve(result);
                });
            }
        }).catch((err) => {
            reject(err);
        });  
    });
}
export async function update_user(user_name:string,updated_user:Request | any)
{
    return new Promise((resolve,reject) => {
        user_model.findusername(user_name,(err: any,result: unknown) => {
            if(result == 1) 
            {
                reject("User not found");
            }
            if(result == 0)
            {
                let query_build = ""; 
                for(let i in updated_user)
                {
                    query_build += `${i} = "${updated_user[i]}" ,`;
                }
                query_build = query_build.substring(0,query_build.length - 1);
                user_model.update_user(query_build, user_name ,(err,result) => {
                    if(err) throw err;
                    resolve(result);
                });
            }
        });
    });
}