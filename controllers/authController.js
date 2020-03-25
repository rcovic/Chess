'use strict';

const tokenHandler = require('./tokenHandler');
const dbop = require('../db/operations');


module.exports.auth = (req, res) => {
    res.render('auth');
};


module.exports.submitLogin = async (req, res) => {
    const {username, password} = req.body;

    const isValid = await dbop.validCred(username, password);

    if (isValid) {
        let token = tokenHandler.createToken(req.body.username);
        res.cookie('token', token);
        res.redirect('/game');
    }
    else {
        res.render('auth', {
            error: 'Wrong username or password'
        });
    }
};



module.exports.register = (req, res) => {
    res.render('register');
};


module.exports.submitRegistration = async (req, res) => {
    const {username, password, email} = req.body; 

    if (await dbop.existUser(username)) {
        res.render('register', {
            error: 'Username already taken'
        });
    }
    else if (await dbop.createUser(username, password, email)) {
        res.render('register', {
            success: true
        });
    }
    else {
        res.render('register', {
            error: 'Registration failed'
        })
    }
};