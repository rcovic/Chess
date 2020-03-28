'use strict';

const { v4:uuidv4 } = require('uuid');

const Ticket = require('./Ticket');
const gamesList = require('../game/GamesList');


class Queue {
    constructor() {
        this.queue = [];
    }

    _addTicket(token, game_uuid) {
        this.queue.push( 
            new Ticket(
                token.username,
                token.elo,
                game_uuid
            )    
        );
    }

    removeTicket(index) {
        this.queue.splice(index, 1);
    }

    hasTicket(username) {
        return this.queue.findIndex((el) => {
            return el.username == username;
        });
    }

    searchTicket(token) {
        
        var index = this.queue.findIndex((el) => {
            return el.canPlay(token);
        });

        if (index != undefined && index != -1) {
            let game_uuid = this.queue[index].game_uuid;
            this.removeTicket(index);
            gamesList.addToGame(game_uuid, token);
            return game_uuid;
        }
        else {
            let game_uuid = uuidv4();
            this._addTicket(token, game_uuid);
            gamesList.createGame(game_uuid, token);
            return game_uuid;
        }
    }
}

var queue = new Queue();

module.exports = queue;