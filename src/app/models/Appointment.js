import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      // 1º Parâmetro
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },
      // 2º Parâmetro
      {
        sequelize,
      }
    );
    return this;
  }

  // relacionamentos
  // quando há dois relacionamentos para a mesma tabela é obrigatório
  // o uso de apelidos com o 'as'
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default Appointment;
