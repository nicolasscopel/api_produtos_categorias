const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(
  "trabalho_sw",   
  "postgres",      
  "postgres",      
  {
    host: "localhost",
    dialect: "postgres",
  }
);

// Importar models
const CategoriaModel = require("./categoria");
const ProdutoModel = require("./produto");
const UsuarioModel = require("./usuario"); // ← ADICIONE ISSO


// Inicializar models
const Categoria = CategoriaModel(sequelize);
const Produto = ProdutoModel(sequelize);
const Usuario = UsuarioModel(sequelize); // ← ADICIONE ISSO


// Exportar
module.exports = {
  sequelize,
  Categoria,
  Produto,
  Usuario
};