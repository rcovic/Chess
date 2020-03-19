const tokenHandler = require('./tokenHandler');


module.exports.auth = (req, res) => {
    res.render('auth', { title: 'Authentication Page'});
};


module.exports.submitLogin = (req, res) => {
    if (true/* verifica credenziali */) {
        token = tokenHandler.createToken(req.body.username);
        res.cookie('token', token);
        res.redirect('/game');
    }
    else {
        res.render('auth', {
            title: 'Authentication Page',
            error: 'Wrong username or password'
        });
    }
};



module.exports.register = (req, res) => {
    res.render('register', {title: 'Registration'});
};


module.exports.submitRegistration = (req, res) => {
    if (true/* Registration successfull */) {
        res.render('register', {
            title: 'Registration',
            success: true
        });
    }
    else {
        res.render('register', {
            title: 'Registration',
            error: 'Username already taken'
        });
    }
};