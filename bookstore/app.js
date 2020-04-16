const express = require("express");
const app = express();
const ejs = require("ejs");
const conn = require("./mysql-db.js");
const PORT = 3000;
app.set("view engine", "ejs");

let titles = [];

app.get("/", (req, res) => {
  conn.query("SELECT * FROM book_mast", (err, rows) => {
    if (err) throw err;

    rows.forEach((row) => {
      titles.push(row.book_name);
    });

  
    res.render("index.ejs", { data: titles });
  });
});


app.listen(PORT, () => {
  console.log(`Server is running and listen to port: ${PORT}`);
});
