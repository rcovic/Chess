'use strict';

const Ticket = require('./Ticket');
const gamesList = require('../game/GamesList');


class Queue {
    constructor() {
        this.queue = new Map();
    }

    
    _addTicket(token) {
        /*
        scelgo l'username come chiave per la lista di attesa
        perchè è univoco e un utente non può fare più code 
        contemporaneamente
        */
        this.queue.set(
            token.username, 
            new Ticket(
                token.username,
                token.elo
            )    
        );
    }

    _removeTicket(key) {
        this.queue.delete(key);
    }

    searchGame(token) {
        var match = undefined;
        /*
        l'iterazione avviene per ordine di inserimento quindi
        è ideale per la coda FIFO di attesa
        */ 
        for (let [username, ticket] of this.queue) {
            if(ticket.canPlay(token)) {
                match = username;
                break;
            }
        }
        
        if (match != undefined) {
            gamesList.addGame(token.username, match)
            this._removeTicket(match);
        }
        else {
            this._addTicket(token);
        }
    }
}

var queue = new Queue();

module.exports = queue;