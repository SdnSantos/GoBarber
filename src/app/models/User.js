import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      // 1º Parâmetro
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      // 2º Parâmetro
      {
        sequelize,
      }
    );
    // addHook são trechos de código que executam
    // automáticamente no model
    // vai gerar o hash da senha
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  // verifica se a senha está correta
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
