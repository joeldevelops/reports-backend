'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('documents', [
      {
        title: 'Test Document 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Test Document 2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('documents', null, {});
  }
};
