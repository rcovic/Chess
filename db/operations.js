const {Sequelize, sequelize} = require('./connection');
const User = require('../models/user');
const Op = Sequelize.Op;


module.exports.validCred = async (user, pass) => {
    const results = await User.findAll({
        where : {
            username: user,
            password: pass
        }
    });

    return results.length;
}


module.exports.existUser = async function existUser(user) {
    const results = await User.findAll({
        where: {
            username: user
        }
    });

    return results.length;
}


module.exports.createUser = async (user, pass, email) => {
    try {
        await User.create({
            username: user,
            password: pass,
            email: email
        });
    }
    catch (err) {
        return false;
    }
    return true;
}