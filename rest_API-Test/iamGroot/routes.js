const express = require('express');
const app = express();


//http://localhost:3001/groot/?message=Lehel

app.get('/groot', (req, res) => {
  console.log(req.query.message)
  req.query.message ? res.status(200).send({ received: req.query.message, translated: 'I am Groot!', })
    : res.status(400).send({ error: 'I am Groot!' });
});


module.exports = app;