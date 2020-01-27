const { Model, DataTypes } = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            // age: DataTypes.DATE,
        }, {
            sequelize, // sequelize é a conexão ( ver onde init é chamada)
        });
    }
}

module.exports = User;