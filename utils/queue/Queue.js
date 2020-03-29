'use strict';

const { v4:uuidv4 } = require('uuid');

const tokenHandler = require('../../controllers/tokenHandler');
const Ticket = require('./Ticket');
const gamesList = require('../game/GamesList');


class Queue {
    constructor() {
        // map instead of object beacause it remember insertion order
        this.queue = new Map();
    }


    _addTicket(token, game_uuid, res) {
        this.queue.set(
            token.username, 
            new Ticket(
                token.username,
                token.elo,
                game_uuid,
                res
            )    
        );
    }


    _removeTicket(username) {
        this.queue.delete(username);
    }


    stopMatchmaking(token) {
        gamesList.deleteGame(this.queue.get(token.username).game_uuid);
        this._removeTicket(token.username);
    }

    hasTicket(token) {
        return this.queue.get(token.username) != undefined;
    }


    _existsOpponent(token) {
        for (let [username, ticket] of this.queue) {
            if(ticket.canPlay(token))
                return username;
        }
        return undefined;
    }


    searchTicket(token, res) {
        var opponent = this._existsOpponent(token);

        if (opponent != undefined) {
            let ticket = this.queue.get(opponent);
            this._removeTicket(opponent);
            gamesList.addToGame(ticket.game_uuid, token);
            this._notifyGameReady(res, ticket.res, ticket.game_uuid);
        }
        else {
            let game_uuid = uuidv4();
            this._addTicket(token, game_uuid, res);
            gamesList.createGame(game_uuid, token);
        }
    }

    // to add : add game to user in db for consistency between logins
    _notifyGameReady(res1, res2, game_uuid) {
        
        tokenHandler.setToken(res1, tokenHandler.addToToken(res1.locals.token, game_uuid));
        res1.send({ game_uuid: game_uuid });

        tokenHandler.setToken(res2, tokenHandler.addToToken(res2.locals.token, game_uuid));
        res2.send({ game_uuid: game_uuid });
    }

    
    setNewResponse(token, res) {
        this.queue.get(token.username).res = res;
    }
}

var queue = new Queue();

module.exports = queue;