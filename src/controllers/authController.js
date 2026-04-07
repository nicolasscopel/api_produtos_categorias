const bcrypt = require("bcrypt");
const { Usuario } = require("../models");
const { gerarToken } = require("../middlewares/authMiddleware");

async function login(req, res, next) {
  try {

    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({
        mensagem: "Email e senha são obrigatórios"
      });
    }

    const usuario = await Usuario.findOne({
      where: { email }
    });

    if (!usuario) {
      return res.status(401).json({
        mensagem: "Usuário não encontrado"
      });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({
        mensagem: "Senha incorreta"
      });
    }

    const token = gerarToken(usuario);

    res.json({
      mensagem: "Login realizado com sucesso",
      token
    });

  } catch (erro) {
    next(erro);
  }
}

module.exports = {
  login
};