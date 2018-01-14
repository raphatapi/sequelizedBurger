module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.TIMESTAMP
    }
  });

  Burger.associate = function(models) {
    Burger.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Burger;
};
