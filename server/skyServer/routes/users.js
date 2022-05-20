var express = require('express');
var router = express.Router();
const calcSun = require('../public/javascripts/calcSun');
const loadMap = require('../public/javascripts/starMap');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/sunRise', function(req, res, next) {
  var sunRise = calcSun.calcnew(1, req.query.lat, req.query.lng);
  res.send(sunRise)
});

router.get('/sunSet', function(req, res, next) {
  var sunRise = calcSun.calcnew(2, req.query.lat, req.query.lng);
  res.send(sunRise)
});

module.exports = router;
