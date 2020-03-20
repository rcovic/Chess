const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');


module.exports = sequelize.define('users', {
    username: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: DataTypes.STRING,
    email: DataTypes.STRING
});