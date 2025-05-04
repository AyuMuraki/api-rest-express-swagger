const PeticaoTrabalhista = require("../models/PeticaoTrabalhista");

// Listar todas as petições (sem filtros)

async function listarPeticoes(req, res) {
  try {
    const peticoes = await PeticaoTrabalhista.listarPeticoes();

    res.json(peticoes);
  } catch (error) {
    console.error("Erro ao listar petições:", error);

    res.status(500).json({ error: "Erro ao listar petições" });
  }
}

// Listar petições com filtros (offset, limit, valor mínimo)

async function listarPeticoesComFiltros(req, res) {
  const { page = 1, limit = 10, valorMinimo } = req.query;

  const pagina = parseInt(page, 10);

  const limite = parseInt(limit, 10);

  const offset = (pagina - 1) * limite;

  try {
    const peticoes = await PeticaoTrabalhista.listarPeticoesComFiltros({
      offset,

      limit: limite,

      valorMinimo: valorMinimo ? parseFloat(valorMinimo) : null,
    });

    if (peticoes.length === 0) {
      return res.status(404).json({
        error: "Nenhuma petição encontrada com os critérios informados.",
      });
    }

    res.json(peticoes);
  } catch (error) {
    console.error("Erro ao listar petições com filtros:", error);

    res.status(500).json({ error: "Erro ao listar petições com filtros" });
  }
}

// Listar petições com valor acima de R$10.000

async function listarPeticoesAltas(req, res) {
  try {
    const peticoes = await PeticaoTrabalhista.listarPeticoesAltas();

    if (peticoes.length === 0) {
      return res.status(404).json({
        error: "Nenhuma petição encontrada com valor acima de R$10.000",
      });
    }

    res.json(peticoes);
  } catch (error) {
    console.error("Erro ao listar petições altas:", error);

    res.status(500).json({ error: "Erro ao listar petições altas" });
  }
}

// Buscar petição por número

async function buscarPeticaoPorNumero(req, res) {
  const { numero } = req.params;

  try {
    const peticao = await PeticaoTrabalhista.buscarPeticaoPorNumero(numero);

    if (!peticao) {
      return res.status(404).json({
        error: `Petição com o número ${numero} não encontrada`,
      });
    }

    res.json(peticao);
  } catch (error) {
    console.error("Erro ao buscar petição por número:", error);

    res.status(500).json({ error: "Erro ao buscar petição" });
  }
}

// Criar petição

async function criarPeticao(req, res) {
  const { numero, reclamante, valor_causa } = req.body;

  if (!numero || !reclamante || valor_causa === undefined) {
    return res.status(400).json({
      error: "Dados inválidos! Por favor, confira os campos obrigatórios.",

      fields: {
        numero: numero ? "Válido" : "Campo obrigatório",

        reclamante: reclamante ? "Válido" : "Campo obrigatório",

        valor_causa: valor_causa !== undefined ? "Válido" : "Campo obrigatório",
      },
    });
  }

  try {
    const novaPeticao = await PeticaoTrabalhista.criarPeticao({
      numero,

      reclamante,

      valor_causa,
    });

    res.status(201).json(novaPeticao);
  } catch (error) {
    if (error.message.includes("Já existe uma petição")) {
      return res.status(400).json({ error: error.message });
    }

    res.status(500).json({ error: "Erro ao criar petição" });
  }
}

// Excluir petição

async function excluirPeticao(req, res) {
  const { id } = req.params;

  try {
    const peticaoExcluida = await PeticaoTrabalhista.excluirPeticao(id);

    if (!peticaoExcluida) {
      return res.status(404).json({ error: "Petição não encontrada" });
    }

    res.status(200).json({
      message: "Petição excluída com sucesso",

      peticao: peticaoExcluida,
    });
  } catch (error) {
    console.error("Erro ao excluir petição:", error);

    res.status(500).json({ error: "Erro ao excluir petição" });
  }
}

module.exports = {
  listarPeticoes,

  listarPeticoesComFiltros,

  listarPeticoesAltas,

  buscarPeticaoPorNumero,

  criarPeticao,

  excluirPeticao,
};
