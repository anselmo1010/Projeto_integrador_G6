module.exports = (sequelize, DataType) => {
    const Match = sequelize.define('Match', {
        id_partida: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        data_partida: DataType.DATE,
        local_partida: DataType.STRING,
        fk_resultado: {
            type: DataType.INTEGER,

        },
        fk_campeonato: {
            type: DataType.INTEGER,

        },
        time_casa: {
            type: DataType.INTEGER,

        },
        time_visitante: {
            type: DataType.INTEGER,

        }

    }, {
        tableName: 'partida',
        timestamps: false
    });

    Match.associate = (models)=>{
        Match.belongsTo(models.Result, {
            foreignKey: "fk_resultado",
            as: "resultado"
        })

        Match.belongsTo(models.Championship, {
            foreignKey: "fk_campeonato",
            as: "campeonato"
        })

        Match.belongsTo(models.Club, {
            foreignKey: "time_casa",
            as: "clube_casa"
        })
        Match.belongsTo(models.Club, {
            foreignKey: "time_visitante",
            as: "clube_visitante"
        })
    }

    return Match;
}