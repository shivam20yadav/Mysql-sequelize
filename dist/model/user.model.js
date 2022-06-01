"use strict";
/**
 * in this file we will define the user model
 * which will be used to create the user table
 */
module.exports = (sequelize, Sequelize) => {
    const user_data = sequelize.define('user_master', {
        username: {
            type: Sequelize.STRING
        },
        userpassword: {
            type: Sequelize.STRING
        },
        firstname: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        phonenumber: {
            type: Sequelize.STRING,
            allownull: true,
            validate: {
                isNumeric: true
            }
        }
    });
    return user_data;
};
