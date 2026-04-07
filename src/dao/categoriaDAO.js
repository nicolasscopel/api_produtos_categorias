const { Categoria } = require("../models");

function buscarTodos() {
  return Categoria.findAll();
}

function buscarPorId(id) {
  return Categoria.findByPk(id);
}

async function inserir(categoria) {
  return await Categoria.create({
    nome: categoria.nome,
    descricao: categoria.descricao,
  });
}

async function atualizar(id, dadosAtualizados) {
  const categoria = await Categoria.findByPk(id);

  if (!categoria) {
    return null;
  }

  return await categoria.update({
    nome: dadosAtualizados.nome,
    descricao: dadosAtualizados.descricao,
  });
}

async function remover(id) {
  const categoria = await Categoria.findByPk(id);

  if (!categoria) {
    return null;
  }

  await categoria.destroy();
  return categoria;
}

module.exports = {
  buscarTodos: buscarTodos,
  buscarPorId: buscarPorId,
  inserir: inserir,
  atualizar: atualizar,
  remover: remover,
};