(function () {
	"use strict";

	var express = require('express');
	var serveStatic = require('serve-static');
	var sugar = require('sugar');

	var app = express();
	var server = require('http').Server(app);
	var io = require('socket.io')(server);

	app.use(serveStatic('./html', {
		'index': ['index.html', 'index.htm']
	}));

	var processSensorRouter = require('./process-sensor-router')(server);
	app.use(processSensorRouter);



	var port = 8080;
	server.listen(port, function () {
		console.log('Server is listen on port ' + port);
	});

	// io.on('connection', function (socket) {
	// 	socket.emit('news', {
	// 		hello: 'world'
	// 	});
	// 	socket.on('my other event', function (data) {
	// 		console.log(data);
	// 	});
	// });

	// var Sensor = require('./sensor.js');
	//
	// new Sensor()
	// .handler(function () {
	// 	io.emit('news', {message: 'Hello World!'});
	// })
	// .start();

	// var sensor1 = require('./process-sensor.js');
	// sensor1(server).start();

}());
