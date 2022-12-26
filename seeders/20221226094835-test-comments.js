'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', [
      {
        content: 'Test Comment 1',
        page: 1,
        paragraph: 1,
        documentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Test Comment 2',
        page: 1,
        paragraph: 2,
        documentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Test Comment 3',
        page: 3,
        paragraph: 3,
        documentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {});
  }
};
