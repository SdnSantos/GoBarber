// será responsável pela conexão com o banco
import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

// array que receberá todos os models da aplicação
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // .map percorrerá todos os models
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
