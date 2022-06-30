import { Request, Response } from 'express'
import * as Booking  from '../services/booking.service'
export class booking{
    constructor(){};

    static async getbooking(req: Request, res: Response){
        await Booking.BookingService.getBooking().then((result: any) => {
            res.send(result)
        }).catch((err: any) => {
            res.status(500).send(err)
        })
    }
    static async addbooking(req: Request, res: Response){
        const new_booking = req.body
        await Booking.BookingService.addBooking(new_booking).then((result: any) => {
            res.send('booking added')
        }).catch((err: any) => {
            res.send(err)
        })
    }
}