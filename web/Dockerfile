FROM node:alpine

COPY package.json yarn.lock /app/
RUN cd /app && yarn
COPY . /app/

EXPOSE 8080/tcp
CMD cd /app && /usr/local/bin/yarn start
