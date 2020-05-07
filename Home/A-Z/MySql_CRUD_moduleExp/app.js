// requirements 
const mysql = require('mysql');
require('dotenv').config();
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'reddit'
});
// db connection
conn.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


const queryAll = ( table ) => {
  conn.query(`SELECT * FROM ${table}`, (err,rows) => {
    if(err) throw err;
    console.log('Data received from Db:');
    console.log(rows);
    return rows
  });
};



const addRow =( table , field, name )=> {

  const toInsert = { title : 'www.kjbackbc.hhu'};
  conn.query(`INSERT INTO ${table} SET ?`, toInsert, (err, res) => {
    if(err) throw err;
    
    console.log('Last insert ID:', res.insertId);
  });
  
}
async function addMultipleRows( table , arrOfNames ){
  const toInsert = await arrOfNames;
 console.log(toInsert)
 toInsert.forEach(i => {
  conn.query(`INSERT INTO ${table} SET ?`, {name:i} , (err, res) => {
    if(err) throw err;
    
    console.log('Last insert ID:', res.insertId);
});
 });
}

const update =(table, column, name , id )=>{
  conn.query(
    `UPDATE ${table} SET ${column} = ? WHERE ID = ?`,[`${name}` , id ],(err, result) => {
      if (err) throw err;
      console.log(`Changed ${result.changedRows} row(s)`);
    }
  );
}


const deleteRecord =(table , id )=>{
  conn.query(
    `DELETE FROM ${table} WHERE id = ?`, [id], (err, result) => {
      if (err) throw err;
  
      console.log(`Deleted ${result.affectedRows} row(s)`);
    }
  );

}

const DELETE_ALL_DATA_FROM_TABLE = (table) => {
  conn.query(`TRUNCATE TABLE ${table};`)
  
}


module.exports = {
  queryAll : queryAll,
  addRow:addRow,
  addMultipleRows:addMultipleRows,
  update:update,
  deleteRecord:deleteRecord,

  DELETE_ALL_DATA_FROM_TABLE:DELETE_ALL_DATA_FROM_TABLE
}
