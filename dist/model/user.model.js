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
exports.update_user = exports.delete_user = exports.findusername = exports.adduser = exports.getdata = exports.all_data = void 0;
const conn_1 = require("./conn");
const all_data = () => __awaiter(void 0, void 0, void 0, function* () {
    conn_1.conn.query("SELECT * FROM train_booking.user_master", (err, result) => {
        if (err)
            throw err;
    });
});
exports.all_data = all_data;
function getdata() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            conn_1.conn.query("SELECT * FROM train_booking.user_master", (err, result) => {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    });
}
exports.getdata = getdata;
const adduser = (newuser, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = "INSERT INTO train_booking.user_master (first_name,last_name,user_name,user_pass) VALUES (?,?,?,?)";
    conn_1.conn.query(sql, [newuser.firstname, newuser.lastname, newuser.user_name, newuser.user_pass], (err, result) => {
        if (err)
            throw err;
        callback(null, result);
    });
});
exports.adduser = adduser;
const findusername = (username, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const querystr = `select * from train_booking.user_master where user_name = ?`;
    conn_1.conn.query(querystr, username, (err, result) => {
        if (err) {
            callback(err + "error is here loving");
        }
        const row = result[0];
        if (row) {
            callback(null, 0);
        }
        else {
            callback(null, 1);
        }
    });
});
exports.findusername = findusername;
const delete_user = (username, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const querystr = `delete from train_booking.user_master where user_name = ?`;
    conn_1.conn.query(querystr, username, (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null, result);
    });
});
exports.delete_user = delete_user;
const update_user = (query_str, username, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const upd_query = `UPDATE train_booking.user_master SET ${query_str} WHERE user_name = "${username}"`;
    conn_1.conn.query(upd_query, (err, result) => {
        console.log("----------------------------------------------");
        console.log(upd_query + " sdsdkjfv");
        console.log("----------------------------------------------");
        if (err) {
            callback(err);
        }
        callback(null, result);
    });
});
exports.update_user = update_user;
