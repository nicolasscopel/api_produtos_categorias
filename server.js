require("dotenv").config();

const app = require("./src/app");
const sequelize = require("./src/config/database");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {

    // Testa conexão com o banco
    await sequelize.authenticate();
    console.log("✅ Conexão com o banco de dados estabelecida com sucesso.");

    // Inicia servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
      console.log(`📚 Swagger disponível em http://localhost:${PORT}/api-docs`);
    });



  } catch (error) {
    console.error("❌ Erro ao conectar com o banco de dados:");
    console.error(error);
  }
}

startServer();