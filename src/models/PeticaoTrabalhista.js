const db = require("../config/database");

class PeticaoTrabalhista {
  // Lista todas as petições (sem filtros)

  static async listarPeticoes() {
    const result = await db.query("SELECT * FROM peticoes");

    return result.rows;
  } // Lista petições com filtros (offset, limit, valor mínimo)

  static async listarPeticoesComFiltros({ offset, limit, valorMinimo }) {
    try {
      let query = "SELECT * FROM peticoes";

      const params = [];

      if (valorMinimo !== null && !isNaN(valorMinimo)) {
        query += " WHERE valor_causa >= $1 OFFSET $2 LIMIT $3";

        params.push(valorMinimo, offset, limit);
      } else {
        query += " OFFSET $1 LIMIT $2";

        params.push(offset, limit);
      }

      const result = await db.query(query, params);

      return result.rows;
    } catch (error) {
      throw new Error("Erro ao aplicar filtros na listagem de petições");
    }
  } // Lista petições com valor acima de R$10.000

  static async listarPeticoesAltas() {
    const result = await db.query(
      "SELECT * FROM peticoes WHERE valor_causa > 10000"
    );

    return result.rows;
  } // Busca petição pelo número

  static async buscarPeticaoPorNumero(numero) {
    const result = await db.query("SELECT * FROM peticoes WHERE numero = $1", [
      numero,
    ]);

    return result.rows[0];
  } // Cria nova petição

  static async criarPeticao({ numero, reclamante, valor_causa }) {
    if (
      typeof numero !== "string" ||
      typeof reclamante !== "string" ||
      isNaN(valor_causa)
    ) {
      throw new Error("Dados inválidos! Verifique os tipos dos campos.");
    }

    try {
      const result = await db.query(
        "INSERT INTO peticoes (numero, reclamante, valor_causa) VALUES ($1, $2, $3) RETURNING *",

        [numero, reclamante, valor_causa]
      );

      return result.rows[0];
    } catch (error) {
      if (error.code === "23505") {
        throw new Error("Já existe uma petição com esse número");
      }

      throw new Error("Erro ao criar petição");
    }
  } // Exclui uma petição pelo ID

  static async excluirPeticao(id) {
    const result = await db.query(
      "DELETE FROM peticoes WHERE id = $1 RETURNING *",

      [id]
    );

    return result.rows[0];
  }
}

module.exports = PeticaoTrabalhista;
