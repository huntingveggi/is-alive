(function (module) {
	"use strict";

	var router = require('express').Router();
	var sensor = require('./process-sensor.js');
	// var _sensor;


	var _server;

	router.get('/process/env',function (req,res,next) {
		res.json(process.env);
	});

	router.get('/process/env/start',function (req,res,next) {
		sensor(_server).start();
		res.json({message:'Starting sensor'});
	});

	router.get('/process/env/stop',function (req,res,next) {
		sensor(_server).stop();
		res.json({message:'Stopping sensor'});
	});

	module.exports = function (server) {
		_server = server;
		return router;
	};

}(module));
