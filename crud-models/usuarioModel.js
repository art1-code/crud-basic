const connection = require('../crud-Infrastructure/connection');

class UsuarioModel {
  listarUsuarios() {
    const sql = 'SELECT * FROM usuarios';
    return new Promise((resolve, reject) => {
      connection.query(sql, {}, (err, res) => {
      if (err) {
        console.log('Erro ao listar usuarios');
        console.log(err);
        reject(err);
      } 
      resolve(res);
      console.log('Usuarios listados com sucesso');
    })
    }) ;
  }

  listaUsuarioPorId(id) {
    const sql = `SELECT * FROM usuarios WHERE id=${id}`;
    return new Promise((resolve, reject) => {
      connection.query(sql, {}, (err, res) => {
      if (err) {
        console.log(`Erro ao buscar usuario com id ${id}`);
        console.log(err);
        reject(err);
      }
      resolve(res);
      console.log(`Usuario com id ${id} buscado com sucesso`);
    })
    }) ;
  }


  novoUsuario(usuario) {
    const sql = 'INSERT INTO usuarios SET ?';
    return new Promise((resolve, reject) => {
      connection.query(sql, usuario, (err, res) => {
      if (err) {
        console.log('Erro ao criar novo usuario');
        console.log(err);
        reject(err);
      } 
      resolve(res);
      console.log('Usuario criado com sucesso');
    })
    });
  }

  atualizarUsuario(id, usuario) {
    const sql = `UPDATE usuarios SET ? WHERE id=${id}`;
    return new Promise((resolve, reject) => {
      connection.query(sql, usuario, (err, res) => {
      if (err) {
        console.log(`Erro ao atualizar usuario com id ${id}`);
        console.log(err);
        reject(err);
      } 
      resolve(res);
      console.log(`Usuario com id ${id} atualizado com sucesso`);
    })
    });
  }

  deletarUsuario(id) {
    const sql = `DELETE FROM usuarios WHERE id=${id}`;
    return new Promise((resolve, reject) => {
    connection.query(sql, {}, (err, res) => {
      if (err) {
        console.log(`Erro ao deletar usuario com id ${id}`);
        console.log(err);
        reject(err);
      }
      resolve(res);
      console.log(`Usuario com id ${id} deletado com sucesso`);
    })
    });
  }
  
}

module.exports = new UsuarioModel();
