const repository = require("../dao/produtoDAO");

exports.listar = () => repository.findAll();

exports.buscar = (id) => repository.findById(id);

exports.criar = (data) => repository.create(data);

exports.atualizar = (id, data) =>
  repository.update(id, data);

exports.deletar = (id) =>
  repository.delete(id);