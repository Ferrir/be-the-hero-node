const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ong', OngController.index);

routes.get('/ong', OngController.index);

routes.post('/ong', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
	    email: Joi.string().required().email(),
	    whatsapp: Joi.string().required().min(12).max(13),
	    city: Joi.string().required(),
	    uf: Joi.string().required().length(2)
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()        
}), ProfileController.index);

routes.get('/incident', celebrate({
    [Segments.QUERY]: Joi.object({
        page: Joi.number()
    }).unknown()        
}), IncidentController.index);
routes.post('/incident', IncidentController.create);
routes.delete('/incident/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()        
}),
IncidentController.delete);

module.exports = routes;