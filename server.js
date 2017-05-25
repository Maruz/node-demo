var express = require('express');
var bodyParser = require('body-parser');

var logger = require('./middleware/logger');

var app = express();

var port = 1337;

app.use(logger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);

app.listen(port);
console.log('Application is running on port ' + port);
