const express = require("express");
const produtosRoutes = require("./routes/produto.routes");
const comprasRoutes = require("./routes/compra.routes");
const clienteRoutes = require("./routes/cliente.routes");
const conn = require("./knex");

const app = express();
app.use(express.json());

app.use("/api/produtos", produtosRoutes);
app.use("/api/compras", comprasRoutes);
app.use("/api/clientes", clienteRoutes);

conn
  .raw("SELECT 1")
  .then(() => {
    console.log(`Banco de dados conectado com sucesso!`);
  })
  .catch((erro) => {
    console.log(`Erro ao conectar ao banco de dados: ${erro}`);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}! 🚀`);
});
