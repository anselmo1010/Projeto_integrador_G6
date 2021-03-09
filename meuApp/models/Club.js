module.exports = (sequelize, DataType) => {
    const Club = sequelize.define('Club', {
        id_clube: { type: DataType.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        nome: DataType.STRING(50),
        dt_fundacao: DataType.DATE,
        tecnico: DataType.STRING,
        emblema: DataType.STRING

    }, {
        tableName: 'clube',
        timestamps: false
    })

    return Club;
}