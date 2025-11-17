//codigo de integracao da minha Api

import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.OPENWEATHER_KEY;

export async function fetchWeather(city) {
  if (!city) throw new Error("A cidade é obrigatória.");

  const params = {
    q: city,
    appid: API_KEY,
    units: "metric",
    lang: "pt_br"
  };

  const response = await axios.get(API_URL, { params });

  const data = response.data;

  return {
    cidade: data.name,
    temperatura: data.main.temp,
    umidade: data.main.humidity,
    descricao: data.weather[0].description
  };
}
