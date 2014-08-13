(function () {
	"use strict";

	var express = require('express');
  var sugar = require('sugar');

	var app = express();

  var router1 = require('./is-alive-client.js');
  app.use(router1);

  var port = 8080;
  app.listen(port, function () {
    console.log('Server is listen on port ' + port);
  });




}());
