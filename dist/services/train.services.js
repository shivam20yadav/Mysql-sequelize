"use strict"
const __createBinding = (this && this.__createBinding) || (Object.create
  ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k
    let desc = Object.getOwnPropertyDescriptor(m, k)
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function () { return m[k] } }
    }
    Object.defineProperty(o, k2, desc)
  }
  : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k
    o[k2] = m[k]
  })
const __setModuleDefault = (this && this.__setModuleDefault) || (Object.create
  ? function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v })
  }
  : function (o, v) {
    o.default = v
  })
const __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod
  const result = {}
  if (mod != null) for (const k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k)
  __setModuleDefault(result, mod)
  return result
}
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt (value) { return value instanceof P ? value : new P(function (resolve) { resolve(value) }) }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled (value) { try { step(generator.next(value)) } catch (e) { reject(e) } }
    function rejected (value) { try { step(generator.throw(value)) } catch (e) { reject(e) } }
    function step (result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected) }
    step((generator = generator.apply(thisArg, _arguments || [])).next())
  })
}
Object.defineProperty(exports, "__esModule", { value: true })
exports.updatetrain = exports.deletetrain = exports.addtrain = exports.gettrain = void 0
const train_model = __importStar(require("../model/train.model"))
function gettrain () {
  return __awaiter(this, void 0, void 0, function * () {
    return new Promise((resolve, reject) => {
      train_model.getdata().then((result) => {
        resolve(result)
      }).catch((err) => {
        reject(err)
      })
    })
  })
}
exports.gettrain = gettrain
function addtrain (new_train) {
  return __awaiter(this, void 0, void 0, function * () {
    return new Promise((resolve, reject) => {
      train_model.addtrain(new_train).then((result) => {
        resolve(result)
      }).catch((err) => {
        reject(err)
      })
    })
  })
}
exports.addtrain = addtrain
function deletetrain (train_name) {
  return __awaiter(this, void 0, void 0, function * () {
    return new Promise((resolve, reject) => {
      train_model.deletetrain(train_name).then((result) => {
        resolve(result)
      }).catch((err) => {
        reject(err)
      })
    })
  })
}
exports.deletetrain = deletetrain
function updatetrain (train_name, updated_train) {
  return __awaiter(this, void 0, void 0, function * () {
    return new Promise((resolve, reject) => {
      const query_build = {}
      for (const i in updated_train) {
        query_build[i] = updated_train[i]
      }
      train_model.updatetrain(train_name, query_build).then((result) => {
        resolve(result)
      }).catch((err) => {
        reject(err)
      })
    })
  })
}
exports.updatetrain = updatetrain
