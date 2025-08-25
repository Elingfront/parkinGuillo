const modelo = require('../modelo/ParqueoModelo');

const obtenerParqueos = (req, res) => {
  const parqueos = modelo.getAllParqueos();
  res.json(parqueos);
};

const buscarPorId = (req, res) => {
  const id = req.params.id;
  const parqueo = modelo.getParqueoById(id);
  if (!parqueo) return res.status(404).json({ error: 'No encontrado' });
  res.json(parqueo);
};

const buscarPorPlaca = (req, res) => {
  const { placa } = req.params;
  const parqueo = modelo.getParqueoByPlaca(placa);
  if (!parqueo) return res.status(404).json({ error: 'No encontrado' });
  res.json(parqueo);
};

const buscarPorNombre = (req, res) => {
  const { nombres } = req.params;
  const parqueo = modelo.getParqueoByNombre(nombres);
  if (!parqueo) return res.status(404).json({ error: 'No encontrado' });
  res.json(parqueo);
};

const buscarPorApto = (req, res) => {
  const { apto } = req.params;
  const parqueo = modelo.getParqueoByApto(apto);
  if (!parqueo) return res.status(404).json({ error: 'No encontrado' });
  res.json(parqueo);
};

const buscarPorCelda = (req, res) => {
  const { celda } = req.params;
  const parqueo = modelo.getParqueoByCelda(celda);
  if (!parqueo) return res.status(404).json({ error: 'No encontrado' });
  res.json(parqueo);
};


const crearParqueo = (req, res) => {
  const { t1 :idParqueo, t2 :placa, t3 :nombres, t4 :apto, t5 : celda } = req.body;

  if (modelo.getParqueoById(idParqueo)) {
    return res.status(400).json({ error: 'El registro ya existe' });
  }

  const nuevo = {
    idParqueo,
    placa,
    nombres,
    apto,
    celda
  };

  const parqueoCreado = modelo.addParqueo(nuevo);
  res.status(201).json(parqueoCreado);
};

const actualizarParqueo = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const actualizado = modelo.updateParqueo(id, data);
  if (!actualizado) {
    return res.status(404).json({ error: 'Regisro no encontrado' });
  }

  res.json(actualizado);
};

const eliminarParqueo = (req, res) => {
  const id = req.params.idParqueo;

  const eliminado = modelo.deleteParqueo(id);
  if (!eliminado) {
    return res.status(404).json({ error: 'Parqueo no encontrado' });
  }

  res.json({ mensaje: 'Parqueo eliminado', parqueo: eliminado });
};

module.exports = {
  obtenerParqueos,
  crearParqueo,
  actualizarParqueo,
  eliminarParqueo,
  buscarPorId,
  buscarPorPlaca,
  buscarPorNombre,
  buscarPorApto,
  buscarPorCelda
};