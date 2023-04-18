const badReqCode = 401;

const tokenValidation = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(badReqCode).json({ message: 'Token não encontrado' });
  }
  if (token.length < 16 || token.length > 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
};

module.exports = tokenValidation;
