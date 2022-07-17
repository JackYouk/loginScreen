const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Login extends Model {}

Login.init(
    {
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'login',
    }
);

module.exports = Login;