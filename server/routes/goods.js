const { Router } = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const Item = require('../models/Item');
const User = require('../models/User');
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

router.post('/get', async (req, res) => {
  try {
    const { count, sort, filter } = req.body;
   
    if(sort === 'date'){
      Item.find({type: filter}).sort({ date: -1}).skip(count).limit(1000).exec((err, result) => {
        if(err){
          res.status(500).json({ message: 'Что-то пошло не так', items: [], status: 'error' });
        }
        else {
          res.status(200).json({ message: 'Успешно', items: result, status: 'success' })
        }
      }) 
    }

    if(sort === 'price') {
      Item.find({type: filter}).sort({price: 1}).skip(count).limit(1000).exec((err, result) => {
        if(err){
          res.status(500).json({ message: 'Что-то пошло не так', items: [], status: 'error' });
        }
        else {
          res.status(200).json({ message: 'Успешно', items: result, status: 'success' })
        }
      }) 
    }

  } 
  catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так', items: [], status: 'error' });
  }
});

router.post('/get-item', async (req, res) => {
  try {
    const { id } = req.body;
    const item = await Item.findOne({_id:id})
    
    if(item) {
      res.status(200).json({ message: 'Успешно', item, status: 'success' })
    }
    else {
      res.status(404).json({ message: 'Такого товара не существует', item: {}, status: 'error' });
    }
   
  } 
  catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так', item: {}, status: 'error' });
  }
});

router.post('/get-item-user-info', async (req, res) => {
  try {
    const { id } = req.body;

    const user = await User.findOne({_id:id})
    const result = {
      instagram: user.instagram,
      vk: user.vk,
      telegram: user.telegram,
      name: user.name,
      surname: user.surname
    }
   
    if(user) {
      res.status(200).json({ message: 'Успешно', result, status: 'success' })
    }
    else {
      res.status(404).json({ message: 'Такого пользователя не существует', result: {}, status: 'error' });
    }
   
  } 
  catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так', result: {}, status: 'error' });
  }
});

router.post('/add-view', async (req, res) => {
  try {
    const { id } = req.body;
    const item = await Item.findOne({_id:id})

    const { views } = item;

    const result = await Item.updateOne({ _id: id }, { views: views + 1 });
    res.status(200).json({ message: 'Успешно', status: 'success'});
  } 
  catch (err) {
    res.status(500).json({ message: 'Что-то пошло не так', status: 'error' });
  }
});


module.exports = router;
