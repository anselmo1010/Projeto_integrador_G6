'use strict';

const { STRING, SequelizeScopeError } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const Athlete = await queryInterface.createTable('atleta', {
      id_atleta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
     }, 
     nome: {
       type: Sequelize.STRING,
       allowNull: false,
     },
     sobrenome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nacionalidade: Sequelize.STRING,
    data_nascimento:{
      type: Sequelize.DATE,
      allowNull: false
    },
    email: Sequelize.STRING(40),
    telefone: Sequelize.STRING(15),
    pe_dominante: Sequelize.STRING(9),
    posicao: Sequelize.STRING(15),
    outras_posicoes: Sequelize.STRING,
    peso: Sequelize.FLOAT,
    altura: Sequelize.INTEGER,
    imagem: Sequelize.STRING,
    inf_clinicas: Sequelize.STRING,
    aspect_fisico: Sequelize.STRING,
    aspect_tecnico: Sequelize.STRING,
    fk_perfil: {
      type: Sequelize.INTEGER,
      references: {
        model: 'perfil',
        key: 'id_perfil'
      }

    }
    });

    return Athlete;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('atleta');
  }
};
