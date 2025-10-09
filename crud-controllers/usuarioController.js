class UsuarioController {

  buscarUsuarios() {
    // metodo usado para retornar todos os usuarios
    return(`cheguei na rota get /usuarios`);
  }

  criarUsuario() {
    // metodo usado para criar um novo usuario e retornar o usuario criado
    return('cheguei na rota post /');
  } 

  atualizarUsuario(id) {  
    // metodo usado para atualizar um usuario e retornar o usuario atualizado
    return(`cheguei na rota put / ${id}`);
  }

  deletarUsuario(id) { 
    // metodo usado para deletar um usuario e retornar uma mensagem de sucesso
    return(`cheguei na rota delete / para deletar um usuario com id ${id}`);
  }
  
}

module.exports = new UsuarioController();