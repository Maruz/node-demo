var userController = require('./controllers/userController');

module.exports = function(app) {
  app.get('/users', userController.readAll);
  app.get('/users/:id', userController.read);
  app.post('/users', userController.create);
};
