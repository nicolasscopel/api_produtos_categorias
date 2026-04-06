const express = require("express");
const router = express.Router();

const categoriaController = require("../controllers/categoriaController");

/**
 * @swagger
 * tags:
 *   name: Categorias
 *   description: Gerenciamento de categorias
 */

/**
 * @swagger
 * /categorias:
 *   post:
 *     summary: Cadastrar uma nova categoria
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Eletrônicos
 *               descricao:
 *                 type: string
 *                 example: Produtos eletrônicos em geral
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 */
router.post("/", categoriaController.cadastrarCategoria);

/**
 * @swagger
 * /categorias:
 *   get:
 *     summary: Listar todas as categorias
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de categorias
 */
router.get("/", categoriaController.buscarTodasAsCategorias);

/**
 * @swagger
 * /categorias/{id}:
 *   get:
 *     summary: Buscar categoria por ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da categoria
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Categoria encontrada
 *       404:
 *         description: Categoria não encontrada
 */
router.get("/:id", categoriaController.buscarCategoriaPorId);

/**
 * @swagger
 * /categorias/{id}:
 *   put:
 *     summary: Atualizar categoria
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da categoria
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Categoria atualizada
 */
router.put("/:id", categoriaController.atualizarCategoria);

/**
 * @swagger
 * /categorias/{id}:
 *   delete:
 *     summary: Deletar categoria
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da categoria
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Categoria removida
 */
router.delete("/:id", categoriaController.deletarCategoria);

module.exports = router;