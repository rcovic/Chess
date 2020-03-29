'use strict';

const Game = require('./Game');

class GamesList {
    constructor() {
        this.games = new Map();
    }
    

    createGame(game_uuid, token) {
        this.games.set(
            game_uuid,
            new Game(
                game_uuid,
                token.username
            )
        );
    }


    deleteGame(game_uuid) {
        this.games.delete(game_uuid);
    }


    addToGame(game_uuid, token) {
        this.games.get(game_uuid).addPlayer(token.username);
    }
}

var gamesList = new GamesList();

module.exports = gamesList;