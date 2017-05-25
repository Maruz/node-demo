var Sequelize = require('bluebird').promisifyAll(require('sequelize'));
var sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: './db/database.sqlite'
});

module.exports = sequelize;
