'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('threads', 'parentThreadId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'threads',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('threads', 'parentThreadId');
  }
};
