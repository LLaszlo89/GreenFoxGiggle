const express = require("express");
const app = express();

app.get('/',(req,res)=>{
  res.send(' mi a brekjdwfkwjfh')
})


app.get('/yondu?:distance', (req,res)=>{
  let a = req.params
  console.log(a)
})


const PORT = 3005;

app.listen(PORT , ()=>{
  console.log(`Server is running on listen to: ${PORT}`)
})
