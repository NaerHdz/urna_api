const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

//Obtener todos los usuarios
router.get('/', (req, res) => {
	Usuario.find({}).exec((err, user) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}

		res.status(200).json({
			ok: true,
			user
		});
	});
});

//Obtener usuario especifico
router.get('/:id', (req, res) => {
	let id = req.params.id;

	Usuario.findById(id).exec((err, user) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}

		res.status(200).json({
			ok: true,
			user
		});
	});
});

//Agregar usuarios
router.post('/', (req, res) => {
	const usuario = new Usuario({
		nombre: req.body.nombre,
		lugar: req.body.lugar,
		casilla: req.body.casilla,
		codigoINE: req.body.codigoINE,
		votoEmitido: req.body.votoEmitido
	});

	usuario.save((err, user) => {
		if (err) {
			return res.status(400).json({
				ok: false,
				err
			});
		}

		res.json({
			ok: true,
			user
		});
	});
});

module.exports = router;
