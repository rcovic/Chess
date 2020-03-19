const {Sequelize, sequelize} = require('../db/connection');

const User = require('./user');


module.exports = sequelize.define('games', {
    white: {
        type: Sequelize.STRING,
        references: {
            model: User,
            key: 'username'
        }
    },
    black: {
        type: Sequelize.STRING,
        references: {
            model: User,
            key: 'username'
        }
    },
    duration: Sequelize.INTEGER,
    state: Sequelize.JSON
});