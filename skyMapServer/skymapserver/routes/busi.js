var express = require('express');
var router = express.Router();
const busiMng = require('../public/javascripts/busiMng');

/* GET users listing. */

/**
 * @api {get} http://localhost:3003/busi/processLevel processLevel
 * @apiDescription analysis the pollution level and give suggestions for stargazing
 * @apiName processLevel
 * @apiGroup business layer
 * @apiParam {Number} lightPol light pollution level
 *
 * @apiSuccess {String} res commant for the given light pollution level
 * @apiSuccessExample {String} Success-Response:
 *  {
 *      "Yourtel?di=913F9CCB5E540BD4F12430AEB6D8DD057490F4AA180919E7CC19D960057C674A2E360F653C06B818D66E0A2796CFEFF348108A10484695DD9266F43DAE1630C0D77739AC082C67572F81EE9B2D84583FEC416CF411A4161B66FC9A0FC87F4A0AEF60D36470435EE4EB1F51220A5D33E9E31CCFF7C392AA30D2CDB843E5018D98CC616D884E966841ADCA"
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/processLevel', function(req, res, next) {
  var level = busiMng.processLevel(req.query.lightPol);
  res.send(level)
});

/**
 * @api {get} http://localhost:3003/busi/processMessage processMessage
 * @apiDescription analysis the possibility of well star gazing places
 * @apiName processMessage
 * @apiGroup business layer
 * @apiParam {Number} minimum lightPol light pollution level
 *
 * @apiSuccess {String} res message for the given region
 * @apiSuccessExample {String} Success-Response:
 *  {
 *      "Yourtel?di=913F9CCB5E540BD4F12430AEB6D8DD057490F4AA180919E7CC19D960057C674A2E360F653C06B818D66E0A2796CFEFF348108A10484695DD9266F43DAE1630C0D77739AC082C67572F81EE9B2D84583FEC416CF411A4161B66FC9A0FC87F4A0AEF60D36470435EE4EB1F51220A5D33E9E31CCFF7C392AA30D2CDB843E5018D98CC616D884E966841ADCA"
 *  }
 * @apiSampleRequest off
 * @apiVersion 1.0.0
 */
router.get('/processMessage', function(req, res, next) {
  var message = busiMng.processMessage(req.query.min);
  res.send(message)
});

module.exports = router;
