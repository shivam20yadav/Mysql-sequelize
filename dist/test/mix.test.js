"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require('chai'), chaiHttp = require('chai-http');
const chai_1 = require("chai");
var app = require('../app');
chai.use(chaiHttp);
chai.request(app).get('/');
describe("User Service Unit Tests", function () {
    describe("Save User functionality", function () {
        it("should successfully add a user", function (done) {
            chai.request(app).post('/user/adduser').send({
                "username": "sadas",
                "userpassword": "sdfsdffsf",
                "firstname": "sdfssasddf",
                "lastname": "faaddnff",
                "email": "yadav@gmsail.com",
                "phonenumber": "7986501030"
            }).then(function (res) {
                (0, chai_1.expect)(res).to.have.status(200);
                done();
            }).catch(function (err) {
                done(err);
            });
        });
    });
    describe("Show User functionality", function () {
        it("should successfully show all users", function (done) {
            chai.request(app).get('/user/getuser').end(function (err, res) {
                (0, chai_1.expect)(res.status).to.equal(200);
                done();
            });
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
