const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const schemaProducto = new Schema({
    Nameproducto : {type: String, required:true },
    descripcion:{ type: String, required: true},
    costo : { type: Number, required: true },    
    estado : { type: String, required: true}

},{
    timestamps: true
});

const Products = model('Products', schemaProducto)
module.exports = Products;