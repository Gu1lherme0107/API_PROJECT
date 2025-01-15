# API_PROJECT
This is my first API development project.

# Code Description

This code implements a simple RESTful API using the **Express** framework and **Prisma** ORM to manage data in a database.

## API Features

1. **Create User (POST /user)**  
   Creates a new user in the database with the data provided in the request body (`email`, `name`, `age`).

2. **List Users (GET /user)**  
   Retrieves and returns all users stored in the database.

3. **Update User (PUT /user/:id)**  
   Updates the information of a specific user based on the `id` passed as a URL parameter. The updated data (`email`, `name`, `age`) must be sent in the request body.

4. **Delete User (DELETE /user/:id)**  
   Deletes a specific user from the database based on the `id` passed as a URL parameter.

## Error Handling

- Each route includes error handling to prevent unexpected failures. 
- In case of an error, a message and details are returned to the client with an appropriate HTTP status.

## Server Configuration

- The server runs on port **3000**, and a message is displayed in the console to confirm it is running.

## Future Development

I plan to create a simple **ReactJS** application to consume this API. This application will allow users to interact with the data visually and intuitively, performing operations such as:
- Creating new users.
- Viewing the list of users.
- Updating information for existing users.
- Deleting users.

This integration will provide a user-friendly interface for managing the data handled by the API.

---









# Descrição do Código

Este código implementa uma API RESTful simples utilizando o framework **Express** e o ORM **Prisma** para manipular dados em um banco de dados.

## Funcionalidades da API

1. **Criar Usuário (POST /user)**  
   Cria um novo usuário no banco de dados com os dados enviados no corpo da requisição (`email`, `name`, `age`).

2. **Listar Usuários (GET /user)**  
   Recupera e retorna todos os usuários armazenados no banco de dados.

3. **Atualizar Usuário (PUT /user/:id)**  
   Atualiza as informações de um usuário específico com base no `id` passado como parâmetro na URL. Os novos dados (`email`, `name`, `age`) devem ser enviados no corpo da requisição.

4. **Excluir Usuário (DELETE /user/:id)**  
   Remove um usuário específico do banco de dados com base no `id` passado como parâmetro na URL.

## Tratamento de Erros

- Em cada rota, erros são capturados e tratados para evitar falhas inesperadas. 
- Uma mensagem de erro e detalhes são retornados ao cliente em caso de falha, com um status HTTP apropriado.

## Configuração do Servidor

- O servidor é inicializado na porta **3000**, e uma mensagem é exibida no console confirmando que ele está em execução.

## Futuro Desenvolvimento

vou criar uma aplicação em **ReactJS** para consumir esta API. Essa aplicação permitirá que os usuários interajam com os dados de forma visual e intuitiva, realizando operações como:
- Criar novos usuários.
- Visualizar a lista de usuários.
- Atualizar informações de usuários existentes.
- Deletar usuários.

Essa integração fornecerá uma interface amigável para a manipulação dos dados gerenciados pela API.

---
