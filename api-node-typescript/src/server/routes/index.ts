import { Router } from "express";
import {StatusCodes} from "http-status-codes";

const router = Router();

router.get('/', (request, response) => {
      return response.send("Ola Mundo!");
});

router.post('/teste', (request, response) => {
      console.log(request);
      
      return response.status(StatusCodes.CONFLICT).json(request.body);
});

export {router};