const express = require('express');
const cors = require('cors');
const app = express();
const parqueorutas = require('./vista/ParqueoRutas');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/parqueos', parqueorutas);

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});