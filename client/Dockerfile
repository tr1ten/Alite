FROM node:alpine

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
ADD node_modules/ ./
COPY ./ ./
EXPOSE 3000
CMD ["yarn","run","dev"]