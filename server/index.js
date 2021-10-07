const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = config.get('port') || 5000;

app.use(bodyParser.urlencoded({ extended: false, limit: '10mb'}));
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(express.json({ extended: true })); //
app.use('/api/auth', require('./routes/auth'));
app.use('/api/service', require('./routes/service'));
app.use('/api/goods', require('./routes/goods'));

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log('Server Error', err.message);
    process.exit(1);
  }
}

start();

app.listen(PORT, () => console.log(`App has been started ${PORT}`));
