const express =require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");
const cors =require("cors");
const PORT = process.env.PORT || 3000;

let table = "warehouse";

app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());

const conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"password",
  database:"fox_shop"
});
conn.connect((err)=>{
  if(err){ console.log(err)} else{ console.log('db connection established')}})

app.get("/warehouse",(req,res)=>{
  conn.query(`SELECT * FROM ${table}`,(err,row)=>{
    err ? console.log(err) : res.json({ message: "ok", cloths: row})
  });
});

///price-check/?item=[string]&size=s&quantity=[integer]

app.get("/price-check/", (req,res)=>{
  let item = req.query.item;
  let size = req.query.size;
  let quantity = req.query.quantity;


item = item.replace(/([A-Z])/g, ' $1').trim();

  console.log(item)

  if(quantity < 3){
    res.json({result: "please order at least 3, one for yourself, two for your friends"}) 
  } else {
    conn.query(`SELECT * FROM ${table}`, (err, rows)=>{
      if(err){console.log(err)
      }else{
        console.log(rows)
        rows.forEach(e => {
            if( quantity > e.in_store ){
              res.status(400).json({result: "error, we don't have enough items in store"})
            } else {
              if(item == e.item_name){
                res.json({result: "ok", total_price: (quantity * e.unit_price )})
              } else {
                res.status(400).json({message: "item is not exists"})
              }
          } 
        });
    }
  })
} 
})



app.listen(PORT, ()=>{  console.log(`Server is running ✨`)})