const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Arthurhero12',
  database: 'controle_usuarios',
});

connection.connect((err) => {
  if (err) {
    console.log('Erro ao conectar no banco de dados');
    console.log(err);
    return;
  }
  console.log('Conectado ao banco de dados com sucesso');
});

module.exports = connection;