'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db/connection');


module.exports = sequelize.define('users', {
    username: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    elo: {
        type: DataTypes.INTEGER,
        defaultValue: 1000
    }
});