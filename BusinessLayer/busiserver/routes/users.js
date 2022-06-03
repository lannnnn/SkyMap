var express = require('express');
var router = express.Router();
const busiMng = require('../public/javascripts/busiMng');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/processLevel', function(req, res, next) {
  var level = busiMng.processLevel(req.query.lightPol);
  res.send(level)
});

router.get('/processMessage', function(req, res, next) {
  var message = busiMng.processMessage(2, req.query.min);
  res.send(message)
});

module.exports = router;
