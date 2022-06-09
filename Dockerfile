FROM node:16.13-buster

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY tsconfig.json ./

RUN yarn

COPY ./public ./public
COPY ./src ./src

RUN yarn run build

EXPOSE 3000

CMD yarn run start-prod
