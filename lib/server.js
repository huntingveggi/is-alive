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

	app.use('/os', require('./is-alive-client-os.js'));
	app.use('/process', require('./is-alive-client-process.js'));
	app.use('/network', require('./is-alive-client-network.js')(io));

	var port = 8080;
	server.listen(port, function () {
		console.log('Server is listen on port ' + port);
	});

	io.on('connection', function (socket) {
		socket.emit('news', {
			hello: 'world'
		});
		socket.on('my other event', function (data) {
			console.log(data);
		});
	});

	var Schedular = require('./io-scheduler.js');

	console.log(Schedular);

	var test = Schedular();

	var sc1 = Schedular('news')
	.io(io)
	.handler(function () {
		return {handler:'me'};
	})
	.start();

}());
