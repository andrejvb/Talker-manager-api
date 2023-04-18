const badReqCode = 400;

const rateValidationII = (req, res, next) => {
  const { talk } = req.body;
  if (talk.rate % 1 !== 0 || talk.rate <= 0 || talk.rate > 5) {
    return res.status(badReqCode)
    .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  } 
  next();  
};

module.exports = rateValidationII;