const productController ={}
const Products = require('../../models/Product/produtcsModels')

productController.obtener = async(req, res) =>{
    try{
        let products = await Products.find();
    res.send(products)
    }catch (err){
        res.send(err)
    }
}

productController.obtenerOne = async(req, res) =>{
    try {
        let productId = req.params.id;
        let productOne = await Products.findById(productId);
        res.status(200).send(productOne)
    } catch (err) {
        res.status(500).send({message: error.message})
    }
}

productController.crear = async(req, res) =>{
    try {            const{
                Nameproducto,
                descripcion,
                costo,
                estado

            } = req.body;

            const products = Products({
                Nameproducto,
                descripcion,
                costo,
                estado
            });

            const productsSave = await products.save();
            res.status(201).send({productsSave})

    } catch (error) {
        res.status(500).send({message: error.message})
        
}

}

productController.edit = async (req, res) =>{
    let productId = req.params.id;
    let data = req.body;
    let productUpdate = await Products.findByIdAndUpdate(productId, data, (err, Prod)=>{
        if(err) res.status(500).send({message: `error al actualizar producto ${err}`});

        res.status(200).send({ product: Prod })
    })

    
}

productController.delete = async(req, res)=>{
    let productId = req.params.id
    let productDelete =  await Products.findById(productId, (err, product)=>{
        if(err) res.status(500).send({message: `error al borrar product ${err}`});

        product.remove(err =>{
            if(err) res.status(500).send({message: `error al borrar product ${err}`});
            res.status(200).send({message: 'Producto elimindado'})
        })

    })
}


module.exports = productController;