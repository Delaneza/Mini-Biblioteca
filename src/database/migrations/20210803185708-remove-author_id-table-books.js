'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('books', 'author_id', {
      });
  },

  down: async (queryInterface, Sequelize) => {
  }
};
