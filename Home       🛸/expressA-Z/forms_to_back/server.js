const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const data = require('./dataToPlay.json')

app.use(express.json())   // This is the body-parser   its build in now!!!
app.use(express.urlencoded({extended: false})) // Now we can receive data straight from the html form!!!!!
app.use(express.static(path.join(__dirname, 'public')));  //This gives back the index.html from the public as default 
// and we can access all files -> local:3000/style.css   or  local:3000/someOther.html

app.get('/api' , (req,res)=>{
  res.redirect( 'index2.html')
});

app.get('/api/json-data' , (req,res)=>{
  res.json( data )
});

app.get('/api/json-data/:id' , (req,res)=>{
let doesItExists = data.some((person)=> person.id === parseInt(req.params.id));  //does it exists ?  True/false
  if(doesItExists){
    res.json(data.find((person)=> person.id === parseInt(req.params.id)))
} else{
    res.status(400).json({mssg:'User not found'})
}
});



app.post('/api/json-data' , (req,res)=>{
  let newMember= { 
    id: 15, 
    name:req.body.name, 
    email: req.body.email, 
    status: 'active'
  };
if(!newMember.name || !newMember.email){
  return res.status(400).json({msg:'somethig is missing'})
}
data.push(newMember)

  });

//-------------------------------
//  req.params  ->  http://localhost:3000/api/json/1/30        ->     {"msg":"the id u enterd is 1 and 30"}
app.get('/api/json/:id/:age' , (req,res)=>{
  res.json( { msg:`the id u enterd is ${req.params.id} and ${req.params.age}`} )
})

//http://localhost:3000/Qstring?name=Lehel&age=31               ->    { name: 'Lehel', age: '31' }
app.get('/Qstring' , (req,res)=>{
  console.log(req.query)        
  res.json({ msg: `The query parameters you entered are: ${req.query.name}  and ${req.query.age}`})
})






app.listen(PORT, ()=> console.log(`Server is running ✨`));