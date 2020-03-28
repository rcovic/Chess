'use strict';

const { v4:uuidv4 } = require('uuid');
const Game = require('./Game');

class GamesList {
    constructor() {
        this.games = new Map();
    }

    addGame(user_1, user_2) {
        
        uuid_key = uuidv4(); 

        this.games.set(
            uuid_key,
            new Game(
                user_1,
                user_2
            )
        );

        // ritorna la chiave?
    }
}

var gamesList = new GamesList();

module.exports = gamesList;