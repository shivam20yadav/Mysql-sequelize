"use strict";
module.exports = (sequelize, Sequelize) => {
    const booking_user = sequelize.define('booking_user', {
        booking_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'booking_masters',
                key: 'booking_id'
            }
        },
        person_name: {
            type: Sequelize.STRING,
            allownull: false
        }
    });
    return booking_user;
};
