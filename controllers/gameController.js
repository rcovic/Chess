const tokenHandler = require('./tokenHandler');


module.exports.index = function(req, res) {
    res.render('home', { user: res.locals.token.user });
};