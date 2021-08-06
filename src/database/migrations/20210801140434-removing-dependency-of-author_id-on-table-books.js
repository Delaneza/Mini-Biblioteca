'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('books', 'author_id', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('books', 'author_id', {
    });
  }
};
