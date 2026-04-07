const categoriaDAO = require("../dao/categoriaDAO");

// Cadastrar categoria
async function cadastrarCategoria(req, res) {
  try {
    const { nome, descricao } = req.body;

    // Validação básica
    if (!nome) {
      return res.status(400).json({
        mensagem: "O nome da categoria é obrigatório"
      });
    }

    const novaCategoria = await categoriaDAO.inserir({
      nome: nome,
      descricao: descricao
    });

    res.status(201).json({
      mensagem: "Categoria cadastrada com sucesso",
      categoria: novaCategoria
    });

  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao cadastrar categoria",
      erro: erro.message
    });
  }
}

// Buscar todas as categorias
async function buscarTodasAsCategorias(req, res) {
  try {
    const categorias = await categoriaDAO.buscarTodos();

    res.status(200).json({
      mensagem: "Categorias encontradas",
      categorias: categorias,
      quantidade: categorias.length
    });

  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao buscar categorias",
      erro: erro.message
    });
  }
}

// Buscar categoria por ID
async function buscarCategoriaPorId(req, res) {
  try {
    const id = parseInt(req.params.id);

    const categoria = await categoriaDAO.buscarPorId(id);

    if (!categoria) {
      return res.status(404).json({
        mensagem: "Categoria não encontrada"
      });
    }

    res.status(200).json({
      mensagem: "Categoria encontrada",
      categoria: categoria
    });

  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao buscar categoria",
      erro: erro.message
    });
  }
}

// Atualizar categoria
async function atualizarCategoria(req, res) {
  try {
    const id = parseInt(req.params.id);
    const { nome, descricao } = req.body;

    const categoria = await categoriaDAO.buscarPorId(id);

    if (!categoria) {
      return res.status(404).json({
        mensagem: "Categoria não encontrada"
      });
    }

    const categoriaAtualizada = await categoriaDAO.atualizar(id, {
      nome: nome,
      descricao: descricao
    });

    res.status(200).json({
      mensagem: "Categoria atualizada com sucesso",
      categoria: categoriaAtualizada
    });

  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao atualizar categoria",
      erro: erro.message
    });
  }
}

// Deletar categoria
async function deletarCategoria(req, res) {
  try {
    const id = parseInt(req.params.id);

    const categoria = await categoriaDAO.buscarPorId(id);

    if (!categoria) {
      return res.status(404).json({
        mensagem: "Categoria não encontrada"
      });
    }

    await categoriaDAO.remover(id);

    res.status(200).json({
      mensagem: "Categoria deletada com sucesso"
    });

  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao deletar categoria",
      erro: erro.message
    });
  }
}

module.exports = {
  cadastrarCategoria: cadastrarCategoria,
  buscarTodasAsCategorias: buscarTodasAsCategorias,
  buscarCategoriaPorId: buscarCategoriaPorId,
  atualizarCategoria: atualizarCategoria,
  deletarCategoria: deletarCategoria
};