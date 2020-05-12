'use strict'

const app = require('./server/app');
let port = process.env.PORT || 3001;

app.listen(port, ()=>{
  console.log('Server is running on :'+ port)
})