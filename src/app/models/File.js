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
            //const url = process.env.URL || 'http://localhost:3333';
            const url = process.env.URL || 'http://192.168.0.100:3333';

            // return `${process.env.APP_URL}/files/${this.path}`;
            return `${url}/files/${this.path}`;
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
