const express = require('express');
const app = express();

app.use('/candidatos', require('./candidato'));
app.use('/usuario', require('./usuario'));
app.use('/partido', require('./partido'));

module.exports = app;
