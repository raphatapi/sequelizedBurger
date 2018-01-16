'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Burgers', [{
      burger_name: 'Pineapple Burger',
      devoured: false
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Burgers', null, {});
  }
};
