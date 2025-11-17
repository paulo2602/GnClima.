// as rotas sao os caminhos/endpoints da aplicacao que definem como a aplicacao responde a cada URL.

import { Router } from "express";
import { getWeather, getWeatherHistory } from "../controllers/weatherController.js";

const router = Router();

router.get("/", getWeather);
router.get("/history", getWeatherHistory);

export default router;

