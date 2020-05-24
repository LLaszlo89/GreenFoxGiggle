const express = require("express")
const app = express();
const mysql = require("mysql")
const path = require("path")
const cors = require("cors")

app.use(express.json())


app.use(cors())
app.use('/', express.static(path.join(__dirname, 'public')))


const conn = mysql.createConnection({
  user:"root",
  host:"localhost",
  password:"password",
  database:"fox_play"
})
conn.connect((err)=>{
  if (err){throw err} else{ console.log("db connection established")}
})
app.get("/api",(req,res)=>{
  conn.query("SELECT * FROM playlists" , (err,row)=>{
    if(err){throw err} else{
      res.json(row)
    }
  })
})


app.post("/api",(req,res)=>{
  let x = req.body
conn.query("INSERT into playlists SET?",[x], (err,resp)=>{
  if(err){throw err} else{  res.json(resp)}
})
})



app.listen(3000, ()=>{console.log("running")})