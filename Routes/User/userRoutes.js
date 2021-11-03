const userRoute = require('express').Router();
const userController = require('../../controllers/User/userControllers')

userRoute.get('/', userController.obtener);
userRoute.post('/', userController.crear);
userRoute.delete('/:id', userController.delete);
userRoute.patch('/:id', userController.edit)


module.exports= userRoute;