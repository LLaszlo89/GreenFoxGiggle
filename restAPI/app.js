const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

app.use(express.static("assets"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/doubling", (req, res) => {
  let data = {};
  if (req.query.input) {
    data = {
      received: req.query.input,
      result: req.query.input * 2
    };
  } else {
    data = { error: "Please provide an input!" };
  }

  res.send(data);
});

app.get("/greeter", (req, res) => {
  let data = {};
  if (!req.query.name) {
    res.statusCode = 404;
    data = {
      error: "Please provide a name!"
    };
  } else if (!req.query.title) {
    res.statusCode = 404;
    data = {
      error: "Please provide title!"
    };
  } else {
    data = {
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    };
  }

  res.send(data);
});

app.get("/appenda/:appendable", (req, res) => {
  var data = {};
  if (!req.params.appendable) {
    res.statusCode = 404;
    data = { mssg: "Info missing" };
  } else {
    data = {
      appended: req.params.appendable + "a"
    };
  }
  res.send(data);
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
