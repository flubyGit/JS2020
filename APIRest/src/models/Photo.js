import Sequelize, { Model } from 'sequelize';
import constants from '../config/constants';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${constants.url}/images/${this.getDataValue('filename')}`;
        },
      },
    }, { sequelize, tableName: 'photos' });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Pupil, { foreignKey: 'pupile_id' });
  }
}