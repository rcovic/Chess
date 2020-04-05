'use strict';

const tokenHandler = require('./tokenHandler');
const queue = require('./utils/queue/Queue');
const gamesList = require('./utils/game/GamesList');


module.exports.index = function(req, res) {
    res.render('home', { 
        token: res.locals.token,
    });
};


module.exports.startSearch = async (req, res) => {

    if(queue.hasTicket(res.locals.token)) {
        queue.setNewResponse(res.locals.token, res);
        return;
    }

    await queue.searchTicket(res.locals.token, res);
};


module.exports.matchmaking = (req, res) => {
    res.render('search_game');
};


// If the user leave the page without pressing the stop button
// the ticket and the game will be left in queue
// We can take this as an advantage. Background search for games?
module.exports.stopSearch = (req, res) => {
    queue.stopMatchmaking(res.locals.token);
    res.redirect("/game");
}


module.exports.isMyGameMiddleware = (req, res, next) => {

    var game = gamesList.getGame(req.params.game_uuid);
    if (game == undefined || !game.hasPlayer(res.locals.token.username)) {
        res.status(400);
        res.send('How do you get here? :)');
    }
    else {
        res.locals.game = game;
        next();
    }
};


module.exports.playGame = (req, res) => {
    res.render('play_game', {
        game: res.locals.game
    })
};