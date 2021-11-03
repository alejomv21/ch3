const clienteController ={}
const Cliente = require('../../models/Cliente/clienteModels')

clienteController.obtener = async(req, res) =>{
    try{
        let user = await Cliente.find();
    res.send(user)
    }catch (err){
        res.send(err)
    }
}

clienteController.crear = async(req, res) =>{
    try {            const{
                tipoDocumento,
                documento,
                nombre,
                apellido

            } = req.body;

            const cliente = Cliente({
                tipoDocumento,
                documento,
                nombre,
                apellido
            });

            const clienteSave = await cliente.save();
            res.status(201).send({clienteSave})

    } catch (error) {
        res.status(500).send({message: error.message})
        
}

}

clienteController.edit = async (req, res) =>{
    let clienteId = req.params.id;
    let data = req.body;
    let clienteUpdate = await Cliente.findByIdAndUpdate(clienteId, data, (err, Prod)=>{
        if(err) res.status(500).send({message: `error al actualizar el cliente ${err}`});

        res.status(200).send({ cliente: Prod })
    })

    
}

clienteController.delete = async(req, res)=>{
    let clienteId = req.params.id
    let clienteDelete =  await Cliente.findById(clienteId, (err, cliente)=>{
        if(err) res.status(500).send({message: `error al borrar el cliente ${err}`});

        cliente.remove(err =>{
            if(err) res.status(500).send({message: `error al borrar el cliente ${err}`});
            res.status(200).send({message: 'Cliente elimindado'})
        })

    })
}

module.exports = clienteController;
