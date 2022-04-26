FROM node:17-alpine

WORKDIR /app

# first we copy the package json so the RUN npm i step can be cached
COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
