const express = require('express');
const tokenGenerate = require('../services/generateToken');
const emailValidation = require('../middleware/emailValidation');
const passwordValidation = require('../middleware/passwordValidation');

const router = express.Router();

router.post('/', emailValidation, passwordValidation, (req, res, next) => {
  try { 
    return res.status(200).json({ token: tokenGenerate() });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
