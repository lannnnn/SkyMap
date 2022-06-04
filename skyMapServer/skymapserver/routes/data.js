var express = require('express');
var router = express.Router();
const dataMng = require('../public/javascripts/dataMng');

/* GET dataMng */
/**
 * @api {get} http://localhost:3003/data/setSunRise setSunRise
 * @apiDescription set the sunrise time
 * @apiName setSunRise
 * @apiGroup data layer
 * @apiParam {String} sunrise time
 *
 * @apiSuccess {String} res state code for susscess or failure
 * @apiSuccessExample {String} Success-Response:
 *  {
 *      "200"
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/setSunRise', function(req, res, next) {
  if(dataMng.setSunRise(req.query.sunRise)) res.send("200")
  else res.send("500");
});

/**
 * @api {get} http://localhost:3003/data/getSunRise setSunRise
 * @apiDescription get the sunrise time
 * @apiName getSunRise
 * @apiGroup data layer
 *
 * @apiSuccess {String} res sunrise time
 * @apiSuccessExample {String} Success-Response:
 *  {
 *      "04:15 UTC"
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/getSunRise', function(req, res, next) {
  var sunrise = dataMng.getSunRise();
  res.send(sunrise)
});

/**
 * @api {get} http://localhost:3003/data/setSunSet setSunSet
 * @apiDescription set the sunset time
 * @apiName setSunSet
 * @apiGroup data layer
 * @apiParam {String} sunset time
 *
 * @apiSuccess {String} res state code for susscess or failure
 * @apiSuccessExample {String} Success-Response:
 *  {
 *      "200"
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/setSunSet', function(req, res, next) {
  if(dataMng.setSunSet(req.query.sunSet)) res.send("200")
  else res.send("500");
});

/**
 * @api {get} http://localhost:3003/data/getSunSet getSunSet
 * @apiDescription get the sunset time
 * @apiName getSunSet
 * @apiGroup data layer
 *
 * @apiSuccess {String} res sunset time
 * @apiSuccessExample {String} Success-Response:
 *  {
 *      "20:42 UTC"
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/getSunSet', function(req, res, next) {
  var sunset = dataMng.getSunSet();
  res.send(sunset)
});

/**
 * @api {get} http://localhost:3003/data/setLightPol setLightPol
 * @apiDescription set the light pollution data
 * @apiName setLightPol
 * @apiGroup data layer
 * @apiParam {String} light pollution data
 *
 * @apiSuccess {String} res state code for susscess or failure
 * @apiSuccessExample {String} Success-Response:
 *  {
 *      "200"
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/setLightPol', function(req, res, next) {
  if(dataMng.setLightPol(req.query.lightPol)) res.send("200")
  else res.send("500");
});

/**
 * @api {get} http://localhost:3003/data/getLightPol getLightPol
 * @apiDescription get the light pollution data
 * @apiName getLightPol
 * @apiGroup data layer
 *
 * @apiSuccess {String} res sunset time
 * @apiSuccessExample {String} Success-Response:
 *  {
 *      "44.5"
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/getLightPol', function(req, res, next) {
  var sunset = dataMng.getLightPol();
  res.send(sunset)
});

/**
 * @api {get} http://localhost:3003/data/setMessage setMessage
 * @apiDescription set the message
 * @apiName setMessage
 * @apiGroup data layer
 * @apiParam {String} message
 *
 * @apiSuccess {String} res state code for susscess or failure
 * @apiSuccessExample {String} Success-Response:
 *  {
 *      "200"
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/setMessage', function(req, res, next) {
  if(dataMng.setMessage(req.query.message)) res.send("200")
  else res.send("500");
});

/**
 * @api {get} http://localhost:3003/data/getMessage getMessage
 * @apiDescription get the message
 * @apiName getMessage
 * @apiGroup data layer
 *
 * @apiSuccess {String} res message
 * @apiSuccessExample {String} Success-Response:
 *  {
 *      ”The light pollution here within 5km is pretty heavy . . . ”
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/getMessage', function(req, res, next) {
  var sunset = dataMng.getMessage();
  res.send(sunset)
});

/**
 * @api {get} http://localhost:3003/data/setComment setComment
 * @apiDescription set the comment
 * @apiName setComment
 * @apiGroup data layer
 * @apiParam {String} comment
 *
 * @apiSuccess {String} res state code for susscess or failure
 * @apiSuccessExample {String} Success-Response:
 *  {
 *      "200"
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/setComment', function(req, res, next) {
  if(dataMng.setComment(req.query.comment)) res.send("200")
  else res.send("500");
});

/**
 * @api {get} http://localhost:3003/data/getComment getComment
 * @apiDescription get the comment
 * @apiName getComment
 * @apiGroup data layer
 *
 * @apiSuccess {String} res comment
 * @apiSuccessExample {String} Success-Response:
 *  {
 *      ”Not a suitable star gazing position . . .”
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/getComment', function(req, res, next) {
  var sunset = dataMng.getComment();
  res.send(sunset)
});

module.exports = router;
