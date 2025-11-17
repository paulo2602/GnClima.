# criando imagem docker do meu projeto, necessario para rodae a aplicacao.

FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
