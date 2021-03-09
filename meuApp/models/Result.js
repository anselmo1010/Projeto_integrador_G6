module.exports = (sequelize, DataType) => {
    const Result = sequelize.define('Result', {
        id_resultado: {
            type: DataType.INTEGER ,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          gols_casa: {
            type: DataType.INTEGER,
            allowNull: false,
          },
          gols_visitante: {
            type: DataType.INTEGER,
            allowNull: false,
          },
          createdAt: DataType.DATE,
          updatedAt: DataType.DATE

    }, {
        tableName: 'resultado'
    })

    return Result;
}