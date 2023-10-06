const routes = require('express').Router();
//const l1Controller = require('../controllers/index');
//const l2Contacts = require('./contacts')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// routes.get('/', l1Controller.matiasRoute);
// routes.get('/linda', l1Controller.lindaRoute);
// routes.get('/virginia', l1Controller.virginiaRoute);
// routes.get('/contacts', l2Contacts.getAllContacts);
// routes.get('/contacts/:id', l2Contacts.getContactById);

routes.use('/contacts', require('./contacts'));
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = routes;
