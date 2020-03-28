'use strict';

class Ticket {
    constructor(user, elo) {
        this.user = user;
        this.elo = elo;
    }

    canPlay(token) {
        return Math.abs(this.elo - token.elo) < 100;
    }
}

module.exports = Ticket;