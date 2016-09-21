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

	;__weex_define__("@weex-component/bf451ade7855aab3b77516ef4699dd6e", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	__webpack_require__(1);

	;
	__weex_module__.exports = {
	    data: function () {return {
	        requesting: false,
	        showRefresh: 'hide',
	        refreshText: '下拉释放刷新',
	        showLoading: 'hide',
	        showLoadingImage: true,
	        loadingText: '数据加载中...',
	        pageNum: 1,
	        pageSize: 10,
	        itemList: []
	    }},
	    methods: {
	        /**
	         * 加载更多
	         */
	        loadMore: function () {
	            console.log('onloadmore,this pageNum:', this.pageNum);
	            var vm = this;
	            //正在刷新的时候不响应loadmore
	            if(vm.showRefresh == 'show'){
	                return;
	            }
	            vm.showLoading = 'show';
	            //最大加载50条
	            if(vm.pageNum >= 6){
	                vm.showLoadingImage = false;
	                vm.loadingText = '没有更多数据了';
	                setTimeout(function(){
	                    vm.showLoading = 'hide';
	                }, 500);
	                return;
	            }
	            vm.getData();
	        },
	        /**
	         * 只有当loadmore不执行了，并且触底了才触发
	         */
	        onloading: function (e) {
	            console.log('onloading');
	            var vm = this;
	            vm.showLoading = 'show';
	            setTimeout(function() {
	                vm.showLoading = 'hide';
	            }, 500);
	        },
	        /**
	         * 触顶才会触发
	         */
	        onrefresh: function(e) {
	            console.log('onrefresh');
	            var vm = this;
	            vm.showRefresh = 'show';
	            //数据重置
	            vm.pageNum = 1;
	            vm.itemList = [];
	            vm.loadingText = '数据加载中...';
	            vm.showLoading = 'hide';
	            vm.showLoadingImage = true;
	            //开始刷新
	            vm.getData();
	        },
	        /**
	         * 请求接口获取数据
	         */
	        getData: function() {
	            if(this.requesting){return;}
	            this.requesting = true;
	            console.log('正在请求数据接口...this.pageNum:',this.pageNum);

	            var vm = this;
	            var originData = [].slice.call(vm.itemList);
	            var tmp = [];
	            var offset = (vm.pageNum-1) * vm.pageSize;
	            for(var i = offset; i < offset + vm.pageSize; i++){
	                tmp.push({
	                    id: i,
	                    logourl: '//gw.alicdn.com/tfscom/tuitui/TB1bA6gMXXXXXXmXFXXXXXXXXXX',
	                    name: 'name' + i,
	                    fans: 1000 + i,
	                    reason: '潮人最爱的女装top红人',
	                    url: '//shop.m.taobao.com/shop/shop_index.htm?user_id=2103587316&shop_id=111126855'
	                });
	            }
	            //模拟一个ajax请求的延迟返回数据结果
	            setTimeout(function(){
	                vm.pageNum ++;
	                vm.itemList = originData.concat(tmp);
	                vm.showLoading = 'hide';
	                vm.showRefresh = 'hide';
	                vm.requesting = false;
	                console.log('this.itemList length:',vm.itemList.length);
	            }, 500);
	        }
	    },
	    ready: function() {
	        console.log('ready');
	    },
	    created: function (){
	        console.log('created');
	        this.getData();
	    }
	};

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "list",
	  "attr": {
	    "showScrollbar": "false",
	    "loadmoreoffset": "0"
	  },
	  "classList": [
	    "list"
	  ],
	  "events": {
	    "loadmore": "loadMore"
	  },
	  "children": [
	    {
	      "type": "refresh",
	      "classList": [
	        "refresh"
	      ],
	      "attr": {
	        "display": function () {return this.showRefresh}
	      },
	      "events": {
	        "refresh": "onrefresh"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "loading-text"
	          ],
	          "attr": {
	            "value": function () {return this.refreshText}
	          }
	        }
	      ]
	    },
	    {
	      "type": "cell",
	      "append": "tree",
	      "repeat": function () {return this.itemList},
	      "attr": {
	        "trackBy": "id"
	      },
	      "children": [
	        {
	          "type": "account",
	          "append": "tree",
	          "attr": {
	            "logourl": function () {return this.logourl},
	            "name": function () {return this.name},
	            "fans": function () {return this.fans},
	            "reason": function () {return this.reason},
	            "url": function () {return this.url}
	          }
	        }
	      ]
	    },
	    {
	      "type": "loading",
	      "classList": [
	        "loading"
	      ],
	      "attr": {
	        "display": function () {return this.showLoading}
	      },
	      "events": {
	        "loading": "onloading"
	      },
	      "children": [
	        {
	          "type": "loading-indicator",
	          "classList": [
	            "loading-image"
	          ],
	          "shown": function () {return this.showLoadingImage}
	        },
	        {
	          "type": "text",
	          "classList": [
	            "loading-text"
	          ],
	          "attr": {
	            "value": function () {return this.loadingText}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "refresh": {
	    "height": 120,
	    "width": 750,
	    "backgroundColor": "#ffffff",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "list": {
	    "flexDirection": "column",
	    "backgroundColor": "#ffffff",
	    "width": 750
	  },
	  "loading": {
	    "height": 120,
	    "width": 750,
	    "marginTop": 20,
	    "backgroundColor": "#ffffff",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "loading-text": {
	    "textAlign": "center",
	    "color": "#666666",
	    "fontSize": 28,
	    "marginLeft": 30
	  },
	  "loading-image": {
	    "height": 30,
	    "width": 30,
	    "color": "#333333"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/bf451ade7855aab3b77516ef4699dd6e", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/account", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	__weex_module__.exports = {
	    data: function () {return {
	        logourl: '',
	        reason: '',
	        name: '',
	        fans: 1000,
	        url: ''
	    }},
	    methods: {
	        goTargetUrl: function(e) {
	            __weex_require__('@weex-module/event').openURL(this.url);
	        }
	    }
	}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "account-item"
	  ],
	  "attr": {
	    "index": function () {return this.$index}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "account-main"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "account-logo"
	          ],
	          "events": {
	            "click": "goTargetUrl"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "account-logo-border"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "account-logo-pic"
	                  ],
	                  "attr": {
	                    "src": function () {return this.logourl}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "account-info"
	          ],
	          "events": {
	            "click": "goTargetUrl"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "desc",
	                "account-name"
	              ],
	              "attr": {
	                "value": function () {return this.name}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "desc",
	                "account-doc"
	              ],
	              "attr": {
	                "value": function () {return this.reason}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "desc",
	                "account-fans"
	              ],
	              "attr": {
	                "value": function () {return '粉丝数：' + (this.fans)}
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
	  "account-item": {
	    "flexDirection": "column",
	    "width": 750
	  },
	  "account-main": {
	    "flexDirection": "row",
	    "padding": 24,
	    "paddingLeft": 0,
	    "marginLeft": 24,
	    "borderWidth": 0,
	    "borderStyle": "solid",
	    "borderColor": "#E7E7E7",
	    "borderBottomWidth": 1
	  },
	  "account-logo-border": {
	    "width": 104,
	    "height": 104,
	    "backgroundImage": "url(\"//gw.alicdn.com/tps/TB1KMYqNXXXXXcoXXXXXXXXXXXX-104-104.png\")"
	  },
	  "account-logo-pic": {
	    "width": 96,
	    "height": 96,
	    "margin": 4,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "backgroundColor": "#cccccc"
	  },
	  "account-info": {
	    "flex": 1,
	    "marginLeft": 24,
	    "marginRight": 24,
	    "height": 104
	  },
	  "desc": {
	    "marginBottom": 4,
	    "overflow": "hidden",
	    "textOverflow": "ellipsis",
	    "whiteSpace": "nowrap",
	    "display": "block",
	    "lines": 1
	  },
	  "account-name": {
	    "marginTop": 4,
	    "fontSize": 28,
	    "color": "#3E3E3E",
	    "height": 34,
	    "fontWeight": "bold"
	  },
	  "account-doc": {
	    "fontSize": 24,
	    "color": "#5F646E",
	    "height": 30
	  },
	  "account-fans": {
	    "fontSize": 20,
	    "height": 26,
	    "color": "#999999"
	  }
	})
	})

/***/ }
/******/ ]);