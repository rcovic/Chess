const www = require('./www');
const io = require('socket.io')(www.server);

exports.io = io;