class Tabelas {
  init(connection) {
    this.connection = connection;
    this.criarTabelaUsuarios();
  }

  criarTabelaUsuarios() {
    const sql = `CREATE TABLE IF NOT EXISTS usuarios (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      data_cadastro DATE,
      nome VARCHAR(255),
      email VARCHAR(255) NOT NULL UNIQUE,
      senha_aleatoria VARCHAR(255) NOT NULL,
      idade INT,
      status ENUM("ativo","inativo","cancelado") DEFAULT "inativo"
    );`
    this.connection.query(sql, (err) =>
      {
        if (err) {
          console.log('Erro ao criar tabela usuarios');
          console.log(err);
          return
        }
        console.log('Tabela usuarios criada com sucesso');
      });
  }
}

module.exports = new Tabelas();