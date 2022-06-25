import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as morgan from 'morgan';

import api from './api';

import * as expressListRoutes from 'express-list-routes';
const app = express();

app.use(cors());
app.use(
  morgan(
    '[LOGGER] :method PATH=":url" STATUS_CODE=:status RESPONSE_LENGHT=:res[content-length] - :response-time ms',
    {
      stream: { write: (msg) => console.log(msg) },
    },
  ),
);
app.use(bodyParser.json({ limit: '10mb' }));
app.use(api);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Aplicação - Ativa :D | ${port}`);
  expressListRoutes(app, { prefix: '' });
});
