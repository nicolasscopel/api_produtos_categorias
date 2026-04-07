const express = require("express");
const app = express();


const categoriaRoutes = require("./routes/categoriaRoutes");
const produtoRoutes = require("./routes/produtoRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");

const authRoutes = require("./routes/authRoutes");

const errorHandler = require("./middlewares/errorHandler");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Produtos e Categorias",
      version: "1.0.0"
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },
  apis: ["./src/routes/*.js"]
};


const swaggerSpec = swaggerJsdoc(swaggerOptions);



app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/categorias", categoriaRoutes);
app.use("/produtos", produtoRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/auth", authRoutes);

app.use(errorHandler);



module.exports = app, swaggerSpec;
