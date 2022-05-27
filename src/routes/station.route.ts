/**
 * this file is used for station route
 */
import express from 'express' // express is the framework
import * as station_controller from '../controller/station.controller' // station controller is defined in station.controller.ts
import * as station_common from '../common/station.common.function' // station common function is defined in station.common.function.ts
const { check } = require('express-validator') // express validator is used for validation
const station_route = express.Router() // create express router

station_route.get('/getstation', station_controller.getstation) // get station

station_route.post('/addstation', [ // add station
  check('station_name').not().isEmpty(),
  check('station_name').custom((value: any) => { // custom validation for station name 
    return station_common.findstationname(value).then((result: any) => {
      if (result.length > 0) {
        throw new Error('station name already exists')
      }
      return true
    })
  })
], station_controller.addstation)

station_route.delete('/deletestation/:station_name', [ // delete station
  check('station_name').custom((value: string, { req }: any) => { // custom validation for station name
    return station_common.findstationname(value).then((result: any) => {
      if (result.length === 0) {
        throw new Error('station name not found')
      }
      return true
    })
  })
], station_controller.deletestation)

station_route.put('/updatestation/:station_name', [ // update station
  check('station_name').custom((value: string, { req }: any) => { // custom validation for station name
    return station_common.findstationname(value).then((result: any) => {
      if (result.length <= 0) {
        throw new Error('station name does not exists')
      }
      return true
    })
  })
], station_controller.updatestation)

module.exports = station_route // export router for use in app.ts
