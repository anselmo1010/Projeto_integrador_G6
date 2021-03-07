'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Contato = await queryInterface.createTable('contato', { 
      id_contato: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull: true,
        autoIncrement: true
      },
      nome: Sequelize.STRING(50),
      sobrenome: Sequelize.STRING(50),
      telefone: Sequelize.STRING(15),
      mensagem: Sequelize.STRING(200),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

     });
     return Contato;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contato');
  }
};
