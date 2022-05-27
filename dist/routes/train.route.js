"use strict"
/**
 * this file created for train route
 */
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
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod }
}
Object.defineProperty(exports, "__esModule", { value: true })
const express_1 = __importDefault(require("express")) // express is the framework
const train_controller = __importStar(require("../controller/train.controller")) // train controller is defined in train.controller.ts
const train_common = __importStar(require("../common/train.common.function")) // common functions are defined in common.function.ts
const { check } = require('express-validator') // express validator is used for validation
const train_route = express_1.default.Router() // create express router
train_route.get('/gettrain', train_controller.gettrain) // get train
train_route.post('/addtrain', [
  check('train_name').not().isEmpty(),
  check('train_number').not().isEmpty(),
  check('train_name').custom((value) => {
    return train_common.findtrainname(value).then((result) => {
      if (result.length > 0) {
        throw new Error('train name already exists')
      }
      return true
    })
  })
], train_controller.addtrain)
train_route.delete('/deletetrain/:train_name', [
  check('train_name').custom((value, { req }) => {
    return train_common.findtrainname(value).then((result) => {
      if (result.length === 0) {
        throw new Error('train name not found')
      }
      return true
    })
  })
], train_controller.deletetrain)
train_route.put('/updatetrain/:train_name', [
  check('train_name').custom((value, { req }) => {
    return train_common.findtrainname(value).then((result) => {
      if (result.length <= 0) {
        throw new Error('train name does not exists')
      }
      return true
    })
  })
], train_controller.updatetrain)
module.exports = train_route // export router for use in app.ts
