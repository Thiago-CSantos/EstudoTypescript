import express from 'express';

const server = express();

server.get('/', (request, response) => {
      return response.send("Ola Mundo!");
});


export { server };