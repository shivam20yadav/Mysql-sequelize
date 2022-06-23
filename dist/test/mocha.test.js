"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
var chai1 = require('chai'), chaiHttp = require('chai-http');
const request = require('request');
const sinon = require('sinon');
var app = require('../app');
chai1.use(chaiHttp);
chai1.request(app).get('/');
describe('testing', () => {
    let requestspy;
    before(() => {
        requestspy = sinon.spy(request, 'get');
    });
    after(() => {
        chai1.get.restore();
    });
    it('getting images', (done) => {
        chai1.request(app).get('/user/getuser').then((something) => {
            console.log(requestspy.calledOnece);
            (0, chai_1.expect)(requestspy.calledOnece);
            (0, chai_1.expect)(requestspy.args[0][0].to.equal('http://localhost:3000/user/getuser'));
            done();
        });
    });
});
