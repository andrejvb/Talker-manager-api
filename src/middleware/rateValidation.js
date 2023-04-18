const badReqCode = 400;

const rateValidation = (req, res, next) => {
  const { talk } = req.body;
  if (!talk.rate && talk.rate !== 0) {
    return res.status(badReqCode).json({ message: 'O campo "rate" é obrigatório' });
  }  
  next();  
};

module.exports = rateValidation;