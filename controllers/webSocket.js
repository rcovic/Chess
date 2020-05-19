const www = require('../bin/www');
const io = require('socket.io')(www.server);

io.on('connection', (socket) => {
    console.log('connected');
});

exports.io = io;