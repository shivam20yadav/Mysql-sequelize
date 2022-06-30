const user_master = require("./user.model")
module.exports = (sequelize:any, Sequelize:any) => {
    const booking = sequelize.define('booking_master', {
        booking_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        booking_date: {
            type: Sequelize.DATE,
            allownull: false
        }
    })
    sequelize.models.user_master.hasOne(booking,{
        foreginKey: 'user_id'
    })
    booking.belongsTo(sequelize.models.user_master,{
        foreginKey: 'user_id'
    })

    sequelize.models.train_master.hasOne(booking,{
        foreginKey: 'train_id'
    })
    booking.belongsTo(sequelize.models.train_master,{
        foreginKey: 'train_id'
    })

    sequelize.models.station.hasOne(booking,{
        as:"current_station",
        foreginKey: 'train_station_id'
    })
    booking.belongsTo(sequelize.models.station,{
        foreginKey: 'train_station_id'
    })

    sequelize.models.station.hasOne(booking,{
        as:"arriving_station",
        foreginKey: 'arriving_station_id'
    })
    booking.belongsTo(sequelize.models.station,{
        foreginKey: 'arriving_station_id'
    })
    
    return booking
}