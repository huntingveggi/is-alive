(function(module) {
  "use strict";

  var os = require('os');
  var router = require('express').Router();

  router.get('/process', function (req,res,next) {
    // JSON.parse(process.env);
    // var obj = {name:'dennis', age:32};
    var obj = process.env;
    var str = JSON.stringify(obj, null, ' ');
    // console.log(str);
    res.set('Content-Type','application/json');
    res.send(str);
  });

  router.get('/os/cpu', function (req,res,next) {
    // JSON.parse(process.env);
    // var obj = {name:'dennis', age:32};
    var obj = os.cpus();
    var str = JSON.stringify(obj, null, ' ');
    // console.log(str);
    res.set('Content-Type','application/json');
    res.send(str);
  });

  router.get('/os/network', function (req,res,next) {
    // JSON.parse(process.env);
    // var obj = {name:'dennis', age:32};
    var obj = os.networkInterfaces();
    var str = JSON.stringify(obj, null, ' ');
    // console.log(str);
    res.set('Content-Type','application/json');
    res.send(str);
  });


  module.exports = router;

}(module));
