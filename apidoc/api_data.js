define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./public/apidoc/main.js",
    "group": "_home_lannnnn_Desktop_skyMap_public_apidoc_main_js",
    "groupTitle": "_home_lannnnn_Desktop_skyMap_public_apidoc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "http://localhost:3003/adapt/combinePayload",
    "title": "combinePayload",
    "description": "<p>process the user customized info into the payload which will be used to require star map</p>",
    "name": "combinePayload",
    "group": "adapt_layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Obj",
            "optional": false,
            "field": "lon",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Obj",
            "optional": false,
            "field": "limag",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Obj",
            "optional": false,
            "field": "starnm",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Obj",
            "optional": false,
            "field": "starbm",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>combined payload</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"date=0&lon=3.5&coords=on&moonp=on&deep=on&deepm=6.5&consto=on&constn=on&constb=on&limag=6&starn=on&starnm=3&starb=on&starbm=5&showmb=-1.5&showmd=6.0&imgsize=512&fontscale=1.0&scheme=0&elements=\"",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/adapt.js",
    "groupTitle": "adapt_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/adapt/processMIn",
    "title": "processMin",
    "description": "<p>process the returen value from light pollution API to get the message about the region</p>",
    "name": "processMin",
    "group": "adapt_layer",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "lightPol",
            "description": "<p>return value from light pollution API</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>minimal light pollution level nearby</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"1.3\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/adapt.js",
    "groupTitle": "adapt_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/adapt/processPol",
    "title": "processPol",
    "description": "<p>process the returen value from light pollution API to get the light pollution infomation</p>",
    "name": "processPol",
    "group": "adapt_layer",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "lightPol",
            "description": "<p>return value from light pollution API</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>light pollution level in chosen position</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"44.6\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/adapt.js",
    "groupTitle": "adapt_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/adapt/processRange",
    "title": "processRange",
    "description": "<p>format the location infomation to the LINESPACE format which will be used latter when query the light pollution API</p>",
    "name": "processRange",
    "group": "adapt_layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>processed range info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"LINESTRING(14.073893777845102%2046.051465432555204,14.130198921900401%2046.086718281761705,14.227702951849816%2046.011421399400916,14.073893777845102%2046.051465432555204)\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/adapt.js",
    "groupTitle": "adapt_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/adapt/requestUrl",
    "title": "requestUrl",
    "description": "<p>abstract the map url from the return message of star map</p>",
    "name": "requestUrl",
    "group": "adapt_layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "obj",
            "description": "<p>return from starmap API</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>abstracted url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"Yourtel?di=913F9CCB5E540BD4F12430AEB6D8DD057490F4AA180919E7CC19D960057C674A2E360F653C06B818D66E0A2796CFEFF348108A10484695DD9266F43DAE1630C0D77739AC082C67572F81EE9B2D84583FEC416CF411A4161B66FC9A0FC87F4A0AEF60D36470435EE4EB1F51220A5D33E9E31CCFF7C392AA30D2CDB843E5018D98CC616D884E966841ADCA\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/adapt.js",
    "groupTitle": "adapt_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/busi/processLevel",
    "title": "processLevel",
    "description": "<p>analysis the pollution level and give suggestions for stargazing</p>",
    "name": "processLevel",
    "group": "business_layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lightPol",
            "description": "<p>light pollution level</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>commant for the given light pollution level</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"Yourtel?di=913F9CCB5E540BD4F12430AEB6D8DD057490F4AA180919E7CC19D960057C674A2E360F653C06B818D66E0A2796CFEFF348108A10484695DD9266F43DAE1630C0D77739AC082C67572F81EE9B2D84583FEC416CF411A4161B66FC9A0FC87F4A0AEF60D36470435EE4EB1F51220A5D33E9E31CCFF7C392AA30D2CDB843E5018D98CC616D884E966841ADCA\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/busi.js",
    "groupTitle": "business_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/busi/processMessage",
    "title": "processMessage",
    "description": "<p>analysis the possibility of well star gazing places</p>",
    "name": "processMessage",
    "group": "business_layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "minimum",
            "description": "<p>lightPol light pollution level</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>message for the given region</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"Yourtel?di=913F9CCB5E540BD4F12430AEB6D8DD057490F4AA180919E7CC19D960057C674A2E360F653C06B818D66E0A2796CFEFF348108A10484695DD9266F43DAE1630C0D77739AC082C67572F81EE9B2D84583FEC416CF411A4161B66FC9A0FC87F4A0AEF60D36470435EE4EB1F51220A5D33E9E31CCFF7C392AA30D2CDB843E5018D98CC616D884E966841ADCA\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/busi.js",
    "groupTitle": "business_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:8001/",
    "title": "googleMap",
    "description": "<p>set the customized location</p>",
    "name": "googleMap",
    "group": "center_process_layer",
    "version": "1.0.0",
    "filename": "./routes/index.js",
    "groupTitle": "center_process_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:8001/starMap",
    "title": "starMap",
    "description": "<p>starMap interactive page</p>",
    "name": "starMap",
    "group": "center_process_layer",
    "version": "1.0.0",
    "filename": "./routes/index.js",
    "groupTitle": "center_process_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/data/getComment",
    "title": "getComment",
    "description": "<p>get the comment</p>",
    "name": "getComment",
    "group": "data_layer",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ”Not a suitable star gazing position . . .”\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/data.js",
    "groupTitle": "data_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/data/getLightPol",
    "title": "getLightPol",
    "description": "<p>get the light pollution data</p>",
    "name": "getLightPol",
    "group": "data_layer",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>sunset time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"44.5\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/data.js",
    "groupTitle": "data_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/data/getMessage",
    "title": "getMessage",
    "description": "<p>get the message</p>",
    "name": "getMessage",
    "group": "data_layer",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ”The light pollution here within 5km is pretty heavy . . . ”\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/data.js",
    "groupTitle": "data_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/data/getSunRise",
    "title": "setSunRise",
    "description": "<p>get the sunrise time</p>",
    "name": "getSunRise",
    "group": "data_layer",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>sunrise time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"04:15 UTC\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/data.js",
    "groupTitle": "data_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/data/getSunSet",
    "title": "getSunSet",
    "description": "<p>get the sunset time</p>",
    "name": "getSunSet",
    "group": "data_layer",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>sunset time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"20:42 UTC\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/data.js",
    "groupTitle": "data_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/data/setComment",
    "title": "setComment",
    "description": "<p>set the comment</p>",
    "name": "setComment",
    "group": "data_layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>state code for susscess or failure</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"200\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/data.js",
    "groupTitle": "data_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/data/setLightPol",
    "title": "setLightPol",
    "description": "<p>set the light pollution data</p>",
    "name": "setLightPol",
    "group": "data_layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "light",
            "description": "<p>pollution data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>state code for susscess or failure</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"200\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/data.js",
    "groupTitle": "data_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/data/setMessage",
    "title": "setMessage",
    "description": "<p>set the message</p>",
    "name": "setMessage",
    "group": "data_layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>state code for susscess or failure</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"200\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/data.js",
    "groupTitle": "data_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/data/setSunRise",
    "title": "setSunRise",
    "description": "<p>set the sunrise time</p>",
    "name": "setSunRise",
    "group": "data_layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sunrise",
            "description": "<p>time</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>state code for susscess or failure</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"200\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/data.js",
    "groupTitle": "data_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3003/data/setSunSet",
    "title": "setSunSet",
    "description": "<p>set the sunset time</p>",
    "name": "setSunSet",
    "group": "data_layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sunset",
            "description": "<p>time</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>state code for susscess or failure</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"200\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/data.js",
    "groupTitle": "data_layer"
  },
  {
    "type": "get",
    "url": "http://localhost:3000/sunRise",
    "title": "sunRise",
    "description": "<p>calculate the sunrise time</p>",
    "name": "sunRise",
    "group": "server",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>location latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lng",
            "description": "<p>location longitude</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>sunrise time in UTC</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"04:15\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/index.js",
    "groupTitle": "server"
  },
  {
    "type": "get",
    "url": "http://localhost:3000/sunSet",
    "title": "sunSet",
    "description": "<p>calculate the sunset time</p>",
    "name": "sunSet",
    "group": "server",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>location latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lng",
            "description": "<p>location longitude</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "res",
            "description": "<p>sunset time in UTC</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"20:32\"\n}",
          "type": "String"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./routes/index.js",
    "groupTitle": "server"
  }
] });
