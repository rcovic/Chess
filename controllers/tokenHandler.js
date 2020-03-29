'use strict';

const jwt = require('jsonwebtoken');

const secretKey = 'SuperSecretChessSpecialKey';


module.exports.decodeToken = (req, res, next) => {
    res.locals.token = jwt.decode(req.cookies.token);
    next();
};


module.exports.setToken = (res, token) => {
    res.cookie('token', token);
};


module.exports.addToToken = (token, game_uuid) => {
    token.games.push(game_uuid);
    return jwt.sign(
        token,
        secretKey,
        {
            // expiresIn: '2h'
        }
    );
};

// to add : read db for game instance for consistency between logins
module.exports.createToken = (user) => {
    return jwt.sign(
        {
            username: user.username,
            elo: user.elo,
            games: []
        }, 
        secretKey,
        {
            // expiresIn: '2h'
        }
    ); 
};


module.exports.verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    try {
        jwt.verify(token, secretKey);
        next();
    }
    catch (err) {
        res.redirect('/auth');
    }
};


module.exports.hasToken = (req, res, next) => {
    const token = req.cookies.token;

    try {
        jwt.verify(token, secretKey);
        res.redirect('/game');
    }
    catch (err) {
        next();
    }
};
