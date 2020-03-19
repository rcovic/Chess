const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'chess_db',
    'chess', // user
    'chess', // password
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

/*
// Test  DB connection

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  */

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;