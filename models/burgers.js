'use strict';
module.exports = (sequelize, DataTypes) => {
  var Burgers = sequelize.define('Burgers', {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Burgers.associate = function(models) {
    Burgers.hasOne(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Burgers;
};