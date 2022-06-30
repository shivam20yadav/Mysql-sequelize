import express from 'express' // express is the framework
import * as booking_controller from '../controller/booking.controller' // booking controller is defined in booking.controller.ts
const booking_route = express.Router() // create express router

booking_route.get('/getbooking',  booking_controller.booking.getbooking) // get booking
booking_route.post('/addbooking', booking_controller.booking.addbooking) // add booking

module.exports = booking_route // export router for use in app.ts