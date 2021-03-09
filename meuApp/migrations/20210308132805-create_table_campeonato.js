'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Championship = queryInterface.createTable('campeonato', { 
      id_campeonato: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome: Sequelize.STRING(60),
      descricao: Sequelize.STRING(200),
      temporada: Sequelize.STRING
    });
    return Championship;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('campeonato');
  }
};
