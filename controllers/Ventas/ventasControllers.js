const ventasController ={}
const Ventas = require('../../models/Ventas/ventasModels')

ventasController.obtener = async(req, res) =>{
    try{
        let user = await Ventas.find();
    res.send(ventas)
    }catch (err){
        res.send(err)
    }
}

ventasController.crear = async(req, res) =>{
    try {            const{
                cliente,
                documentoCliente,
                vendedor,
                valorTotal,
                fechaVenta,
                estado

            } = req.body;

            const ventas = Ventas({
                cliente,
                documentoCliente,
                vendedor,
                valorTotal,
                fechaVenta,
                estado
            });

            const ventasSave = await ventas.save();
            res.status(201).send({ventasSave})

    } catch (error) {
        res.status(500).send({message: error.message})
        
}

}

ventasController.edit = async (req, res) =>{
    let ventasId = req.params.id;
    let data = req.body;
    let ventasUpdate = await Ventas.findByIdAndUpdate(ventasId, data, (err, Prod)=>{
        if(err) res.status(500).send({message: `error al actualizar la Venta ${err}`});

        res.status(200).send({ ventas: Prod })
    })

    
}

ventasController.delete = async(req, res)=>{
    let ventasId = req.params.id
    let ventasDelete =  await Ventas.findById(ventasId, (err, ventas)=>{
        if(err) res.status(500).send({message: `error al borrar la Venta ${err}`});

        ventasSave.remove(err =>{
            if(err) res.status(500).send({message: `error al borrar la Venta ${err}`});
            res.status(200).send({message: 'Venta eliminda'})
        })

    })
}

module.exports = ventasController;
