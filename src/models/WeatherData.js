// modelo do meu banco de dados com sequelize

import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const WeatherData = sequelize.define("WeatherData", {
  cidade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  temperatura: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  umidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
