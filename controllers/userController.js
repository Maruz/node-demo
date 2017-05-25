var User = require('../models/userModel');

module.exports = {
  create: function(req, res) {
    if (!req.body) {
      return res.send(400);
    }
    return User.create({
      name: req.body.name,
      age: req.body.age
    })
    .then(function(result) {
      return res.send(result.get({
        plain: true
      }));
    })
    .catch(function(error) {
      return res.status(400).send(error.errors);
    });
  },
  readAll: function(req, res) {
    User.findAll()
      .then(function(result) {
        return res.send(result);
      });
  },
  read: function(req, res) {
    var name = req.params.id;
    User.find({
      where: {
        name: name
      }
    })
    .then(function(result) {
      return res.send(result.get({
        plain: true
      }));
    })
    .catch(function(error) {
      return res.status(400).send(error.errors);
    });
  }
};
