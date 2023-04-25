const express = require('express');
const { readFile, writeFile } = require('../fsTalkerManager');

const tokenValidation = require('../middleware/tokenValidation');
const nameValidation = require('../middleware/nameValidation');
const ageValidation = require('../middleware/ageValidation');
const talkValidation = require('../middleware/talkValidation');
const watchedAtValidation = require('../middleware/watchedAtValidation');
const rateValidation = require('../middleware/rateValidation');
const rateValidationII = require('../middleware/rateValidationII');
const findTalkerValidation = require('../middleware/findTalkerValidation');

const talkerRouter = express.Router();

talkerRouter.get('/', async (_req, res, next) => {
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

talkerRouter.get('/:id', async (req, res, next) => {
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

  const validation = [
    tokenValidation, 
    nameValidation, 
    ageValidation, 
    talkValidation, 
    watchedAtValidation,
    rateValidation,
    rateValidationII];

talkerRouter.post('/', validation, async (req, res, next) => {
  try {
    const { age, name, talk } = req.body;
    const { watchedAt, rate } = talk;
    const talkers = await readFile();
    const newId = Number(talkers[talkers.length - 1].id) + 1;
    const newTalker = { id: newId, name, age, talk: { watchedAt, rate } };
    const updateTalkers = [...talkers, newTalker];
    await writeFile(updateTalkers);
    return res.status(201).json(newTalker);
  } catch (error) {
    return next(error);
  }
});

talkerRouter.put('/:id', validation, findTalkerValidation, async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { age, name, talk } = req.body;
    const { watchedAt, rate } = talk;
    const talkers = await readFile();
    const targetTalker = talkers.find((talker) => Number(talker.id) === id);
    const editedTalker = { id, name, age, talk: { watchedAt, rate } };
    console.log('logiiii', id);
    const index = talkers.indexOf(targetTalker);
    talkers.splice(index, 1, editedTalker);
    await writeFile(talkers);
    return res.status(200).json(editedTalker);
  } catch (error) {
    return next(error);
  }
});

module.exports = talkerRouter;
