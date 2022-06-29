"use strict";
/**
 * in this file we will define the train model
 * which will be used to create the train table
 */
const train_station = require('./train_station.model'); // routes for a train station are defined in train_station.route.ts
module.exports = (sequelize, Sequelize) => {
    const train_master = sequelize.define('train_master', {
        train_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        train_name: {
            type: Sequelize.STRING,
            allownull: false
        },
        train_number: {
            type: Sequelize.STRING,
            allownull: false
        }
    });
    return train_master;
};
