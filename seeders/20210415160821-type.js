'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('types', [
      {
      type: 'Retail/Clothing',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Food/Restaurant',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Media/Entertainment',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Information Technology',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Legal',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};


//sequelize-cli db:seed:all