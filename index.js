const express = require('express');
const app = express();
const port = 3000;

app.listen(port, (error) => {
  if (error) {
    console.log(`Deu ruim no http://localhost:${port} com esse erro: ${error}`);
  } else {
    console.log(`Rodou show no http://localhost:${port}`);
  }
});

app.get('/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send(`Hello ${nome}`);
}); 