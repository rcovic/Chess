'use strict';

const User = require('../../models/user');


module.exports.getUser = async (user, pass) => {
    const result = await User.findOne({
        where : {
            username: user,
            password: pass
        }
    });

    return result;
}


module.exports.existUser = async (username) => {
    const result = await User.findByPk(username);

    return result != null;
}


module.exports.createUser = async (user, pass, email) => {
    await User.create({
        username: user,
        password: pass,
        email: email
    })
}