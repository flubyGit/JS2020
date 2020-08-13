import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Pupils from '../models/Pupil';

const models = [User, Pupils];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
