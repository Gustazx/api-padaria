const Cliente = require('../models/cliente.model');

exports.listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.listar();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.buscarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.buscarPorId(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.criarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.criar(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.atualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.atualizar(req.params.id, req.body);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.deletar(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }
    res.json({ message: "Cliente deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
