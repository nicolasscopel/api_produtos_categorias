const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  const Usuario = sequelize.define(
    "Usuario",
    {
      nome: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      senha: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    },
    {
      tableName: "usuarios", 
      timestamps: true      
    }
  );

  return Usuario;
};