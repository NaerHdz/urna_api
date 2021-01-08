const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartidoModel = new Schema({
	image: { type: String },
	name: { type: String },
	color: { type: String },
	dark: { type: Boolean }
});

module.exports = mongoose.model('Partido', PartidoModel);
