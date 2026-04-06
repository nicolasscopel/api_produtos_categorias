const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Categoria = sequelize.define('Categoria', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Nome da categoria é obrigatório'
        }
      }
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'categorias',
    timestamps: false
  });

  return Categoria;
};