const routes = require('express').Router();
const l2Contacts = require('../controllers')

routes.get('/', l2Contacts.getAllContacts);
routes.get('/:id', l2Contacts.getContactById);


module.exports = routes
