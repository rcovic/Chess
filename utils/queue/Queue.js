'use strict';

const Ticket = require('./Ticket');
const gamesList = require('../game/GamesList');


class Queue {
    constructor() {
        this.queue = [];
    }

    
    _addTicket(token) {
        this.queue.push( 
            new Ticket(
                token.username,
                token.elo
            )    
        );
    }

    _removeTicket(index) {
        this.queue.splice(index, 1);
    }

    searchGame(token) {
        
        var index = this.queue.findIndex((el) => {
            return el.canPlay(token);
        });

        if (index != undefined) {
            let username = queue[index].username;
            this._removeTicket(index);
            gamesList.addGame(token.username, username)
        }
        else {
            this._addTicket(token);
        }
    }
}

var queue = new Queue();

module.exports = queue;