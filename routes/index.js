const routes = require('express').Router();
const l1Controller = require('../controllers/index');
 
routes.get('/', l1Controller.matiasRoute);
routes.get('/linda', l1Controller.lindaRoute);
routes.get('/virginia', l1Controller.virginiaRoute);

module.exports = routes
