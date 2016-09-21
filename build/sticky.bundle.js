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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/f89f4ea393fac0de3854eec61d0e1b47", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __webpack_require__(5);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	        }},
	        methods: {
	        },
	        created: function (){
	            var vm = this;
	        }
	    };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "list",
	  "attr": {
	    "showScrollbar": "false"
	  },
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "header",
	      "classList": [
	        "title"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title-text"
	          ],
	          "attr": {
	            "value": "热门榜单"
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "title-image"
	          ],
	          "attr": {
	            "src": "//gw.alicdn.com/tps/i2/T11ftRFpXaXXa8IXfX-14-26.png"
	          }
	        }
	      ]
	    },
	    {
	      "type": "cell",
	      "append": "tree",
	      "classList": [
	        "itemlist"
	      ],
	      "children": [
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        }
	      ]
	    },
	    {
	      "type": "header",
	      "classList": [
	        "title"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title-text"
	          ],
	          "attr": {
	            "value": "热门榜单"
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "title-image"
	          ],
	          "attr": {
	            "src": "//gw.alicdn.com/tps/i2/T11ftRFpXaXXa8IXfX-14-26.png"
	          }
	        }
	      ]
	    },
	    {
	      "type": "cell",
	      "append": "tree",
	      "classList": [
	        "itemlist"
	      ],
	      "children": [
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        }
	      ]
	    },
	    {
	      "type": "header",
	      "classList": [
	        "title"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title-text"
	          ],
	          "attr": {
	            "value": "热门榜单"
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "title-image"
	          ],
	          "attr": {
	            "src": "//gw.alicdn.com/tps/i2/T11ftRFpXaXXa8IXfX-14-26.png"
	          }
	        }
	      ]
	    },
	    {
	      "type": "cell",
	      "append": "tree",
	      "classList": [
	        "itemlist"
	      ],
	      "children": [
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        },
	        {
	          "type": "item"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "width": 750,
	    "backgroundColor": "#eeeeee",
	    "marginBottom": 28
	  },
	  "title": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "width": 750,
	    "height": 88,
	    "paddingLeft": 18,
	    "paddingRight": 18,
	    "backgroundColor": "#ffffff",
	    "borderWidth": 0,
	    "borderStyle": "solid",
	    "borderColor": "#cccccc",
	    "borderTopWidth": 1,
	    "borderBottomWidth": 1,
	    "boxSizing": "border-box"
	  },
	  "title-image": {
	    "width": 14,
	    "height": 26,
	    "justifyContent": "center"
	  },
	  "title-text": {
	    "width": 700,
	    "height": 88,
	    "justifyContent": "center",
	    "fontSize": 32,
	    "color": "#000000"
	  },
	  "itemlist": {
	    "width": 750,
	    "paddingTop": 18,
	    "marginBottom": 18,
	    "backgroundColor": "#ffffff",
	    "boxSizing": "border-box",
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "borderWidth": 0,
	    "borderStyle": "solid",
	    "borderColor": "#cccccc",
	    "borderBottomWidth": 1
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/f89f4ea393fac0de3854eec61d0e1b47", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },

/***/ 5:
/***/ function(module, exports) {

	;__weex_define__("@weex-component/item", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            title: '测试宝贝，勿拍',
	            url: '//detail.m.tmall.com/item.htm?id=538817029299',
	            pic_url: '//gw.alicdn.com/tfscom/tuitui/i4/TB1g4hXNXXXXXcVXXXXXXXXXXXX_!!0-item_pic.jpg',
	            price: '100.00'
	        }},
	        methods: {
	            goTargetUrl: function() {
	                __weex_require__('@weex-module/event').openURL(this.url);
	            }
	        },
	        created: function() {

	        }
	    };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "attr": {
	    "dataRole": "item"
	  },
	  "events": {
	    "click": "goTargetUrl"
	  },
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": function () {return this.pic_url}
	      },
	      "classList": [
	        "item-img"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "item-info"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "item-name"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item-price"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "item-price-text"
	              ],
	              "attr": {
	                "value": "￥"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "item-price-text",
	                "big"
	              ],
	              "attr": {
	                "value": function () {return this.price.split('.')[0]}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "item-price-text"
	              ],
	              "attr": {
	                "value": function () {return this.price.split('.').length>1?'.'+this.price.split('.')[1]:''}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "item": {
	    "width": 250,
	    "backgroundColor": "#ffffff",
	    "flexDirection": "column",
	    "justifyContent": "space-between"
	  },
	  "item-img": {
	    "width": 230,
	    "height": 230
	  },
	  "item-info": {
	    "width": 230,
	    "paddingLeft": 10,
	    "paddingRight": 10,
	    "paddingBottom": 18,
	    "boxSizing": "border-box",
	    "flexDirection": "column"
	  },
	  "item-name": {
	    "lineHeight": 56,
	    "height": 56,
	    "flexDirection": "row",
	    "color": "#000000",
	    "fontSize": 28,
	    "overflow": "hidden",
	    "textOverflow": "ellipsis",
	    "whiteSpace": "nowrap",
	    "display": "block",
	    "lines": 1
	  },
	  "item-price": {
	    "flexDirection": "row",
	    "alignItems": "flex-end",
	    "height": 40
	  },
	  "item-price-text": {
	    "color": "#e61616",
	    "fontSize": 24
	  },
	  "big": {
	    "fontSize": 32,
	    "fontWeight": "bold"
	  }
	})
	})

/***/ }

/******/ });