const jwt = require('jsonwebtoken');

const secretKey = 'SuperSecretChessSpecialKey';


function verifyToken(token) {
    return jwt.verify(token, secretKey);
};


module.exports.verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token || !verifyToken(token)) {
        res.redirect('/auth');
    }
    else {
        next();
    } 
};


module.exports.createToken = (user) => {
    return jwt.sign({user: user}, secretKey, { expiresIn: '2h'}); 
};