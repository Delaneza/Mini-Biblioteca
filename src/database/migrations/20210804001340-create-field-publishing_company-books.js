'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('books', 'publishing_company', {
        type: Sequelize.STRING,
        allowNull: false
      }
    ); 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('books', 'publishing_company');
  }
};
