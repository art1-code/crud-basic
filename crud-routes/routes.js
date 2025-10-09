const { Router } = require('express');
const router = Router();

// rota get 
router.get('/usuarios', (req, res) => {
  res.send(`GET request received for /usuarios`);
  console.log('cheguei na rota get /usuarios');
});

// rota post
router.post('/usuarios', (req, res) => { 
  res.send('POST request received');
  console.log('cheguei na rota post /');
});

// rota put passing id as parameter
router.put('/usuario:id', (req, res) => {
  const {id} = req.params;
  res.send(`PUT request received to update user ${id}`);
  console.log('cheguei na rota put /');
});   

// rota delete passing id as parameter
router.delete('/usuario:id', (req, res) => {
  const {id} = req.params;
  res.send(`DELETE request received to delete user ${id}`);
  console.log(`cheguei na rota delete / para deletar um usuario com id ${id}`);
});

module.exports = router;