'use strict'

const mysql = require('mysql');
require('dotenv').config()
const databaseToUse = 'reddit'

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user:process.env.DB_USER,
  password:process.env.DB_PASS,
  database: databaseToUse
});

conn.connect((err)=>{
  if(err) throw err;
  console.log(`Connection established with database: ${databaseToUse} `)
});

module.exports = conn ;