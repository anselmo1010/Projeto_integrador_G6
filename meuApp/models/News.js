module.exports = (sequelize, DataType) => {
    const News = sequelize.define('News', {
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

    return News;
}