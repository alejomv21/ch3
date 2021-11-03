const ventaRoute = require('express').Router();
const ventasController = require('../../controllers/Ventas/ventasControllers')

ventaRoute.get('/', ventasController.obtener);
ventaRoute.post('/', ventasController.crear);
ventaRoute.delete('/:id', ventasController.delete);
ventaRoute.patch('/:id', ventasController.edit)


module.exports= ventaRoute;