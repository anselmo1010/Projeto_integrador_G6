module.exports = (sequelize, DataType) => {
    const Championship = sequelize.define('Championship', {
        id_campeonato: {
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          nome: DataType.STRING(60),
          descricao: DataType.STRING(200),
          temporada: DataType.STRING

    }, {
        tableName: 'campeonato',
        timestamps: false
    })

    return Championship;
}