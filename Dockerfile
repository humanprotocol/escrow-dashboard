FROM node:16.13-buster

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY ./public ./public
COPY ./src ./src

RUN npm run build

EXPOSE 3000

CMD npm run start-prod
