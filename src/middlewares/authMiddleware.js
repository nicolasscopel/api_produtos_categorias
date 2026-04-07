const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      mensagem: "Necessário Token de Autenticação",
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (erro) {
    return res.status(403).json({
      mensagem: "Token inválido ou expirado",
      erro: erro.message,
    });
  }
}

function gerarToken(usuario) {
  const token = jwt.sign(
    { id: usuario.id, nome: usuario.nome },
    SECRET_KEY,
    { expiresIn: "10m" }
  );

  return token;
}

module.exports = {
  authenticateToken,
  gerarToken,
};