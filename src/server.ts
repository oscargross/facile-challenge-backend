
import 'reflect-metadata'; 
require("dotenv").config(); 
import express from 'express';
import cors from 'cors';
import routes from './routes/index';
const bodyParser  = require('body-parser');

import './database';

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(process.env.PORT || 8080, () => {
  console.log('Server => port 8080');
});
