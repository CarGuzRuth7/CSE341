const routes = require('express').Router();
const contactsController = require('../controllers');

//GET routes
routes.get('/', contactsController.getAllContacts);
routes.get('/:id', contactsController.getContactById);

//POST routes
routes.post('/', contactsController.postNewContact);

//UPDATE routes
routes.put('/:id', contactsController.updateContact);

//DELETE routes
routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;
