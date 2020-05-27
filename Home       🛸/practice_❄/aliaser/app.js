const express = require("express");
const app = express();
const mysql = require("mysql");
const path = require("path");
const PORT = process.env.PORT || 3000;
const cors = require("cors")

let db_table = "name_URL_pairs";

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "aliaser",
});
conn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("db connection established");
  }
});

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors())


app.get("/api/links", (req, res) => {
  conn.query(`SELECT id , url , alias , hitCount FROM ${db_table} `,(err, row) => {
      if (err) {
        res.status(500).json({ message: "Ajjajj" });
      } else {
        console.log(row);
        res.json({row});
      }
    }
  );
});

app.get("/ab/:ali", (req, res) => {
  let ali = req.params.ali;
console.log(ali)
   conn.query(`SELECT * FROM ${db_table} WHERE alias=?;`, [ali] , (err,resp)=>{
    console.log(resp)
    if(resp.length === 0){
      res.status(404).json({message: "no exists"})
    }else{
      res.json(resp[0].url)
    }
  }) 
});

app.post("/api/links", (req, res) => {
  console.log(req.body);

   conn.query(`SELECT * FROM ${db_table} WHERE alias=?;`, [req.body.alias] , (err,resp)=>{
    if (err) throw err;
    if(!resp.length === 0){
      console.log("Alias already in use")
      res.status(404).json({message:"Alias already in use"})
    }else{
      let rand = Math.floor(1000 + Math.random() * 9000);

       conn.query(`INSERT INTO ${db_table} (url,alias, secretCode ) Value( '${req.body.url}' ,'${req.body.alias}', ${rand})`, (err,ress)=>{
        if (err) throw err;
        res.json({ response: ress.insertId ,  secret: rand })
      })  
     }
  })  
});



app.delete("/api/links/:id", (req, res) => {
  let idd = req.params.id;
  let secretCode = req.body;

  conn.query(`SELECT * from ${db_table} WHERE id =?`, [idd], (err, row) => {
    if (row.length === 0) {
      res.status(404).json({ massage: "ID Not exists" });
    } else {

      if (secretCode.secretCode === row[0].secretCode) {
        conn.query(`DELETE FROM ${db_table} WHERE id=?`, [idd], (err, response) => {
          if (err) throw err;
          console.log(res);
          res.status(200).json({message: "ID deleted"})
        });
      } else {
        console.log("secret DID NOT matched");
        res.status(404).json({ massage: "SecretCode not matched" });
      }
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is running ✨");
});
