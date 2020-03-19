const {Sequelize, sequelize} = require('../db/connection');


module.exports = sequelize.define('users', {
    username: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    password: Sequelize.STRING,
    email: Sequelize.STRING
});