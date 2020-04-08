'use strict';

const sequelize = require('./connection');
const UserModel = require('../../../models/UserModel');
const GameModel = require('../../../models/GameModel');


sequelize.drop();
sequelize.sync({force: true})