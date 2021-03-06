const mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

con.connect((err) => {
  if (err) throw err;
  console.log('connected')
  con.query('CREATE DATABASE mydb', (err, result) => {
    if (err) throw err;
    console.log('Database created' + result)
  })
})