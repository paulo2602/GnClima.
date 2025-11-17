// arquivo responsavel por iniciar o servidor e ouvir a porta => port 3001

import "dotenv/config";
import app from "./app.js";
import { sequelize } from "./src/config/database.js";

const PORT = process.env.PORT || 3001;

async function start() {
  try {
    await sequelize.authenticate();
    console.log(" Conectado ao PostgreSQL");

    await sequelize.sync(); // cria tabela se não existir
    console.log(" Tabelas sincronizadas");

    app.listen(PORT, () =>
      console.log(` Servidor rodando na porta ${PORT}`)
    );
  } catch (err) {
    console.error(" Erro ao iniciar servidor:", err.message);
  }
}

start();