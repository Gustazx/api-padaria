const Compra = require('../models/compra.model');

exports.listarCompras = async (req, res) => {
  try {
    const compras = await Compra.listar();
    res.json(compras);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar compras' });
  }
};

exports.buscarCompra = async (req, res) => {
  try {
    const compra = await Compra.buscarPorId(req.params.id);
    if (compra) {
      res.json(compra);
    } else {
      res.status(404).json({ error: 'Compra não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar compra' });
  }
};

exports.criarCompra = async (req, res) => {
  try {
    const novaCompra = await Compra.criar(req.body);
    res.status(201).json(novaCompra);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar compra' });
  }
};

exports.deletarCompra = async (req, res) => {
  try {
    await Compra.deletar(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar compra' });
  }
};
