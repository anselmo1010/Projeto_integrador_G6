module.exports = (sequelize, DataType) => {
    const Recrutador = sequelize.define('Recrutador', {
        id_recrutador:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataType.STRING,
            allowNull: false
        },
        clube_representado: {
            type: DataType.STRING,
            allowNull: false
        },
        fk_perfil: {
            type: DataType.INTEGER,

        }
       
    }, {
        tableName: 'recrutador',
        timestamps: false
    })

    Recrutador.associate = (listaDeModelos) =>{
        Recrutador.belongsTo(listaDeModelos.Perfil, {
            foreignKey: 'fk_perfil',
            as:'perfil'
        })
    }

    return Recrutador;
}