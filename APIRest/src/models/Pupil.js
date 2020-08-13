import Sequelize, { Model } from 'sequelize';

export default class Pupil extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
      surname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já consta no banco de dados',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido.',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro.',
          },
        },
      },
      weight: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou de casas decimais.',
          },
        },
      },
      height: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número inteiro ou de casas decimais.',
          },
        },
      },
    }, { sequelize });
    return this;
  }
}
