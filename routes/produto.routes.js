const express = require('express');
const routes = express.Router();
const produtosController = require('../controllers/produto.controller');

routes.get('/', produtosController.listarProdutos);
routes.get('/:id', produtosController.buscarProduto);
routes.post('/', produtosController.criarProduto);
routes.put('/:id', produtosController.atualizarProduto);
routes.delete('/:id', produtosController.deletarProduto);

module.exports = routes;
