FROM node:22.16.0

WORKDIR /myapi

COPY package*.json ./

RUN npm install

COPY . .

CMD npm start