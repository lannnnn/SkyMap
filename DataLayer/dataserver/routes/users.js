var express = require('express');
var router = express.Router();
const dataMng = require('../public/javascripts/dataMng');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/setSunRise', function(req, res, next) {
  if(dataMng.setSunRise(req.query.sunRise)) res.send("200")
  else res.send("500");
});

router.get('/getSunRise', function(req, res, next) {
  var sunrise = dataMng.getSunRise();
  res.send(sunrise)
});

router.get('/setSunSet', function(req, res, next) {
  if(dataMng.setSunSet(req.query.sunSet)) res.send("200")
  else res.send("500");
});

router.get('/getSunSet', function(req, res, next) {
  var sunset = dataMng.getSunSet();
  res.send(sunset)
});

router.get('/setLightPol', function(req, res, next) {
  if(dataMng.setLightPol(req.query.lightPol)) res.send("200")
  else res.send("500");
});

router.get('/getLightPol', function(req, res, next) {
  var sunset = dataMng.getLightPol();
  res.send(sunset)
});

router.get('/setMessage', function(req, res, next) {
  if(dataMng.setMessage(req.query.message)) res.send("200")
  else res.send("500");
});

router.get('/getMessage', function(req, res, next) {
  var sunset = dataMng.getMessage();
  res.send(sunset)
});

router.get('/setComment', function(req, res, next) {
  if(dataMng.setComment(req.query.comment)) res.send("200")
  else res.send("500");
});

router.get('/getComment', function(req, res, next) {
  var sunset = dataMng.getComment();
  res.send(sunset)
});

module.exports = router;
