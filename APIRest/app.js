import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import users from './src/routes/users';
import tokens from './src/routes/tokens';

import './src/database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users', users);
    this.app.use('/tokens', tokens);
  }
}

export default new App().app;
