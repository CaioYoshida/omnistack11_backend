const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// session routes
routes.post('/sessions', SessionController.create);

// ong routes
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// profile routes
routes.get('/profile', ProfileController.index);

// incident routes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;