const { Router } = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const router = Router();

router.post('/check/token', async (req, res) => {
  try {
    const token = req.headers.authentication.split(' ')[1];
    
    if (!token) {
      return res.status(200).json({ message: 'Нет авторизации', status: 'error' });
    }

    const decoded = jwt.verify(token, config.get('jwtSecret'));
    const { exp } = decoded;

    /* добавить проверку что токен принадлежит именно этому пользователю */
    if (Date.now() >= exp * 1000) {
      return res.status(200).json({ message: 'Истек срок токена', status: 'error' });
    }

    res.status(200).json({message: 'Токен валидный', status: 'success'})

  } catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так', status: 'error' });
  }
});

router.get('/test', async (req, res) => {
  res.status(400).json({ message: 'Корректно' });
});

module.exports = router;
