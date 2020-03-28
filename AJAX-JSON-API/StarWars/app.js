let express = require('express');
let app = express();
app.set("view engine", "ejs")

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index2.html")

  res.send("Helllllo");
});

 app.get("/profile/:id", function(req, res){
   res.render('tepl' , { person:req.params.id});

  res.send(req.params.id)
})
 app.listen(3000);