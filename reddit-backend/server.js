const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const db = require("./db-connection");

app.use(bodyParser.json()); 

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get("/posts", (req, res) => {
  db.query("SELECT * FROM new_post", (err, rows) => {
    err ? res.status(500).json(err) : res.status(200).json(rows) && console.log(req.headers);
  });
});

app.post("/posts", (req, res) => {
  const data = req.body;
  db.query("INSERT INTO new_post SET ?", data, (err, result) => {
    err ? res.status(500).json(err) : res.status(200).send(`The ID of the post is number: ${result.insertId}`);
  });
});

app.get("/posts/:id/upvote", (req, res) => {
  console.log(req.params);
  db.query('SELECT * from new_post where ?', req.params , (err , row) => {
    if (err){  console.error(err)
    } else {
      let a = Number(row[0].score); 
      db.query(`UPDATE new_post SET score = ${(a + 1)} WHERE ?` , req.params , (err , result)=>{
        err ? console.log(err) : console.log(result) 
    })
    }
    res.json(`Update was successfully `)
  })
});

app.get("/posts/:id/downvote", (req, res) => {
  console.log(req.params);
  db.query('SELECT * from new_post where ?', req.params , (err , row) => {
    if (err){  console.error(err)
    } else {
      let a = Number(row[0].score); 
      db.query(`UPDATE new_post SET score = ${(a - 1)} WHERE ?` , req.params , (err , result)=>{
        err ? console.log(err) : console.log(result) 
    })
    }
    res.json(`Update was successfully `)
  })
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running and listen to post: ${process.env.PORT}`);
});

