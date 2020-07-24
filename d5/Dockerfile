FROM node:14.5.0-alpine3.12

WORKDIR /src/

COPY . /src/

RUN apk add bash
RUN npm i -g @nestjs/cli
RUN npm run build

CMD [ "npm", "run", "start" ]