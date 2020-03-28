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
        // crea un instanza game nel db con foreign key ai giocatori?
        // aggiunge la chiave al token?
        // come notifico l'utente?
        // l'utente chiede periodicamente se la partita è trovata?
    }

    deleteGame(uuid_key) {
        this.games.delete(uuid_key);
    }
}

var gamesList = new GamesList();

module.exports = gamesList;