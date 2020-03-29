'use strict';

const tokenHandler = require('./tokenHandler');
const dbop = require('../utils/db/operations');


module.exports.auth = (req, res) => {
    res.render('auth');
};


module.exports.submitLogin = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await dbop.getUser(username, password);

        if (user) {
            let token = tokenHandler.createToken(user);
            tokenHandler.setToken(res, token);
            res.redirect('/game');
        }
        else {
            res.render('auth', {
                error: 'Wrong username or password'
            });
        }
    } catch(err) {
        res.render('auth', {
            error: 'Error while authentication'
        });
    }
};



module.exports.register = (req, res) => {
    res.render('register');
};


module.exports.submitRegistration = async (req, res) => {
    const {username, password, email} = req.body; 

    try {
        let exists = await dbop.existUser(username);

        if (exists) {
            res.render('register', {
                error: 'Username already taken'
            });
            return;
        }

        await dbop.createUser(username, password, email);

        res.render('register', {
            success: true
        });
    }
    catch(err) {
        res.render('register', {
            error: 'Registration failed'
        })
    }
};