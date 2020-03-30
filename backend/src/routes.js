const express = require('express');// usaremos para tratar caminhos, rotas, url, etc

const connection = require('./database/connection'); // importando a conexão com o banco de dados
const routes = express.Router(); // modularizando nossas rotas para podermos exportá-las

const OngController = require('./controllers/OngController'); // importando nossa controller de Ongs
const IncidentController = require('./controllers/IncidentController'); // importando nossa controller de Incidents
const ProfileController = require('./controllers/ProfileController'); // importando nossa controller de Profile
const SessionsController = require('./controllers/SessionController'); // importando nossa controller de Sessões

// rota usada para listar as ongs inseridas
routes.get('/ongs', OngController.list); // usando o método list da controller OngController para agir na rota /ongs com método get

// rota usada para inserir uma nova ong
routes.post('/ongs', OngController.create); // usando o método create da controller OngController para a gir na rota /ongs com método post


routes.get('/incidents', IncidentController.list);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.list);

routes.post('/sessions', SessionsController.create);

module.exports = routes; // Exportando routes para que nosso app.js possa ter acesso