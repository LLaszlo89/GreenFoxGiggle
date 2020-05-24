const db = require('./app');

const db_table = 'categories';
const db_table2 = 'posts';
let listOFNames = ['Pisti','kata','juci','lala'];

db.queryAll(db_table);

db.addRow( db_table ,'anya');

db.addMultipleRows(db_table , listOFNames)

db.update(db_table ,'name' , 'kutya' , 7 )

db.deleteRecord(db_table, 6);


/*         !!!!!!!!!!! db.DELETE_ALL_DATA_FROM_TABLE(db_table)  !!!!!!!!!!        */ 
