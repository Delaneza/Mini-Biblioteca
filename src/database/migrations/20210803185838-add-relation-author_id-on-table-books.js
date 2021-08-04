'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('books', 'author_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'authors', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('books', 'author_id', {
    });
  }
};