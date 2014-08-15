(function (module) {
	"use strict";

	var Sensor = require('./sensor.js');

	var ProcessSensor = function (server) {
		var io = require('socket.io')(server);
		return new Sensor()
			.handler(function () {
				io.emit('process.env', {
					process: {
            env: process.env,
          }
				});
			});
	}

	module.exports = ProcessSensor;

}(module));
