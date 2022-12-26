"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstname: "user1",
          lastname: "user1",
          email: "user1@gmail.com",
          phone: 1234567,
          password: bcrypt.hashSync("user1", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: false,
        },
        {
          firstname: "User2",
          lastname: "User2",
          email: "user2@gmail.com",
          phone: 1234567,
          password: bcrypt.hashSync("user2", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: false,
        },
        {
          firstname: "User3",
          lastname: "User3",
          email: "user3@gmail.com",
          phone: 1234567,
          password: bcrypt.hashSync("user3", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: false,
        },
        {
          firstname: "User4",
          lastname: "User4",
          email: "user4@gmail.com",
          phone: 1234567,
          password: bcrypt.hashSync("user4", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          isAdmin: true,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
