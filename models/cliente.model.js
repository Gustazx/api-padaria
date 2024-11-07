const knexConfig = require('../knex');

class Cliente {
  static async listar() {
    return knexConfig('cliente').select('*');
  }

  static async buscarPorId(id) {
    return knexConfig('cliente').where({ id }).first();
  }

  static async criar(cliente) {
    return knexConfig('cliente').insert(cliente).returning('*');
  }

  static async atualizar(id, dados) {
    return knexConfig('cliente').where({ id }).update(dados).returning('*');
  }

  static async deletar(id) {
    return knexConfig('cliente').where({ id }).del();
  }
}

module.exports = Cliente;
