const booking = require('../model/conn')

export class BookingService {
    constructor() { }
    static async getBooking() {
        try {
            const booking1 = await booking.booking.findAll({})
            return booking1
        } catch (error) {
            return error
        }
    }
    static async addBooking(data:any) {
        try {
            const booking1= await booking.create({
                data     
            })
            return booking1
        } catch (error) {
            return error
        }
    }
}