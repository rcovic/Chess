'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const User = require('./user');


const Game = sequelize.define('games', {
    duration: DataTypes.INTEGER,
    state: DataTypes.JSON
});

User.hasMany(Game, {
    foreignKey: 'whitePlayer'
});
Game.belongsTo(User, {
    foreignKey: 'whitePlayer'
});

User.hasMany(Game, {
    foreignKey: 'blackPlayer'
});
Game.belongsTo(User, {
    foreignKey: 'blackPlayer'
});

module.exports = Game;