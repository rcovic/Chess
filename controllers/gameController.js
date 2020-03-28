'use strict';

const tokenHandler = require('./tokenHandler');
const queue = require('../utils/queue/Queue');
const gamesList = require('../utils/game/GamesList');


module.exports.index = function(req, res) {
    res.render('home', { user: res.locals.token.user });
};