/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/963340b855c201510bd87573ed0e7064", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {}},
	        methods: {},
	        created: function (){
	            //目前支持ttf、woff文件，不支持svg、eot类型
	            __weex_require__('@weex-module/dom').addRule('fontFace', {
	                'fontFamily': 'iconfont',
	                'src': 'url("//at.alicdn.com/t/font_1474166554_8834667.ttf")'
	            });
	        }
	    };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "attr": {
	    "dataRole": "iconfont"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "height": 80
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "icon"
	          ],
	          "attr": {
	            "value": ""
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "icon",
	            "icon-small"
	          ],
	          "attr": {
	            "value": ""
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "icon",
	            "icon-middle"
	          ],
	          "attr": {
	            "value": ""
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "icon",
	            "icon-big"
	          ],
	          "attr": {
	            "value": ""
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "icon",
	            "icon-fixed"
	          ],
	          "attr": {
	            "value": ""
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "更多好货"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper",
	        "center"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "更多好货"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "icon",
	            "icon-fixed"
	          ],
	          "attr": {
	            "value": ""
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper",
	        "right"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "attr": {
	            "value": "更多好货"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "icon",
	            "icon-fixed"
	          ],
	          "attr": {
	            "value": ""
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "icon": {
	    "fontFamily": "'iconfont'",
	    "fontSize": 40
	  },
	  "icon-small": {
	    "fontSize": 50
	  },
	  "icon-middle": {
	    "fontSize": 60
	  },
	  "icon-big": {
	    "fontSize": 70
	  },
	  "wrapper": {
	    "flexDirection": "row",
	    "height": 40,
	    "marginTop": 20,
	    "marginBottom": 20
	  },
	  "icon-fixed": {
	    "marginTop": -8,
	    "marginRight": 5,
	    "color": "#FF0000"
	  },
	  "text": {
	    "fontSize": 32,
	    "color": "#FF0000",
	    "height": 32,
	    "lineHeight": 32
	  },
	  "center": {
	    "justifyContent": "center"
	  },
	  "right": {
	    "justifyContent": "flex-end"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/963340b855c201510bd87573ed0e7064", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);