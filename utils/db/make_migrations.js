'use strict';

const sequelize = require('./connection');
const User = require('../../models/user');


sequelize.drop();
sequelize.sync({force: true})