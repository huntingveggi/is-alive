(function (module) {
	"use strict";

	var _io;
	var _handler;
	var _run = false;
  var _interval = 3000;

	function Scheduler(name) {

    var _name = name;

		function _first() {
			if (_run) {
				setTimeout(function () {
					_io.emit(_name, _handler());
					_second();
				}, _interval);
			}
		}

		function _second() {
			if (_run) {

				setTimeout(function () {
					_io.emit(_name, _handler());
					_first();
				}, _interval);
			}
		}


    var schedular = {};

		schedular.start = function() {
			if (_run === false && _handler) {
				_run = true;
				_first();
			}
      return this;
		};

    schedular.interval = function(interval) {
      _interval = interval;
      return this;
    };



		schedular.stop = function() {
			_run = false;
      return this;
		};

    schedular.handler = function(handler) {
      _handler = handler;
      return this;
    }

    schedular.io = function(io) {
      _io = io;
      return this;
    }

    return schedular;


	};



	module.exports =  Scheduler;

}(module));
