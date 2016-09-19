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
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/27662dc17933f863ac7090619455254d", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	__webpack_require__(3);
	__webpack_require__(4);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            golbalData: {
	                ownerId: 2202220535
	            },
	            dataSource: [
	                {
	                    itemList: [
	                        {
	                            title:"测试宝贝1测试宝贝1测试宝贝1测试宝贝1",
	                            pic_url:"//gw.alicdn.com/bao/uploaded/i1/2202220535/TB2du8TqFXXXXa1XpXXXXXXXXXX_!!2202220535.jpg",
	                            url:"https://www.taobao.com/",
	                            price:"11.50"
	                        },
	                        {
	                            title:"测试宝贝2测试宝贝1测试宝贝1测试宝贝1",
	                            pic_url:"//gw.alicdn.com/bao/uploaded/i2/2202220535/TB25odWqFXXXXaxXpXXXXXXXXXX_!!2202220535.jpg",
	                            url:"https://www.taobao.com/",
	                            price:"22.30"
	                        },
	                        {
	                            title:"测试宝贝3测试宝贝1测试宝贝1测试宝贝1",
	                            pic_url:"//gw.alicdn.com/bao/uploaded/i1/2202220535/TB2du8TqFXXXXa1XpXXXXXXXXXX_!!2202220535.jpg_200x200",
	                            url:"https://www.taobao.com/",
	                            price:"22.00"
	                        }
	                    ]
	                },
	                {
	                    ticketUrl: 'http://www.taobao.com',
	                    ticketDesc: '100'
	                }
	            ]
	        }},
	        created: function (){
	            var vm = this;
	        },
	        ready: function () {
	            console.log(this.dataSource[0],this.dataSource[1]);
	        }
	    };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "scroller",
	  "attr": {
	    "showScrollbar": "false"
	  },
	  "children": [
	    {
	      "type": "itemlist",
	      "attr": {
	        "mds": function () {return this.dataSource[0]},
	        "gdc": function () {return this.golbalData}
	      }
	    },
	    {
	      "type": "promotion",
	      "attr": {
	        "mds": function () {return this.dataSource[1]},
	        "gdc": function () {return this.golbalData}
	      }
	    }
	  ]
	})
	})
	;__weex_bootstrap__("@weex-component/27662dc17933f863ac7090619455254d", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/itemlist", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            mds: {
	                dataParams: {
	                    "catId": "-1"
	                },
	                itemList: [],
	            },
	            gdc: {
	                "ownerId": 2202220535
	            }
	        }},
	        methods: {
	            goTargetUrl: function(e) {
	                __weex_require__('@weex-module/event').openURL(e.target.attr.url);
	            },

	            render: function(ds, gd){
	                var vm = this;
	                if(ds){ vm.mds = ds; }
	                if(gd){ vm.gdc = gd; }

	            }
	        },
	        ready: function() {
	            console.log('ready:', this.mds);
	        }
	    };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "attr": {
	    "dataRole": "itemlist"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "shown": function () {return this.mds.itemList.length},
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.mds.itemList},
	          "attr": {
	            "url": function () {return this.url}
	          },
	          "classList": [
	            "item_url"
	          ],
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
	                "item_img"
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "item_info"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "item_name"
	                  ],
	                  "attr": {
	                    "value": function () {return this.title}
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "item_price"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "item_price_text"
	                      ],
	                      "attr": {
	                        "value": "￥"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "item_price_text",
	                        "big"
	                      ],
	                      "attr": {
	                        "value": function () {return this.price.split('.')[0]}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "item_price_text"
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
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "width": 750,
	    "paddingLeft": 18,
	    "paddingRight": 18,
	    "marginBottom": 18,
	    "boxSizing": "border-box",
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "item_url": {
	    "width": 230,
	    "backgroundColor": "#ffffff",
	    "flexDirection": "column",
	    "justifyContent": "space-between"
	  },
	  "item_img": {
	    "width": 230,
	    "height": 230
	  },
	  "item_info": {
	    "width": 230,
	    "paddingLeft": 10,
	    "paddingRight": 10,
	    "paddingBottom": 18,
	    "boxSizing": "border-box",
	    "flexDirection": "column"
	  },
	  "item_name": {
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
	  "item_price": {
	    "flexDirection": "row",
	    "alignItems": "flex-end",
	    "height": 40
	  },
	  "item_price_text": {
	    "color": "#e61616",
	    "fontSize": 24
	  },
	  "big": {
	    "fontSize": 32,
	    "fontWeight": "bold"
	  }
	})
	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/promotion", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            mds: {
	                ticketUrl: '',
	                ticketDesc: '100'
	            },
	            gdc: {}
	        }},
	        methods: {
	            goTargetUrl: function() {
	                __weex_require__('@weex-module/event').openURL(this.mds.ticketUrl);
	            },

	            render: function(ds){
	                if(ds){
	                    this.mds.ticketUrl = ds.ticketUrl;
	                    this.mds.ticketDesc = ds.ticketDesc;
	                }
	            }
	        },
	        ready: function() {
	            console.log('ready:', this.mds);
	        }
	    };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "attr": {
	    "dataRole": "promotion"
	  },
	  "events": {
	    "click": "goTargetUrl"
	  },
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": "//img.alicdn.com/tps/TB1V2AeNXXXXXbXXFXXXXXXXXXX-714-180.png"
	      },
	      "classList": [
	        "image"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "container"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "price"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "priceText",
	                "small"
	              ],
	              "attr": {
	                "value": "￥"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "priceText"
	              ],
	              "attr": {
	                "value": function () {return this.mds.ticketDesc}
	              }
	            },
	            {
	              "type": "image",
	              "classList": [
	                "priceImg"
	              ],
	              "attr": {
	                "src": "//img.alicdn.com/tps/TB1gEj7NXXXXXc7XVXXXXXXXXXX-201-36.png"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "detail"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "desc"
	              ],
	              "attr": {
	                "value": "可叠加，可跨店使用"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "desc"
	              ],
	              "attr": {
	                "value": "使用条件见商品详情页满减规则"
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
	  "wrapper": {
	    "width": 750,
	    "boxSizing": "border-box",
	    "marginBottom": 18,
	    "paddingLeft": 18,
	    "paddingRight": 18,
	    "position": "relative"
	  },
	  "image": {
	    "width": 714,
	    "height": 180
	  },
	  "container": {
	    "flexDirection": "column",
	    "boxSizing": "border-box",
	    "width": 714,
	    "height": 180,
	    "position": "absolute",
	    "paddingLeft": 36,
	    "left": 0,
	    "top": 0
	  },
	  "price": {
	    "height": 80,
	    "flexDirection": "row",
	    "alignItems": "flex-end"
	  },
	  "priceText": {
	    "color": "#ffffff",
	    "fontSize": 48,
	    "fontWeight": "bold"
	  },
	  "priceImg": {
	    "width": 201,
	    "height": 36,
	    "marginLeft": 20
	  },
	  "small": {
	    "fontSize": 32
	  },
	  "detail": {
	    "width": 354,
	    "height": 68,
	    "marginTop": 20,
	    "flexDirection": "column",
	    "boxSizing": "border-box"
	  },
	  "desc": {
	    "width": 354,
	    "height": 34,
	    "lineHeight": 34,
	    "color": "#B96200",
	    "fontSize": 24
	  },
	  "time": {
	    "width": 354,
	    "height": 26,
	    "flexDirection": "row"
	  },
	  "timeText": {
	    "color": "#ffffff",
	    "fontSize": 24
	  }
	})
	})

/***/ }
/******/ ]);