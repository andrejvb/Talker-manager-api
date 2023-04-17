const express = require('express');
const { readFile } = require('../fsTalkerManager');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const data = await readFile();
    if (!data) {
      return res.status(200).json([]);          
    }
    return res.status(200).json(data);
  } catch (error) {
    return null;
  }  
});

module.exports = router;