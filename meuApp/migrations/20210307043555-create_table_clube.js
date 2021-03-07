'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Club = await queryInterface.createTable('users', {
      id_clube: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      nome: Sequelize.STRING(50),
      dt_fundacao: Sequelize.DATE,
      tecnico: Sequelize.STRING
    });

    return Club;
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
