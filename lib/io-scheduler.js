(function (module) {
	"use strict";

	var _io;
	var _handler;
	var _run = false;

	function Scheduler(name) {

    var _name = name;

		function _first() {
			if (_run) {
				setTimeout(function () {
					_io.emit(_name, _handler());
					_second();
				}, 2000);
			}
		}

		function _second() {
			if (_run) {

				setTimeout(function () {
					_io.emit(_name, _handler());
					_first();
				}, 2000);
			}
		}


    var schedular = {};

		schedular.start = function() {
			if (_run === false && _handler) {
				_run = true;
				_first();
			}
		}

		schedular.stop = function() {
			_run = false;
		};

    schedular.handler = function(handler) {
      _handler = handler;
    }

    schedular.io = function(io) {
      _io = io;
    }

    return schedular;


	};



	module.exports =  Scheduler;

}(module));
