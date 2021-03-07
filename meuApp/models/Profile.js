module.exports = (sequelize, DataType) => {
    const Profile = sequelize.define('Profile', {
        id_perfil:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        senha: {
            type: DataType.STRING,
            allowNull: false
        },
        tipo: {
            type: DataType.INTEGER,
            allowNull: false
            
        }
       
    }, {
        tableName: 'perfil',
        timestamps: false
    })

    return Profile;
}