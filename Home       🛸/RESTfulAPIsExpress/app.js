const express =require('express');
const app = express();
const PORT = process.env.PORT || 3000;  
const Joi = require('joi') ;  // is a validator witch we set up to our need  npm i joi    first a schema 
app.use(express.json()); // Need this middleware  for POST  req.body ...

let data=[
  { id:1 , course:'course1'} ,
  { id:2 , course:'course2'} ,
  { id:3 , course:'course3'}];
  
  
  app.get('/',(req ,res) =>{
    res.send('Hello');
  })
  
  // all courses
  
  app.get('/course',(req ,res) =>{
    res.send(data);
  })
  
  
  // find one item if not found send 404
  
  app.get('/course/:id',(req ,res) =>{
    const match = data.find(i => i.id === parseInt(req.params.id));
    if(!match) return res.status(404).send('id not found')  // if no value 
    res.send(match);
  }) 
  
  
 // use rout params for essential things 
  // http://localhost:3000/course/2009/11
  app.get('/course/:year/:month',(req ,res) =>{
    //res.send( req.params);          //{"year":"2009","month":"11"}

  })
   // use query sting params for nay optional thing
  // http://localhost:3000/course/valami/?sortBy=Lehel
  app.get('/course/valami',(req ,res) =>{
    res.send( req.query );          // {"sortBy":"Lehel"}   ? key = value
  })
  


   // POST add new data
  
  app.post('/course',(req ,res) =>{   
/* const schema = { name: Joi.string().min(3).required()}; // the input must be string min 3 char and is required!
const result = Joi.validate(req.body, schema)   // Joi returns a value or error obj. req.body needs to met schema requirements to pass
const { error } = Joi.validate(req.body, schema)  //  this is like    result.error  
if(error) {                              // if error than the input did not met a schema 
  res.status(400).send(error.details[0].message) // we send back a user friendly msg what they missed
  return;
} */  

const { error } = validateCourse(req.body);
if(error) return res.status(400).send(error.details[0].message);

const newData = { id: data.length +1 , name: req.body.name}; // database gives id  we generate here one
data.push(newData);
res.send(newData);
})

// to save code duplication  make func

 function  validateCourse(input) {    // input = req.body.name
  const schema = { name: Joi.string().min(3).required()};
return Joi.validate( input , schema)    //
 } ;


// PUT update data
 
app.put('/course/:id',(req ,res) =>{
  const match = data.find(i => i.id === parseInt(req.params.id));
    if(!match) return res.status(404).send('id not found')  // if no value 
  

  const { error } = validateCourse( req. body);  // object destructuring error is the property of the target obj
  if( error )                             // we're  only looking for one property act. here if error is true ...
  return res.status(400).send(error.details[0].message);     // we stop the flow here not allowing the replacement
  
  match.name = req.body.name;
  res.send(match);
 });


 app.delete('/course/:id',(req ,res) =>{
  const match = data.find(i => i.id === parseInt(req.params.id));
  if(!match) return res.status(404).send('id not found')


const index = data.indexOf(match);
data.splice(index, 1)
res.send(match)
 })

app.listen(PORT,()=>{ console.log('Server is running')})