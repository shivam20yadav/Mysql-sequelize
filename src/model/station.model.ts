/**
 * in this file we will define the  train station model
 * which will be used to create the train station table
 */

module.exports = (sequelize: any, Sequelize: any) => {
  const station = sequelize.define('station', {
    station_name: {
      type: Sequelize.STRING
    },
    station_state: {
      type: Sequelize.STRING,
      allownull: false
    }
  })
  return station
}
