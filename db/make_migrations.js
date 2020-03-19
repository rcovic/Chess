const {Sequelize, sequelize} = require('./connection');
const User = require('../models/user');
const Game = require('../models/game');

sequelize.drop();
sequelize.sync({force: true})