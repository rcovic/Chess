const {Sequelize, sequelize} = require('./connection');
const User = require('./user');

sequelize.drop();
sequelize.sync();