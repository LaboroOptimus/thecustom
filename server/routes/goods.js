const { Router } = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const Item = require('../models/Item');
const router = Router();

router.post(
  '/add',
  [check('name', 'Некорректное название').isLength({ min: 6 })],

  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(200).json({
          errors: errors.array(),
          message: 'Некорректные данные',
          status: 'error',
        });
      }

      const token = req.headers.authentication.split(' ')[1];

      if (!token) {
        res.status(200).json({ message: 'Невалидный токен', status: 'error' });
      }

      const { name, description, gender, type, size, photos, price } = req.body;
      const decoded = jwt.verify(token, config.get('jwtSecret'));

      const item = new Item({
        name,
        description,
        gender,
        type,
        size,
        photos,
        price,
        userId: decoded.userId,
      });

      await item.save();
      res.status(200).json({ message: 'Добавлено успешно', status: 'success' });
    } catch (err) {
      res.status(500).json({ message: 'Что-то пошло не так', status: 'error' });
    }
  }
);

router.post('/get/all', async (req, res) => {
  try {
    const { count } = req.body;

    const items = await Item.find({}).sort({ date: -1}).skip(count).limit(1000)

    if(items.length > 0) {
      res.status(200).json({ message: 'Успешно', items: items, status: 'success' })
    }
    else {
      res.status(200).json({ message: 'Больше товаров нет', items: [], status: 'error' })
    }

  } 
  catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так', items: [], status: 'error' });
  }
});

router.post('/get/all-by-price', async (req, res) => {
  try {
    console.log('BODY', req.body)
    const { count } = req.body;
    

    const items = await Item.find({}).sort({price: 1}).exec((err, result) => {
      if(err){
        res.status(500).json({ message: 'Что-то пошло не так', items: [], status: 'error' });
      }
      else {
        res.status(200).json({ message: 'Успешно', items: result, status: 'success' })
      }
    }) 
  } 
  catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так', items: [], status: 'error' });
  }
});

module.exports = router;
