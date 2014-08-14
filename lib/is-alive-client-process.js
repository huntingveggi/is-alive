(function(module) {
  "use strict";

  var router = require('express').Router();

  router.get('/', function (req,res,next) {
    // JSON.parse(process.env);
    // var obj = {name:'dennis', age:32};
    var obj = process.env;
    var str = JSON.stringify(obj, null, ' ');
    // console.log(str);
    res.set('Content-Type','application/json');
    res.send(str);
  });

  module.exports = router;

}(module));
