var app = require('./app')(require('express')());

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
