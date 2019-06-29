import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      // 1º Parâmetro
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          // como será formatado esse valor
          get() {
            return `http://localhost:3333/files/${this.path}`;
          },
        },
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
