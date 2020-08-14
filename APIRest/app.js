import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import { resolve } from 'path';
import users from './src/routes/users';
import tokens from './src/routes/tokens';
import pupils from './src/routes/pupils';
import home from './src/routes/home';
import photo from './src/routes/photo';
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
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/users', users);
    this.app.use('/tokens', tokens);
    this.app.use('/pupils', pupils);
    this.app.use('/home', home);
    this.app.use('/photos', photo);
  }
}

export default new App().app;
