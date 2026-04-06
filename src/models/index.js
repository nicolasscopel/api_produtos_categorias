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

// Inicializar models
const Categoria = CategoriaModel(sequelize);
const Produto = ProdutoModel(sequelize);

// Exportar
module.exports = {
  sequelize,
  Categoria,
  Produto
};