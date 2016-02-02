var express = require('express');
var routes = require('./routes');

var app = module.exports = express.createServer();

// Routes
app.use('/pay_page', routes.pay_page);
app.use('/notify_page',routes.notify_page);
app.use('/return_page',routes.return_page);

app.listen(3000, function() {
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
