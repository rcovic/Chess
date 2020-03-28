'use strict';


// un ticket è identificato dall'username, significa che 
// un utente può fare solo un ticket alla volta
// altrimenti intaserebbe la coda

class Ticket {
    constructor(username, elo, game_uuid) {
        this.username = username;
        this.elo = elo;
        this.game_uuid = game_uuid;
    }

    canPlay(token) {
        return Math.abs(this.elo - token.elo) < 100;
    }
}

module.exports = Ticket;