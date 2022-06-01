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
exports.update_user = exports.delete_user = exports.adduser = exports.getuser = void 0;
const user_model = __importStar(require("../model/user.model"));
function getuser() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            user_model.getdata().then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    });
}
exports.getuser = getuser;
function adduser(new_user) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            user_model.adduser(new_user).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    });
}
exports.adduser = adduser;
function delete_user(username) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            user_model.delete_user(username).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    });
}
exports.delete_user = delete_user;
function update_user(user_name, updated_user) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const query_build = {};
            for (const i in updated_user) {
                query_build[i] = updated_user[i];
            }
            user_model.update_user(user_name, query_build).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    });
}
exports.update_user = update_user;
/**
 *  [
  check('username').isLength({ min: 2 }).withMessage('username is required'), // username is required
  check('password').isLength({ min: 7 }).withMessage('password is required'), // password is required
  check('firstname').isLength({ min: 2 }).withMessage('firstname is required'), // firstname is required
  check('lastname').isLength({ min: 2 }).withMessage('lastname is required'), // lastname is required
  check('email').isEmail().withMessage('email is required'), // email is required
  check('phonenumber').isNumeric().withMessage('phonenumber is required'), // phonenumber is required
  check('username').custom((value: string, { req }: any) => {
    return user_common.findusername(value).then((result:any) => {
      if (result.length > 0) {
        throw new Error('username already exists')
      }
      return true
    })
  }),
  check('email').custom((value: string, { req }: any) => {
    return user_common.checkemail(value).then((result:any) => { // check email is already exists
      if (result.length > 0) {
        throw new Error('email already exists')
      }
      return true
    })
  }),
  check('phonenumber').custom((value: string, { req }: any) => {
    return user_common.checkphone(value).then((result:any) => { // check phone number
      if (result.length > 0) {
        throw new Error('phonenumber already exists')
      }
      return true
    })
  })
],
 * ==============================================================================================
 [
  check('username').custom((value: string, { req }: any) => {
    return user_common.findusername(value).then((result:any) => { // find username in database and check if it exists
      if (result.length === 0) {
        throw new Error('username not found')
      }
      return true
    })
  })
],
 * ===============================================================================================
check('username').custom((value: string, { req }: any) => {
    return user_common.findusername(value).then((result:any) => { // find username if exists send error
      if (result.length <= 0) {
        throw new Error('username does not exists')
      }
      if (result.length > 0) {
        return true
      }
    })
  }),
 *
 */ 
