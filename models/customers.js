'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customers = sequelize.define('Customers', {
    customer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Customers;
};