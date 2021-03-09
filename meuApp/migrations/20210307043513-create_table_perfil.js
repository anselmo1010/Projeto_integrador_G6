'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const Profile = await queryInterface.createTable('perfil', {
      id_perfil: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });

    return Profile;

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('perfil');
  }
};
