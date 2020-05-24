const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World!'
  });
});

app.post('/greeting', (req, res) => {
  if(req.body && req.body.name) {
    res.status(201).send({
      greeting: `Hello, my dear ${req.body.name}!`
    });
  } else {
    res.status(400).send({
      error: 'Name is missing!'
    });
  }
});

console.log('hello');

module.exports = app;