// controllers/pedidosController.js
const Pedido = require("../models/Pedido");
const PeticaoTrabalhista = require("../models/PeticaoTrabalhista");

exports.listarPedidos = async (req, res) => {
  const { numero } = req.params;
  try {
    const peticao = await PeticaoTrabalhista.buscarPeticaoPorNumero(numero);
    if (!peticao) {
      return res.status(404).json({ error: "Petição não encontrada." });
    }
    const pedidos = await Pedido.listarPorPeticaoId(peticao.id);
    res.json(pedidos);
  } catch (error) {
    console.error("Erro ao listar pedidos:", error);
    res.status(500).json({ error: "Erro ao listar pedidos." });
  }
};

exports.criarPedido = async (req, res) => {
  const { numero } = req.params;
  const { descricao, valor } = req.body;
  try {
    const peticao = await PeticaoTrabalhista.buscarPeticaoPorNumero(numero);
    if (!peticao) {
      return res.status(404).json({ error: "Petição não encontrada." });
    }
    if (!descricao || valor === undefined) {
      return res
        .status(400)
        .json({ error: "Descrição e valor são obrigatórios." });
    }
    const novoPedido = await Pedido.criar(peticao.id, { descricao, valor });
    res.status(201).json(novoPedido);
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    res.status(500).json({ error: "Erro ao criar pedido." });
  }
};

exports.deletarPedido = async (req, res) => {
  const { numero, idPedido } = req.params;
  try {
    const peticao = await PeticaoTrabalhista.buscarPeticaoPorNumero(numero);
    if (!peticao) {
      return res.status(404).json({ error: "Petição não encontrada." });
    }
    const pedidoDeletado = await Pedido.deletar(idPedido);
    if (!pedidoDeletado) {
      return res.status(404).json({ error: "Pedido não encontrado." });
    }
    res.status(204).send(); // 204 No Content para exclusão bem-sucedida
  } catch (error) {
    console.error("Erro ao deletar pedido:", error);
    res.status(500).json({ error: "Erro ao deletar pedido." });
  }
};
