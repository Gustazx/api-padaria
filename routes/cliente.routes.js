const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/cliente.controller');

router.get('/', ClienteController.listarClientes);
router.get('/:id', ClienteController.buscarCliente);
router.post('/', ClienteController.criarCliente);
router.put('/:id', ClienteController.atualizarCliente);
router.delete('/:id', ClienteController.deletarCliente);

module.exports = router;
