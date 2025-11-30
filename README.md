# Mini API REST Docs

## 1. Introduction
This API is the final exercise of the nodejs class.

## 2. Package Description and Command Table
### Package Description
|Command 				         | Description
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|npm init -y					 |Inicia un proyecto de node al añadir el archivo packacage.json, el cual tiene la configuracion basica y registra cada nuevo paquete|
|npm install bcrypt			     | A simple tool to generate and verify bcrypt hashes. We use this library to encrypt information.|
|npm cors						 |CORS library is used to control where the request to the backend come from (the same application).|
|npm install dotenv				 |Dotenv elps load the variables from the .env document to process.env. This library do so using a alogirthm more secure than the regular node default option.|
|npm install express             | Express simplifies the process of building server-side applications and APIs by providing a robust set of features for handling HTTP requests, routing, middleware, and more.|
|npm install jsonwebtoken        |The jsonwebtoken npm package is a popular library for working with JWTs in Node. js. It provides a set of methods for creating, signing, and verifying JWTs.|
|npm multer                      |Multer is an npm package commonly used in Node. js applications for handling multipart/form data, particularly for file uploads.|
|npm install mysql2              |The mysql2 ↗ package is a modern MySQL driver for Node. js with better performance and built-in Promise support. |
|npm install --save-dev nodemon  |Nodemon is a command-line tool that helps with the speedy development of Node. js applications. It monitors your project directory and automatically restarts your node application when it detects any changes.|
|npm zod                         |Zod is a TypeScript-first schema declaration and validation library designed to provide a type-safe way to validate JavaScript| objects. It helps developers define the shape of expected data and autmatically generate TypeScript types from these schemas, ensuring both compile-time and runtime validation.|

## 3. Endpoint Description and Examples
### Auth End Points
|Method| Endpoint | Body Example |
|--|------ | ------ |
|POST|http://localhost:3002/api/v1/auth/login   | Logs any existing user ing by providing **passwrd" and **email"  |
|POST|http://localhost:3002/api/v1/auth/logout   | Logs any existing authorized user out (you must be first logged in to access or create anything in this API  |

### User End Points
|Method| Endpoint | Body Example |
|--|------ | ------ |
|GET|http://localhost:3002/api/v1/users/   | Retrieves all users   |
|GET|http://localhost:3002/api/v1/user/:id   | Retrieves a user by id   |
|POST|http://localhost:3002/api/v1/users/       |CREAT a new USER you may send te new use info by sending form data with this field **"email"**, **"passwrd"**, **"confirmPasswrd"** and **"rol"**.|
|PUT|http://localhost:3002/api/v1/users/:id|Update any user info by providing any use **field** and **field value.** in a form-value format or its equivalent in json format { "field":"name", "value":"Maria De Aguilar"}|
|DELETE|http://localhost:3002/api/v1/users/:id|Providde te user id to delete any info saved about that user|

### Task End Points
|Method| Endpoint | Body Example |
|--|------ | ------ |
|GET|http://localhost:3002/api/v1/tasks/   | Retrieves all users   |
|GET|http://localhost:3002/api/v1/tasks/:id   | Retrieves a user by id   |
|POST|http://localhost:3002/api/v1/tasks/       |Create a new USER you may send te new use info by sending form data with this field **"title"**, **"id_user"** and **"assigned_to"**|
|PUT|http://localhost:3002/api/v1/tasks/:id|Update any task info by providing  **"field"**, **"field value"**, **"rol"** and **"user_id"** in a form-value format or its equivalent in json format{"field":"title","value":"tarea_2", "rol":"user",     "user_id": 1}|
|DELETE|http://localhost:3002/api/v1/users/:id|Providde the task id to delete any info saved about that task|





