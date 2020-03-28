'use strict';

const tokenHandler = require('./tokenHandler');
const queue = require('../utils/queue/Queue');
const gamesList = require('../utils/game/GamesList');

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

module.exports.index = function(req, res) {
    res.render('home', { username: res.locals.token.username });
};

// on matchmaking request you have to LONG polling on client.
// server check if game is ready every second (?) and respond
// when it's ready --> must be async

// PROBLEM! if a user start a ticket request and leave the page?
// you must remove the ticket
// add to game route the removeticket middleware ?

// this is an example of what it could be
module.exports.searchGame = async (req, res) => {
    var game_uuid = queue.searchTicket(res.locals.token);

    while(!gamesList.isReady(game_uuid)) {
        await sleep(1000);
    }

    // prova
    res.render('game_test', { game_uuid: game_uuid});
};