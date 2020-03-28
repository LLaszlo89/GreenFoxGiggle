const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/arrays",(req,res)=>{
  res.send("hallo");
});

app.post("/arrays", (req, res) => {
  var data = {};
  if (!req.body.what && req.body.numbers) {
    data = {
      error: "Please provide what to do with the numbers!"
    };
  } else if (!req.body.numbers && req.body.what) {
    data = {
      error: "Please provide numbers to do " + req.body.what + " with them!"
    };
  } else if (!req.body.what && !req.body.numbers) {
    data = {
      error: "Please provide numbers and what to do with them!"
    };
  } else {
    if (req.body.what === "sum") {
      data = {
        result: sumAll(req.body.numbers)
      };
    } else if (req.body.what === "multiply") {
      data = {
        result: multiplyAll(req.body.numbers)
      };
    } else if (req.body.what === "double") {
      data = {
        result: doubleAll(req.body.numbers)
      };
    }
  }
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

function sumAll(arr) {
  return arr.reduce((current, next) => current + next);
}

function multiplyAll(arr) {
  return arr.reduce((current, next) => current * next);
}

function doubleAll(arr) {
  return arr.map(item => (item += item));
}
