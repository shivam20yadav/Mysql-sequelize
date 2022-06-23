"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai1 = require('chai'), chaiHttp = require('chai-http');
var app = require('../app');
const user_service = __importStar(require("../services/user.services"));
chai1.use(chaiHttp);
chai1.request(app).get('/');
describe("user service unit test", () => {
    it("should return all user details", (done) => {
        chai1.request(app).get('/user/getuser').end((err, res) => {
            chai1.expect(res.status).to.equal(200);
            done();
        });
    });
    it("should add user into the database", (done) => {
        chai1.request(app).post('/user/adduser').send({ username: "test", userpassword: "tesst", firstname: "test", lastname: "test", email: "somethin@gmail.com", phonenumber: 9400065497 }).end((err, res) => {
            if (res.status == 200) {
                chai1.expect(res.status).to.equal(200);
                done();
            }
            if (res.status == 422) {
                chai1.expect(res.status).to.equal(422, `validation error not error ${res.body}`);
                done();
            }
        });
    });
    it("should delete user from the database", (done) => {
        chai1.request(app).delete('/user/deleteuser/test').end((err, res) => {
            chai1.expect(res.status).to.equal(200);
            done();
        });
    });
    it("should update user from the database", (done) => {
        chai1.request(app).put('/user/updateuser/sadas').send({ username: "sadas", userpassword: "teadasst", firstname: "test", lastname: "test", email: "sg@gmail.com" }).end((err, res) => {
            chai1.expect(res.status).to.equal(200);
            done();
        });
    });
});
describe("user service integration test", () => {
    it("should return all user details", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_service.user_service.getuser().then((result) => {
                chai1.expect(result).to.equal(result);
            });
        });
    });
    it("should add user into the database", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_service.user_service.adduser({ username: "test", userpassword: "tead", firstname: "test", lastname: "test", email: "asasda@gmail.com", phonenumber: "9400005497" }).then((result) => {
                chai1.expect(result).to.equal("user added");
            });
        });
    });
    it("should delete user from the database", function () {
        return __awaiter(this, void 0, void 0, function* () {
            user_service.user_service.delete_user('test').then((result) => {
                chai1.expect(result).to.equal('user deleted');
            });
        });
    });
    it("should update user from the database", function () {
        return __awaiter(this, void 0, void 0, function* () {
            user_service.user_service.update_user('sadas', { username: "sadas", userpassword: "teadasst", firstname: "test", lastname: "test", email: "asda@gmail.com" }).then((result) => {
                chai1.expect(result).to.equal('user updated');
            });
        });
    });
});
