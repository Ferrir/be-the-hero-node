const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');



const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ong', OngController.index);

routes.get('/ong', OngController.index);
routes.post('/ong', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incident', IncidentController.index);
routes.post('/incident', IncidentController.create);
routes.delete('/incident/:id', IncidentController.delete);

module.exports = routes;