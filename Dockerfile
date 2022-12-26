FROM node:18-alpine

WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build

EXPOSE $PORT
CMD ["node", "dist/src/index.js"]