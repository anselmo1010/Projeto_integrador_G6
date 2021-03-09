const { Sequelize } = require(".");

module.exports = (sequelize, DataType) => {
    const Contact = sequelize.define('Contact', {
        id_contato: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING(50),
        sobrenome: DataType.STRING(50),
        telefone: DataType.STRING(15),
        mensagem: DataType.STRING(200),
        createdAt: DataType.DATE,
        updatedAt: DataType.DATE
        
    }, {
        tableName: 'contato',
    })

    return Contact;
}