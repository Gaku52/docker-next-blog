FROM node:16.13.1-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN npm install

CMD ["npm", "dev"]