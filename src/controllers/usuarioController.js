const bcrypt = require("bcrypt");
const { Usuario } = require("../models");

async function cadastrarUsuario(req, res, next) {
  try {

    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({
        mensagem: "Nome, email e senha são obrigatórios"
      });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const usuario = await Usuario.create({
      nome,
      email,
      senha: senhaHash
    });

    res.status(201).json({
      mensagem: "Usuário criado com sucesso",
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      }
    });

  } catch (erro) {
    next(erro);
  }
}

module.exports = {
  cadastrarUsuario
};