const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const badReqCode = 400;

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(badReqCode).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!regexEmail.test(email)) {
    return res
      .status(badReqCode).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = emailValidation;
