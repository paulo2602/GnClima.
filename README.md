#  GnClima API

API desenvolvida para avaliação técnica, com o objetivo de demonstrar competências em:

- Extração de dados via API pública (OpenWeather)
- Armazenamento em banco de dados relacional (PostgreSQL)
- Criação de API REST com Node.js/Express
- Execução do ambiente via Docker e Docker Compose
- Boas práticas de organização e versionamento

---

##  Funcionalidades

| Função | Descrição |
|--------|-----------|
| Buscar clima atual | Consulta clima de uma cidade via OpenWeather e armazena em banco |
| Histórico de consultas | Retorna todas as consultas já realizadas armazenadas no PostgreSQL |
| Execução via Docker | Banco e API executando com `docker compose up -d` |

---

##  Tecnologias Utilizadas

- Node.js + Express
- Sequelize ORM
- PostgreSQL
- Docker + Docker Compose
- OpenWeather API

---

##  Estrutura do Projeto

src/
config/
controllers/
models/
routes/
services/
Dockerfile
docker-compose.yml
.env.example
server.js
app.js


---

##  Variáveis de Ambiente

Crie um arquivo `.env` seguindo o modelo:


OPENWEATHER_KEY=SUA_CHAVE_AQUI
PORT=3001

DB_HOST=localhost
DB_PORT=5433
DB_USER=postgres
DB_PASS=postgres123
DB_NAME=gnclima


---

##  Execução com Docker (Recomendado)

##  Subir containers

```bash
docker compose up -d --build


2️ Verificar containers ativos
docker ps

3️ Parar containers
docker compose down


- Execução sem Docker (opcional)

1️ Instalar dependências
npm install

2️ Subir servidor
npm start



- Endpoints
- Buscar clima por cidade
GET http://localhost:3001/weather?city=São Paulo

{
  "cidade": "São Paulo",
  "temperatura": 26.5,
  "umidade": 72,
  "descricao": "céu limpo"
}


- Histórico de consultas
GET http://localhost:3001/weather/history



- Coleção Postman

O arquivo gnclima.postman_collection.json contém duas requisições prontas:

GET /weather?city=São Paulo

GET /weather/history

Importe no Postman para testar rapidamente.



- Banco de Dados

A API armazena cada consulta realizada em uma tabela WeatherData com:

Campo	Exemplo
cidade	"São Paulo"
temperatura	24.96
umidade	71
descricao	"nublado"
createdAt / updatedAt	timestamps



Autor
Seu: Paulo Isaque Castro Araújo
Email: pauloisaquecastro@gmail.com

-GitHub: https://github.com/paulo2602
-Meu Portfólio: https://github.com/paulo2602/Meu-Portfolio
