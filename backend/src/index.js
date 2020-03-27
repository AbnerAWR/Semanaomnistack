const express = require('express');
const cors = require ('cors');
const routes = require('./routes');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
/**
 * ROta / Recurso
 */

/**
 *  Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma infomrção no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
 */

/**
 * SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 */


 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  * 
  */




