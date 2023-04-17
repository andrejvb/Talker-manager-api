const express = require('express');
const { readFile } = require('../fsTalkerManager');

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const data = await readFile();
    if (!data) {
      return res.status(200).json([]);          
    }
    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }  
});

router.get('/:id', async (req, res, next) => {
    try {
      const idReq = Number(req.params.id);  
      const dataTalkers = await readFile();
      const chosenTalker = dataTalkers.find((talker) => talker.id === idReq);
      if (!chosenTalker) {
        return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });          
      }
      return res.status(200).json(chosenTalker);
    } catch (error) {
      return next(error);
    }  
  });

module.exports = router;