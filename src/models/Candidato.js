const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CandidatoModel = new Schema({
	nombre: { type: String },
	partido: { type: Schema.ObjectId, ref: 'Partido' },
	lugar: { type: String },
	cargo: { type: String },
	cantVotos: { type: Number, default: 0 }
});

module.exports = mongoose.model('Candidato', CandidatoModel);
