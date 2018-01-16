'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Burgers', [
      {burger_name: "Big Mac", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Whooper", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Cheezburger", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Baconator", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Quarter Pounder", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "McRoyal", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Double Double", devoured: false, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Burgers', null, {truncate : true});
  }
};
