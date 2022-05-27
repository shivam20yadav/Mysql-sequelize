/**
 * this file created for train route
 */

import express from 'express' // express is the framework
import * as train_controller from '../controller/train.controller' // train controller is defined in train.controller.ts
import * as train_common from '../common/train.common.function' // common functions are defined in common.function.ts
const { check } = require('express-validator') // express validator is used for validation
const train_route = express.Router() // create express router

train_route.get('/gettrain', train_controller.gettrain) // get train

train_route.post('/addtrain', [ // add train
    check('train_name').not().isEmpty(),
    check('train_number').not().isEmpty(),
    check('train_name').custom((value: any) => {
        return train_common.findtrainname(value).then((result: any) => {
            if (result.length > 0) {
                throw new Error('train name already exists')
            }
            return true
        })
    })
], train_controller.addtrain) 

train_route.delete('/deletetrain/:train_name', [ // delete train
    check('train_name').custom((value: string, { req }: any) => {
        return train_common.findtrainname(value).then((result: any) => {
            if (result.length === 0) {
                throw new Error('train name not found')
            }
            return true
        })
    })
], train_controller.deletetrain) 

train_route.put('/updatetrain/:train_name', [  // update train
    check('train_name').custom((value: string, { req }: any) => {
        return train_common.findtrainname(value).then((result: any) => {
            if (result.length <= 0) {
                throw new Error('train name does not exists')
            }
            return true
        })
    })
], train_controller.updatetrain)

module.exports = train_route // export router for use in app.ts