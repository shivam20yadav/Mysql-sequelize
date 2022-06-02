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
Object.defineProperty(exports, "__esModule", { value: true })
exports.generateToken = void 0
const jsonwebtoken_1 = require("jsonwebtoken")
const fs = __importStar(require("fs"))
const path = __importStar(require("path"))
function generateToken () {
  // information to be encoded in the JWT
  const passphrase = 'shivamyadav'
  const payload = {
    id: 1,
    email: '',
    role: '',
    iat: new Date().getTime() // current time,
  }
  // read private key value
  const privateKey = {
    key: fs.readFileSync(path.join(__dirname, '../../private.pem'), 'utf8'),
    passphrase
  }
  // sign with RSA SHA256
  const signInOptions = {
    // RS256 uses a public/private key pair. The API provides the private key
    // to generate the JWT. The client gets a public key to validate the
    // signature
    algorithm: 'RS256',
    expiresIn: '1h'
  }
  return (0, jsonwebtoken_1.sign)(payload, privateKey, signInOptions)
}
exports.generateToken = generateToken
