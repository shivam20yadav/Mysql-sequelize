module.exports = (sequelize:any, Sequelize:any) => {
    const booking = sequelize.define('booking_master', {
        booking_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            references :{
                model: 'user_masters',
                key: 'id'
            }
        },
        train_id: {
            type: Sequelize.INTEGER,
            references :{
                model: 'train_masters',
                key: 'train_id'
            }
        },
        train_station_id: {
            type: Sequelize.INTEGER,
            references :{
                model: 'stations',
                key: 'station_id'
            }
        },
        arriving_station_id: {
            type: Sequelize.INTEGER,
            references :{
                model: 'stations',
                key: 'station_id'
            }
        },
        booking_date: {
            type: Sequelize.DATE,
            allownull: false
        },
        booking_time: {
            type: Sequelize.TIME,
            allownull: false
        }
    })
    return booking
}