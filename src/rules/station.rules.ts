/**
 * this file is used for validtion using express validator to check the input data for 
 * station name is taken, is valid or not
 */

import {check} from 'express-validator'
import * as station_common from '../common/station.common.function';

export const station_validation_add_station = [
    check('station_name').isLength({min:2}).withMessage('station name is required'),
    check('station_name').not().isEmpty().withMessage('station name is required'),
    check('station_name').custom((value: any) => { // custom validation for station name 
        return station_common.findstationname(value).then((result: any) => {
          if (result.length > 0) {
            throw new Error('station name already exists')
          }
          return true
        })
    })    
]
export const station_validation_update_delete_station = [
    check('station_name').isLength({min:2}).withMessage('station name is required'), // check for station name is not empty
    check('station_name').custom((value: any) => { // custom validation for station name
        return station_common.findstationname(value).then((result: any) => {
            if (result.length === 0) {
                throw new Error('station name does not exists')
            }
            return true
            }
        )
    })
]