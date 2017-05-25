var Sequelize = require('sequelize');
var db = require('../config/databaseConfig');

var UserTable = db.define('user', {
  name: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  age: Sequelize.INTEGER
});

db.sync({ force: true });

module.exports = UserTable;
