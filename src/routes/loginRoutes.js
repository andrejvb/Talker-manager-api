const express = require('express');
const tokenGenerate = require('../services/generateToken');
const emailValidation = require('../middleware/emailValidation');
const passwordValidation = require('../middleware/passwordValidation');

const loginRouter = express.Router();

loginRouter.post('/', emailValidation, passwordValidation, (_req, res, next) => {
  try { 
    return res.status(200).json({ token: tokenGenerate() });
  } catch (error) {
    return next(error);
  }
});

module.exports = loginRouter;
