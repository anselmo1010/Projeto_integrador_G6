'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const Result = await queryInterface.createTable('resultado', { 
      id_resultado: {
        type: Sequelize.INTEGER ,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      gols_casa: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gols_visitante: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });

    return Result;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('resultado');
  }
};
