const clienteRoute = require('express').Router();
const clienteController = require('../../controllers/Cliente/clienteControllers')

clienteRoute.get('/', clienteController.obtener);
clienteRoute.post('/', clienteController.crear);
clienteRoute.delete('/:id', clienteController.delete);
clienteRoute.patch('/:id', clienteController.edit)


module.exports= clienteRoute;