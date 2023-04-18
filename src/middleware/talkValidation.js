const badReqCode = 400;

const talkValidation = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    return res.status(badReqCode).json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

module.exports = talkValidation;
