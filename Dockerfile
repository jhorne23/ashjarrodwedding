FROM node:4.4.7

RUN npm install webpack -g

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm rebuild
RUN webpack -p --progress --config production.webpack.config.js

ENV NODE_ENV=production
ENV PORT=8080
CMD ["/usr/local/bin/node", "./index.js"]
EXPOSE 8080