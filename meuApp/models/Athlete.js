module.exports =  (sequelize, DataType) => {
  const Athlete =  sequelize.define('Athlete', {
    id_atleta: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataType.STRING,
      allowNull: false,
    },
    sobrenome: {
      type: DataType.STRING,
      allowNull: false,
    },
    nacionalidade: DataType.STRING,
    data_nascimento: {
      type: DataType.DATE,
      allowNull: false
    },
    email: DataType.STRING(40),
    telefone: DataType.STRING(15),
    pe_dominante: DataType.STRING(9),
    posicao: DataType.STRING(15),
    outras_posicoes: DataType.STRING,
    peso: DataType.FLOAT,
    altura: DataType.INTEGER,
    imagem: DataType.STRING,
    inf_clinicas: DataType.STRING,
    aspect_fisico: DataType.STRING,
    aspect_tecnico: DataType.STRING,
    fk_perfil: {
      type: DataType.INTEGER,
    },
    fk_clube: {
      type: DataType.INTEGER,
    }
  },  {
    tableName: 'atleta',
    timestamps: false
});

  Athlete.associate = (models) => {
    Athlete.belongsTo(models.Profile, {
      foreignKey: 'fk_perfil',
      as: 'perfil'
    })

    Athlete.belongsTo(models.Club, {
      foreignKey: 'fk_clube',
      as: 'clube'
    })
  }

  return Athlete;
}