const { Router } = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const router = Router();

const codes = ['111111', '323456', '231456', '535234', '653456']

router.post(
  '/register',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Некорректный пароль').isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(200).json({
          errors: errors.array(),
          message: 'Некорректные данные регистрации',
          status: 'error',
        });
      }

      const { email, password, instagram, telegram, vk, name, surname, avatar, code } = req.body;

      if(codes.indexOf(code) == -1){
        console.log('CODE', code)
        res.status(200).json({ message: 'Неверный промокод', status: 'error'})
        return 
      }
      
  
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(200)
          .json({ message: 'Такой пользователь уже существует', status: 'error' });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        email,
        password: hashedPassword,
        name,
        surname,
        instagram,
        telegram,
        vk,
        avatar
      });
      await user.save();
      res.status(201).json({ message: 'Пользователь создан', status: 'success' });
    } catch (err) {
      res.status(500).json({ message: 'Что-то пошло не так', status: 'error' });
    }
  }
);

router.get('/test', async (req, res) => {
  res.status(400).json({ message: 'Корректно' });
});

router.post(
  '/login',
  [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(200).json({
          message: 'Некорретные данные при входе в систему',
          status: 'error'
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(200).json({ message: 'Пользователь не найден', status: 'error' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(200)
          .json({ message: 'Неверный пароль, попробуйте снова', status: 'error' });
      }
      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), { expiresIn: '6h' });
      
      res.status(200).json({ token, userId: user.id, status: 'success' });
    } catch (err) {
      res.status(500).json({ message: 'Что-то пошло не так', status: 'error' });
    }
  }
);

module.exports = router;
