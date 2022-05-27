module.exports = (sequelize:any, Sequelize:any) => {
    const user_data = sequelize.define("user_master", {
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
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      },
      phonenumber: {
        type: Sequelize.STRING,
        allownull: true,
        validate: {
          isNumeric: true
        }
      }
    });
    return user_data;
};