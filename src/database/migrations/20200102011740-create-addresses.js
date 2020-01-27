'use strict';
// variaveis tipo underscored: nome_da_variavel
module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('addresses', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id'}, // model é a tabela referenciada e key é o campo references faz a chave estrangeira
          onUpdate: 'CASCADE', // cascade: se na tabela users o id for alterado ou deletado, aqui tbm é
          onDelete: 'CASCADE',

        },
        zipcode: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        street: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        number: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('addresses');
  }
};
