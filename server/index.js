const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = config.get('port') || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ extended: true })); //
app.use('/api/auth', require('./routes/auth'));
app.use('/api/service', require('./routes/service'));

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
