import { expect } from 'chai';

import * as user_service from '../services/user.services';
import { user_data } from '../types/user.types';

import { train_data } from '../types/train.types';
import * as train_service from '../services/train.services';

import * as station_services from '../services/station.service'
import { station_data } from '../types/station.types'

describe("User Service Unit Tests", function () {
    describe("Save and show User functionality", function () {
      it("should successfully add a user", async function () {
        const new_user: user_data = {
            username: 'test_cass',
            userpassword: 'test_cses',
            firstname: 'test_cases',
            lastname: 'test_cases',
            email: 'test_cases@gmailw.com ',
            phonenumber: '12345608977'
        }
        await user_service.adduser(new_user).then((result) => {
            expect(result).to.equal('user added');
        }).catch((err) => {
            expect(err.message).to.equal(err.message);
        });
      });
      it("it shoud return all user data", async function () {
        await user_service.getuser().then((result: any) => {
            expect(result).to.equal('all user data returned');
        }).catch((err: { message: any; }) => {
            expect(err.message).to.equal("something went wrong");
        });
      });
    });
  });
  // testing the train service
  describe("Train Service Unit Tests", function () {
    describe("Save and show train functionality", function () {
      it("should successfully add a train", async function () {
        const train: train_data = {
            train_name: 'test_cass',
            train_number: '19456'
        }
        await train_service.addtrain(train).then((result) => {
            expect(result).to.equal('train added');
        }).catch((err) => {
            expect(err.message).to.equal("train not added");
        });
      });
      it("it shoud return all train data", async function () {
        await train_service.gettrain().then((result: any) => {
            expect(result).to.equal('data show successfully');
        }).catch((err: { message: any; }) => {
            expect(err.message).to.equal("something went wrong");
        });
      });
    });
  });

  // testing the station service
  describe("Station Service Unit Tests", function () {
    describe("Save and show station functionality", function () {
      it("should successfully add a station", async function () {
        const station: station_data = {
            station_name: 'test_cass',
            station_state: 'test_cases'
        }
        await  station_services.addstation(station).then((result) => {
            expect(result).to.equal('station added');
        }).catch((err) => {
            expect(err.message).to.equal("not adding station");
        });
      });
      it("it shoud return all station data", async function () {
        await station_services.getdata().then((result: any) => {
            expect(result).to.equal('data show successfully');
        }).catch((err: { message: any; }) => {
            expect(err.message).to.equal("something went wrong");
        });
      });
    });
  });

