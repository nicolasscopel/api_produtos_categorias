const express = require("express");
const router = express.Router();

const produtoController = require("../controllers/produtoController");

/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Gerenciamento de produtos
 */

/**
 * @swagger
 * /produtos:
 *   post:
 *     summary: Cadastrar um novo produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Mouse Gamer
 *               preco:
 *                 type: number
 *                 example: 150.90
 *               quantidade_estoque:
 *                 type: integer
 *                 example: 10
 *               categoria_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 */
router.post("/", produtoController.cadastrarProduto);

/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Listar todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos
 */
router.get("/", produtoController.buscarTodosProdutos);

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     summary: Buscar produto por ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto encontrado
 *       404:
 *         description: Produto não encontrado
 */
router.get("/:id", produtoController.buscarProdutoPorId);

/**
 * @swagger
 * /produtos/{id}:
 *   put:
 *     summary: Atualizar produto
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto atualizado
 */
router.put("/:id", produtoController.atualizarProduto);

/**
 * @swagger
 * /produtos/{id}:
 *   delete:
 *     summary: Deletar produto
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto removido
 */
router.delete("/:id", produtoController.deletarProduto);

module.exports = router;