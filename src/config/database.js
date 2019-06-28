module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    // cria as colunas createdAt e updateAt no banco de dados
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
