const badReqCode = 400;
const regex = /^\d{2}\/\d{2}\/\d{4}$/;

const watchedAtValidation = (req, res, next) => {
  const { talk } = req.body; 
  const { watchedAt } = talk;
  if (!watchedAt) {
    return res.status(badReqCode).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!regex.test(watchedAt)) {
    return res.status(badReqCode)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }  
  next();  
};

module.exports = watchedAtValidation;
