/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n:root {\n  --darkened-color: rgb(166, 230, 255);\n  --pale-color: rgb(215, 241, 251);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  width: 100%;\n  background-color: #000;\n  color: #fff;\n  font-size: 48px;\n  font-weight: bold;\n  padding: 12px 0px;\n}\n\n.logo {\n  margin-left: 48px;\n}\n\n.wrapper {\n  flex: 1;\n  display: flex;\n}\n\n.tabs-wrapper {\n  flex-shrink: 0;\n\n  background-color: #ffffff;\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.tasks-wrapper {\n  flex: 1;\n  background-color: var(--pale-color);\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n}\n\n.tasks-container {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.project-header {\n  font-size: 2em;\n  font-weight: bold;\n  align-self: center;\n}\n\n.projects-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.project-tab {\n  width: 100%;\n  display: flex;\n\n  /* background-color: rgb(255, 143, 246); */\n}\n\n.task {\n  width: 100%;\n  background-color: #fff;\n  min-height: 48px;\n\n  border-radius: 4px;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.13);\n\n  display: grid;\n  grid-template-columns: 5% auto 20% 20% 5%;\n  align-items: center;\n}\n\n.low {\n  color: green;\n}\n\n.med {\n  color: rgb(255, 123, 0);\n}\n\n.high {\n  color: red;\n}\n\n.expand-btn {\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.save-task {\n  align-self: center;\n}\n\n.expand-icon:hover {\n  color: red;\n}\n\n.task > div {\n  direction: ltr;\n}\n\n.input-container {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.strikethrough {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.project-name {\n  cursor: pointer;\n  flex-grow: 4;\n  text-align: center;\n  padding: 12px 0 12px 0;\n  background-color: var(--pale-color);\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.project-name:hover {\n  background-color: black;\n  color: white;\n}\n\n.active-project {\n  background-color: black;\n  color: white;\n}\n\n.edit-project {\n  background-color: rgb(235, 235, 235);\n  cursor: pointer;\n}\n\n.edit-project:hover {\n  background-color: var(--darkened-color)\n}\n\n.delete-btn {\n  background-color: transparent;\n  flex-grow: 1;\n  cursor: pointer;\n}\n\n.delete-btn:hover, .exit-btn:hover {\n  transform: scale(1.3);\n}\n\n.save {\n  padding: 6px 10px;\n  background-color: rgb(118, 255, 118);\n}\n\n.save:hover {\n  background-color: rgb(86, 189, 86);\n}\n\n.save-project {\n  margin-left: 6px;\n}\n\nimg {\n  pointer-events: none;\n}\n\n.svg-icons {\n  width: 16px;\n}\n\n.add-project-btn, .add-task-btn {\n  align-self: center;\n  padding: 8px 12px;\n  background-color: #000;\n  color: white;\n  font-weight: bold;\n}\n\n.add-task-btn {\n  align-self: flex-end;\n}\n\n.add-project-btn:hover, .add-task-btn:hover {\n  background-color: rgb(136, 136, 136);\n  color: #000;\n}\n\n.delete-task:hover {\n  background-color: red;\n}\n\n.btn-container {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n\n.modal {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  width: 360px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  background-color: var(--darkened-color);\n  border: 1px solid #000;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.exit-btn {\n  background-color: transparent;\n  cursor: pointer;\n}\n\nfooter {\n  margin-top: auto;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #000;\n  color: #fff;\n  padding: 16px 0;\n}\n\nbutton {\n  border-style: none;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;;EAEb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,cAAc;;EAEd,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,OAAO;EACP,mCAAmC;;EAEnC,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,aAAa;;EAEb,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,gBAAgB;;EAEhB,kBAAkB;EAClB,8CAA8C;;EAE9C,aAAa;EACb,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,mCAAmC;EACnC,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE;AACF;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,uCAAuC;EACvC,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n:root {\n  --darkened-color: rgb(166, 230, 255);\n  --pale-color: rgb(215, 241, 251);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  width: 100%;\n  background-color: #000;\n  color: #fff;\n  font-size: 48px;\n  font-weight: bold;\n  padding: 12px 0px;\n}\n\n.logo {\n  margin-left: 48px;\n}\n\n.wrapper {\n  flex: 1;\n  display: flex;\n}\n\n.tabs-wrapper {\n  flex-shrink: 0;\n\n  background-color: #ffffff;\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.tasks-wrapper {\n  flex: 1;\n  background-color: var(--pale-color);\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n}\n\n.tasks-container {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.project-header {\n  font-size: 2em;\n  font-weight: bold;\n  align-self: center;\n}\n\n.projects-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.project-tab {\n  width: 100%;\n  display: flex;\n\n  /* background-color: rgb(255, 143, 246); */\n}\n\n.task {\n  width: 100%;\n  background-color: #fff;\n  min-height: 48px;\n\n  border-radius: 4px;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.13);\n\n  display: grid;\n  grid-template-columns: 5% auto 20% 20% 5%;\n  align-items: center;\n}\n\n.low {\n  color: green;\n}\n\n.med {\n  color: rgb(255, 123, 0);\n}\n\n.high {\n  color: red;\n}\n\n.expand-btn {\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.save-task {\n  align-self: center;\n}\n\n.expand-icon:hover {\n  color: red;\n}\n\n.task > div {\n  direction: ltr;\n}\n\n.input-container {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.strikethrough {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.project-name {\n  cursor: pointer;\n  flex-grow: 4;\n  text-align: center;\n  padding: 12px 0 12px 0;\n  background-color: var(--pale-color);\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.project-name:hover {\n  background-color: black;\n  color: white;\n}\n\n.active-project {\n  background-color: black;\n  color: white;\n}\n\n.edit-project {\n  background-color: rgb(235, 235, 235);\n  cursor: pointer;\n}\n\n.edit-project:hover {\n  background-color: var(--darkened-color)\n}\n\n.delete-btn {\n  background-color: transparent;\n  flex-grow: 1;\n  cursor: pointer;\n}\n\n.delete-btn:hover, .exit-btn:hover {\n  transform: scale(1.3);\n}\n\n.save {\n  padding: 6px 10px;\n  background-color: rgb(118, 255, 118);\n}\n\n.save:hover {\n  background-color: rgb(86, 189, 86);\n}\n\n.save-project {\n  margin-left: 6px;\n}\n\nimg {\n  pointer-events: none;\n}\n\n.svg-icons {\n  width: 16px;\n}\n\n.add-project-btn, .add-task-btn {\n  align-self: center;\n  padding: 8px 12px;\n  background-color: #000;\n  color: white;\n  font-weight: bold;\n}\n\n.add-task-btn {\n  align-self: flex-end;\n}\n\n.add-project-btn:hover, .add-task-btn:hover {\n  background-color: rgb(136, 136, 136);\n  color: #000;\n}\n\n.delete-task:hover {\n  background-color: red;\n}\n\n.btn-container {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n\n.modal {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  width: 360px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  background-color: var(--darkened-color);\n  border: 1px solid #000;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.exit-btn {\n  background-color: transparent;\n  cursor: pointer;\n}\n\nfooter {\n  margin-top: auto;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #000;\n  color: #fff;\n  padding: 16px 0;\n}\n\nbutton {\n  border-style: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementModels */ "./src/elementModels.js");


const DisplayController = (function() {

  const clearChildNodes = function clearChildNodesFromParentNode(parentNode) {
    while(parentNode.firstChild) parentNode.removeChild(parentNode.firstChild);
  }

  const checkExistingModal = function checkExistingModalInWindow() {
    const modal = document.querySelector('.modal');
    if(modal) return true;
  }

  const popUpProjectModal = function () {
    if(checkExistingModal()) return;
    const body = document.body;
    body.appendChild(_elementModels__WEBPACK_IMPORTED_MODULE_0__["default"].addProjectModal());
  }

  const popUpEditProjectModal = function (inputText) {
    if(checkExistingModal()) return;

    const body = document.body;
    body.appendChild(_elementModels__WEBPACK_IMPORTED_MODULE_0__["default"].editProjectModal(inputText));
  }

  const popUpTaskModal = function () {
    if(checkExistingModal()) return;
    const body = document.body;
    body.appendChild(_elementModels__WEBPACK_IMPORTED_MODULE_0__["default"].addTaskModal());
  }

  const popUpEditTaskModal = function (task) {
    if(checkExistingModal()) return;

    const body = document.body;
    body.appendChild(_elementModels__WEBPACK_IMPORTED_MODULE_0__["default"].editTaskModal(task));
  }

  const exitModal = function () {
    const child = document.querySelector('.modal');
    child.remove();
  }

  const renderProjectTabs = function (projects) {
    const projectsWrapper = document.querySelector('.projects-wrapper');
    clearChildNodes(projectsWrapper);

    if(projects.length === 0) return;

    projects.forEach(project => {
      projectsWrapper.appendChild(_elementModels__WEBPACK_IMPORTED_MODULE_0__["default"].projectTabModel(project.name, projects.indexOf(project)));
    });
  }

  const renderTasks = function renderTasksOfCurrentProject (project) {
    const tasksContainer = document.querySelector('.tasks-container');
    clearChildNodes(tasksContainer);

    if(!project) return;

    const tasks = project.tasks;

    tasks.forEach(task => {
      tasksContainer.appendChild(_elementModels__WEBPACK_IMPORTED_MODULE_0__["default"].taskModel(task, tasks.indexOf(task)));
    })
  }

  const toggleProjectTab = function toggleCurrentProjectTabStyle (projectId) {
    const projects = document.querySelectorAll('.project-name');

    projects.forEach(project => {
      const projectIndex = project.parentNode.getAttribute('data-project-index');

      projectId == projectIndex ? project.classList.add('active-project') : project.classList.remove('active-project');
    })
  }

  const render = function renderAll (projects, currentProjectId) {
    renderProjectTabs(projects);
    renderTasks(projects[currentProjectId]);
    toggleProjectTab(currentProjectId);
  }

  return {
    clearChildNodes,
    checkExistingModal,
    popUpEditProjectModal,
    popUpProjectModal,
    popUpTaskModal,
    popUpEditTaskModal,
    exitModal,
    renderProjectTabs,
    renderTasks,
    toggleProjectTab,
    render
  }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayController);

/***/ }),

/***/ "./src/domHandler.js":
/*!***************************!*\
  !*** ./src/domHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _taskProcessor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskProcessor */ "./src/taskProcessor.js");
/* harmony import */ var _projectProcessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectProcessor */ "./src/projectProcessor.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorageHandler */ "./src/localStorageHandler.js");






const DOMHandler = (function() {
  let myProjects = _projectProcessor__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();

  let currentProjectId = 0;
  let projectIdBeingEdited = null;
  let taskIdBeingEdited = null;

  const triggerAddProjectBtn = function () {
    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].popUpProjectModal();
  }

  const triggerDelProjectBtn = function (target) {
    const projectId = getIdOf(target, 'data-project-index');
    if(projectId == currentProjectId) currentProjectId = 0;
    _projectProcessor__WEBPACK_IMPORTED_MODULE_2__["default"].removeProject(projectId);
    _localStorageHandler__WEBPACK_IMPORTED_MODULE_4__["default"].saveProjects(myProjects);
    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].render(myProjects, currentProjectId);
  }

  const triggerExitBtn = function () {
    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].exitModal();
  }

  const triggerSaveProjectBtn = function (form) {
    const projectName = form.pname.value;

    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].exitModal();
    _projectProcessor__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(_projectProcessor__WEBPACK_IMPORTED_MODULE_2__["default"].createProject(projectName));
    _localStorageHandler__WEBPACK_IMPORTED_MODULE_4__["default"].saveProjects(myProjects);
    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].render(myProjects, currentProjectId);
  }

  const triggerEditProjectBtn = function (target) {
    projectIdBeingEdited = getIdOf(target, 'data-project-index');
    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].popUpEditProjectModal(myProjects[projectIdBeingEdited].name);
  }

  const triggerChangeNameBtn = function (form) {
    const projectName = form.pname.value;

    _projectProcessor__WEBPACK_IMPORTED_MODULE_2__["default"].editProjectName(projectIdBeingEdited, projectName);
    _localStorageHandler__WEBPACK_IMPORTED_MODULE_4__["default"].saveProjects(myProjects);
    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].exitModal();
    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].render(myProjects, currentProjectId);
  }

  const triggerSelectedProject = function (target) {
    currentProjectId = getIdOf(target, 'data-project-index');

    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].renderTasks(myProjects[currentProjectId]);
    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].toggleProjectTab(currentProjectId);
  }

  const triggerAddTaskBtn = function () {
    if(!myProjects[currentProjectId]) return;

    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].popUpTaskModal();
  }

  const triggerSaveTaskBtn = function (form) {
    const taskInfo = {
      title: form.title.value,
      description: form.description.value,
      dueDate: form.date.value,
      priority: form.priority.value,
      finishedStatus: form.status.value == 'YES' ? true : false
    }

    let newTask = _taskProcessor__WEBPACK_IMPORTED_MODULE_1__["default"].createTask(taskInfo);

    _projectProcessor__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(currentProjectId, newTask);
    _localStorageHandler__WEBPACK_IMPORTED_MODULE_4__["default"].saveProjects(myProjects);
    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].exitModal();
    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].render(myProjects, currentProjectId);
  }

  const triggerFinishedStatusBtn = function (target) {
    const taskId = getIdOf(target, 'data-task-index');
    const currentProject = myProjects[currentProjectId];

    const checkStatus = target.checked;
    _taskProcessor__WEBPACK_IMPORTED_MODULE_1__["default"].toggleStatus(currentProject.tasks[taskId], checkStatus);
    _localStorageHandler__WEBPACK_IMPORTED_MODULE_4__["default"].saveProjects(myProjects);

    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].render(myProjects, currentProjectId);
  }

  const triggerExpandTaskBtn = function (target) {
    taskIdBeingEdited = getIdOf(target, 'data-task-index');

    const task = myProjects[currentProjectId].tasks[taskIdBeingEdited];

    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].popUpEditTaskModal(task);
  }

  const triggerChangeTaskBtn = function (target) {
    const taskInfo = {
      title: target.title.value,
      description: target.description.value,
      dueDate: target.date.value,
      priority: target.priority.value,
      finishedStatus: target.status.value === 'YES' ? true : false
    }

    let task = myProjects[currentProjectId].tasks[taskIdBeingEdited];

    _taskProcessor__WEBPACK_IMPORTED_MODULE_1__["default"].editTask(task, taskInfo);
    _localStorageHandler__WEBPACK_IMPORTED_MODULE_4__["default"].saveProjects(myProjects);
    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].exitModal();
    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].render(myProjects, currentProjectId);
  }

  const triggerDelTaskBtn = function () {
    _projectProcessor__WEBPACK_IMPORTED_MODULE_2__["default"].removeTask(currentProjectId, taskIdBeingEdited);
    _localStorageHandler__WEBPACK_IMPORTED_MODULE_4__["default"].saveProjects(myProjects);

    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].exitModal();
    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].render(myProjects, currentProjectId);
  }

  const getIdOf = function (curr, attrName) {
    while(!curr.hasAttribute(attrName)) curr = curr.parentNode;

    return curr.getAttribute(attrName);
  }

  const listenEvents = function () {
    const addProjectBtn = document.querySelector('.add-project-btn');
    const addTaskBtn = document.querySelector('.add-task-btn');

    document.addEventListener('click', (e) => {
      const targetClasslist = e.target.classList;
      if(targetClasslist.contains('delete-project-btn')) triggerDelProjectBtn(e.target);

      else if(targetClasslist.contains('edit-project')) triggerEditProjectBtn(e.target);

      else if(targetClasslist.contains('exit-btn')) triggerExitBtn();

      else if(targetClasslist.contains('project-name')) triggerSelectedProject(e.target);

      else if(targetClasslist.contains('finished-status')) triggerFinishedStatusBtn(e.target);

      else if(targetClasslist.contains('expand-btn')) triggerExpandTaskBtn(e.target);

      else if(targetClasslist.contains('delete-task')) triggerDelTaskBtn(e.target);
    })

    document.addEventListener('submit', (e) => {
      e.preventDefault();
      const targetClasslist = e.target.classList;

      if(targetClasslist.contains('add-project-modal')) triggerSaveProjectBtn(e.target);

      else if(targetClasslist.contains('edit-project-modal')) triggerChangeNameBtn(e.target);

      else if(targetClasslist.contains('add-task-modal')) triggerSaveTaskBtn(e.target);

      else if(targetClasslist.contains('edit-task-modal')) triggerChangeTaskBtn(e.target);
    });

    addProjectBtn.addEventListener('click', triggerAddProjectBtn);
    addTaskBtn.addEventListener('click', triggerAddTaskBtn);
  }

  const init = function initApp() {
    _displayController__WEBPACK_IMPORTED_MODULE_3__["default"].render(myProjects, currentProjectId);
    listenEvents();
  }

  return { init }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMHandler);

/***/ }),

/***/ "./src/elementModels.js":
/*!******************************!*\
  !*** ./src/elementModels.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_recycle_bin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/recycle-bin.png */ "./assets/recycle-bin.png");
/* harmony import */ var _assets_expand_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/expand-icon.svg */ "./assets/expand-icon.svg");



const elementsModels = {
  projectTabModel(name, projectId) {
    const projectTab = document.createElement('div');
    projectTab.classList.add('project-tab');
    projectTab.setAttribute('data-project-index', projectId);

    const projectName = document.createElement('span');
    projectName.classList.add('project-name');
    projectName.textContent = name;

    const editProjectBtn = document.createElement('button');
    editProjectBtn.classList.add('edit-project');
    editProjectBtn.textContent = 'Edit Name';

    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.classList.add('delete-btn', 'delete-project-btn');

    const binIcon = new Image();
    binIcon.classList.add('svg-icons');
    binIcon.src = _assets_recycle_bin_png__WEBPACK_IMPORTED_MODULE_0__;

    deleteProjectBtn.appendChild(binIcon);

    projectTab.append(projectName, editProjectBtn, deleteProjectBtn);

    return projectTab;
  },

  taskModel(task, taskId) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.setAttribute('data-task-index', taskId);
    
    const finishedStatus = document.createElement('input');
    finishedStatus.type = 'checkbox';
    finishedStatus.checked = task.finishedStatus;
    finishedStatus.classList.add('finished-status');

    const title = document.createElement('div');
    title.textContent = task.title;
    title.classList.add('title');
    task.finishedStatus ? title.classList.add('strikethrough') : title.classList.remove('strikethrough');

    const priority = document.createElement('div');
    priority.classList.add('priority', task.priority.toLowerCase());
    priority.textContent = task.priority;

    const dueDate = document.createElement('div');
    dueDate.classList.add('due-date');
    dueDate.textContent = task.dueDate;

    const expandIcon = new Image();
    expandIcon.src = _assets_expand_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
    expandIcon.classList.add('svg-icons', 'expand-icon');

    const expandButton = document.createElement('button');
    expandButton.classList.add('expand-btn');
    expandButton.appendChild(expandIcon);

    taskElement.append(finishedStatus, title, priority, dueDate, expandButton);

    return taskElement;
  },
  
  addProjectModal() {
    const projectModal = document.createElement('form');
    projectModal.setAttribute('action', '#');
    projectModal.classList.add('modal', 'add-project-modal');

    const projectModalHeader = document.createElement('div');
    projectModalHeader.classList.add('modal-header');

    const headerText = document.createElement('div');
    headerText.textContent = 'Enter Project Name';

    const exitBtn = document.createElement('button');
    exitBtn.classList.add('exit-btn');
    exitBtn.innerHTML = '&times;';

    projectModalHeader.append(headerText, exitBtn);

    const inputPart = document.createElement('div');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'project name...';
    input.classList.add('project-name-input');
    input.required = true;
    input.name = 'pname'

    const saveBtn = document.createElement('button');
    saveBtn.type = 'submit';
    saveBtn.classList.add('save', 'save-project');
    saveBtn.textContent = 'Save';

    inputPart.append(input, saveBtn);

    projectModal.append(projectModalHeader, inputPart);

    return projectModal;
  },

  editProjectModal(inputText) {
    const projectModal = document.createElement('form');
    projectModal.setAttribute('action', '#');
    projectModal.classList.add('modal', 'edit-project-modal');

    const projectModalHeader = document.createElement('div');
    projectModalHeader.classList.add('modal-header');

    const headerText = document.createElement('div');
    headerText.textContent = 'Edit Project Name';

    const exitBtn = document.createElement('button');
    exitBtn.classList.add('exit-btn');
    exitBtn.innerHTML = '&times;';

    projectModalHeader.append(headerText, exitBtn);

    const inputPart = document.createElement('div');

    const input = document.createElement('input');
    input.type = 'text';
    input.value = inputText;
    input.classList.add('project-name-input');
    input.name = 'pname';
    input.required = true;

    const saveBtn = document.createElement('button');
    saveBtn.type = 'submit';
    saveBtn.classList.add('save', 'edit-name');
    saveBtn.textContent = 'Save Changes';

    inputPart.append(input, saveBtn);

    projectModal.append(projectModalHeader, inputPart);

    return projectModal;
  },

  addTaskModal() {
    const taskModal = document.createElement('form');
    taskModal.classList.add('modal', 'add-task-modal');
    
    // header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header')

    const headerText = document.createElement('div');
    headerText.textContent = 'Add Task';

    const exitBtn = document.createElement('button');
    exitBtn.classList.add('exit-btn');
    exitBtn.innerHTML = '&times;';

    modalHeader.append(headerText, exitBtn);

    taskModal.appendChild(modalHeader);

    // TITLE
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title: ';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'title';
    titleInput.id = 'title';
    titleInput.name = 'title';
    titleInput.required = true;

    taskModal.append(titleLabel, titleInput);

    // DESCRIPTION

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = 'Description: ';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.placeholder = 'description';
    descriptionInput.id = 'description';
    descriptionInput.cols = '8';
    descriptionInput.name = 'description'
    descriptionInput.required = true;

    taskModal.append(descriptionLabel, descriptionInput);

    // Due Date

    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'due-date');
    dueDateLabel.textContent = 'Due Date:';

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'due-date';
    dueDateInput.name = 'date';
    dueDateInput.required = true;

    taskModal.append(dueDateLabel, dueDateInput);

    // Priority

    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Priority:';

    const priorityInput = document.createElement('select'); // Select Element
    priorityInput.id = 'priority';
    priorityInput.name = 'priority';

    const lowOption = document.createElement('option');
    lowOption.value = 'LOW';
    lowOption.textContent = 'Low';
    lowOption.selected = true;

    const medOption = document.createElement('option');
    medOption.value = 'MED';
    medOption.textContent = 'Med';

    const highOption = document.createElement('option');
    highOption.value = 'HIGH';
    highOption.textContent = 'High';

    priorityInput.append(lowOption, medOption, highOption);

    taskModal.append(priorityLabel, priorityInput)

    // finishedStatus

    const statusLabel = document.createElement('label');
    statusLabel.setAttribute('for', 'finished-status');
    statusLabel.textContent = 'Finished?:'

    const statusInput = document.createElement('select');
    statusInput.id = 'finished-status';
    statusInput.name = 'status';

    const noOption = document.createElement('option');
    noOption.value = 'NO';
    noOption.textContent = 'No';
    noOption.selected = true;

    const yesOption = document.createElement('option');
    yesOption.value = 'YES';
    yesOption.textContent = 'Yes';

    statusInput.append(noOption, yesOption);

    taskModal.append(statusLabel, statusInput);

    // Save Button
    const saveBtn = document.createElement('button');
    saveBtn.type = 'submit';
    saveBtn.classList.add('save', 'save-task');
    saveBtn.textContent = 'Save';

    taskModal.appendChild(saveBtn);

    return taskModal;
  },

  editTaskModal(task) {
    const taskModal = document.createElement('form');
    taskModal.classList.add('modal', 'edit-task-modal');
    
    // header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header')

    const headerText = document.createElement('div');
    headerText.textContent = 'Edit Task';

    const exitBtn = document.createElement('button');
    exitBtn.classList.add('exit-btn');
    exitBtn.innerHTML = '&times;';

    modalHeader.append(headerText, exitBtn);

    taskModal.appendChild(modalHeader);

    // TITLE
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title: ';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = task.title;
    titleInput.id = 'title';
    titleInput.name = 'title';
    titleInput.required = true;

    taskModal.append(titleLabel, titleInput);

    // DESCRIPTION

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = 'Description: ';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.value = task.description;
    descriptionInput.id = 'description';
    descriptionInput.cols = '8';
    descriptionInput.name = 'description'
    descriptionInput.required = true;

    taskModal.append(descriptionLabel, descriptionInput);

    // Due Date

    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'due-date');
    dueDateLabel.textContent = 'Due Date:';

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.value = task.dueDate;
    dueDateInput.id = 'due-date';
    dueDateInput.name = 'date';
    dueDateInput.required = true;

    taskModal.append(dueDateLabel, dueDateInput);

    // Priority

    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Priority:';

    const priorityInput = document.createElement('select'); // Select Element
    priorityInput.id = 'priority';
    priorityInput.name = 'priority';

    const lowOption = document.createElement('option');
    lowOption.value = 'LOW';
    lowOption.textContent = 'Low';

    const medOption = document.createElement('option');
    medOption.value = 'MED';
    medOption.textContent = 'Med';

    const highOption = document.createElement('option');
    highOption.value = 'HIGH';
    highOption.textContent = 'High';

    switch (task.priority) {
      case lowOption.value:
        lowOption.selected = true;
        break;

      case medOption.value:
        medOption.selected = true;
      
      case highOption.value:
        highOption.selected = true;
    }

    priorityInput.append(lowOption, medOption, highOption);

    taskModal.append(priorityLabel, priorityInput)

    // finishedStatus

    const statusLabel = document.createElement('label');
    statusLabel.setAttribute('for', 'finished-status');
    statusLabel.textContent = 'Finished?:'

    const statusInput = document.createElement('select');
    statusInput.id = 'finished-status';
    statusInput.name = 'status';

    const noOption = document.createElement('option');
    noOption.value = 'NO';
    noOption.textContent = 'No';

    const yesOption = document.createElement('option');
    yesOption.value = 'YES';
    yesOption.textContent = 'Yes';

    task.finishedStatus ? yesOption.selected = true : noOption.selected = true;

    statusInput.append(noOption, yesOption);

    taskModal.append(statusLabel, statusInput);

    // Save Button
    const saveBtn = document.createElement('button');
    saveBtn.type = 'submit';
    saveBtn.classList.add('save', 'save-task');
    saveBtn.textContent = 'Save';

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.classList.add('save', 'delete-task');
    deleteBtn.textContent = 'Delete';

    // Buttons Container
    const container = document.createElement('div');
    container.classList.add('btn-container');

    container.append(saveBtn, deleteBtn);

    taskModal.appendChild(container);

    return taskModal;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementsModels);

/***/ }),

/***/ "./src/localStorageHandler.js":
/*!************************************!*\
  !*** ./src/localStorageHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const LocalStorageHandler = (function () {
  const saveProjects = function (projects) {
    localStorage.setItem('myProjects', JSON.stringify(projects));
  }

  const loadProjects = function () {
    return JSON.parse(localStorage.getItem('myProjects'));
  }

  return {
    saveProjects,
    loadProjects
  }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalStorageHandler);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/projectProcessor.js":
/*!*********************************!*\
  !*** ./src/projectProcessor.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _localStorageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageHandler */ "./src/localStorageHandler.js");



const ProjectManager = (function() {
  let myProjects = _localStorageHandler__WEBPACK_IMPORTED_MODULE_1__["default"].loadProjects() || [];

  const getProjects = function getMyProjects() {
    return myProjects;
  }

  const createProject = function (name) {
    return new _project__WEBPACK_IMPORTED_MODULE_0__["default"](name);
  }

  const addProject = function addProjectToMyProjects(project) {
    myProjects.push(project);
  }

  const editProjectName = function (projectId, name) {
    myProjects[projectId].name = name;
  }

  const addTask = function (projectId, task) {
    myProjects[projectId].tasks.push(task);
  }

  const removeTask = function (projectId, taskId) {
    myProjects[projectId].tasks.splice(taskId, 1);
  }

  const removeProject = function (projectId) {
    myProjects.splice(projectId, 1);
  }

  return {
    getProjects,
    createProject,
    addProject,
    editProjectName,
    addTask,
    removeTask,
    removeProject
  }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectManager);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {

  constructor(title, description, dueDate, priority, finishedStatus) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.finishedStatus = finishedStatus;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/taskProcessor.js":
/*!******************************!*\
  !*** ./src/taskProcessor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


const TaskManager = (function() {
  const createTask = function (taskInfo) {
    let {title, description, dueDate, priority, finishedStatus} = taskInfo;
    return new _task__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority, finishedStatus);
  }

  const editTask = function editTaskFromGivenInfo(task, newInfo) {
    let {title, description, dueDate, priority, finishedStatus} = newInfo;

    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    task.finishedStatus = finishedStatus;
  }

  const toggleStatus = function toggleFinishedStatus(task, status) {
    task.finishedStatus = status;
  }

  return {
    createTask,
    editTask,
    toggleStatus
  }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskManager);

/***/ }),

/***/ "./assets/expand-icon.svg":
/*!********************************!*\
  !*** ./assets/expand-icon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35fb7806c4233a70022a.svg";

/***/ }),

/***/ "./assets/recycle-bin.png":
/*!********************************!*\
  !*** ./assets/recycle-bin.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2b11465278aecf92fa8.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHandler */ "./src/domHandler.js");


_domHandler__WEBPACK_IMPORTED_MODULE_0__["default"].init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsb0RBQVU7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUMvWjdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsbUJBQW1COzs7Ozs7Ozs7Ozs7OztBQ2ZsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BVO0FBQ3dCOztBQUV4RDtBQUNBLG1CQUFtQix5RUFBZ0M7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsZ0RBQU87QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDN0M3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ1hPOztBQUUxQjtBQUNBO0FBQ0EsU0FBUyx1REFBdUQ7QUFDaEUsZUFBZSw2Q0FBSTtBQUNuQjs7QUFFQTtBQUNBLFNBQVMsdURBQXVEOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0IxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDZnNDOztBQUV0Qyx3REFBZSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWxlbWVudE1vZGVscy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdFByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza1Byb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrZW5lZC1jb2xvcjogcmdiKDE2NiwgMjMwLCAyNTUpO1xcbiAgLS1wYWxlLWNvbG9yOiByZ2IoMjE1LCAyNDEsIDI1MSk7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMTJweCAwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1hcmdpbi1sZWZ0OiA0OHB4O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhYnMtd3JhcHBlciB7XFxuICBmbGV4LXNocmluazogMDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICB3aWR0aDogMzgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnRhc2tzLXdyYXBwZXIge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNHB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5wcm9qZWN0LXRhYiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNDMsIDI0Nik7ICovXFxufVxcblxcbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XFxuXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNSUgYXV0byAyMCUgMjAlIDUlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvdyB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5tZWQge1xcbiAgY29sb3I6IHJnYigyNTUsIDEyMywgMCk7XFxufVxcblxcbi5oaWdoIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5leHBhbmQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2F2ZS10YXNrIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZC1pY29uOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrID4gZGl2IHtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5zdHJpa2V0aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleC1ncm93OiA0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweCAwIDEycHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5lZGl0LXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlbmVkLWNvbG9yKVxcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1idG46aG92ZXIsIC5leGl0LWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbi5zYXZlIHtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExOCwgMjU1LCAxMTgpO1xcbn1cXG5cXG4uc2F2ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODYsIDE4OSwgODYpO1xcbn1cXG5cXG4uc2F2ZS1wcm9qZWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxufVxcblxcbmltZyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnN2Zy1pY29ucyB7XFxuICB3aWR0aDogMTZweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biwgLmFkZC10YXNrLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlciwgLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmRlbGV0ZS10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VuZWQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZXhpdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTZweCAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTs7RUFFYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYzs7RUFFZCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztFQUNQLG1DQUFtQzs7RUFFbkMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7O0VBRWIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7O0VBRWhCLGtCQUFrQjtFQUNsQiw4Q0FBOEM7O0VBRTlDLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUzs7RUFFVCx1Q0FBdUM7RUFDdkMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWRhcmtlbmVkLWNvbG9yOiByZ2IoMTY2LCAyMzAsIDI1NSk7XFxuICAtLXBhbGUtY29sb3I6IHJnYigyMTUsIDI0MSwgMjUxKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAxMnB4IDBweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWFyZ2luLWxlZnQ6IDQ4cHg7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFicy13cmFwcGVyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIHdpZHRoOiAzODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4udGFza3Mtd3JhcHBlciB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1jb2xvcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi50YXNrcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE0cHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnByb2plY3QtdGFiIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0MywgMjQ2KTsgKi9cXG59XFxuXFxuLnRhc2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWluLWhlaWdodDogNDhweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1JSBhdXRvIDIwJSAyMCUgNSU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG93IHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLm1lZCB7XFxuICBjb2xvcjogcmdiKDI1NSwgMTIzLCAwKTtcXG59XFxuXFxuLmhpZ2gge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmV4cGFuZC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zYXZlLXRhc2sge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZXhwYW5kLWljb246aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2sgPiBkaXYge1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLnN0cmlrZXRocm91Z2gge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmbGV4LWdyb3c6IDQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4IDAgMTJweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1jb2xvcik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0LW5hbWU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lZGl0LXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VuZWQtY29sb3IpXFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlLWJ0bjpob3ZlciwgLmV4aXQtYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuLnNhdmUge1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE4LCAyNTUsIDExOCk7XFxufVxcblxcbi5zYXZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NiwgMTg5LCA4Nik7XFxufVxcblxcbi5zYXZlLXByb2plY3Qge1xcbiAgbWFyZ2luLWxlZnQ6IDZweDtcXG59XFxuXFxuaW1nIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc3ZnLWljb25zIHtcXG4gIHdpZHRoOiAxNnB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuLCAuYWRkLXRhc2stYnRuIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyLCAuYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzYsIDEzNiwgMTM2KTtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzYwcHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZW5lZC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5leGl0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxNnB4IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGVsZW1lbnRzTW9kZWxzIGZyb20gXCIuL2VsZW1lbnRNb2RlbHNcIjtcblxuY29uc3QgRGlzcGxheUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgY2xlYXJDaGlsZE5vZGVzID0gZnVuY3Rpb24gY2xlYXJDaGlsZE5vZGVzRnJvbVBhcmVudE5vZGUocGFyZW50Tm9kZSkge1xuICAgIHdoaWxlKHBhcmVudE5vZGUuZmlyc3RDaGlsZCkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgY2hlY2tFeGlzdGluZ01vZGFsID0gZnVuY3Rpb24gY2hlY2tFeGlzdGluZ01vZGFsSW5XaW5kb3coKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBpZihtb2RhbCkgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBwb3BVcFByb2plY3RNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihjaGVja0V4aXN0aW5nTW9kYWwoKSkgcmV0dXJuO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudHNNb2RlbHMuYWRkUHJvamVjdE1vZGFsKCkpO1xuICB9XG5cbiAgY29uc3QgcG9wVXBFZGl0UHJvamVjdE1vZGFsID0gZnVuY3Rpb24gKGlucHV0VGV4dCkge1xuICAgIGlmKGNoZWNrRXhpc3RpbmdNb2RhbCgpKSByZXR1cm47XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnRzTW9kZWxzLmVkaXRQcm9qZWN0TW9kYWwoaW5wdXRUZXh0KSk7XG4gIH1cblxuICBjb25zdCBwb3BVcFRhc2tNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihjaGVja0V4aXN0aW5nTW9kYWwoKSkgcmV0dXJuO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudHNNb2RlbHMuYWRkVGFza01vZGFsKCkpO1xuICB9XG5cbiAgY29uc3QgcG9wVXBFZGl0VGFza01vZGFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICBpZihjaGVja0V4aXN0aW5nTW9kYWwoKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50c01vZGVscy5lZGl0VGFza01vZGFsKHRhc2spKTtcbiAgfVxuXG4gIGNvbnN0IGV4aXRNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGNoaWxkLnJlbW92ZSgpO1xuICB9XG5cbiAgY29uc3QgcmVuZGVyUHJvamVjdFRhYnMgPSBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgICBjb25zdCBwcm9qZWN0c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtd3JhcHBlcicpO1xuICAgIGNsZWFyQ2hpbGROb2Rlcyhwcm9qZWN0c1dyYXBwZXIpO1xuXG4gICAgaWYocHJvamVjdHMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdHNXcmFwcGVyLmFwcGVuZENoaWxkKGVsZW1lbnRzTW9kZWxzLnByb2plY3RUYWJNb2RlbChwcm9qZWN0Lm5hbWUsIHByb2plY3RzLmluZGV4T2YocHJvamVjdCkpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHJlbmRlclRhc2tzID0gZnVuY3Rpb24gcmVuZGVyVGFza3NPZkN1cnJlbnRQcm9qZWN0IChwcm9qZWN0KSB7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtY29udGFpbmVyJyk7XG4gICAgY2xlYXJDaGlsZE5vZGVzKHRhc2tzQ29udGFpbmVyKTtcblxuICAgIGlmKCFwcm9qZWN0KSByZXR1cm47XG5cbiAgICBjb25zdCB0YXNrcyA9IHByb2plY3QudGFza3M7XG5cbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHNNb2RlbHMudGFza01vZGVsKHRhc2ssIHRhc2tzLmluZGV4T2YodGFzaykpKTtcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgdG9nZ2xlUHJvamVjdFRhYiA9IGZ1bmN0aW9uIHRvZ2dsZUN1cnJlbnRQcm9qZWN0VGFiU3R5bGUgKHByb2plY3RJZCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbmFtZScpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3QucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pbmRleCcpO1xuXG4gICAgICBwcm9qZWN0SWQgPT0gcHJvamVjdEluZGV4ID8gcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpIDogcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgIH0pXG4gIH1cblxuICBjb25zdCByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJBbGwgKHByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKSB7XG4gICAgcmVuZGVyUHJvamVjdFRhYnMocHJvamVjdHMpO1xuICAgIHJlbmRlclRhc2tzKHByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWRdKTtcbiAgICB0b2dnbGVQcm9qZWN0VGFiKGN1cnJlbnRQcm9qZWN0SWQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbGVhckNoaWxkTm9kZXMsXG4gICAgY2hlY2tFeGlzdGluZ01vZGFsLFxuICAgIHBvcFVwRWRpdFByb2plY3RNb2RhbCxcbiAgICBwb3BVcFByb2plY3RNb2RhbCxcbiAgICBwb3BVcFRhc2tNb2RhbCxcbiAgICBwb3BVcEVkaXRUYXNrTW9kYWwsXG4gICAgZXhpdE1vZGFsLFxuICAgIHJlbmRlclByb2plY3RUYWJzLFxuICAgIHJlbmRlclRhc2tzLFxuICAgIHRvZ2dsZVByb2plY3RUYWIsXG4gICAgcmVuZGVyXG4gIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlDb250cm9sbGVyOyIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuaW1wb3J0IFRhc2tNYW5hZ2VyIGZyb20gJy4vdGFza1Byb2Nlc3Nvcic7XG5pbXBvcnQgUHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0UHJvY2Vzc29yJztcbmltcG9ydCBEaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL2Rpc3BsYXlDb250cm9sbGVyJztcbmltcG9ydCBMb2NhbFN0b3JhZ2VIYW5kbGVyIGZyb20gJy4vbG9jYWxTdG9yYWdlSGFuZGxlcic7XG5cbmNvbnN0IERPTUhhbmRsZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBteVByb2plY3RzID0gUHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdHMoKTtcblxuICBsZXQgY3VycmVudFByb2plY3RJZCA9IDA7XG4gIGxldCBwcm9qZWN0SWRCZWluZ0VkaXRlZCA9IG51bGw7XG4gIGxldCB0YXNrSWRCZWluZ0VkaXRlZCA9IG51bGw7XG5cbiAgY29uc3QgdHJpZ2dlckFkZFByb2plY3RCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIucG9wVXBQcm9qZWN0TW9kYWwoKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJEZWxQcm9qZWN0QnRuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGNvbnN0IHByb2plY3RJZCA9IGdldElkT2YodGFyZ2V0LCAnZGF0YS1wcm9qZWN0LWluZGV4Jyk7XG4gICAgaWYocHJvamVjdElkID09IGN1cnJlbnRQcm9qZWN0SWQpIGN1cnJlbnRQcm9qZWN0SWQgPSAwO1xuICAgIFByb2plY3RNYW5hZ2VyLnJlbW92ZVByb2plY3QocHJvamVjdElkKTtcbiAgICBMb2NhbFN0b3JhZ2VIYW5kbGVyLnNhdmVQcm9qZWN0cyhteVByb2plY3RzKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5yZW5kZXIobXlQcm9qZWN0cywgY3VycmVudFByb2plY3RJZCk7XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyRXhpdEJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5leGl0TW9kYWwoKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJTYXZlUHJvamVjdEJ0biA9IGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBmb3JtLnBuYW1lLnZhbHVlO1xuXG4gICAgRGlzcGxheUNvbnRyb2xsZXIuZXhpdE1vZGFsKCk7XG4gICAgUHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChQcm9qZWN0TWFuYWdlci5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKSk7XG4gICAgTG9jYWxTdG9yYWdlSGFuZGxlci5zYXZlUHJvamVjdHMobXlQcm9qZWN0cyk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIucmVuZGVyKG15UHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SWQpO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlckVkaXRQcm9qZWN0QnRuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHByb2plY3RJZEJlaW5nRWRpdGVkID0gZ2V0SWRPZih0YXJnZXQsICdkYXRhLXByb2plY3QtaW5kZXgnKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5wb3BVcEVkaXRQcm9qZWN0TW9kYWwobXlQcm9qZWN0c1twcm9qZWN0SWRCZWluZ0VkaXRlZF0ubmFtZSk7XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyQ2hhbmdlTmFtZUJ0biA9IGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBmb3JtLnBuYW1lLnZhbHVlO1xuXG4gICAgUHJvamVjdE1hbmFnZXIuZWRpdFByb2plY3ROYW1lKHByb2plY3RJZEJlaW5nRWRpdGVkLCBwcm9qZWN0TmFtZSk7XG4gICAgTG9jYWxTdG9yYWdlSGFuZGxlci5zYXZlUHJvamVjdHMobXlQcm9qZWN0cyk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIuZXhpdE1vZGFsKCk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIucmVuZGVyKG15UHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SWQpO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlclNlbGVjdGVkUHJvamVjdCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBjdXJyZW50UHJvamVjdElkID0gZ2V0SWRPZih0YXJnZXQsICdkYXRhLXByb2plY3QtaW5kZXgnKTtcblxuICAgIERpc3BsYXlDb250cm9sbGVyLnJlbmRlclRhc2tzKG15UHJvamVjdHNbY3VycmVudFByb2plY3RJZF0pO1xuICAgIERpc3BsYXlDb250cm9sbGVyLnRvZ2dsZVByb2plY3RUYWIoY3VycmVudFByb2plY3RJZCk7XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyQWRkVGFza0J0biA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZighbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdElkXSkgcmV0dXJuO1xuXG4gICAgRGlzcGxheUNvbnRyb2xsZXIucG9wVXBUYXNrTW9kYWwoKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJTYXZlVGFza0J0biA9IGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgY29uc3QgdGFza0luZm8gPSB7XG4gICAgICB0aXRsZTogZm9ybS50aXRsZS52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBmb3JtLmRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgZHVlRGF0ZTogZm9ybS5kYXRlLnZhbHVlLFxuICAgICAgcHJpb3JpdHk6IGZvcm0ucHJpb3JpdHkudmFsdWUsXG4gICAgICBmaW5pc2hlZFN0YXR1czogZm9ybS5zdGF0dXMudmFsdWUgPT0gJ1lFUycgPyB0cnVlIDogZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgbmV3VGFzayA9IFRhc2tNYW5hZ2VyLmNyZWF0ZVRhc2sodGFza0luZm8pO1xuXG4gICAgUHJvamVjdE1hbmFnZXIuYWRkVGFzayhjdXJyZW50UHJvamVjdElkLCBuZXdUYXNrKTtcbiAgICBMb2NhbFN0b3JhZ2VIYW5kbGVyLnNhdmVQcm9qZWN0cyhteVByb2plY3RzKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5leGl0TW9kYWwoKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5yZW5kZXIobXlQcm9qZWN0cywgY3VycmVudFByb2plY3RJZCk7XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyRmluaXNoZWRTdGF0dXNCdG4gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgY29uc3QgdGFza0lkID0gZ2V0SWRPZih0YXJnZXQsICdkYXRhLXRhc2staW5kZXgnKTtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJZF07XG5cbiAgICBjb25zdCBjaGVja1N0YXR1cyA9IHRhcmdldC5jaGVja2VkO1xuICAgIFRhc2tNYW5hZ2VyLnRvZ2dsZVN0YXR1cyhjdXJyZW50UHJvamVjdC50YXNrc1t0YXNrSWRdLCBjaGVja1N0YXR1cyk7XG4gICAgTG9jYWxTdG9yYWdlSGFuZGxlci5zYXZlUHJvamVjdHMobXlQcm9qZWN0cyk7XG5cbiAgICBEaXNwbGF5Q29udHJvbGxlci5yZW5kZXIobXlQcm9qZWN0cywgY3VycmVudFByb2plY3RJZCk7XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyRXhwYW5kVGFza0J0biA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB0YXNrSWRCZWluZ0VkaXRlZCA9IGdldElkT2YodGFyZ2V0LCAnZGF0YS10YXNrLWluZGV4Jyk7XG5cbiAgICBjb25zdCB0YXNrID0gbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdElkXS50YXNrc1t0YXNrSWRCZWluZ0VkaXRlZF07XG5cbiAgICBEaXNwbGF5Q29udHJvbGxlci5wb3BVcEVkaXRUYXNrTW9kYWwodGFzayk7XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyQ2hhbmdlVGFza0J0biA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBjb25zdCB0YXNrSW5mbyA9IHtcbiAgICAgIHRpdGxlOiB0YXJnZXQudGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogdGFyZ2V0LmRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgZHVlRGF0ZTogdGFyZ2V0LmRhdGUudmFsdWUsXG4gICAgICBwcmlvcml0eTogdGFyZ2V0LnByaW9yaXR5LnZhbHVlLFxuICAgICAgZmluaXNoZWRTdGF0dXM6IHRhcmdldC5zdGF0dXMudmFsdWUgPT09ICdZRVMnID8gdHJ1ZSA6IGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IHRhc2sgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZEJlaW5nRWRpdGVkXTtcblxuICAgIFRhc2tNYW5hZ2VyLmVkaXRUYXNrKHRhc2ssIHRhc2tJbmZvKTtcbiAgICBMb2NhbFN0b3JhZ2VIYW5kbGVyLnNhdmVQcm9qZWN0cyhteVByb2plY3RzKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5leGl0TW9kYWwoKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5yZW5kZXIobXlQcm9qZWN0cywgY3VycmVudFByb2plY3RJZCk7XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyRGVsVGFza0J0biA9IGZ1bmN0aW9uICgpIHtcbiAgICBQcm9qZWN0TWFuYWdlci5yZW1vdmVUYXNrKGN1cnJlbnRQcm9qZWN0SWQsIHRhc2tJZEJlaW5nRWRpdGVkKTtcbiAgICBMb2NhbFN0b3JhZ2VIYW5kbGVyLnNhdmVQcm9qZWN0cyhteVByb2plY3RzKTtcblxuICAgIERpc3BsYXlDb250cm9sbGVyLmV4aXRNb2RhbCgpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLnJlbmRlcihteVByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKTtcbiAgfVxuXG4gIGNvbnN0IGdldElkT2YgPSBmdW5jdGlvbiAoY3VyciwgYXR0ck5hbWUpIHtcbiAgICB3aGlsZSghY3Vyci5oYXNBdHRyaWJ1dGUoYXR0ck5hbWUpKSBjdXJyID0gY3Vyci5wYXJlbnROb2RlO1xuXG4gICAgcmV0dXJuIGN1cnIuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGxpc3RlbkV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRDbGFzc2xpc3QgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XG4gICAgICBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ2RlbGV0ZS1wcm9qZWN0LWJ0bicpKSB0cmlnZ2VyRGVsUHJvamVjdEJ0bihlLnRhcmdldCk7XG5cbiAgICAgIGVsc2UgaWYodGFyZ2V0Q2xhc3NsaXN0LmNvbnRhaW5zKCdlZGl0LXByb2plY3QnKSkgdHJpZ2dlckVkaXRQcm9qZWN0QnRuKGUudGFyZ2V0KTtcblxuICAgICAgZWxzZSBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ2V4aXQtYnRuJykpIHRyaWdnZXJFeGl0QnRuKCk7XG5cbiAgICAgIGVsc2UgaWYodGFyZ2V0Q2xhc3NsaXN0LmNvbnRhaW5zKCdwcm9qZWN0LW5hbWUnKSkgdHJpZ2dlclNlbGVjdGVkUHJvamVjdChlLnRhcmdldCk7XG5cbiAgICAgIGVsc2UgaWYodGFyZ2V0Q2xhc3NsaXN0LmNvbnRhaW5zKCdmaW5pc2hlZC1zdGF0dXMnKSkgdHJpZ2dlckZpbmlzaGVkU3RhdHVzQnRuKGUudGFyZ2V0KTtcblxuICAgICAgZWxzZSBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ2V4cGFuZC1idG4nKSkgdHJpZ2dlckV4cGFuZFRhc2tCdG4oZS50YXJnZXQpO1xuXG4gICAgICBlbHNlIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnZGVsZXRlLXRhc2snKSkgdHJpZ2dlckRlbFRhc2tCdG4oZS50YXJnZXQpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGFyZ2V0Q2xhc3NsaXN0ID0gZS50YXJnZXQuY2xhc3NMaXN0O1xuXG4gICAgICBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ2FkZC1wcm9qZWN0LW1vZGFsJykpIHRyaWdnZXJTYXZlUHJvamVjdEJ0bihlLnRhcmdldCk7XG5cbiAgICAgIGVsc2UgaWYodGFyZ2V0Q2xhc3NsaXN0LmNvbnRhaW5zKCdlZGl0LXByb2plY3QtbW9kYWwnKSkgdHJpZ2dlckNoYW5nZU5hbWVCdG4oZS50YXJnZXQpO1xuXG4gICAgICBlbHNlIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnYWRkLXRhc2stbW9kYWwnKSkgdHJpZ2dlclNhdmVUYXNrQnRuKGUudGFyZ2V0KTtcblxuICAgICAgZWxzZSBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ2VkaXQtdGFzay1tb2RhbCcpKSB0cmlnZ2VyQ2hhbmdlVGFza0J0bihlLnRhcmdldCk7XG4gICAgfSk7XG5cbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdHJpZ2dlckFkZFByb2plY3RCdG4pO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0cmlnZ2VyQWRkVGFza0J0bik7XG4gIH1cblxuICBjb25zdCBpbml0ID0gZnVuY3Rpb24gaW5pdEFwcCgpIHtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5yZW5kZXIobXlQcm9qZWN0cywgY3VycmVudFByb2plY3RJZCk7XG4gICAgbGlzdGVuRXZlbnRzKCk7XG4gIH1cblxuICByZXR1cm4geyBpbml0IH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTUhhbmRsZXI7IiwiaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnLi4vYXNzZXRzL3JlY3ljbGUtYmluLnBuZyc7XG5pbXBvcnQgRXhwYW5kSWNvbiBmcm9tICcuLi9hc3NldHMvZXhwYW5kLWljb24uc3ZnJ1xuXG5jb25zdCBlbGVtZW50c01vZGVscyA9IHtcbiAgcHJvamVjdFRhYk1vZGVsKG5hbWUsIHByb2plY3RJZCkge1xuICAgIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFiJyk7XG4gICAgcHJvamVjdFRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1pbmRleCcsIHByb2plY3RJZCk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvamVjdCcpO1xuICAgIGVkaXRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQgTmFtZSc7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJywgJ2RlbGV0ZS1wcm9qZWN0LWJ0bicpO1xuXG4gICAgY29uc3QgYmluSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGJpbkljb24uY2xhc3NMaXN0LmFkZCgnc3ZnLWljb25zJyk7XG4gICAgYmluSWNvbi5zcmMgPSBEZWxldGVJY29uO1xuXG4gICAgZGVsZXRlUHJvamVjdEJ0bi5hcHBlbmRDaGlsZChiaW5JY29uKTtcblxuICAgIHByb2plY3RUYWIuYXBwZW5kKHByb2plY3ROYW1lLCBlZGl0UHJvamVjdEJ0biwgZGVsZXRlUHJvamVjdEJ0bik7XG5cbiAgICByZXR1cm4gcHJvamVjdFRhYjtcbiAgfSxcblxuICB0YXNrTW9kZWwodGFzaywgdGFza0lkKSB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgdGFza0VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2staW5kZXgnLCB0YXNrSWQpO1xuICAgIFxuICAgIGNvbnN0IGZpbmlzaGVkU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmaW5pc2hlZFN0YXR1cy50eXBlID0gJ2NoZWNrYm94JztcbiAgICBmaW5pc2hlZFN0YXR1cy5jaGVja2VkID0gdGFzay5maW5pc2hlZFN0YXR1cztcbiAgICBmaW5pc2hlZFN0YXR1cy5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZC1zdGF0dXMnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGFzay5maW5pc2hlZFN0YXR1cyA/IHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0cmlrZXRocm91Z2gnKSA6IHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmlrZXRocm91Z2gnKTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknLCB0YXNrLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblxuICAgIGNvbnN0IGV4cGFuZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBleHBhbmRJY29uLnNyYyA9IEV4cGFuZEljb247XG4gICAgZXhwYW5kSWNvbi5jbGFzc0xpc3QuYWRkKCdzdmctaWNvbnMnLCAnZXhwYW5kLWljb24nKTtcblxuICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtYnRuJyk7XG4gICAgZXhwYW5kQnV0dG9uLmFwcGVuZENoaWxkKGV4cGFuZEljb24pO1xuXG4gICAgdGFza0VsZW1lbnQuYXBwZW5kKGZpbmlzaGVkU3RhdHVzLCB0aXRsZSwgcHJpb3JpdHksIGR1ZURhdGUsIGV4cGFuZEJ1dHRvbik7XG5cbiAgICByZXR1cm4gdGFza0VsZW1lbnQ7XG4gIH0sXG4gIFxuICBhZGRQcm9qZWN0TW9kYWwoKSB7XG4gICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2plY3RNb2RhbC5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gICAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2FkZC1wcm9qZWN0LW1vZGFsJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0TW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TW9kYWxIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9ICdFbnRlciBQcm9qZWN0IE5hbWUnO1xuXG4gICAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnZXhpdC1idG4nKTtcbiAgICBleGl0QnRuLmlubmVySFRNTCA9ICcmdGltZXM7JztcblxuICAgIHByb2plY3RNb2RhbEhlYWRlci5hcHBlbmQoaGVhZGVyVGV4dCwgZXhpdEJ0bik7XG5cbiAgICBjb25zdCBpbnB1dFBhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJ3Byb2plY3QgbmFtZS4uLic7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lLWlucHV0Jyk7XG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGlucHV0Lm5hbWUgPSAncG5hbWUnXG5cbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2F2ZUJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdzYXZlJywgJ3NhdmUtcHJvamVjdCcpO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG5cbiAgICBpbnB1dFBhcnQuYXBwZW5kKGlucHV0LCBzYXZlQnRuKTtcblxuICAgIHByb2plY3RNb2RhbC5hcHBlbmQocHJvamVjdE1vZGFsSGVhZGVyLCBpbnB1dFBhcnQpO1xuXG4gICAgcmV0dXJuIHByb2plY3RNb2RhbDtcbiAgfSxcblxuICBlZGl0UHJvamVjdE1vZGFsKGlucHV0VGV4dCkge1xuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0TW9kYWwuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xuICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdlZGl0LXByb2plY3QtbW9kYWwnKTtcblxuICAgIGNvbnN0IHByb2plY3RNb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RNb2RhbEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkZXInKTtcblxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCBOYW1lJztcblxuICAgIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBleGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2V4aXQtYnRuJyk7XG4gICAgZXhpdEJ0bi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG5cbiAgICBwcm9qZWN0TW9kYWxIZWFkZXIuYXBwZW5kKGhlYWRlclRleHQsIGV4aXRCdG4pO1xuXG4gICAgY29uc3QgaW5wdXRQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dC52YWx1ZSA9IGlucHV0VGV4dDtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUtaW5wdXQnKTtcbiAgICBpbnB1dC5uYW1lID0gJ3BuYW1lJztcbiAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2F2ZUJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdzYXZlJywgJ2VkaXQtbmFtZScpO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSBDaGFuZ2VzJztcblxuICAgIGlucHV0UGFydC5hcHBlbmQoaW5wdXQsIHNhdmVCdG4pO1xuXG4gICAgcHJvamVjdE1vZGFsLmFwcGVuZChwcm9qZWN0TW9kYWxIZWFkZXIsIGlucHV0UGFydCk7XG5cbiAgICByZXR1cm4gcHJvamVjdE1vZGFsO1xuICB9LFxuXG4gIGFkZFRhc2tNb2RhbCgpIHtcbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2FkZC10YXNrLW1vZGFsJyk7XG4gICAgXG4gICAgLy8gaGVhZGVyXG4gICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkZXInKVxuXG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuXG4gICAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnZXhpdC1idG4nKTtcbiAgICBleGl0QnRuLmlubmVySFRNTCA9ICcmdGltZXM7JztcblxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZChoZWFkZXJUZXh0LCBleGl0QnRuKTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcik7XG5cbiAgICAvLyBUSVRMRVxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAndGl0bGUnO1xuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xuXG4gICAgLy8gREVTQ1JJUFRJT05cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jb2xzID0gJzgnO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbidcbiAgICBkZXNjcmlwdGlvbklucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICAvLyBEdWUgRGF0ZVxuXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKTtcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcblxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0LmlkID0gJ2R1ZS1kYXRlJztcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkYXRlJztcbiAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZChkdWVEYXRlTGFiZWwsIGR1ZURhdGVJbnB1dCk7XG5cbiAgICAvLyBQcmlvcml0eVxuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcblxuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTsgLy8gU2VsZWN0IEVsZW1lbnRcbiAgICBwcmlvcml0eUlucHV0LmlkID0gJ3ByaW9yaXR5JztcbiAgICBwcmlvcml0eUlucHV0Lm5hbWUgPSAncHJpb3JpdHknO1xuXG4gICAgY29uc3QgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbG93T3B0aW9uLnZhbHVlID0gJ0xPVyc7XG4gICAgbG93T3B0aW9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgbG93T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IG1lZE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1lZE9wdGlvbi52YWx1ZSA9ICdNRUQnO1xuICAgIG1lZE9wdGlvbi50ZXh0Q29udGVudCA9ICdNZWQnO1xuXG4gICAgY29uc3QgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGhpZ2hPcHRpb24udmFsdWUgPSAnSElHSCc7XG4gICAgaGlnaE9wdGlvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kKGxvd09wdGlvbiwgbWVkT3B0aW9uLCBoaWdoT3B0aW9uKTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlJbnB1dClcblxuICAgIC8vIGZpbmlzaGVkU3RhdHVzXG5cbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgc3RhdHVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZmluaXNoZWQtc3RhdHVzJyk7XG4gICAgc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSAnRmluaXNoZWQ/OidcblxuICAgIGNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc3RhdHVzSW5wdXQuaWQgPSAnZmluaXNoZWQtc3RhdHVzJztcbiAgICBzdGF0dXNJbnB1dC5uYW1lID0gJ3N0YXR1cyc7XG5cbiAgICBjb25zdCBub09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG5vT3B0aW9uLnZhbHVlID0gJ05PJztcbiAgICBub09wdGlvbi50ZXh0Q29udGVudCA9ICdObyc7XG4gICAgbm9PcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgeWVzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgeWVzT3B0aW9uLnZhbHVlID0gJ1lFUyc7XG4gICAgeWVzT3B0aW9uLnRleHRDb250ZW50ID0gJ1llcyc7XG5cbiAgICBzdGF0dXNJbnB1dC5hcHBlbmQobm9PcHRpb24sIHllc09wdGlvbik7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kKHN0YXR1c0xhYmVsLCBzdGF0dXNJbnB1dCk7XG5cbiAgICAvLyBTYXZlIEJ1dHRvblxuICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlQnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzYXZlQnRuLmNsYXNzTGlzdC5hZGQoJ3NhdmUnLCAnc2F2ZS10YXNrJyk7XG4gICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdTYXZlJztcblxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChzYXZlQnRuKTtcblxuICAgIHJldHVybiB0YXNrTW9kYWw7XG4gIH0sXG5cbiAgZWRpdFRhc2tNb2RhbCh0YXNrKSB7XG4gICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdlZGl0LXRhc2stbW9kYWwnKTtcbiAgICBcbiAgICAvLyBoZWFkZXJcbiAgICBjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWhlYWRlcicpXG5cbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuXG4gICAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnZXhpdC1idG4nKTtcbiAgICBleGl0QnRuLmlubmVySFRNTCA9ICcmdGltZXM7JztcblxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZChoZWFkZXJUZXh0LCBleGl0QnRuKTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcik7XG5cbiAgICAvLyBUSVRMRVxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xuXG4gICAgLy8gREVTQ1JJUFRJT05cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jb2xzID0gJzgnO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbidcbiAgICBkZXNjcmlwdGlvbklucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICAvLyBEdWUgRGF0ZVxuXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKTtcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcblxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdkdWUtZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQoZHVlRGF0ZUxhYmVsLCBkdWVEYXRlSW5wdXQpO1xuXG4gICAgLy8gUHJpb3JpdHlcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG5cbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7IC8vIFNlbGVjdCBFbGVtZW50XG4gICAgcHJpb3JpdHlJbnB1dC5pZCA9ICdwcmlvcml0eSc7XG4gICAgcHJpb3JpdHlJbnB1dC5uYW1lID0gJ3ByaW9yaXR5JztcblxuICAgIGNvbnN0IGxvd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGxvd09wdGlvbi52YWx1ZSA9ICdMT1cnO1xuICAgIGxvd09wdGlvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgY29uc3QgbWVkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbWVkT3B0aW9uLnZhbHVlID0gJ01FRCc7XG4gICAgbWVkT3B0aW9uLnRleHRDb250ZW50ID0gJ01lZCc7XG5cbiAgICBjb25zdCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaGlnaE9wdGlvbi52YWx1ZSA9ICdISUdIJztcbiAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgc3dpdGNoICh0YXNrLnByaW9yaXR5KSB7XG4gICAgICBjYXNlIGxvd09wdGlvbi52YWx1ZTpcbiAgICAgICAgbG93T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgbWVkT3B0aW9uLnZhbHVlOlxuICAgICAgICBtZWRPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgXG4gICAgICBjYXNlIGhpZ2hPcHRpb24udmFsdWU6XG4gICAgICAgIGhpZ2hPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kKGxvd09wdGlvbiwgbWVkT3B0aW9uLCBoaWdoT3B0aW9uKTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlJbnB1dClcblxuICAgIC8vIGZpbmlzaGVkU3RhdHVzXG5cbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgc3RhdHVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZmluaXNoZWQtc3RhdHVzJyk7XG4gICAgc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSAnRmluaXNoZWQ/OidcblxuICAgIGNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc3RhdHVzSW5wdXQuaWQgPSAnZmluaXNoZWQtc3RhdHVzJztcbiAgICBzdGF0dXNJbnB1dC5uYW1lID0gJ3N0YXR1cyc7XG5cbiAgICBjb25zdCBub09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG5vT3B0aW9uLnZhbHVlID0gJ05PJztcbiAgICBub09wdGlvbi50ZXh0Q29udGVudCA9ICdObyc7XG5cbiAgICBjb25zdCB5ZXNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICB5ZXNPcHRpb24udmFsdWUgPSAnWUVTJztcbiAgICB5ZXNPcHRpb24udGV4dENvbnRlbnQgPSAnWWVzJztcblxuICAgIHRhc2suZmluaXNoZWRTdGF0dXMgPyB5ZXNPcHRpb24uc2VsZWN0ZWQgPSB0cnVlIDogbm9PcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgc3RhdHVzSW5wdXQuYXBwZW5kKG5vT3B0aW9uLCB5ZXNPcHRpb24pO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZChzdGF0dXNMYWJlbCwgc3RhdHVzSW5wdXQpO1xuXG4gICAgLy8gU2F2ZSBCdXR0b25cbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2F2ZUJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdzYXZlJywgJ3NhdmUtdGFzaycpO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG5cbiAgICAvLyBEZWxldGUgQnV0dG9uXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnc2F2ZScsICdkZWxldGUtdGFzaycpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gICAgLy8gQnV0dG9ucyBDb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcicpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChzYXZlQnRuLCBkZWxldGVCdG4pO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gdGFza01vZGFsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRzTW9kZWxzOyIsImNvbnN0IExvY2FsU3RvcmFnZUhhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBzYXZlUHJvamVjdHMgPSBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cblxuICBjb25zdCBsb2FkUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdHMnKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNhdmVQcm9qZWN0cyxcbiAgICBsb2FkUHJvamVjdHNcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxTdG9yYWdlSGFuZGxlcjsiLCJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IExvY2FsU3RvcmFnZUhhbmRsZXIgZnJvbSBcIi4vbG9jYWxTdG9yYWdlSGFuZGxlclwiO1xuXG5jb25zdCBQcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbigpIHtcbiAgbGV0IG15UHJvamVjdHMgPSBMb2NhbFN0b3JhZ2VIYW5kbGVyLmxvYWRQcm9qZWN0cygpIHx8IFtdO1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gZnVuY3Rpb24gZ2V0TXlQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gbXlQcm9qZWN0cztcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBuZXcgUHJvamVjdChuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGFkZFByb2plY3QgPSBmdW5jdGlvbiBhZGRQcm9qZWN0VG9NeVByb2plY3RzKHByb2plY3QpIHtcbiAgICBteVByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH1cblxuICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSBmdW5jdGlvbiAocHJvamVjdElkLCBuYW1lKSB7XG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SWRdLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uIChwcm9qZWN0SWQsIHRhc2spIHtcbiAgICBteVByb2plY3RzW3Byb2plY3RJZF0udGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSBmdW5jdGlvbiAocHJvamVjdElkLCB0YXNrSWQpIHtcbiAgICBteVByb2plY3RzW3Byb2plY3RJZF0udGFza3Muc3BsaWNlKHRhc2tJZCwgMSk7XG4gIH1cblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3RJZCkge1xuICAgIG15UHJvamVjdHMuc3BsaWNlKHByb2plY3RJZCwgMSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICBlZGl0UHJvamVjdE5hbWUsXG4gICAgYWRkVGFzayxcbiAgICByZW1vdmVUYXNrLFxuICAgIHJlbW92ZVByb2plY3RcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdE1hbmFnZXI7IiwiY2xhc3MgVGFzayB7XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZmluaXNoZWRTdGF0dXMpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZmluaXNoZWRTdGF0dXMgPSBmaW5pc2hlZFN0YXR1cztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgVGFza01hbmFnZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSBmdW5jdGlvbiAodGFza0luZm8pIHtcbiAgICBsZXQge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZpbmlzaGVkU3RhdHVzfSA9IHRhc2tJbmZvO1xuICAgIHJldHVybiBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBmaW5pc2hlZFN0YXR1cyk7XG4gIH1cblxuICBjb25zdCBlZGl0VGFzayA9IGZ1bmN0aW9uIGVkaXRUYXNrRnJvbUdpdmVuSW5mbyh0YXNrLCBuZXdJbmZvKSB7XG4gICAgbGV0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBmaW5pc2hlZFN0YXR1c30gPSBuZXdJbmZvO1xuXG4gICAgdGFzay50aXRsZSA9IHRpdGxlO1xuICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0YXNrLmZpbmlzaGVkU3RhdHVzID0gZmluaXNoZWRTdGF0dXM7XG4gIH1cblxuICBjb25zdCB0b2dnbGVTdGF0dXMgPSBmdW5jdGlvbiB0b2dnbGVGaW5pc2hlZFN0YXR1cyh0YXNrLCBzdGF0dXMpIHtcbiAgICB0YXNrLmZpbmlzaGVkU3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUYXNrLFxuICAgIGVkaXRUYXNrLFxuICAgIHRvZ2dsZVN0YXR1c1xuICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrTWFuYWdlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBET01IYW5kbGVyIGZyb20gXCIuL2RvbUhhbmRsZXJcIjtcblxuRE9NSGFuZGxlci5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9