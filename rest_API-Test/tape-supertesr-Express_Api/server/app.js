'use strict'
// create end point with some data 

const express = require('express');
const app = express();

const users = ["John","Betty","Anitta"];

app.get('/api/users',(req , res)=>{
  res.json(users)
});

// DO NOT listen here! Otherwise test not working !!!
// supertest takes an obj as parameter
module.exports= app;