const { Router } = require('express');
const router = Router();
const usuarioController = require('../crud-controllers/usuarioController');

// rota get 
router.get('/usuarios', (req, res) => {
  res.send(usuarioController.buscarUsuarios());
});

// rota post
router.post('/usuarios', (req, res) => {
  res.send(usuarioController.criarUsuario);
});

// rota put passing id as parameter
router.put('/usuario:id', (req, res) => {
  const {id} = req.params;
  res.send(usuarioController.atualizarUsuario(id));
});   

// rota delete passing id as parameter
router.delete('/usuario:id', (req, res) => {
  const {id} = req.params;
  res.send(usuarioController.deletarUsuario(id));
});

module.exports = router;