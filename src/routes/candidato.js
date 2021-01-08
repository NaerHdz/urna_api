const express = require('express');
const router = express.Router();
const Candidato = require('../models/Candidato');

//Obtener todos los candidatos
router.get('/', (req, res) => {
	Candidato.find({}).exec((err, cand) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}

		res.status(200).json({
			ok: true,
			cand
		});
	});
});

//Obtener a un candidato en especifico
router.get('/:id', (req, res) => {
	let id = req.params.id;

	Candidato.findById(id).exec((err, cand) => {
		if (err) {
			res.status(400).json({
				ok: false,
				err
			});
		}

		res.json({
			ok: true,
			cand
		});
	});
});

//agregar a un candidatos
router.post('/', (req, res) => {
	const candidato = new Candidato({
		nombre: req.body.nombre,
		partido: req.body.partido,
		lugar: req.body.lugar,
		cargo: req.body.cargo
	});

	candidato.save((err, candidatoDB) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}

		res.json({
			ok: true,
			candidatoDB
		});
	});
});

//Dar un voto a un candidato
router.put('/voto/:id', (req, res) => {
	let id = req.params.id;
	let votos = 0;

	votos = Candidato.findById(id, (err, voto) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}

		Candidato.findByIdAndUpdate(
			id,
			{ cantVotos: ++voto.cantVotos },
			(err, voto) => {
				if (err) {
					return res.status(400).json({
						ok: false,
						err
					});
				}

				return res.json({
					ok: true,
					info: voto.cantVotos
				});
			}
		);
	});
});

module.exports = router;
