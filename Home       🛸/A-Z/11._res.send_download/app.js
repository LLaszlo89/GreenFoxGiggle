const express=require("express");
const app = express()
const path =require("path")
const cors = require("cors")

app.use(cors())
app.use('/', express.static(path.join(__dirname, 'assets')))

app.get("/down",(req,res)=>{
res.download(__dirname +"/assets/full.png", "full.png" )
})
app.get("/red",(req,res)=>{
  res.redirect( "index2.html")
})





app.listen(3001,()=>{
  console.log("running")
})