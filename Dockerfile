FROM node:9-slim
WORKDIR /cli-analytics
COPY package.json /cli-analytics
RUN npm install
COPY . /cli-analytics
CMD ["npm", "start"]
