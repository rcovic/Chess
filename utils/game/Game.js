'use strict';

class Game {
    _assignPlayers(user_1, user_2) {
        if (Math.random() >= 0.5) {
            this.white = user_1;
            this.black = user_2;
        } else {
            this.white = user_2;
            this.black = user_1;
        }
    }

    constructor(user_1, user_2) {
        _assignPlayers(user_1, user_2);
    }
}

module.exports = Game;