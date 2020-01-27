const Sequelize = require('sequelize'); // é uma classe

const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);

Address.associate(connection.models); // models contem todos os objetos da conexao, pois isso é feito no init

module.exports = connection;