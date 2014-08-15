(function (module) {
	"use strict";

	var _handler;
	var _run = false;
  var _interval = 3000;

	function Sensor() {

		function _first() {
			if (_run) {
				setTimeout(function () {
					_handler();
					_second();
				}, _interval);
			}
		}

		function _second() {
			if (_run) {
				setTimeout(function () {
					_handler();
					_first();
				}, _interval);
			}
		}


    var sensor = {};

		sensor.start = function() {
			if (_run === false && _handler) {
				_run = true;
				_first();
			}
      return this;
		};

    sensor.interval = function(interval) {
      _interval = interval;
      return this;
    };

		sensor.stop = function() {
			_run = false;
      return this;
		};

    sensor.handler = function(handler) {
      _handler = handler;
      return this;
    }

    return sensor;


	};

	module.exports =  Sensor;

}(module));
