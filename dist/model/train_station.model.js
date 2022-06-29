"use strict";
const train_master = require('./train.model');
const station_master = require('./station.model');
module.exports = (sequelize, Sequelize) => {
    const train_station = sequelize.define('train_station_junction', {});
    sequelize.models.train_master.hasOne(train_station, {
        foreginKey: 'train_id'
    });
    sequelize.models.station.hasOne(train_station, {
        foreginKey: 'station_id'
    });
    train_station.belongsTo(sequelize.models.train_master, {
        foreginKey: 'train_id'
    });
    train_station.belongsTo(sequelize.models.station, {
        foreginKey: 'station_id'
    });
    return train_station;
};
