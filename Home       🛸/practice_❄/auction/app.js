const express = require("express");
const path = require("path");
const mysql=require("mysql");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
let moment = require('moment'); 
const app = express();
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));
app.use(cors());


let table ="auction"

const conn = mysql.createConnection({
  host:"localhost",
user:"root",
password:"password",
database:"auction_db"
});
conn.connect((err) => err ? console.log(err) : console.log("db connection established"));




app.get("/", (req, res)=>{
  res.json({message: "szia"})
})


app.get("/api/items",(req,res)=>{
  conn.query(`SELECT * FROM ${table}`, (err, rows)=>{
    err ? console.log(err) : res.json(rows)
  });
});


 

let time= moment().format();

app.post("/api/items/:id/bids" , (req,res)=>{
let id = req.params.id;
let bidAndName = req.body;
console.log(id)
console.log(bidAndName)

conn.query(`SELECT * FROM ${table} WHERE id=?` ,[id], (err ,row)=>{
  console.log(row[0])
 
   err ? console.log(err) : row[0].expiryDate < time ? res.json({ message: "The auction is over!" }) :

 row[0].highestBid  > bidAndName.highestBid ?  res.json({ message:"Your bid is below the highest bid!"}) : 
 
 conn.query(`update ${table} SET ? Where id = ${id} `,bidAndName,(err,resp)=>{
   err ? console.log(err) : console.log(resp) , res.json({message:"You are the highest bider"})

 })  
} )

})


app.listen(PORT, ()=>{ console.log("Server up and running")})