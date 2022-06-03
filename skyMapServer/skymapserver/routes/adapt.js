var express = require('express');
var router = express.Router();
const adaptMng = require('../public/javascripts/adaptMng');
const busiMng = require('../public/javascripts/busiMng');

/* GET adaptMng */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/processPol', function(req, res, next) {
  var lightPol = adaptMng.processPol(req.query.lightPol);
  res.send(lightPol)
});

router.get('/processMin', function(req, res, next) {
  var min = adaptMng.processMin(req.query.lightPol);
  res.send(min)
});

router.get('/processRange', function(req, res, next) {
  var range = adaptMng.processRange(req.query.lat, req.query.lng);
  res.send(range)
});

router.get('/combinePayload', function(req, res, next) {
  var payload = adaptMng.combinePayload(req.query.lon, req.query.limag, req.query.starnm, req.query.starbm);
  res.send(payload)
});

router.get('/requestUrl', function(req, res, next) {
  var url = adaptMng.requestUrl(req.query.content);
  res.send(url)
});

module.exports = router;
