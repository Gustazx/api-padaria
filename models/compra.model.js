const knexConfig = require('../knex');

class Compra {
  static async listar() {
    return knexConfig('compra').select('*');
  }

  static async buscarPorId(id) {
    return knexConfig('compra').where({ id }).first();
  }

  static async criar(compra) {
    return knexConfig('compra').insert(compra).returning('*');
  }

  static async deletar(id) {
    return knexConfig('compra').where({ id }).del();
  }
}

module.exports = Compra;
