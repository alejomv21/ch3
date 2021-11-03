const productRoute = require('express').Router();
const productController = require('../../controllers/Productos/productController')

productRoute.get('/', productController.obtener);
productRoute.post('/', productController.crear);
productRoute.delete('/:id', productController.delete);
productRoute.patch('/:id', productController.edit)
productRoute.get('/:id', productController.obtenerOne)


module.exports= productRoute;