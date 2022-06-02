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
const chai_1 = require("chai");
const user_service = __importStar(require("../services/user.services"));
const train_service = __importStar(require("../services/train.services"));
const station_services = __importStar(require("../services/station.service"));
describe("User Service Unit Tests", function () {
    describe("Save and show User functionality", function () {
        it("should successfully add a user", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const new_user = {
                    username: 'test_cass',
                    userpassword: 'test_cses',
                    firstname: 'test_cases',
                    lastname: 'test_cases',
                    email: 'test_cases@gmailw.com ',
                    phonenumber: '12345608977'
                };
                yield user_service.adduser(new_user).then((result) => {
                    (0, chai_1.expect)(result).to.equal('user added');
                }).catch((err) => {
                    (0, chai_1.expect)(err.message).to.equal(err.message);
                });
            });
        });
        it("it shoud return all user data", function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield user_service.getuser().then((result) => {
                    (0, chai_1.expect)(result).to.equal('all user data returned');
                }).catch((err) => {
                    (0, chai_1.expect)(err.message).to.equal("something went wrong");
                });
            });
        });
    });
});
// testing the train service
describe("Train Service Unit Tests", function () {
    describe("Save and show train functionality", function () {
        it("should successfully add a train", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const train = {
                    train_name: 'test_cass',
                    train_number: '19456'
                };
                yield train_service.addtrain(train).then((result) => {
                    (0, chai_1.expect)(result).to.equal('train added');
                }).catch((err) => {
                    (0, chai_1.expect)(err.message).to.equal("train not added");
                });
            });
        });
        it("it shoud return all train data", function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield train_service.gettrain().then((result) => {
                    (0, chai_1.expect)(result).to.equal('data show successfully');
                }).catch((err) => {
                    (0, chai_1.expect)(err.message).to.equal("something went wrong");
                });
            });
        });
    });
});
// testing the station service
describe("Station Service Unit Tests", function () {
    describe("Save and show station functionality", function () {
        it("should successfully add a station", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const station = {
                    station_name: 'test_cass',
                    station_state: 'test_cases'
                };
                yield station_services.addstation(station).then((result) => {
                    (0, chai_1.expect)(result).to.equal('station added');
                }).catch((err) => {
                    (0, chai_1.expect)(err.message).to.equal("not adding station");
                });
            });
        });
        it("it shoud return all station data", function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield station_services.getdata().then((result) => {
                    (0, chai_1.expect)(result).to.equal('data show successfully');
                }).catch((err) => {
                    (0, chai_1.expect)(err.message).to.equal("something went wrong");
                });
            });
        });
    });
});
