FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV DEBUG=playground:*

CMD nodemon -L index.js