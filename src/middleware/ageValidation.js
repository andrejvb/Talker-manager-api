const badReqCode = 400;

const ageValidation = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    return res.status(badReqCode).json({ message: 'O campo "age" é obrigatório' });
  }
  if (age < 18 || typeof (age) !== 'number' || age % 1 !== 0) {
    return res.status(badReqCode)
    .json({ message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
  }
  next();
};

module.exports = ageValidation;
