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

  // fazendo o join entre as tabelas
  static associate(models) {
    // belongsTo pertence a
    // orá salvar um id de arquivo na tabela usuário
    // as é um apelido
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  // verifica se a senha está correta
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
