module.exports = (sequelize, DataType) => {
    const Noticia = sequelize.define('Noticia', {
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataType.STRING,
            allowNull: false
        },
        conteudo: {
            type: DataType.STRING,
            allowNull: false
        },
        fonte: {
            type: DataType.STRING,
            allowNull: false
        },
    }, {
        tableName: 'noticia',
        timestamps: false
    })

    return Noticia;
}