CRUD-Basic (Usuários)

Projeto de CRUD de usuários desenvolvido em Node.js, organizado de forma modular, seguindo boas práticas de desenvolvimento e arquitetura de software.

🧩 Tecnologias utilizadas

Node.js – Runtime JavaScript do lado do servidor

Express.js – Framework web para criação de APIs

MySQL / MariaDB – Banco de dados relacional

bcrypt – Criptografia de senhas

nodemon – Hot reload durante desenvolvimento

📂 Estrutura do projeto
crud-basic/
├─ crud-controllers/       # Lógica do negócio (Controllers)
│  └─ usuarioController.js
├─ crud-infrastructure/    # Infraestrutura do projeto
│  ├─ connection.js        # Conexão com MySQL
│  └─ table.js             # Script para criação de tabelas
├─ crud-models/            # Models (representação de dados)
│  └─ usuarioModel.js
├─ crud-routes/            # Rotas da aplicação
│  ├─ index.js             # Arquivo principal de rotas
│  └─ routes.js            # Definição das rotas
├─ tools.js                # Funções utilitárias
├─ index.js                # Entry point do servidor
├─ package.json
├─ package-lock.json
└─ .gitignore

⚡ Objetivo do projeto

Desenvolver um CRUD completo de usuários, seguindo arquitetura MVC (Model-View-Controller)

Garantir segurança no armazenamento de senhas usando bcrypt

Estruturar o projeto de forma modular, facilitando manutenção e escalabilidade

Praticar boas práticas de versionamento com Git e documentação de código

🚀 Funcionalidades

Criar usuário → com nome, email, senha criptografada, idade e status

Listar usuários → visualizar todos os usuários cadastrados

Atualizar usuário → alterar informações específicas

Deletar usuário → remover usuário do banco

Validação básica → campos obrigatórios e consistência de dados

📦 Como rodar o projeto

Clonar o repositório:

git clone https://github.com/seuusuario/crud-basic.git
cd crud-basic


Instalar dependências:

npm install


Criar o banco de dados e tabela:

CREATE DATABASE crud_basic;

USE crud_basic;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  data_cadastro DATE,
  nome VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  senha_aleatoria VARCHAR(255) NOT NULL,
  idade INT,
  status ENUM("ativo","inativo","cancelado") DEFAULT "inativo"
);


Configurar conexão no crud-infrastructure/connection.js com usuário e senha do MySQL.

Rodar o servidor em modo desenvolvimento:

npx nodemon index.js


Acessar http://localhost:3000 e testar rotas via Postman ou Insomnia.

🔹 Estrutura das rotas

POST /usuarios → cria um novo usuário

GET /usuarios → lista todos os usuários

GET /usuarios/:id → busca um usuário pelo ID

PUT /usuarios/:id → atualiza um usuário

DELETE /usuarios/:id → deleta um usuário

🔑 Boas práticas aplicadas

MVC modularizado → Controllers, Models e Infrastructure separados

Criptografia de senhas → usando bcrypt, nunca armazenando texto puro

Async/Await → tratamento assíncrono para operações de banco de dados

Middleware JSON → leitura segura de requisições JSON

.gitignore → evita envio de node_modules e arquivos sensíveis para o Git

💡 Observações

Projeto voltado para aprendizado e prática de desenvolvimento backend

Estrutura pronta para escala futura, podendo adicionar autenticação, JWT, e testes unitários
