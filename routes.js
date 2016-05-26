var User = require('./users.js');
var mongo = require('mongodb');

require('./passport.js');
module.exports = function(app, passport) {
  app.get('/', function(req, res) {
    res.render('index.ejs');
  });

};
