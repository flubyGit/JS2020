import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Pupil from '../models/Pupil';

const models = [Pupil];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
