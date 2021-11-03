const userController ={}
const User = require('../../models/User/userModels')

userController.obtener = async(req, res) =>{
    try{
        let user = await User.find();
    res.send(user)
    }catch (err){
        res.send(err)
    }
}

userController.crear = async(req, res) =>{
    try {            const{
                nombre,
                apellido,
                tipoDocumento,
                documento,
                rol,
                estado

            } = req.body;

            const user = User({
                nombre,
                apellido,
                tipoDocumento,
                documento,
                rol,
                estado
            });

            const userSave = await user.save();
            res.status(201).send({userSave})

    } catch (error) {
        res.status(500).send({message: error.message})
        
}

}

userController.edit = async (req, res) =>{
    let userId = req.params.id;
    let data = req.body;
    let userUpdate = await User.findByIdAndUpdate(userId, data, (err, Prod)=>{
        if(err) res.status(500).send({message: `error al actualizar usuario ${err}`});

        res.status(200).send({ user: Prod })
    })

    
}

userController.delete = async(req, res)=>{
    let userId = req.params.id
    let userDelete =  await User.findById(userId, (err, user)=>{
        if(err) res.status(500).send({message: `error al borrar el usuario ${err}`});

        user.remove(err =>{
            if(err) res.status(500).send({message: `error al borrar el usuario ${err}`});
            res.status(200).send({message: 'Usuario elimindado'})
        })

    })
}

module.exports = userController;
