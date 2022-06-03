var express = require('express');
var router = express.Router();
const adaptMng = require('../public/javascripts/adaptMng');
const busiMng = require('../public/javascripts/busiMng');

/* GET adaptMng */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/**
 * @api {get} http://localhost:3003/adapt/processPol processPol
 * @apiDescription process the returen value from light pollution API to get the light pollution infomation
 * @apiName processPol
 * @apiGroup adapt layer
 * @apiParam (body) {String} lightPol return value from light pollution API
 *
 * @apiSuccess {String} res light pollution level in chosen position
 * @apiSuccessExample {json} Success-Response:
 *  {
 *     "44.6"
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/processPol', function(req, res, next) {
  var lightPol = adaptMng.processPol(req.query.lightPol);
  res.send(lightPol)
});

/**
 * @api {get} http://localhost:3003/adapt/processMIn processMin
 * @apiDescription process the returen value from light pollution API to get the message about the region
 * @apiName processMin
 * @apiGroup adapt layer
 * @apiParam (body) {String} lightPol return value from light pollution API
 *
 * @apiSuccess {String} res minimal light pollution level nearby
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "1.3"
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/processMin', function(req, res, next) {
  var min = adaptMng.processMin(req.query.lightPol);
  res.send(min)
});

/**
 * @api {get} http://localhost:3003/adapt/processRange processRange
 * @apiDescription format the location infomation to the LINESPACE format which will be used latter when query the light pollution API 
 * @apiName processRange
 * @apiGroup adapt layer
 * @apiParam {Number} latitude
 * @apiParam {Number} longitude
 *
 * @apiSuccess {String} res processed range info
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "LINESTRING(14.073893777845102%2046.051465432555204,14.130198921900401%2046.086718281761705,14.227702951849816%2046.011421399400916,14.073893777845102%2046.051465432555204)"
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/processRange', function(req, res, next) {
  var range = adaptMng.processRange(req.query.lat, req.query.lng);
  res.send(range)
});

/**
 * @api {get} http://localhost:3003/adapt/combinePayload combinePayload
 * @apiDescription process the user customized info into the payload which will be used to require star map
 * @apiName combinePayload
 * @apiGroup adapt layer
 * @apiParam {Obj} lon 
 * @apiParam {Obj} limag
 * @apiParam {Obj} starnm
 * @apiParam {Obj} starbm
 *
 * @apiSuccess {String} res combined payload
 * @apiSuccessExample {json} Success-Response:
 *       "date=0&lon=3.5&coords=on&moonp=on&deep=on&deepm=6.5&consto=on&constn=on&constb=on&limag=6&starn=on&starnm=3&starb=on&starbm=5&showmb=-1.5&showmd=6.0&imgsize=512&fontscale=1.0&scheme=0&elements="
 * 
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/combinePayload', function(req, res, next) {
  console.log(req.query)
  var payload = adaptMng.combinePayload(req.query.lon, req.query.limag, req.query.starnm, req.query.starbm);
  console.log(payload)
  res.send(payload)
});

/**
 * @api {get} http://localhost:3003/adapt/requestUrl requestUrl
 * @apiDescription abstract the map url from the return message of star map
 * @apiName requestUrl
 * @apiGroup adapt layer
 * @apiParam {String} obj return from starmap API
 *
 * @apiSuccess {String} res abstracted url
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "Yourtel?di=913F9CCB5E540BD4F12430AEB6D8DD057490F4AA180919E7CC19D960057C674A2E360F653C06B818D66E0A2796CFEFF348108A10484695DD9266F43DAE1630C0D77739AC082C67572F81EE9B2D84583FEC416CF411A4161B66FC9A0FC87F4A0AEF60D36470435EE4EB1F51220A5D33E9E31CCFF7C392AA30D2CDB843E5018D98CC616D884E966841ADCA"
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/requestUrl', function(req, res, next) {
  var url = adaptMng.requestUrl(req.query.content);
  res.send(url)
});

module.exports = router;
