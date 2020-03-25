'use strict';

const jwt = require('jsonwebtoken');

const secretKey = 'SuperSecretChessSpecialKey';


module.exports.decodeToken = (req, res, next) => {
    res.locals.token = jwt.decode(req.cookies.token);
    next();
};


module.exports.createToken = (user) => {
    return jwt.sign({
        user: user
    }, 
    secretKey, {
        // expiresIn: '2h'
    }); 
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
