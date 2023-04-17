const express = require('express');
const tokenGenerate = require('../services/generateToken');

const router = express.Router();

router.post('/', (req, res, next) => {
  try { 
    return res.status(200).json({ token: tokenGenerate() });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
