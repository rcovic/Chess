'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../controllers/utils/db/connection');

const UserModel = require('./UserModel');

const GameModel = sequelize.define('games', {
    game_uuid: {
        type: DataTypes.UUID,
        primaryKey: true
    }
});

UserModel.hasMany(GameModel, { 
    foreignKey: 'player_1',
    as: 'GamesAsPlayer1' 
});

UserModel.hasMany(GameModel, { 
    foreignKey: 'player_2',
    as: 'GamesAsPlayer2' 
});

module.exports = GameModel;