const express = require('express');
const app = express();
const port = 3000;
const router = require('./crudRoutes');

router(app);

app.listen(port, (error) => {
  if (error) {
    console.log(`Deu ruim no http://localhost:${port} com esse erro: ${error}`);
    return;
  } 
  console.log(`Rodou show no http://localhost:${port}`);

});
