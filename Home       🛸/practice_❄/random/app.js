const express =require("express");
const app = express();
const mysql = require("mysql");
const path = require("path");
const cors = require("cors")

const PORT = process.env.PORT || 3000;

let table = "peoples" ;

app.use(cors());
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));

const conn = mysql.createConnection({ 
host:"localhost",
user:"root",
password:"password",
database:"random_db"});

conn.connect((err)=>{ err ? console.error(err) : console.log("db connection established") })

app.get("/api/list", (req,res)=>{
  conn.query(`SELECT * FROM ${table}`, (err,rows)=>{
   res.json({users: rows})
  })
});


app.post("/api/add", (req,res)=>{

  let names = req.body; 
  let x ="";  
  names.forEach(i => {
    console.log(i)
    conn.query(`INSERT INTO ${table} SET ?`,{name:i}, (err,resp)=>{

      err ? console.log(err) : x += resp.insertId;
    })  
  });
  res.json("Your insert id id: " + x )
});

//group?count=3
app.get("/api/group" , (req,res)=>{
  let count= req.query;
  conn.query(`SELECT * FROM ${table}  ORDER BY RAND()` , (err,rows)=>{
    err ? console.log(err) : res.json({count: count, groups: rows })
  })
});



app.listen(PORT,()=>{ console.log(`Server is running ✨`)})