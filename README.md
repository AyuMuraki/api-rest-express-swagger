# **⚖️ API REST de Petições Trabalhistas e Pedidos com PostgreSQL, Express.js e Swagger.**

## **🎯 Objetivo do Projeto.**

📄 Sobre o Projeto
Este projeto tem como objetivo migrar uma API RESTful simples — anteriormente baseada em arquivos JSON — para uma estrutura mais robusta, utilizando um banco de dados real com PostgreSQL 🐘. A aplicação foi desenvolvida com Node.js + Express 🚀 e segue boas práticas de organização com controllers, models e rotas. Também utiliza variáveis de ambiente (.env) para garantir segurança 🔒 e flexibilidade na configuração ⚙️.

Além de aprender a integrar sua API ao PostgreSQL, você poderá praticar operações CRUD completas ✍️, deixando sua aplicação mais próxima de um cenário do mundo real 🌐.

A API gerencia petições trabalhistas e seus pedidos associados (relação 1:N) ⚖️📌. Toda a documentação das rotas é gerada automaticamente com o Swagger 🧭, facilitando testes e integração.





## **💾 Bancos de Dados: Rápido e Fácil.**

### **🗄️ Relacional (Ex: PostgreSQL.**)

  **Como pensa:** Planilha organizada (tabelas, linhas, colunas fixas).

**Bom para:** Dados com estrutura clara (clientes, pedidos), onde a consistência e os relacionamentos são importantes.

**Palavra-chave:** Organização.

**Em detalhe:** Imagine organizar dados em tabelas bem definidas, como uma planilha. Cada linha representa um item ou registro, e cada coluna define uma característica desse item (por exemplo, nome, idade, email). Os bancos relacionais são ideais para informações com uma estrutura bem definida e quando os dados precisam se relacionar fortemente entre si, como clientes e seus respectivos pedidos. A principal vantagem é a organização e a integridade dos dados.

### **📑 Não Relacional (Ex: MongoDB).**

**Como pensa:** Pastas com arquivos (documentos flexíveis).

**Bom para:** Dados variados (logs, conteúdo web, dados de sensores) que não seguem um formato rígido e precisam escalar rapidamente.

**Palavra-chave:** Flexibilidade.

**Em detalhe:** Pense em guardar informações como documentos (semelhante a arquivos JSON) dentro de coleções (pastas). A grande diferença é que cada documento em uma mesma coleção pode ter uma estrutura diferente, com seus próprios campos. Isso oferece muita flexibilidade para dados que não se encaixam em um esquema fixo ou para aplicações que precisam de escalabilidade horizontal de forma mais simples. A adaptabilidade é a principal característica.

### Em resumo:

* **Relacional:** Ordem > Dados estruturados.
* **Não Relacional:** Liberdade > Dados variados.



# **🆚 Banco de Dados Relacional (SQL) vs Não Relacional (NoSQL).**


| Característica                   | Banco Relacional (SQL)                                | Banco Não Relacional (NoSQL)                          |
|----------------------------------|--------------------------------------------------------|-------------------------------------------------------|
| 📐 **Estrutura**                 | Baseado em **tabelas** com colunas e linhas            | Baseado em **documentos**, **coleções**, **chaves-valor**, **colunas**, ou **grafos** |
| 💬 **Exemplos**                  | PostgreSQL, MySQL, SQL Server, Oracle                  | MongoDB, Redis, Cassandra, Firebase                   |
| 📊 **Esquema (schema)**         | **Fixos** – você define as colunas e tipos de dados    | **Flexíveis** – documentos podem ter campos diferentes |
| 🔄 **Relacionamentos**          | Suporta relacionamentos complexos (JOINs, chave estrangeira) | Normalmente **evita** JOINs, mas organiza os dados de forma mais **desnormalizada** |
| 🚀 **Escalabilidade**           | **Vertical** (mais CPU/RAM no mesmo servidor)          | **Horizontal** (mais servidores trabalhando juntos)   |
| 📈 **Performance (consulta)**   | Muito eficiente para dados bem estruturados e com relações | Melhor performance em leitura rápida de grandes volumes de dados sem estrutura fixa |
| 💾 **Armazenamento típico**     | Tabelas com registros                                 | Documentos (JSON), pares chave-valor, colunas largas |
| ✅ **Consistência**              | Forte consistência (ACID)                             | Eventualmente consistente (alguns são BASE)          |
| 🧩 **Casos de uso comuns**      | Sistemas bancários, ERP, CRM, aplicações com lógica relacional forte | Redes sociais, analytics, cache, IoT, apps em tempo real |
| 🔧 **Flexibilidade**            | Menos flexível para mudanças de estrutura              | Muito flexível para mudanças na estrutura dos dados  |



## **🔍 O que é uma API REST?**

Imagine que uma API é como o 📋 cardápio de um restaurante.
Você 
**(👤 cliente)** olha o cardápio **(API)** e faz um pedido **(📨 requisição)** para o garçom **(🧑‍🍳 servidor)**.

O garçom leva seu pedido para a cozinha **(🔧 back-end)**, e em pouco tempo, sua comida **(🍽️ resposta)** chega na mesa.

**Uma API REST é um estilo de construção de APIs onde usamos métodos como:**

📥 GET → Pegar dados

📨 POST → Criar dados

♻️ PUT → Atualizar dados

❌ DELETE → Apagar dados

Tudo isso usando URLs organizadas, como por exemplo:


## 🛣️ Exemplos de rotas RESTful
As rotas foram atualizadas para funcionar com o banco de dados. Os principais endpoints são:


| Método | Rota                     | Ação                                |
|--------|--------------------------|-------------------------------------|
| GET    | `/peticoes`              | 🔍 Listar todas as petições         |
| POST   | `/peticoes`              | 🆕 Criar uma nova petição           |
| GET    | `/peticoes/12345`        | 🔎 Ver detalhes da petição 12345    |
| PUT    | `/peticoes/12345`        | ✏️ Atualizar a petição 12345        |
| DELETE | `/peticoes/12345`        | 🗑️ Deletar a petição 12345          |




## **🚀 Introdução ao Express.js**


**Express.js** é um framework minimalista e poderoso para Node.js que nos ajuda a construir APIs de forma rápida e organizada. Ele funciona como o “motor” da aplicação, lidando com requisições e respostas de maneira eficiente.

✅ Criar uma API RESTful completa e funcional.

✅ Definir rotas como GET /peticoes, POST /peticoes, DELETE /peticoes/:numero etc.

✅ Usar controllers para separar a lógica das requisições.

✅ Conectar ao banco de dados PostgreSQL de forma segura.

✅ Organizar o código com app.use() e arquivos de rotas modulares.

✅ Documentar tudo com o Swagger UI.

## 🛣️ Estrutura de Rotas
As rotas definem os caminhos que a API expõe para serem acessados externamente, como se fossem “endereços” para diferentes funcionalidades.

Exemplo:

```
app.get("/peticoes", listarPeticoes);
```
Na prática:

➡️ Quando alguém acessa GET /peticoes, chamamos a função listarPeticoes, que consulta o banco e retorna todas as petições cadastradas.


**As rotas estão organizadas no arquivo:**

📁 /routes/peticoes.routes.ts

**E a lógica de cada rota está em:**

📁 /controllers/peticoes.controller.ts

## 🛣️ Rotas da API.

*Rotas Principais:*

## **📄 Petições:** 



| 🧭 Método | 🛣️ Rota            | 📝 Ação                     |
| --------- | ------------------- | --------------------------- |
| `GET`     | `/peticoes`         | Listar todas as petições    |
| `POST`    | `/peticoes`         | Criar nova petição          |
| `GET`     | `/peticoes/:numero` | Detalhar petição específica |
| `PUT`     | `/peticoes/:numero` | Atualizar dados da petição  |
| `DELETE`  | `/peticoes/:numero` | Deletar uma petição         |


## **📌 Pedidos (relação 1:N com petições):**

| 🧭 Método | 🛣️ Rota                        | 📝 Ação                               |
| --------- | ------------------------------- | ------------------------------------- |
| `GET`     | `/peticoes/:numero/pedidos`     | Listar todos os pedidos da petição    |
| `POST`    | `/peticoes/:numero/pedidos`     | Criar novo pedido vinculado à petição |
| `DELETE`  | `/peticoes/:numero/pedidos/:id` | Excluir pedido específico da petição  |






## **👨🏻‍💻 Modularização de Controllers e Models:**

Para manter o projeto organizado, usamos a separação por responsabilidade:

**🧠 Controllers:** cuidam da lógica da aplicação (ex: filtrar dados, retornar resposta).

**📦 Models:** definem a estrutura dos dados (ex: classe PeticaoTrabalhista).

**🛣️ Routes:** definem os caminhos que os usuários acessam (ex: GET /peticoes).

✅ Essa divisão facilita muito a manutenção, a leitura do código e o crescimento do projeto de forma escalável.

## 🧱 Estrutura do Projeto - API de Petições Trabalhistas




| 📁 Caminho/Pasta                        | 🧠 Responsabilidade                                                         |
| --------------------------------------- | --------------------------------------------------------------------------- |
| `src/`                                  | Pasta principal da aplicação                                                |
| `src/app.js`                            | 📌 Ponto de entrada da API: configura rotas, middleware, Swagger, etc.      |
| `src/peticoes.json`                     | 📂 Arquivo de dados usado na versão anterior (sem banco de dados)           |
|                                         |                                                                             |
| `src/config/database.js`                | 🛠️ Conexão com o PostgreSQL usando `pg` e variáveis de ambiente            |
|                                         |                                                                             |
| `src/controllers/`                      | 🧩 Contém a lógica das requisições (camada de controle)                     |
| `src/controllers/peticoesController.js` | ⚙️ Controlador de petições: CRUD das petições trabalhistas                  |
| `src/controllers/pedidosController.js`  | ⚙️ Controlador de pedidos: adiciona e remove pedidos vinculados às petições |
|                                         |                                                                             |
| `src/models/`                           | 🧬 Representa as tabelas do banco de dados (camada de dados)                |
| `src/models/PeticaoTrabalhista.js`      | 🧾 Model da tabela `peticoes`: define a estrutura e métodos                 |
| `src/models/Pedido.js`                  | 🧾 Model da tabela `pedidos`: define a estrutura e métodos                  |
|                                         |                                                                             |
| `src/routes/`                           | 🚦 Define os endpoints (rotas HTTP da API)                                  |
| `src/routes/peticoesRoutes.js`          | 🛣️ Rotas para petições: `/peticoes`, `/peticoes/:numero`, etc.             |
| `src/routes/pedidosRoutes.js`           | 🛣️ Rotas para pedidos: `/peticoes/:numero/pedidos`, etc.                   |
|                                         |                                                                             |
| `src/swagger/swagger.json`              | 📖 Documentação da API em formato Swagger                                   |
|                                         |                                                                             |
| `.env`                                  | 🔐 Armazena variáveis de ambiente: credenciais, portas, URL do banco, etc.  |







## **🛠️ Uso de nodemon para desenvolvimento.**
O nodemon é uma ferramenta que reinicia o servidor automaticamente sempre que salvamos uma mudança no código. Isso agiliza o desenvolvimento e evita ter que parar e rodar node toda hora.

Usamos com o comando:


```
npx nodemon src/app.ts
```



## **📚 Documentação com Swagger UI.**
O **Swagger UI** é uma forma visual de mostrar como funciona sua API.

* Você acessa http://localhost:3000/api-docs

* Pode ver todas as rotas, exemplos e até testar diretamente do navegador

Para isso usamos:

* swagger-ui-express

* Um arquivo swagger.json com as descrições das rotas



## 👨🏻‍💻 Tecnologias Utilizadas

| Ferramenta             | Descrição                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Node.js**            | Ambiente de execução para JavaScript no backend                           |
| **Express.js**         | Framework minimalista para criação de APIs REST                           |
| **PostgreSQL**         | Banco de dados relacional usado para persistência dos dados               |
| **pg**                 | Cliente PostgreSQL para Node.js                                           |
| **dotenv**             | Permite utilizar variáveis de ambiente                                    |
| **Nodemon**            | Monitoramento e reload automático no desenvolvimento                      |
| **Swagger UI**         | Interface para documentação interativa da API                             |
| **TypeScript**         | Superset do JavaScript com tipagem estática                               |



## 🧬 Como Executar o Projeto:

**✅ Pré-requisitos.**

* Node.js (versão LTS recomendada) e npm instalados

* PostgreSQL instalado e rodando

* Ferramentas opcionais: psql, pgAdmin


**🔧 Configuração do Banco.**

**1. Criar o banco de dados:**

#

 ```
 CREATE DATABASE peticoes_db;
 ```

**2. Criar as tabelas:**

 ```
 CREATE TABLE peticoes (
  id SERIAL PRIMARY KEY,
  numero VARCHAR(50) NOT NULL UNIQUE,
  reclamante TEXT,
  valor_causa DECIMAL
);

CREATE TABLE pedidos (
  id SERIAL PRIMARY KEY,
  descricao TEXT NOT NULL,
  peticao_id INT,
  CONSTRAINT fk_peticao FOREIGN KEY (peticao_id) REFERENCES peticoes(id)
);

 ```


 **🔐 Variáveis de Ambiente**
 *Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:*

  ```
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_HOST=localhost
DB_NAME=peticoes_db
DB_PORT=5432
APP_PORT=3000

# Alternativamente:
# DATABASE_URL=postgres://usuario:senha@localhost:5432/peticoes_db


 ```

**📦 Instalar Dependências.**

Execute o comando:

 ```
npm install
 ```
 Isso instalará todas as dependências listadas no package.json (como Express, pg, dotenv, etc.)

 **▶️ Iniciar o Servidor.**

Modo produção:

 ```
 npm start
 ```

 * Modo desenvolvimento (com nodemon):
  ```
 npx nodemon src/app.ts

 ```

 **📖 Documentação Swagger.**
Após iniciar o servidor, acesse no navegador:

👉 http://localhost:3000/api-docs

## **🧪 Testar a API.**

Você pode testar usando ferramentas como:

* Insomnia

* Postman

* curl

* Swagger UI


**ℹ️ Observações Importantes:**


🔐 Substitua seu_usuario e sua_senha pelas suas credenciais do PostgreSQL.

🟢 Certifique-se de que o serviço do PostgreSQL está rodando antes de iniciar a aplicação.

🛠️ Para criar o banco e as tabelas, você pode usar:

💻 Linha de comando (psql)

🖥️ Ferramentas gráficas como o pgAdmin

📦 Scripts de migração (opcional)

🚀 Durante o desenvolvimento, é recomendado usar o nodemon para reiniciar o servidor automaticamente sempre que houver alterações no código 🔁


---

## 📌 Rotas 

| Método | Rota                | Descrição                                                       |
|--------|---------------------|------------------------------------------------------------------|
| GET    | `/peticoes`         | Lista todas as petições                                         |
| GET    | `/peticoes/altas`   | Lista petições com valor acima de R$10.000                      |
| GET    | `/peticoes__numero_` | Retorna detalhes de uma petição pelo número da petição          |
| POST   | `/peticoes`         | Cria uma nova petição                                           |
| DELETE | `/delete_peticoes__id_` | Deleta uma petição com base no número da petição (único)        |





## **🔥 Bônus: Como Implementamos as Melhorias.**

**Para deixar nossa API mais robusta e profissional, adicionamos alguns recursos extras:**

**🔄 Paginação:**
Na rota GET /peticoes, incluímos os parâmetros page e limit na query.

Isso permite que o usuário controle quantas petições quer ver por página e em qual página está. 

A lógica foi implementada no controller, onde usamos slice() para retornar apenas os dados

 daquela “página” específica.

**🔍 Filtro por valor mínimo:**

Também na rota GET /peticoes,adicionamos a opção de filtrar petições com um valor mínimo 

usando ?
min=10000. Esse valor é lido da query e usamos o filter() para retornar somente as
 petições com valor da causa igual ou maior ao informado.


**❌ Tratamento de erros amigável:**

Ao buscar uma petição pelo número (GET /peticoes/:numero), se ela não for encontrada, 

retornamos um erro com status 404 e a mensagem "Petição não encontrada", usando nossa 

classe AppError. Isso deixa o retorno da API mais claro e útil para quem consome os dados.


## **💡 Dicas para Quem Tem Dificuldade em Entender APIs (Versão Gamer 🎮).**
Se você ainda fica confuso com o que é uma API ou como ela funciona, aqui vão algumas dicas práticas que podem te ajudar:



| 🎮 Analogia Gamer                              | 💬 Explicação                                                                                             |
|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| 🧠 Pense em APIs como um NPC                   | Você (jogador) fala com a API (NPC). Ex: "Me mostra os itens da loja" → "Aqui estão os itens disponíveis"|
|                                               | 👉 Toda requisição é como um diálogo com um NPC: você pede, ela responde com dados.                      |
| 🗺️ Rotas são como mapas ou portais            |**`/peticoes`** → mapa principal com todos os dados.                                                          |
|                                               | **`/peticoes/123`** → ficha do personagem 123.                                                               |
|                                               | **`/peticoes/altas`** → dungeon com os chefões (processos de alto valor).                                    |
| 🧩 Suba de nível aos poucos                    | Comece com rotas simples como `GET /teste`.                                                              |
|                                               | Resposta: `res.json({ mensagem: "Funcionando" })` = tutorial da API.                                     |
|                                               | Depois vá desbloqueando "habilidades" como manipular dados reais.                                        |
| 🔁 Use ferramentas mágicas                     | Insomnia/Postman = menu de debug do desenvolvedor.                                                       |
|                                               | Teste cada rota, veja se está respondendo corretamente.                                                  |
|                                               | Não precisa esperar tudo estar pronto — vai testando por partes.                                         |
| 📖 Comente o código como diário de missão     | Exemplo de comentário: `// Essa função retorna todos os processos cadastrados (como uma lista de quests)`|
|                                               | Isso ajuda sua mente e outros desenvolvedores a entenderem o "mapa da missão".                          |


## **💡 O Que Foi Aprendido.**


Durante esse projeto, aprendemos mais do que apenas código. Exploramos conceitos fundamentais do desenvolvimento backend, como:

✅ Conectar uma API Node.js ao PostgreSQL usando o pacote pg.

✅ Criar uma tabela relacional e realizar operações CRUD.

✅ sar .env para proteger dados sensíveis.

✅ Modularizar o projeto com responsabilidade clara (MVC).

✅ Documentar de forma profissional com Swagger UI.

#

## 📚 O Que Foi Levado Dessa Jornada. 


**🚀 Mais do que construir uma API, o que você leva daqui é:**

📥 Uma base sólida para qualquer aplicação backend moderna

📄 Confiança para entender e criar rotas RESTful

🧠 Clareza sobre a estrutura de um projeto Node.js bem organizado

🧩 Entendimento do papel de controllers, models, rotas e documentação

📦 Consciência da importância da organização e escalabilidade

🛠️ A capacidade de transformar uma simples API em algo robusto e profissional



## 🗣️ Quer Conversar?. 


**🚀 Mais do que construir uma API, o que você leva daqui é:**

🤙🏻 Se você curtiu esse projeto, ficou com alguma dúvida ou quer trocar ideia sobre desenvolvimento web, APIs, ou até games e animes....

Bora bater um papo!


📬 Me chama no LinkedIn ou manda uma mensagem por aqui mesmo. Vai ser um prazer conversar com você! 😊

Feito com 💙 por Ayumi Muraki
