'use strict';

const tokenHandler = require('./tokenHandler');
const dbop = require('./utils/db/operations');


module.exports.auth = (req, res) => {
    res.render('auth');
};


module.exports.submitLogin = async (req, res) => {
    const {username, password} = req.body;
    
    const user = await dbop.getUser(username, password);

    if (user == -1) {
        res.render('auth', {
            error: 'Error while authentication'
        });
    }
    else if (user == undefined) {
        res.render('auth', {
            error: 'Wrong username or password'
        });
    } 
    else {
        const games = [...dbop.modelsGen(await dbop.getGames(user))];
        let token = tokenHandler.createToken(user, games);
        tokenHandler.setToken(res, token);
        res.redirect('/game');
    }
};



module.exports.register = (req, res) => {
    res.render('register');
};


module.exports.submitRegistration = async (req, res) => {
    const {username, password, email} = req.body; 

    let exists = await dbop.existUser(username);

    if (exists) {
        res.render('register', {
            error: 'Username already taken'
        });
        return;
    }

    let created = await dbop.createUser(username, password, email);

    if (created == undefined) {
        res.render('register', {
            error: 'Registration failed'
        })
    }
    else {
        res.render('register', {
            success: true
        });
    }
};