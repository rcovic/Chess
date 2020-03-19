const {Sequelize, sequelize} = require('./connection');

const User = sequelize.define('users', {
    username: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    password: Sequelize.STRING,
    email: Sequelize.STRING
}, {
    // options
});

module.exports.User = User;