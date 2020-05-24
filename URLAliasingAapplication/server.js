const express = require('express');
const app = express();
const PORT = 3100;

app.use(express.join())


app.use(express.static('public'))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.post('/api/links',(req,res)=>{
  res.send()


});



app.listen(PORT, ()=>{
  console.log(`Server is running and port: ✨${PORT}`)
});

