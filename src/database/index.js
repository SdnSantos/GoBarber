// será responsável pela conexão com o banco
import Sequelize from 'sequelize';
import mongoose from 'mongoose';

// importação dos models
import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

// configurações do banco de dados
import databaseConfig from '../config/database';

// array que receberá todos os models da aplicação
const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  // responsável pela conexão com a base de dados
  // e carregar os models
  init() {
    // aqui já tem a conexão com a base de dados
    this.connection = new Sequelize(databaseConfig);

    // .map percorrerá todos os models
    models
      .map(model => model.init(this.connection))
      // só chamará o associate caso existir, por isso o &&
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
