'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const News = await queryInterface.createTable('noticia', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      conteudo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fonte: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
    return News;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('noticia');
  }
};
