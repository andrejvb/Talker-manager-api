const { readFile } = require('../fsTalkerManager');
const badReqCode = 404;

const findTalkerValidation = async (req, res, next) => {
  const id = Number(req.params.id);
  const talkers = await readFile();
  const targetTalker = talkers.find((talker) => talker.id === id);
  if (!targetTalker) {
    return res.status(badReqCode).json({ message: 'Pessoa palestrante não encontrada' });
  }
  next();
};

module.exports = findTalkerValidation;