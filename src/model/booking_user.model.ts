const booking_master = require("./booking.model")
module.exports = (sequelize:any, Sequelize:any) => {
    const booking_user = sequelize.define('booking_user', {
        person_name :{
            type: Sequelize.STRING,
            allownull: false
        }
    })
    sequelize.models.booking_master.hasOne(booking_user,{
        foreginKey: 'booking_id'
    })
    booking_user.belongsTo(sequelize.models.booking_master,{
        foreginKey: 'booking_id'
    })
    return booking_user
}