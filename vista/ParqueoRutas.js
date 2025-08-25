const express = require('express');
const router = express.Router();
const parqueocontrolador = require('../controlador/ParqueoControlador');

router.get('/', parqueocontrolador.obtenerParqueos);
router.get('/id/:id', parqueocontrolador.buscarPorId);
router.get('/placa/:placa', parqueocontrolador.buscarPorPlaca);
router.get('/nombre/:nombres', parqueocontrolador.buscarPorNombre);
router.get('/apto/:apto', parqueocontrolador.buscarPorApto);
router.get('/celda/:celda', parqueocontrolador.buscarPorCelda);
//-------------------------------------------------------------------
router.post('/guardar', parqueocontrolador.crearParqueo);
router.put('/:id', parqueocontrolador.actualizarParqueo);
router.delete('/:idParqueo', parqueocontrolador.eliminarParqueo);

module.exports = router;