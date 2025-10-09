const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Arthurhero12',
  database: 'controle_usuarios',
});

module.exports = connection;