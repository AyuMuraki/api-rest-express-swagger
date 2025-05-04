// routes/peticoesRoutes.js
const express = require("express");
const router = express.Router();
const peticoesController = require("../controllers/peticoesController");
const pedidosRoutes = require("./pedidosRoutes"); // Importar as rotas de pedidos

// Rotas de petições
router.get("/peticoes", peticoesController.listarPeticoes);
router.get("/peticoes/filtros", peticoesController.listarPeticoesComFiltros);
router.get("/peticoes/altas", peticoesController.listarPeticoesAltas);
router.get("/peticoes/:numero", peticoesController.buscarPeticaoPorNumero);
router.post("/peticoes", peticoesController.criarPeticao);
router.delete("/peticoes/:id", peticoesController.excluirPeticao);

// Montar as rotas de pedidos sob a rota de petições com o parâmetro :numero
router.use("/peticoes/:numero", pedidosRoutes);

module.exports = router;
