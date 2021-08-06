'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'authors', 
      'status', 
      {
        type: Sequelize.ENUM ([ 'ACTIVE ', 'DELETED ' ])
      }
    ); 
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('authors', 'status');
    
  }
};
