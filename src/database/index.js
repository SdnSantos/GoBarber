// será responsável pela conexão com o banco
import Sequelize from 'sequelize';

// importação dos models
import User from '../app/models/User';

// configurações do banco de dados
import databaseConfig from '../config/database';

// array que receberá todos os models da aplicação
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  // responsável pela conexão com a base de dados
  // e carregar os models
  init() {
    // aqui já tem a conexão com a base de dados
    this.connection = new Sequelize(databaseConfig);

    // .map percorrerá todos os models
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
