const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const schemaUser = new Schema({
  nombre : { type: String, trim: true, require: true },
  apellido : { type: String, trim: true, require: true },  
  tipoDocumento : { type: String, trim: true, require: true },
  documento : { type: Number, trim: true, require: true },
  rol: {type: String, trim: true, required: true},
  estado: {type: String, trim: true, required: true},
  }, {
    timestamps: true
});

module.exports = model("User", schemaUser);