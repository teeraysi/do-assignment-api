const dotenv = require('dotenv');
dotenv.config();

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import { Request, Response } from 'express-serve-static-core';

import { router as scgRouter } from './routers/scg';

function startServer() {
  const port = 7001;
  const app = express();

  // Form URL Encoded parser.
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  // Body parser.
  app.use(bodyParser.json({ limit: '30mb' }));

  // Compression data traffic
  app.use(compression()); // Compress all routes.

  // Routers
  app.use('/api/v1/scg', scgRouter);

  // Catching all response with error signature.
  app.use((err: any, req: Request, res: Response, next) => {

    res.header('Access-Control-Allow-Origin', '*');

    if (Array.isArray(err)) {
      // Custom Error format [body, statusCode]
      const [body, status] = err;
      res.status(status).json(body);
    } else {
      const statusCode = err.status || 500;
      res.status(statusCode).json(err.message);
    }
  });


  app.listen(port, function () {
    console.log(`${'\u2705'}  Server starting http://localhost:${port}`);
  });
}

/* Entry Point */
startServer();
