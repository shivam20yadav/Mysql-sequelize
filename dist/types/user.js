"use strict";
module.exports = (sequelize, Sequelize) => {
    const user_data = sequelize.define("userdata", {
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
        }
    });
    return user_data;
};
