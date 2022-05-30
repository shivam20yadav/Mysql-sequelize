import { sign, SignOptions } from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

export function generateToken() {
    // information to be encoded in the JWT
    const passphrase = 'shivamyadav';
    const payload = {
        id: 1,  
        email: '',
        role: '',
        iat: new Date().getTime(), // current time,
    };
    // read private key value
    const privateKey = {
        key : fs.readFileSync(path.join(__dirname, '../../private.pem'), 'utf8'),
        passphrase : passphrase
    }
    // sign with RSA SHA256
    const signInOptions: SignOptions = {
      // RS256 uses a public/private key pair. The API provides the private key
      // to generate the JWT. The client gets a public key to validate the
      // signature
      algorithm: 'RS256',
      expiresIn: '1h',
    };
    return sign(payload, privateKey, signInOptions);
  }