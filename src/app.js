const express = require("express");
const app = express();


const categoriaRoutes = require("./routes/categoriaRoutes");
const produtoRoutes = require("./routes/produtoRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Produtos e Categorias",
      version: "1.0.0",
      description: "Documentação da API"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};


const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/categorias", categoriaRoutes);
app.use("/produtos", produtoRoutes);




module.exports = app;