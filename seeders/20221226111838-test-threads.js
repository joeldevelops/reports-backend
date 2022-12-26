'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('threads', [
      {
        content: 'Test Thread Comment 1',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Test Thread Comment 2',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Test Thread Comment 3',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Test Thread Comment 4',
        parentThreadId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('threads', null, {});
  }
};
