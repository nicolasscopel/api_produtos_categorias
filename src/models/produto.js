const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Produto = sequelize.define('Produto', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Nome do produto é obrigatório'
        }
      }
    },
    preco: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    quantidade_estoque: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'produtos',
    timestamps: false
  });

  return Produto;
};