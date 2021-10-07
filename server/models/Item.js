const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  gender: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: Array, required: true },
  photos: {type: Array, default: []},
  date: {type: Date, default: Date.now},
  price: {type: Number, required: true},
  userId: {type: Types.ObjectId, ref: 'User'}
});

module.exports = model('Item', schema);
