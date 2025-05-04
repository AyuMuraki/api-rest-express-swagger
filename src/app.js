require("dotenv").config(); // Carrega as variáveis do arquivo .env

// Importa o framework Express, usado para criar o servidor e as rotas

const express = require("express");

// Cria uma instância do Express para configurar o servidor

const app = express();

// Importa o arquivo de rotas da API de petições

const peticoesRoutes = require("./routes/peticoesRoutes");

// Importa os módulos do Swagger para gerar a documentação da API

const swaggerUi = require("swagger-ui-express");

const swaggerDocument = require("./swagger/swagger.json");

// Define a porta onde o servidor vai rodar

const PORT = 3000;

// Middleware que permite o Express entender JSON no corpo das requisições

app.use(express.json());

// Usa as rotas definidas no peticoesRoutes

// Toda vez que alguém acessar uma rota como /peticoes, ela será tratada nesse arquivo

app.use("/", peticoesRoutes);

// Rota para exibir a documentação Swagger em http://localhost:3000/api-docs

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Inicia o servidor e exibe uma mensagem no terminal com os links úteis

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);

  console.log(
    `Documentação Swagger disponível em http://localhost:${PORT}/api-docs`
  );
});
