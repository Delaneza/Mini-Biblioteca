'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'books', 
      'status', 
      {
        type: Sequelize.ENUM(['ACTIVE', 'DELETED'])
      }
    ); 
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('books', 'status');
    
  }
};
