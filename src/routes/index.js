const express = require('express');
const app = express();

app.use('/candidatos', require('./candidato'));
app.use('/usuario', require('./usuario'));

module.exports = app;
