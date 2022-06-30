"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const booking = require('../model/conn');
class BookingService {
    constructor() { }
    static getBooking() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const booking1 = yield booking.booking.findAll({});
                return booking1;
            }
            catch (error) {
                return error;
            }
        });
    }
    static addBooking(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const booking1 = yield booking.create({
                    data
                });
                return booking1;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.BookingService = BookingService;
