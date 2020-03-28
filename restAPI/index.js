const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('assets'));

const messages = [];
let counter = 0;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/messages', (req, res) => {
  console.log(req.query.name);
  let filteredMessages = messages;
  if (req.query.name) {
    filteredMessages = filteredMessages.filter(message => message.name === req.query.name);
  }
  res.send({
    messages: filteredMessages
  });
});

app.post('/messages', (req, res) => {
  console.log(req.body);
  let message = {...req.body, sentAt: new Date(), id: counter};
  counter++;
  messages.push(message);
  res.send({
    success: true,
    message
  });
});

// DELETE /messages/15

app.delete('/messages/:id', (req, res) => {
  console.log(req.params.id);
  let indexToDelete = messages.findIndex(message => message.id === req.params.id);
  let deletedMessage = messages.splice(indexToDelete, 1);
  res.send({
    success: true,
    deletedMessage
  });
})




app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});