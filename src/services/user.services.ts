import * as user_model from '../model/user.model';


export async function getuser() {
    return new Promise((resolve,reject) => {
        user_model.getdata().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    });
} 
export async function adduser(new_user: {}) {
    return new Promise((resolve,reject) => {
        user_model.adduser(new_user).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    });
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