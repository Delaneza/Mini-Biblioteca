'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.changeColumn('books', 'author_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'authors', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('books', 'author_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  }
};