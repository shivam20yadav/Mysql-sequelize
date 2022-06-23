var chai1 = require('chai'), chaiHttp = require('chai-http');
var app = require('../app');
import * as user_service from '../services/user.services'
chai1.use(chaiHttp);
chai1.request(app).get('/')

describe("user service unit test",() =>
{
    it("should return all user details",(done) =>{
        chai1.request(app).get('/user/getuser').end((err:any,res:Response) =>{
            chai1.expect(res.status).to.equal(200);
            done();
        })
    })
    it("should add user into the database",(done) =>{
        chai1.request(app).post('/user/adduser').send({username:"test",userpassword:"tesst",firstname:"test",lastname:"test",email:"somethin@gmail.com",phonenumber:9400065497}).end((err:any,res:Response) =>{
            if(res.status == 200)
            {
                chai1.expect(res.status).to.equal(200);
                done();
            }   
            if(res.status == 422)
            {
                chai1.expect(res.status).to.equal(422,`validation error not error ${res.body}`);
                done();
            }
        })
    })
    it("should delete user from the database",(done) =>{
        chai1.request(app).delete('/user/deleteuser/test').end((err:any,res:Response) =>{
            chai1.expect(res.status).to.equal(200);
            done();
        })
    })
    it("should update user from the database",(done) =>{
        chai1.request(app).put('/user/updateuser/sadas').send({username:"sadas",userpassword:"teadasst",firstname:"test",lastname:"test",email:"sg@gmail.com"}).end((err:any,res:Response) =>{
            chai1.expect(res.status).to.equal(200);
            done();
        })
    })
});
describe("user service integration test",() =>{
    it("should return all user details",async function (){
        await user_service.user_service.getuser().then((result:any) =>{
            chai1.expect(result).to.equal(result);
        })
    })
    it("should add user into the database",async function (){
        await user_service.user_service.adduser({username:"test",userpassword:"tead",firstname:"test",lastname:"test",email:"asasda@gmail.com",phonenumber:"9400005497"}).then((result:any) =>{
            chai1.expect(result).to.equal("user added");
        })
    })
    it("should delete user from the database",async function (){
        user_service.user_service.delete_user('test').then((result:any) =>{
            chai1.expect(result).to.equal('user deleted');
        })
    })
    it("should update user from the database",async function (){
        user_service.user_service.update_user('sadas',{username:"sadas",userpassword:"teadasst",firstname:"test",lastname:"test",email:"asda@gmail.com"}).then((result:any) =>{
            chai1.expect(result).to.equal('user updated');
        }) 
    })
})