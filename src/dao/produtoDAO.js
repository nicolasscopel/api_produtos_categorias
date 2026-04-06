const { Produto } = require("../models");

function buscarTodos() {
  return Produto.findAll();
}

function buscarPorId(id) {
  return Produto.findByPk(id);
}

async function inserir(produto) {
  return await Produto.create({
    nome: produto.nome,
    preco: produto.preco,
    quantidade_estoque: produto.quantidade_estoque,
    categoria_id: produto.categoria_id
  });
}

async function atualizar(id, dadosAtualizados) {
  const produto = await Produto.findByPk(id);

  if (!produto) {
    return null;
  }

  return await produto.update(dadosAtualizados);
}

async function remover(id) {
  const produto = await Produto.findByPk(id);

  if (!produto) {
    return null;
  }

  await produto.destroy();
  return produto;
}

module.exports = {
  buscarTodos,
  buscarPorId,
  inserir,
  atualizar,
  remover
};