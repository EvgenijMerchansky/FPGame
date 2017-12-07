FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

COPY ./client /usr/src/app/

COPY ./server /usr/src/app/

EXPOSE 9000

CMD [ "npm", "run", "start-server" ]
