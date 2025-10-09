const { Router } = require('express');
const router = Router();
const usuarioController = require('../crud-controllers/usuarioController');

// rota get 
router.get('/usuarios', (req, res) => {
  const listarUsuarios = usuarioController.buscarUsuarios();
  listarUsuarios.then((usuarios) => {
    res.json(usuarios);
  }).catch((err) => {
    res.status(400).send(`'Erro ao buscar usuarios ${err}`);
  });
});


// rota get passando id como parametro
router.get('/usuario/:id', (req, res) => {
  const {id} = req.params;
  const buscarUsuario = usuarioController.buscaUsuarioPorId(id);
  buscarUsuario.then((usuario) => {
    res.json(usuario);
  }).catch((err) => {
    res.status(400).send(`'Erro ao buscar usuario com id ${id} - ${err}`);
  });
});


// rota post
router.post('/usuarios', (req, res) => {
  const novoUsuario = req.body;
  res.send( usuarioController.criarUsuario(novoUsuario)); 
});

// rota put passing id as parameter
router.put('/usuario/:id', (req, res) => {
  const {id} = req.params;
  res.send(usuarioController.atualizarUsuario(id, req.body));
});   

// rota delete passing id as parameter
router.delete('/usuario/:id', (req, res) => {
  const {id} = req.params;
  res.send(usuarioController.deletarUsuario(id));
});

module.exports = router;