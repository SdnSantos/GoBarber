import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      // 1º Parâmetro
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      // 2º Parâmetro
      {
        sequelize,
      }
    );
    return this;
  }
}

export default File;
