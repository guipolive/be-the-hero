const knex = require('knex'); // importando o banco de dados
const configuration = require('../../knexfile'); // importando o arquivo de configurações do banco

const connection = knex(configuration.development); // fazendo a conexão de acordo com as configurações do ambiente development do arquivo de configurações

module.exports = connection; // exportando nossa conexão para que sempre que alguma parte do nosso backend precisar enviar ou buscar informações do banco, use essa variável