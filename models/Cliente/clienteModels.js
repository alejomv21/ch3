 const mongoose = require("mongoose");

 const { Schema, model } = mongoose;

 const schemaCliente = new Schema(
  {
     tipoDocumento: { type: String, trim: true, require: true },
     documento: { type: Number, trim: true, require: true },
     nombre: { type: String, trim: true, require: true },
     apellido: { type: String, trim: true, require: true },
   },
   {
     timestamps: true,
   }
 );

 module.exports = model("Clientes", schemaCliente);
