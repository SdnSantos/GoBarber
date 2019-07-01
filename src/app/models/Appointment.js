import Sequelize, { Model } from 'sequelize';
import { isBefore, subHours } from 'date-fns';

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      // 1º Parâmetro
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
        past: {
          type: Sequelize.VIRTUAL,
          get() {
            // verificação se a data já passou
            return isBefore(this.date, new Date());
          },
        },
        cancelable: {
          type: Sequelize.VIRTUAL,
          get() {
            // verificação se está 2h antes do agendamento para cancelar
            return isBefore(new Date(), subHours(this.date, 2));
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

  // relacionamentos
  // quando há dois relacionamentos para a mesma tabela é obrigatório
  // o uso de apelidos com o 'as'
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default Appointment;
