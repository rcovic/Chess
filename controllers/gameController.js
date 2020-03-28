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


module.exports.searchGame = async (req, res) => {
// 1 PROBLEM! must implement long polling on the client.
// also the browser after a while will make the request again
// if the ticket is not removed the palyer will be matched
// with itself

// 2 PROBLEM! if a user start a ticket request and leave the page?
// you must remove the ticket
// add to game route the removeticket middleware ?
// THIS COULD SOLVE THE FIRST PROBLEM BUT IS NOT ELEGANT

    var game_uuid = queue.searchTicket(res.locals.token);

    while(!gamesList.isReady(game_uuid)) {
        await sleep(1000);
    }

    res.json({game_uuid: game_uuid});
};


module.exports.match = (req, res) => {
    res.render('search-game');
};