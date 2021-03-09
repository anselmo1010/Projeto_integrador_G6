'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Recruiter = await queryInterface.createTable('recrutador', {
      id_recrutador: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      clube_representado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fk_perfil: {
        type: Sequelize.INTEGER,
        references: {
          model: 'perfil',
          key: 'id_perfil'
        }

      }

    });

    return Recruiter;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('recrutador');
  }
};
