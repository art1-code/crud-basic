const express = require('express');
const app = express();
const port = 3000;
const router = require('./crud-routes');
const connection = require('./crud-Infrastructure/connection');
const tabelas = require('./crud-Infrastructure/table'); 

tabelas.init(connection);

app.use(express.json());

router(app);

app.listen(port, (error) => {
  if (error) {
    console.log(`Deu ruim no http://localhost:${port} com esse erro: ${error}`);
    return;
  } 
  console.log(`Rodou show no http://localhost:${port}`);

});

