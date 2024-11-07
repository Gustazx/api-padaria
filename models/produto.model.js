const knexConfig = require('../knex');

class Produto {
  static async listar() {
    return knexConfig('produto').select('*');
  }

  static async buscarPorId(id) {
    return knexConfig('produto').where({ id }).first();
  }

  static async criar(produto) {
    return knexConfig('produto').insert(produto);
  }

  static async atualizar(id, dados) {
    return knexConfig('produto').where({ id }).update(dados);
  }

  static async deletar(id) {
    return knexConfig('produto').where({ id }).del();
  }
}

module.exports = Produto;
