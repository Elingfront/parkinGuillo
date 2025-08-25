let parqueos = [];

const getAllParqueos = () => parqueos;

const getParqueoById = (idParqueo) =>
  parqueos.find(m => m.idParqueo === idParqueo);

const getParqueoByPlaca = (placa) =>
  parqueos.find(m => m.placa === placa);

const getParqueoByNombre = (nombres) =>
  parqueos.find(m => m.nombres === nombres);

const getParqueoByApto = (apto) =>
  parqueos.find(m => m.apto === apto);

const getParqueoByCelda = (celda) =>
  parqueos.find(m => m.celda === celda);

const addParqueo = (parqueo) => {
  parqueos.push(parqueo);
  return parqueo;
};

const updateParqueo = (idParqueo, data) => {
  const index = parqueos.findIndex(m => m.idParqueo === idParqueo);
  if (index === -1) return null;

  parqueos[index] = { ...parqueos[index], ...data };
  return parqueos[index];
};

const deleteParqueo = (idParqueo) => {
  const index = parqueos.findIndex(m => m.idParqueo === idParqueo);
  if (index === -1) return null;

  const eliminado = parqueos.splice(index, 1);
  return eliminado[0];
};

module.exports = {
  getAllParqueos,
  getParqueoById,
  getParqueoByPlaca,
  getParqueoByNombre,
  getParqueoByApto,
  getParqueoByCelda,
  addParqueo,
  updateParqueo,
  deleteParqueo
};