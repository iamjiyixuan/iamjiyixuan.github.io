// { "framework": "Vue" }

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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _contacts = __webpack_require__(20);

	var _contacts2 = _interopRequireDefault(_contacts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_contacts2.default.el = '#root';
	exports.default = new Vue(_contacts2.default);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(21)

	/* template */
	var __vue_template__ = __webpack_require__(33)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/jiyixuan/svn/KunLun/Study/study-weex/weex-neegle-demo/src/contacts.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      groups: [{
	        title: "1",
	        contacts: [{ avatar: "", name: "张飞", signature: "test" }, { avatar: "", name: "赵云", signature: "test" }, { avatar: "", name: "张飞", signature: "test" }, { avatar: "", name: "赵云", signature: "test" }, { avatar: "", name: "刘备", signature: "test" }] }, {
	        title: "2",
	        contacts: [{ avatar: "", name: "张飞", signature: "test" }, { avatar: "", name: "赵云", signature: "test" }, { avatar: "", name: "刘备", signature: "test" }] }, {
	        title: "3",
	        contacts: [{ avatar: "", name: "关羽", signature: "test" }, { avatar: "", name: "诸葛", signature: "test" }, { avatar: "", name: "曹操", signature: "test" }] }]
	    };
	  },

	  components: {
	    contactList: __webpack_require__(22)
	  },
	  methods: {}
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(23)

	/* template */
	var __vue_template__ = __webpack_require__(32)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/jiyixuan/svn/KunLun/Study/study-weex/weex-neegle-demo/src/contact-list.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    groups: {}
	  },
	  components: {
	    contactListHeader: __webpack_require__(24),
	    contactListItem: __webpack_require__(28)
	  },
	  created: function created() {}
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(25)
	)

	/* script */
	__vue_exports__ = __webpack_require__(26)

	/* template */
	var __vue_template__ = __webpack_require__(27)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/jiyixuan/svn/KunLun/Study/study-weex/weex-neegle-demo/src/contact-list-header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-06f14a8f"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = {
	  "header": {
	    "height": 60,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "backgroundColor": "#F3F3F3"
	  },
	  "header-title-txt": {
	    "fontSize": 24,
	    "marginLeft": 20
	  }
	}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    title: {}
	  },
	  methods: {}
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["header"]
	  }, [_c('text', {
	    staticClass: ["header-title-txt"]
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(29)
	)

	/* script */
	__vue_exports__ = __webpack_require__(30)

	/* template */
	var __vue_template__ = __webpack_require__(31)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/jiyixuan/svn/KunLun/Study/study-weex/weex-neegle-demo/src/contact-list-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-06562295"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = {
	  "item": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 160,
	    "marginLeft": 20,
	    "marginRight": 20,
	    "borderStyle": "solid",
	    "borderTopWidth": 0,
	    "borderBottomWidth": 1,
	    "borderLeftWidth": 0,
	    "borderRightWidth": 0,
	    "borderColor": "#E3E3E3"
	  },
	  "profile": {
	    "flexDirection": "column",
	    "height": 100,
	    "marginLeft": 20
	  },
	  "profile-top": {
	    "flexDirection": "row",
	    "alignItems": "flex-end"
	  },
	  "profile-bottom": {
	    "flexDirection": "row",
	    "alignItems": "flex-end",
	    "marginTop": 10
	  },
	  "item-name-text": {
	    "fontSize": 48,
	    "color": "#000000"
	  },
	  "item-signature-text": {
	    "fontSize": 30,
	    "marginLeft": 10,
	    "color": "#A3A3A3"
	  },
	  "item-status-text": {
	    "fontSize": 30,
	    "color": "#A3A3A3"
	  }
	}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  props: {
	    avatarUrl: {},
	    name: {},
	    signature: {}
	  },
	  methods: {}
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["item"]
	  }, [_vm._m(0), _c('div', {
	    staticClass: ["profile"]
	  }, [_c('div', {
	    staticClass: ["profile-top"]
	  }, [_c('text', {
	    staticClass: ["item-name-text"]
	  }, [_vm._v(_vm._s(_vm.name))]), _c('text', {
	    staticClass: ["item-signature-text"]
	  }, [_vm._v(_vm._s(_vm.signature))])]), _vm._m(1)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["avatar"]
	  }, [_c('image', {
	    staticStyle: {
	      width: "100px",
	      height: "100px",
	      borderRadius: "50px"
	    },
	    attrs: {
	      "src": "https://avatars2.githubusercontent.com/u/6269028?v=3&s=460"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["profile-bottom"]
	  }, [_c('text', {
	    staticClass: ["item-status-text"]
	  }, [_vm._v("在线")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', _vm._l((_vm.groups), function(group) {
	    return _c('div', [_c('contact-list-header', {
	      attrs: {
	        "title": group.title
	      }
	    }), _vm._l((group.contacts), function(contact) {
	      return _c('div', [_c('contact-list-item', {
	        attrs: {
	          "name": contact.name,
	          "signature": contact.signature
	        }
	      })], 1)
	    })], 2)
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('contact-list', {
	    attrs: {
	      "groups": _vm.groups
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);