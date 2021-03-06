/**
*  user model
*  Describes the characteristics of each attribute in a user resource.
*
* @author Vikas Baswapuram <s538336@nwmissouri.edu>
* @author Puneeth Annam
*
*/
'use strict';
module.exports = (sequelize, DataTypes) => {
  sequelize.define('user', {
    userId: {
      type: DataTypes.INTEGER,
      notEmpty: true,
      primaryKey: true,
    allowIncrement : true 
   },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_login: DataTypes.DATE
  }, {});
 
    // associations can be defined here
    // return User;
  };

