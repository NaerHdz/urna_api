const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioModel = new Schema({
	nombre: { type: String },
	lugar: { type: String },
	casilla: { type: Number },
	codigoINE: { type: String },
	votoEmitido: { type: Boolean, default: false }
});

module.exports = mongoose.model('Usuario', UsuarioModel);
