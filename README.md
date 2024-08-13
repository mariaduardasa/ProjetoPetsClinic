# Projeto Pets Clinic
## Instruções para Executar o Projeto de API Usando Node.js:
## 1_ Instale as dependências body-parser, express, sequelize e sqlite3 no terminal do VS Code:
```bash 
npm install express body-parser sequelize sqlite3
```
## 2_ Instale a dependência de desenvolvimento nodemon no terminal do VS Code:
```bash 
npm install -D nodemon
```
## 3_ Execute o comando "npm run dev" no terminal do VS Code para iniciar o projeto:
```bash 
npm run dev
```

## Endpoints para testar a API:
## Listar Tutores e seus Pets: GET /tutors/list
```bash 
localhost:3000/tutors/list
```
## Criar um Novo Tutor: POST /tutors/add
```bash 
localhost:3000/tutors/add
```
## Criar um Novo Pet: POST /pets/add
```bash 
localhost:3000/pets/add
```
## Editar um Tutor: PUT /tutors/edit/:id
```bash 
localhost:3000/tutors/edit/:id
```
## Editar um Pet: PUT /pets/edit/:id
```bash 
localhost:3000/pets/edit/:id
```
## Deletar um Pet: DELETE /pets/delete/:id
```bash 
localhost:3000/pets/delete/:id
```
## Deletar um Tutor e Seus Pets: DELETE /tutors/delete/:id
```bash 
localhost:3000/tutors/delete/:id
```

