const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

//Obtener todos los partidos
router.get('/', (req, res) => {
	Partido.find({}).exec((err, partido) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}

		res.status(200).json({
			ok: true,
			partido
		});
	});
});

//Obtener a un partido en especifico
router.get('/:id', (req, res) => {
	let id = req.params.id;

	Partido.findById(id).exec((err, cand) => {
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

//Agregar partidos
router.post('/', (req, res) => {
	const partido = new Partido({
		image: req.body.image,
		name: req.body.name,
		color: req.body.color,
		dark: req.body.dark
	});

	partido.save((err, partido) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}

		res.json({
			ok: true,
			partido
		});
	});
});

module.exports = router;
