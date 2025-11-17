// controllers do projeto - que no caso tem a logica do que fazer com a requisicao.

import { fetchWeather } from "../services/weatherService.js";
import { WeatherData } from "../models/WeatherData.js";

export async function getWeather(req, res) {
  try {
    const { city } = req.query;
    const weather = await fetchWeather(city);

    await WeatherData.create(weather);

    res.json(weather);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getWeatherHistory(req, res) {
  try {
    const history = await WeatherData.findAll({
      order: [["createdAt", "DESC"]]
    });
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


