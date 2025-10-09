const usuarioModel = require('../crud-models/usuarioModel');
const bcrypt = require('bcrypt');
const { criptografia } = require('../tools');

class UsuarioController {

  buscarUsuarios() {
    // metodo usado para retornar todos os usuarios
    const resposta = usuarioModel.listarUsuarios();
    return(resposta);
  }

  buscaUsuarioPorId(id) {
    // metodo usado para retornar um usuario pelo id
    const resposta = usuarioModel.listaUsuarioPorId(id);
    return(resposta);
  } 

  criarUsuario(novo) {
    // metodo usado para criar um novo usuario e retornar o usuario criado
    const { nome, email, senha_aleatoria, idade } = novo;

    const novoUser = usuarioModel.novoUsuario({
      data_cadastro: new Date(),
      nome: nome,
      email: email,
      senha_aleatoria: criptografia(senha_aleatoria),
      idade: idade,
      status: 'ativo',
    });

    return(novoUser);
  } 

  atualizarUsuario(id, body) {  
    // metodo usado para atualizar um usuario e retornar o usuario atualizado
    const { nome, email, senha_aleatoria, idade, status } = body;

    const atualizado = usuarioModel.atualizarUsuario(id, {
      data_cadastro: new Date(),
      nome: nome,
      email: email,
      senha_aleatoria: criptografia(senha_aleatoria),
      idade: idade,
      status: status,
    });
    return(atualizado);
  }

  deletarUsuario(id) { 
    // metodo usado para deletar um usuario e retornar uma mensagem de sucesso
    return(`cheguei na rota delete / para deletar um usuario com id ${id}`);
  }
  
}

module.exports = new UsuarioController();