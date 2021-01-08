const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

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
