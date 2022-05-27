/**
 * in this file we will define the  train station model
 * which will be used to create the train station table
 */

module.exports = (sequelize: any, Sequelize: any) => {
  const train_station = sequelize.define('train_station', {
    train_id: {
      type: Sequelize.INTEGER
    },
    station_name: {
      type: Sequelize.STRING
    }
  })
  return train_station
}
