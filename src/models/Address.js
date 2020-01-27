const { Model, DataTypes } = require('sequelize');

class Address extends Model{
    static init(sequelize){
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize, // sequelize é a conexão ( ver onde init é chamada)
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' });//belongsTo endereço pertence a models.User
        //  passa qual o campo da chave estrangeira e um nome pra essa relacao, owner = dono
    }
}

module.exports = Address;