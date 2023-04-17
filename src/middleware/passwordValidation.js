const badReqCode = 400;

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(badReqCode).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6) {
    return res
      .status(badReqCode).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = passwordValidation;