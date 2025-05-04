// models/Pedido.js
const db = require("../config/database");

class Pedido {
  static async listarPorPeticaoId(peticaoId) {
    const result = await db.query(
      "SELECT * FROM pedidos WHERE peticao_id = $1",
      [peticaoId]
    );
    return result.rows;
  }

  static async criar(peticaoId, { descricao, valor }) {
    const result = await db.query(
      "INSERT INTO pedidos (descricao, valor, peticao_id) VALUES ($1, $2, $3) RETURNING *",
      [descricao, valor, peticaoId]
    );
    return result.rows[0];
  }

  static async deletar(id) {
    const result = await db.query(
      "DELETE FROM pedidos WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0]; // Retorna a linha deletada ou undefined se não encontrar
  }
}

module.exports = Pedido;
