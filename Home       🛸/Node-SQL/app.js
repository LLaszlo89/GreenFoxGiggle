let mysql = require('mysql');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'articles_db',
});

conn.connect((err) => {
 if (err) throw err;
 console.log('Connection established');
});

let dataTo = {  author: "Lehel L Laszlo",
title: "new Life is created", body:"the story of my life"}

/* conn.query('insert into articles SET ? ' , dataTo , (err , res) =>{
  if (err) throw err;
  console.log(res.insertId)
})
 */
/* let ids = 2;

conn.query('select * from articles Where id = ?', ids , (err , rows) =>{
  if (err) throw err;
  console.log(rows)
}) */
let num = 3;

conn.query(
  'DELETE FROM articles Where id = ?', num ,
  (err, result) => {
    if (err) throw err;
    console.log( result);
    console.log(`Changed ${result.changedRows} row(s)`);
  }
);