"use strict";
/**
 * in this file we will define the train model
 * which will be used to create the train table
 */
module.exports = (sequelize, Sequelize) => {
    const train_master = sequelize.define('train_master', {
        train_name: {
            type: Sequelize.STRING
        },
        train_number: {
            type: Sequelize.STRING
        }
    });
    return train_master;
};
