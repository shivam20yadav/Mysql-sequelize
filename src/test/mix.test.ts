
var chai = require('chai'), chaiHttp = require('chai-http');

import { expect } from 'chai';

var app = require('../app');

chai.use(chaiHttp);

chai.request(app).get('/')

describe("User Service Unit Tests", function () {
    describe("Save User functionality", function () {
        it("should successfully add a user", function (done) {
            chai.request(app).post('/user/adduser').send({
                "username":"sada",
                "userpassword":"sdfsdffsdf",
                "firstname":"sdfssdf",
                "lastname":"fadnff",
                "email":"yadav@gmail.com",
                "phonenumber":"7986541230"}).then(function (res: { body: { success: any; }; }) {
                expect(res).to.have.status(200);
                done();
            }).catch(function (err: any) {
                done(err);
            });
        });
    });
    describe("Show User functionality", function () {
        it("should successfully show all users", function (done) {
            chai.request(app).get('/user/getuser').end(function (err: any, res: any) {
                expect(res.status).to.equal(200);
                done();
            }
            );
        });
    });
});

// describe("User Service Unit Tests", function () {
//     describe("Save and show User functionality", function () {
//       it("should successfully add a user", async function () {
//         const new_user: user_data = {
//             username: 'test_cass',
//             userpassword: 'test_cses',
//             firstname: 'test_cases',
//             lastname: 'test_cases',
//             email: 'test_cases@gmailw.com ',
//             phonenumber: '12345608977'
//         }
//         await user_service.adduser(new_user).then((result) => {
//             expect(result).to.equal('user added');
//         }).catch((err) => {
//             expect(err.message).to.equal(err.message);
//         });
//       });
//       it("it shoud return all user data", async function () {
//         await user_service.getuser().then((result: any) => {
//             expect(result).to.equal('all user data returned');
//         }).catch((err: { message: any; }) => {
//             expect(err.message).to.equal("something went wrong");
//         });
//       });
//     });
//   });