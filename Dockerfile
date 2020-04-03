FROM node:10-alpine

RUN mkdir -p /home/node/app2/node_modules && chown -R node:node /home/node/app2

WORKDIR /home/node/app2

COPY package*.json ./
COPY public

USER node
RUN apt-get install nginx -y
RUN npm install
RUN npm run build
COPY --chown=node:node . .

EXPOSE 80

CMD [ "nginx" , "-g" , "daemon off;" ]


