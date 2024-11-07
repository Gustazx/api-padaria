const express = require('express');
const router = express.Router();
const CompraController = require('../controllers/compra.controller');

router.get('/', CompraController.listarCompras);
router.get('/:id', CompraController.buscarCompra);
router.post('/', CompraController.criarCompra);
router.delete('/:id', CompraController.deletarCompra);

module.exports = router;
