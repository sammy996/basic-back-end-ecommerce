const express = require('express');
const ProductController = require('./controllers/ProductController');
const ProfileController = require('./controllers/ProfileController');
const AddressController = require('./controllers/AddressController');
const routes = express.Router();

routes.get('/product', ProductController.index);
routes.post('/product', ProductController.create);
routes.delete('/product/:id', ProductController.delete);

routes.post('/profile/address', AddressController.create);
routes.get('/profile/address', AddressController.index);
routes.delete('/profile/address/:id', AddressController.delete);

routes.post('/profile', ProfileController.create);






module.exports = routes;