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

	;__weex_define__("@weex-component/69b6507704df2ce8ac70faa97fc0186e", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __webpack_require__(2);

	    __weex_module__.exports = {
	        data: function () {return {
	            pointer: 0,
	            shouldStop: true,
	            picUrlList: [
	                {
	                    pic: "https://gw.alicdn.com/imgextra/i2/263662065/TB2VVk4jFXXXXbWXpXXXXXXXXXX_!!263662065.jpg",
	                    url: "//h5.m.taobao.com/wirelessshop/decorator/view.html?userId=123&pageId=46&ttt=111&isMock=true#222222"
	                }, {
	                    pic: "https://gw.alicdn.com/tps/i3/TB1RqA7HFXXXXbbXFXXrVZt0FXX-640-200.jpg",
	                    url: "//h5.wapa.taobao.com/wirelessshop/decorator/view_h5.html?userId=123&pageId=46&ttt=111&isMock=true#222222"
	                }
	            ]
	        }},
	        methods: {
	            appear: function () {
	                this.$broadcast('sliderStart');
	                console.log('appear');
	            },
	            disappear: function () {
	                this.$broadcast('sliderStop');
	                console.log('disappear');
	            },
	            loadMore: function (e) {
	                console.log('loadmore');
	                if(this.shouldStop) {
	                    return;
	                }

	                for(var i = 0; i < 10; i++) {
	                    var compVm = this.$vm('component-' + this.pointer);
	                    if(!compVm) {
	                        this.shouldStop = !0;
	                        return;
	                    }
	                    if(!compVm.render) {
	                        this.pointer++;
	                        continue;
	                    }
	                    compVm.render(this.picUrlList);
	                    this.pointer++;
	                }
	            }
	        },
	        ready: function (){
	            console.log('ready');
	            this.shouldStop = false;

	            for(var i = 0; i < 10; i ++) {
	                var compVm = this.$vm('component-' + i);
	                //console.log(compVm);
	                if(!compVm) {
	                    this.pointer++;
	                    continue;
	                }
	                if(!compVm.render) {
	                    this.pointer++;
	                    continue;
	                }
	                compVm.render(this.picUrlList);
	                this.pointer++;
	            }
	        }
	    };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "scroller",
	  "classList": [
	    "container"
	  ],
	  "attr": {
	    "loadmoreoffset": "960",
	    "showScrollbar": "false"
	  },
	  "events": {
	    "loadmore": "loadMore",
	    "appear": "appear",
	    "disappear": "disappear"
	  },
	  "children": [
	    {
	      "type": "double-image",
	      "id": "component-0"
	    },
	    {
	      "type": "double-image",
	      "id": "component-1"
	    },
	    {
	      "type": "double-image",
	      "id": "component-2"
	    },
	    {
	      "type": "double-image",
	      "id": "component-3"
	    },
	    {
	      "type": "double-image",
	      "id": "component-4"
	    },
	    {
	      "type": "double-image",
	      "id": "component-5"
	    },
	    {
	      "type": "double-image",
	      "id": "component-6"
	    },
	    {
	      "type": "double-image",
	      "id": "component-7"
	    },
	    {
	      "type": "double-image",
	      "id": "component-8"
	    },
	    {
	      "type": "double-image",
	      "id": "component-9"
	    },
	    {
	      "type": "double-image",
	      "id": "component-10"
	    },
	    {
	      "type": "double-image",
	      "id": "component-11"
	    },
	    {
	      "type": "double-image",
	      "id": "component-12"
	    },
	    {
	      "type": "double-image",
	      "id": "component-13"
	    },
	    {
	      "type": "double-image",
	      "id": "component-14"
	    },
	    {
	      "type": "double-image",
	      "id": "component-15"
	    },
	    {
	      "type": "double-image",
	      "id": "component-16"
	    },
	    {
	      "type": "double-image",
	      "id": "component-17"
	    },
	    {
	      "type": "double-image",
	      "id": "component-18"
	    },
	    {
	      "type": "double-image",
	      "id": "component-19"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "width": 750,
	    "backgroundColor": "#eeeeee",
	    "display": "flex",
	    "flexDirection": "column",
	    "paddingBottom": 50
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/69b6507704df2ce8ac70faa97fc0186e", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/double-image", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data : function () {return {
	            picUrlList: []
	        }},
	        methods: {
	            goTargetUrl: function(e) {
	                __weex_require__('@weex-module/event').openURL(e.target.attr.url);
	            },
	            render: function(ds) {
	                //console.log('ds:', ds);
	                this.picUrlList = ds;
	            }
	        }
	    };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "attr": {
	    "dataRole": "double_image"
	  },
	  "children": [
	    {
	      "type": "div",
	      "repeat": function () {return this.picUrlList},
	      "classList": [
	        "url"
	      ],
	      "events": {
	        "click": "goTargetUrl"
	      },
	      "attr": {
	        "url": function () {return this.url}
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.pic}
	          },
	          "classList": [
	            "image"
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "width": 750,
	    "height": 224,
	    "marginBottom": 18,
	    "paddingLeft": 18,
	    "paddingRight": 18,
	    "paddingTop": 18,
	    "paddingBottom": 18,
	    "backgroundColor": "#ffffff",
	    "boxSizing": "border-box"
	  },
	  "url": {
	    "width": 345,
	    "height": 188
	  },
	  "image": {
	    "width": 345,
	    "height": 188
	  }
	})
	})

/***/ }
/******/ ]);