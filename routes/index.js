const routes = require('express').Router();
//const l1Controller = require('../controllers/index');
//const l2Contacts = require('./contacts')
 
// routes.get('/', l1Controller.matiasRoute);
// routes.get('/linda', l1Controller.lindaRoute);
// routes.get('/virginia', l1Controller.virginiaRoute);
// routes.get('/contacts', l2Contacts.getAllContacts);
// routes.get('/contacts/:id', l2Contacts.getContactById);

routes.use('/contacts', require('./contacts'))

module.exports = routes
