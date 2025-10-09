# CRUD-Basic

Um projeto backend simples para gerenciar usuários com operações de **Create, Read, Update e Delete (CRUD)**.

---

## 🛠️ Sobre o Projeto

O **CRUD-Basic** foi desenvolvido para ilustrar os fundamentos de uma API REST organizada e modular em Node.js. É ideal para quem está aprendendo backend, arquitetura de APIs, e boas práticas de manipulação de dados.

O principal foco é o gerenciamento de usuários, com atributos como nome, email, senha (criptografada), idade e status.

---

## 📂 Principais Funcionalidades

- Criar um usuário  
- Listar todos os usuários  
- Obter usuário por ID  
- Atualizar dados de um usuário  
- Deletar usuário  
- Validação simples de dados  
- Senha armazenada de forma segura (criptografia)  

---

## 📁 Organização do Código

- **crud-controllers/** – código das controllers, com lógica de requisições  
- **crud-infrastructure/** – conexão com banco de dados, scripts de criação de tabelas  
- **crud-models/** – definição dos modelos/entidades (usuário)  
- **crud-routes/** – rotas da API  
- **index.js** – ponto de entrada da aplicação  
- **tools.js** – utilitários comuns  
- **package.json** / **.gitignore** — configurações do projeto  

---

## 🚀 Como Executar Localmente

1. Clone o repositório  
   ```bash
   git clone https://github.com/art1-code/crud-basic.git
   cd crud-basic
