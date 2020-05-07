const express = require('express');
const path =require('path');
const app = express();
let PORT = 3000;

app.use(express.static('public'))
app.use(express.json())

const items = [
  'one',
  'two',
  'three'
];

app.get('/', (req , res)=>{
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/items', (req, res)=>{
res.json({items})
});

app.post('/api/items', (req, res)=>{
  const {item} = req.body;
  if(item){
    items.push(item);
    return res.sendStatus(201);
  }
  res.sendStatus(400);
});
let con =[] 
app.get('/ninja',(req,res)=>{
res.json(con)
})
app.post('/ninja', (req,res)=>{
  con.push(req.body)
  res.json({ con })
  res.json({ status: 'success'})
} )

app.listen(PORT, ()=>{
console.log(`Server is running and listening on port: ${PORT}`)
})