module.exports = (sequelize, DataType) => {
    const Recruiter = sequelize.define('Recruiter', {
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

    Recruiter.associate = (models) =>{
        Recruiter.belongsTo(models.Profile, {
            foreignKey: 'fk_perfil',
            as:'perfil'
        })
    }

    return Recruiter;
}