FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm install -g nodemon

ENV DEBUG=playground:*

CMD ["nodemon", "-L", "./bin/www"]