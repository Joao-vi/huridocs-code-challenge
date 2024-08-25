FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 4173

CMD ["yarn", "preview", "--host"]

