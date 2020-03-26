/**
 * npm start
 * aula 2: 31min
 */

 /**
 * Rota: http://localhost:3333/users
 * Recurso: /users
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação do backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 *     Ex: ?page=2&name=Guilherme
 * Route Params: Parâmetros utilizados para identificar recursos
 *     Ex: /users/:id
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *     Ex: const params = request.query; ou const params = request.params;
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
*/

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);