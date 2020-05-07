const express = require("express");
const app = express();
const ejs = require("ejs");
const conn = require("./mysql-db.js");
const PORT = 3000;

//tells express to use this handler -> makes parsing of JSON data in POST requests possible
app.use(express.json());
app.set("view engine", "ejs");

let titles = [];

app.get("/", (req, res) => {
  const query = "SELECT * FROM book_mast";
  conn.query( query, (err, rows) => {
    if (err) throw err;

    rows.forEach((row) => {
      titles.push(row.book_name);
    });  
    res.render("index.ejs", { data: titles });
  });
});

app.get('/books' , (req, res)=>{

})

app.listen(PORT, () => {
  console.log(`Server is running and listen to port: ${PORT}`);
});
