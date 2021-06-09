const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const max = 1000000;
const min = -1000000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
// your code goes here

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/add', (req, res) => {
  const fir = req.body.num1;
  const sec = req.body.num2;
  if (typeof fir == 'string' || typeof sec == 'string') {
    res.send({
      status: 'error',
      message: 'Invalid data types',
    });
  }
  if (fir < min || sec < min) {
    res.send({
      status: 'error',
      message: 'Underflow',
    });
  } else if (fir > max || sec > max) {
    res.send({
      status: 'error',
      message: 'Overflow',
    });
  } else if (fir + sec > max) {
    res.send({
      status: 'error',
      message: 'Overflow',
    });
  } else {
    res.send({
      status: 'success',
      message: 'the sum of given two numbers',
      sum: fir+sec,
    });
  }
});

app.post('/sub', (req, res) => {
  const fir = req.body.num1;
  const sec = req.body.num2;
  if (typeof fir == 'string' || typeof sec == 'string') {
    res.send({
      status: 'error',
      message: 'Invalid data types',
    });
  }
  if (fir < min || sec < min) {
    res.send({
      status: 'error',
      message: 'Underflow',
    });
  } else if (fir > max || sec > max) {
    res.send({
      status: 'error',
      message: 'Overflow',
    });
  } else {
    res.send({
      status: 'success',
      message: 'the difference of given two numbers',
      difference: fir - sec,
    });
  }
});

app.post('/multiply', (req, res) => {
  const fir = req.body.num1;
  const sec = req.body.num2;
  if (typeof fir == 'string' || typeof sec == 'string') {
    res.send({
      status: 'error',
      message: 'Invalid data types',
    });
  }
  if (fir > max || sec > max) {
    res.send({
      status: 'error',
      message: 'Overflow',
    });
  } else if (fir < min || sec < min) {
    res.send({
      status: 'error',
      message: 'Underflow',
    });
  } else if (fir * sec > max) {
    res.send({
      status: 'error',
      message: 'Overflow',
    });
  } else {
    res.send({
      status: 'success',
      message: 'The product of given numbers',
      result: fir * sec,
    });
  }
});

app.post('/divide', (req, res) => {
  const fir = req.body.num1;
  const sec = req.body.num2;
  console.log(typeof fir + ' ' + typeof sec);
  if (sec === 0) {
    res.send({
      status: 'error',
      message: 'Cannot divide by zero',
    });
  } else if (typeof fir == 'string' || typeof sec == 'string') {
    res.send({
      status: 'error',
      message: 'Invalid data types',
    });
  }
  if (fir < min || sec < min) {
    res.send({
      status: 'error',
      message: 'Underflow',
    });
  } else if (fir > max || sec > max) {
    res.send({
      status: 'error',
      message: 'Overflow',
    });
  } else {
    res.send({
      status: 'success',
      message: 'The division of given numbers',
      result: fir / sec,
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;