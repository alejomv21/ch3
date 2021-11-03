const mongoose = require('mongoose')

const {Schema, model} = mongoose;

const schemaVentas = new Schema({
    cliente: {type: String, trim: true, required: true},
    docuemntoCliente: {type: Number, trim: true, required: true},
    vendedor: {type: String, trim: true, required: true},
    valorTotal: {type: String, trim: true, required: true},
    fechaVenta: {type: String, trim: true, required: true},
    estado: {type: String, trim: true, required: true}
},{
    timestamps: true
})

module.exports = model('Ventas', schemaVentas);