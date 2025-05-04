// routes/pedidosRoutes.js
const express = require("express");
const router = express.Router({ mergeParams: true }); // Importante para acessar o :numero da rota pai
const pedidosController = require("../controllers/pedidosController");

// GET /peticoes/:numero/pedidos → Listar todos os pedidos de uma petição
router.get("/pedidos", pedidosController.listarPedidos);

// POST /peticoes/:numero/pedidos → Criar um pedido novo para uma petição
router.post("/pedidos", pedidosController.criarPedido);

// DELETE /peticoes/:numero/pedidos/:idPedido → Deletar um pedido específico
router.delete("/pedidos/:idPedido", pedidosController.deletarPedido);

module.exports = router;
