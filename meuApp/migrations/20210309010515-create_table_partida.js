'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  const Match = await queryInterface.createTable('partida', {
      id_partida: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      data_partida: Sequelize.DATE,
      local_partida:Sequelize.STRING,
      fk_resultado: {
        type: Sequelize.INTEGER,
        references: {
          model: 'resultado',
          key: 'id_resultado'
        }
      },
      fk_campeonato:{
        type: Sequelize.INTEGER,
        references: {
          model: 'campeonato',
          key: "id_campeonato"
        }
      },
      time_casa: {
        type: Sequelize.INTEGER,
        references: {
          model: "clube",
          key: "id_clube"
        }
      },
      time_visitante: {
        type: Sequelize.INTEGER,
        references: {
          model: "clube",
          key: "id_clube"
        }
      }

    });

    return Match;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('partida');
  }
};
