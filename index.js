const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const password = 'tallerdeword';
const db = 'urna';
const port = process.env.PORT || 3000;
// Conexion a la base de datos
mongoose
	.connect(
		`mongodb+srv://elCrikoso:${password}@taller-investigacion-2.7avvy.mongodb.net/${db}?retryWrites=true&w=majority`,
		{ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
	)
	.then((db) => console.log('base de datos conectada con exito'))
	.catch((err) => console.log(err));

//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rutas
app.use('/api', require('./src/routes/index'));

//pueto a escuchar
app.listen(port, () => {
	console.log(`Escuchando en el puerto ${port}`);
});
