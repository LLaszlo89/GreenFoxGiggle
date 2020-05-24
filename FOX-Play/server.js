'use strict'
const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT || 3000;
const path=require('path')
const cors = require("cors")


const conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"password",
  database:"fox_play"
})
 conn.connect((err)=>{
   if(err){
     throw err
   } else{
     console.log("Connection to database is established")
   }
 })


 app.use('/', express.static(path.join(__dirname, 'public')))
 app.use(express.json())
 app.use(cors())


const mm = require('music-metadata');
const util = require('util');
 
mm.parseFile("./public/assets/Free love.mp3")
  .then( metadata => {
    console.log(util.inspect(metadata, { showHidden: false, depth: null }));
  })
  .catch( err => {
    console.error(err.message);
  }); 
 
 

app.get("/playlists", (req,res)=>{
  conn.query("Select * from playlists", (err,row)=>{
    if(err) throw err;
    res.json(row);   
  });
});

// only req.body.playlist is required from user
app.post("/playlists",(req,res)=>{
  let data = req.body
  console.log(data)
  conn.query(`INSERT INTO playlists SET ?`, data, (err, res) => {
    if(err) throw err;
    console.log('Last insert ID:', res.insertId);
  });
  res.json({message: `New playlist successfully created`})
});

app.delete("/playlists/:id", (req,res)=>{
  let id = req.params.id;
  console.log(id)
    conn.query(`DELETE FROM playlists WHERE id = ?`, [id], (err, result) => {
        if (err) throw err;
        console.log(`Deleted ${result.affectedRows} row(s)`);
      }
    );
    res.json({message:"Playlists is deleted"})
});




app.get("/playlist-tracks",(req,res)=>{
  res.json({mssg:"ok"})
})

app.get("/playlist-tracks/:playlist_id",(req,res)=>{
  let id= req.params.playlist_id;
  
  res.json({msg: id})
 /*  if(id){
    conn.query("Select * from  ", (err,row)=>{
      if(err) throw err;
      res.json(row);   
    });
  }else{
// res.sendFile("/") send files from the root folder
  } */

})
app.post("/playlist-tracks/:playlist_id",(req,res)=>{
  let id= req.params.id
 
  
/*   conn.query(`INSERT INTO tracks SET ?`, data, (err, res) => {
    if(err) throw err;
    console.log('Last insert ID:', res.insertId);
  });
  res.json({message: `New playlist successfully created`}) */
})




app.delete("/playlist-tracks/:playlist_id/:track_id",(req,res)=>{
  let playlist_id= req.params.playlist_id;
  let track_id= req.params.track_id;
if(!playlist_id || !track_id ){
  res.json({message:"Something is missing please provide it"})

}else if (playlist_id.system === 1){
  res.json({message:"This song can not be deleted"})

} else{
  res.json({message:"All done!"})

}
})

app.listen(PORT, ()=>{
  console.log(`Server is running✨ ${PORT}`)
})