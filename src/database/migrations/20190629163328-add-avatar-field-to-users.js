module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // tabela que adicionará a coluna
      'users',
      // nome da coluna que irá ser adicionada
      'avatar_id',
      {
        // tipo da coluna que será adicionada
        type: Sequelize.INTEGER,
        // chave estrangeira
        references: {
          // tabela que terá o join
          model: 'files',
          // campo correspondente nas duas tabelas
          key: 'id',
          // caso alterado vai atualizar todas as tabelas
          onUpdate: 'CASCADE',
          // caso deletado vai setar como null
          onDelete: 'SET NULL',
          allowNull: true,
        },
      }
    );
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
