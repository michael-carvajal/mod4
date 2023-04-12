'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const initialUsers = [
      {
        firstName: 'Bianca',
        lastName: 'Checa',
        age: 25
      },
      {
        firstName: 'Charlie',
        lastName: 'Peterson',
        age: 26
      },
      {
        firstName: 'Evan',
        lastName: 'Seligman',
        age: 26
      },
    ]

    queryInterface.bulkInsert('Users', initialUsers);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const initialUsers = [
      {
        firstName: 'Bianca',
        lastName: 'Checa',
        age: 25
      },
      {
        firstName: 'Charlie',
        lastName: 'Peterson',
        age: 26
      },
      {
        firstName: 'Evan',
        lastName: 'Seligman',
        age: 26
      },
    ]
    queryInterface.bulkDelete('Users', initialUsers)
  }
};
