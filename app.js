// configuracoes do express

import express from "express";
import weatherRoutes from "./src/routes/weatherRoutes.js";

const app = express();
app.use(express.json());

app.use("/weather", weatherRoutes);

export default app;
