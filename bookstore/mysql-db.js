const mysql = require('mysql');
const conn = mysql.createConnection({
host:'127.0.0.1',
user:'root',
password:'password',
database:'bookinfo'
});
conn.connect((err) =>{
  if(err) throw err;
  console.log('Connection established')
})

module.exports = conn ;
