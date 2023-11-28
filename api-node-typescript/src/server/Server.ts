import express from 'express';

import {router} from './routes/index'

const server = express();

server.use(express.json()); // apenas para console

server.use(router);


export { server };