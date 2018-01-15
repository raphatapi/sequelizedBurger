module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });

    Burger.associate = function(models) {
        // We're saying that a Burger should belong to an Author
        // A Burger can't be created without an Author due to the foreign key constraint
        Burger.hasOne(models.Customer, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Burger;
  };
  