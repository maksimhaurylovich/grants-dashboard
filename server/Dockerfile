FROM node:20

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000
CMD [“npm”, “start”]
