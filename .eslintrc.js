module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    // vai informar como erro código fora de padrão
    "prettier/prettier": "error",
    // desabilita a obrigatoriedade de todo método de uma classe ter o método this
    "class-methods-use-this": "off",
    // permiti receber um parâmetro e fazer alterações
    "no-param-reassign": "off",
    // não será obrigatório a criação de variáveis deste modo: nossaVariavel
    camelcase: "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }]
  }
};
