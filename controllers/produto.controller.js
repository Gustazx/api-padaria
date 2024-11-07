const Produto = require('../models/produto.model');

exports.listarProdutos = async (req, res) => {
  const produtos = await Produto.listar();
  res.json(produtos);
};

exports.buscarProduto = async (req, res) => {
  const produto = await Produto.buscarPorId(req.params.id);
  produto ? res.json(produto) : res.status(404).json({ error: 'Produto não encontrado' });
};

exports.criarProduto = async (req, res) => {
  const novoProduto = req.body;
  await Produto.criar(novoProduto);
  res.status(201).json({ message: 'Produto criado com sucesso' });
};

exports.atualizarProduto = async (req, res) => {
  await Produto.atualizar(req.params.id, req.body);
  res.json({ message: 'Produto atualizado com sucesso' });
};

exports.deletarProduto = async (req, res) => {
  await Produto.deletar(req.params.id);
  res.json({ message: 'Produto deletado com sucesso' });
};
