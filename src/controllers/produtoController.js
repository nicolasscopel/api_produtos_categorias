const produtoDAO = require("../dao/produtoDAO");

async function cadastrarProduto(req, res) {
  try {

    const { nome, preco, quantidade_estoque, categoria_id } = req.body;

    if (!nome || !preco || !quantidade_estoque) {
      return res.status(400).json({
        mensagem: "Nome, preço e quantidade são obrigatórios"
      });
    }

    const produto = await produtoDAO.inserir({
      nome,
      preco,
      quantidade_estoque,
      categoria_id
    });

    res.status(201).json({
      mensagem: "Produto cadastrado com sucesso",
      produto
    });

  } catch (erro) {

    res.status(500).json({
      mensagem: "Erro ao cadastrar produto",
      erro: erro.message
    });

  }
}

async function buscarTodosProdutos(req, res) {

  try {

    const produtos = await produtoDAO.buscarTodos();

    res.json({
      quantidade: produtos.length,
      produtos
    });

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }

}

async function buscarProdutoPorId(req, res) {

  try {

    const produto = await produtoDAO.buscarPorId(req.params.id);

    if (!produto) {

      return res.status(404).json({
        mensagem: "Produto não encontrado"
      });

    }

    res.json(produto);

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }

}

async function atualizarProduto(req, res) {

  try {

    const produto = await produtoDAO.atualizar(req.params.id, req.body);

    if (!produto) {

      return res.status(404).json({
        mensagem: "Produto não encontrado"
      });

    }

    res.json({
      mensagem: "Produto atualizado",
      produto
    });

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }

}

async function deletarProduto(req, res) {

  try {

    const produto = await produtoDAO.remover(req.params.id);

    if (!produto) {

      return res.status(404).json({
        mensagem: "Produto não encontrado"
      });

    }

    res.json({
      mensagem: "Produto removido"
    });

  } catch (erro) {

    res.status(500).json({
      erro: erro.message
    });

  }

}

module.exports = {
  cadastrarProduto,
  buscarTodosProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  deletarProduto
};