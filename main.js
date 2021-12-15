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
        break;
      
      case highOption.value:
        highOption.selected = true;
        break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLDJCQUEyQixHQUFHLFdBQVcseUNBQXlDLHFDQUFxQyxHQUFHLFVBQVUsY0FBYyxlQUFlLGtCQUFrQixvQkFBb0IsMkJBQTJCLEdBQUcsYUFBYSxnQkFBZ0IsMkJBQTJCLGdCQUFnQixvQkFBb0Isc0JBQXNCLHNCQUFzQixHQUFHLFdBQVcsc0JBQXNCLEdBQUcsY0FBYyxZQUFZLGtCQUFrQixHQUFHLG1CQUFtQixtQkFBbUIsZ0NBQWdDLGlCQUFpQixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyxvQkFBb0IsWUFBWSx3Q0FBd0Msb0JBQW9CLDJCQUEyQixjQUFjLGtCQUFrQixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyxxQkFBcUIsbUJBQW1CLHNCQUFzQix1QkFBdUIsR0FBRyx1QkFBdUIsa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsa0JBQWtCLGdCQUFnQixrQkFBa0IsK0NBQStDLEtBQUssV0FBVyxnQkFBZ0IsMkJBQTJCLHFCQUFxQix5QkFBeUIsbURBQW1ELG9CQUFvQiw4Q0FBOEMsd0JBQXdCLEdBQUcsVUFBVSxpQkFBaUIsR0FBRyxVQUFVLDRCQUE0QixHQUFHLFdBQVcsZUFBZSxHQUFHLGlCQUFpQixrQ0FBa0Msb0JBQW9CLEdBQUcsZ0JBQWdCLHVCQUF1QixHQUFHLHdCQUF3QixlQUFlLEdBQUcsaUJBQWlCLG1CQUFtQixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLGFBQWEsR0FBRyxvQkFBb0Isa0NBQWtDLGdCQUFnQixHQUFHLG1CQUFtQixvQkFBb0IsaUJBQWlCLHVCQUF1QiwyQkFBMkIsd0NBQXdDLHNCQUFzQixxQkFBcUIsR0FBRyx5QkFBeUIsNEJBQTRCLGlCQUFpQixHQUFHLHFCQUFxQiw0QkFBNEIsaUJBQWlCLEdBQUcsbUJBQW1CLHlDQUF5QyxvQkFBb0IsR0FBRyx5QkFBeUIsOENBQThDLGlCQUFpQixrQ0FBa0MsaUJBQWlCLG9CQUFvQixHQUFHLHdDQUF3QywwQkFBMEIsR0FBRyxXQUFXLHNCQUFzQix5Q0FBeUMsR0FBRyxpQkFBaUIsdUNBQXVDLEdBQUcsbUJBQW1CLHFCQUFxQixHQUFHLFNBQVMseUJBQXlCLEdBQUcsZ0JBQWdCLGdCQUFnQixHQUFHLHFDQUFxQyx1QkFBdUIsc0JBQXNCLDJCQUEyQixpQkFBaUIsc0JBQXNCLEdBQUcsbUJBQW1CLHlCQUF5QixHQUFHLGlEQUFpRCx5Q0FBeUMsZ0JBQWdCLEdBQUcsd0JBQXdCLDBCQUEwQixHQUFHLG9CQUFvQixrQkFBa0IsNEJBQTRCLGFBQWEsR0FBRyxZQUFZLGFBQWEsY0FBYyxxQ0FBcUMsdUJBQXVCLGlCQUFpQixrQkFBa0Isa0JBQWtCLDJCQUEyQixjQUFjLDhDQUE4QywyQkFBMkIsR0FBRyxtQkFBbUIsa0JBQWtCLG1DQUFtQyxHQUFHLGVBQWUsa0NBQWtDLG9CQUFvQixHQUFHLFlBQVkscUJBQXFCLGdCQUFnQixrQkFBa0IsNEJBQTRCLHdCQUF3QiwyQkFBMkIsZ0JBQWdCLG9CQUFvQixHQUFHLFlBQVksdUJBQXVCLEdBQUcsT0FBTyxzRkFBc0YsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSw2QkFBNkIsMkJBQTJCLEdBQUcsV0FBVyx5Q0FBeUMscUNBQXFDLEdBQUcsVUFBVSxjQUFjLGVBQWUsa0JBQWtCLG9CQUFvQiwyQkFBMkIsR0FBRyxhQUFhLGdCQUFnQiwyQkFBMkIsZ0JBQWdCLG9CQUFvQixzQkFBc0Isc0JBQXNCLEdBQUcsV0FBVyxzQkFBc0IsR0FBRyxjQUFjLFlBQVksa0JBQWtCLEdBQUcsbUJBQW1CLG1CQUFtQixnQ0FBZ0MsaUJBQWlCLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLG9CQUFvQixZQUFZLHdDQUF3QyxvQkFBb0IsMkJBQTJCLGNBQWMsa0JBQWtCLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLHFCQUFxQixtQkFBbUIsc0JBQXNCLHVCQUF1QixHQUFHLHVCQUF1QixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyxrQkFBa0IsZ0JBQWdCLGtCQUFrQiwrQ0FBK0MsS0FBSyxXQUFXLGdCQUFnQiwyQkFBMkIscUJBQXFCLHlCQUF5QixtREFBbUQsb0JBQW9CLDhDQUE4Qyx3QkFBd0IsR0FBRyxVQUFVLGlCQUFpQixHQUFHLFVBQVUsNEJBQTRCLEdBQUcsV0FBVyxlQUFlLEdBQUcsaUJBQWlCLGtDQUFrQyxvQkFBb0IsR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsd0JBQXdCLGVBQWUsR0FBRyxpQkFBaUIsbUJBQW1CLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsYUFBYSxHQUFHLG9CQUFvQixrQ0FBa0MsZ0JBQWdCLEdBQUcsbUJBQW1CLG9CQUFvQixpQkFBaUIsdUJBQXVCLDJCQUEyQix3Q0FBd0Msc0JBQXNCLHFCQUFxQixHQUFHLHlCQUF5Qiw0QkFBNEIsaUJBQWlCLEdBQUcscUJBQXFCLDRCQUE0QixpQkFBaUIsR0FBRyxtQkFBbUIseUNBQXlDLG9CQUFvQixHQUFHLHlCQUF5Qiw4Q0FBOEMsaUJBQWlCLGtDQUFrQyxpQkFBaUIsb0JBQW9CLEdBQUcsd0NBQXdDLDBCQUEwQixHQUFHLFdBQVcsc0JBQXNCLHlDQUF5QyxHQUFHLGlCQUFpQix1Q0FBdUMsR0FBRyxtQkFBbUIscUJBQXFCLEdBQUcsU0FBUyx5QkFBeUIsR0FBRyxnQkFBZ0IsZ0JBQWdCLEdBQUcscUNBQXFDLHVCQUF1QixzQkFBc0IsMkJBQTJCLGlCQUFpQixzQkFBc0IsR0FBRyxtQkFBbUIseUJBQXlCLEdBQUcsaURBQWlELHlDQUF5QyxnQkFBZ0IsR0FBRyx3QkFBd0IsMEJBQTBCLEdBQUcsb0JBQW9CLGtCQUFrQiw0QkFBNEIsYUFBYSxHQUFHLFlBQVksYUFBYSxjQUFjLHFDQUFxQyx1QkFBdUIsaUJBQWlCLGtCQUFrQixrQkFBa0IsMkJBQTJCLGNBQWMsOENBQThDLDJCQUEyQixHQUFHLG1CQUFtQixrQkFBa0IsbUNBQW1DLEdBQUcsZUFBZSxrQ0FBa0Msb0JBQW9CLEdBQUcsWUFBWSxxQkFBcUIsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDJCQUEyQixnQkFBZ0Isb0JBQW9CLEdBQUcsWUFBWSx1QkFBdUIsR0FBRyxtQkFBbUI7QUFDMzdTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2Y2Qzs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzRUFBOEI7QUFDbkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQix1RUFBK0I7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1FQUEyQjtBQUNoRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLG9FQUE0QjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQ0FBa0Msc0VBQThCO0FBQ2hFLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxpQ0FBaUMsZ0VBQXdCO0FBQ3pELEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdMO0FBQ2U7QUFDTTtBQUNJO0FBQ0k7O0FBRXhEO0FBQ0EsbUJBQW1CLHFFQUEwQjs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw0RUFBbUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBNEI7QUFDaEMsSUFBSSx5RUFBZ0M7QUFDcEMsSUFBSSxpRUFBd0I7QUFDNUI7O0FBRUE7QUFDQSxJQUFJLG9FQUEyQjtBQUMvQjs7QUFFQTtBQUNBOztBQUVBLElBQUksb0VBQTJCO0FBQy9CLElBQUksb0VBQXlCLENBQUMsdUVBQTRCO0FBQzFELElBQUkseUVBQWdDO0FBQ3BDLElBQUksaUVBQXdCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGdGQUF1QztBQUMzQzs7QUFFQTtBQUNBOztBQUVBLElBQUkseUVBQThCO0FBQ2xDLElBQUkseUVBQWdDO0FBQ3BDLElBQUksb0VBQTJCO0FBQy9CLElBQUksaUVBQXdCO0FBQzVCOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxzRUFBNkI7QUFDakMsSUFBSSwyRUFBa0M7QUFDdEM7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLHlFQUFnQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpRUFBc0I7O0FBRXhDLElBQUksaUVBQXNCO0FBQzFCLElBQUkseUVBQWdDO0FBQ3BDLElBQUksb0VBQTJCO0FBQy9CLElBQUksaUVBQXdCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksbUVBQXdCO0FBQzVCLElBQUkseUVBQWdDOztBQUVwQyxJQUFJLGlFQUF3QjtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBOztBQUVBLElBQUksNkVBQW9DO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSwrREFBb0I7QUFDeEIsSUFBSSx5RUFBZ0M7QUFDcEMsSUFBSSxvRUFBMkI7QUFDL0IsSUFBSSxpRUFBd0I7QUFDNUI7O0FBRUE7QUFDQSxJQUFJLG9FQUF5QjtBQUM3QixJQUFJLHlFQUFnQzs7QUFFcEMsSUFBSSxvRUFBMkI7QUFDL0IsSUFBSSxpRUFBd0I7QUFDNUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpRUFBd0I7QUFDNUI7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEwwQjtBQUNEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFVOztBQUU1Qjs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsb0RBQVU7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDamE3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7QUNmbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUNQVTtBQUN3Qjs7QUFFeEQ7QUFDQSxtQkFBbUIseUVBQWdDOztBQUVuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGdEQUFPO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7OztBQzdDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNYTzs7QUFFMUI7QUFDQTtBQUNBLFNBQVMsdURBQXVEO0FBQ2hFLGVBQWUsNkNBQUk7QUFDbkI7O0FBRUE7QUFDQSxTQUFTLHVEQUF1RDs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdCMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2ZzQzs7QUFFdEMsd0RBQWUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VsZW1lbnRNb2RlbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RQcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tQcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZGFya2VuZWQtY29sb3I6IHJnYigxNjYsIDIzMCwgMjU1KTtcXG4gIC0tcGFsZS1jb2xvcjogcmdiKDIxNSwgMjQxLCAyNTEpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDEycHggMHB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBtYXJnaW4tbGVmdDogNDhweDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YWJzLXdyYXBwZXIge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgd2lkdGg6IDM4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi50YXNrcy13cmFwcGVyIHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTRweDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucHJvamVjdC10YWIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTQzLCAyNDYpOyAqL1xcbn1cXG5cXG4udGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtaW4taGVpZ2h0OiA0OHB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIGF1dG8gMjAlIDIwJSA1JTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb3cge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ubWVkIHtcXG4gIGNvbG9yOiByZ2IoMjU1LCAxMjMsIDApO1xcbn1cXG5cXG4uaGlnaCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZXhwYW5kLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNhdmUtdGFzayB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5leHBhbmQtaWNvbjpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udGFzayA+IGRpdiB7XFxuICBkaXJlY3Rpb246IGx0cjtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4uc3RyaWtldGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsZXgtZ3JvdzogNDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEycHggMCAxMnB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3QtbmFtZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFjdGl2ZS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVkaXQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZW5lZC1jb2xvcilcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGUtYnRuOmhvdmVyLCAuZXhpdC1idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbn1cXG5cXG4uc2F2ZSB7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTgsIDI1NSwgMTE4KTtcXG59XFxuXFxuLnNhdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg2LCAxODksIDg2KTtcXG59XFxuXFxuLnNhdmUtcHJvamVjdCB7XFxuICBtYXJnaW4tbGVmdDogNnB4O1xcbn1cXG5cXG5pbWcge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zdmctaWNvbnMge1xcbiAgd2lkdGg6IDE2cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4sIC5hZGQtdGFzay1idG4ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG46aG92ZXIsIC5hZGQtdGFzay1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNiwgMTM2LCAxMzYpO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5kZWxldGUtdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzNjBweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlbmVkLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmV4aXQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDE2cHggMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7O0VBRWIsYUFBYTtFQUNiLHNCQUFzQjtB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OltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrZW5lZC1jb2xvcjogcmdiKDE2NiwgMjMwLCAyNTUpO1xcbiAgLS1wYWxlLWNvbG9yOiByZ2IoMjE1LCAyNDEsIDI1MSk7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMTJweCAwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1hcmdpbi1sZWZ0OiA0OHB4O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhYnMtd3JhcHBlciB7XFxuICBmbGV4LXNocmluazogMDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICB3aWR0aDogMzgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnRhc2tzLXdyYXBwZXIge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNHB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5wcm9qZWN0LXRhYiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNDMsIDI0Nik7ICovXFxufVxcblxcbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XFxuXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNSUgYXV0byAyMCUgMjAlIDUlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvdyB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5tZWQge1xcbiAgY29sb3I6IHJnYigyNTUsIDEyMywgMCk7XFxufVxcblxcbi5oaWdoIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5leHBhbmQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2F2ZS10YXNrIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZC1pY29uOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrID4gZGl2IHtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5zdHJpa2V0aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleC1ncm93OiA0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweCAwIDEycHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5lZGl0LXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlbmVkLWNvbG9yKVxcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1idG46aG92ZXIsIC5leGl0LWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbi5zYXZlIHtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExOCwgMjU1LCAxMTgpO1xcbn1cXG5cXG4uc2F2ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODYsIDE4OSwgODYpO1xcbn1cXG5cXG4uc2F2ZS1wcm9qZWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxufVxcblxcbmltZyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnN2Zy1pY29ucyB7XFxuICB3aWR0aDogMTZweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biwgLmFkZC10YXNrLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlciwgLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmRlbGV0ZS10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VuZWQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZXhpdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTZweCAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBlbGVtZW50c01vZGVscyBmcm9tIFwiLi9lbGVtZW50TW9kZWxzXCI7XG5cbmNvbnN0IERpc3BsYXlDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0IGNsZWFyQ2hpbGROb2RlcyA9IGZ1bmN0aW9uIGNsZWFyQ2hpbGROb2Rlc0Zyb21QYXJlbnROb2RlKHBhcmVudE5vZGUpIHtcbiAgICB3aGlsZShwYXJlbnROb2RlLmZpcnN0Q2hpbGQpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrRXhpc3RpbmdNb2RhbCA9IGZ1bmN0aW9uIGNoZWNrRXhpc3RpbmdNb2RhbEluV2luZG93KCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgaWYobW9kYWwpIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgcG9wVXBQcm9qZWN0TW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYoY2hlY2tFeGlzdGluZ01vZGFsKCkpIHJldHVybjtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnRzTW9kZWxzLmFkZFByb2plY3RNb2RhbCgpKTtcbiAgfVxuXG4gIGNvbnN0IHBvcFVwRWRpdFByb2plY3RNb2RhbCA9IGZ1bmN0aW9uIChpbnB1dFRleHQpIHtcbiAgICBpZihjaGVja0V4aXN0aW5nTW9kYWwoKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50c01vZGVscy5lZGl0UHJvamVjdE1vZGFsKGlucHV0VGV4dCkpO1xuICB9XG5cbiAgY29uc3QgcG9wVXBUYXNrTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYoY2hlY2tFeGlzdGluZ01vZGFsKCkpIHJldHVybjtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnRzTW9kZWxzLmFkZFRhc2tNb2RhbCgpKTtcbiAgfVxuXG4gIGNvbnN0IHBvcFVwRWRpdFRhc2tNb2RhbCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgaWYoY2hlY2tFeGlzdGluZ01vZGFsKCkpIHJldHVybjtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudHNNb2RlbHMuZWRpdFRhc2tNb2RhbCh0YXNrKSk7XG4gIH1cblxuICBjb25zdCBleGl0TW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICBjaGlsZC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNvbnN0IHJlbmRlclByb2plY3RUYWJzID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gICAgY29uc3QgcHJvamVjdHNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLXdyYXBwZXInKTtcbiAgICBjbGVhckNoaWxkTm9kZXMocHJvamVjdHNXcmFwcGVyKTtcblxuICAgIGlmKHByb2plY3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50c01vZGVscy5wcm9qZWN0VGFiTW9kZWwocHJvamVjdC5uYW1lLCBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpKSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCByZW5kZXJUYXNrcyA9IGZ1bmN0aW9uIHJlbmRlclRhc2tzT2ZDdXJyZW50UHJvamVjdCAocHJvamVjdCkge1xuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWNvbnRhaW5lcicpO1xuICAgIGNsZWFyQ2hpbGROb2Rlcyh0YXNrc0NvbnRhaW5lcik7XG5cbiAgICBpZighcHJvamVjdCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFza3MgPSBwcm9qZWN0LnRhc2tzO1xuXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRzTW9kZWxzLnRhc2tNb2RlbCh0YXNrLCB0YXNrcy5pbmRleE9mKHRhc2spKSk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZVByb2plY3RUYWIgPSBmdW5jdGlvbiB0b2dnbGVDdXJyZW50UHJvamVjdFRhYlN0eWxlIChwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LW5hbWUnKTtcblxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaW5kZXgnKTtcblxuICAgICAgcHJvamVjdElkID09IHByb2plY3RJbmRleCA/IHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXByb2plY3QnKSA6IHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXByb2plY3QnKTtcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyQWxsIChwcm9qZWN0cywgY3VycmVudFByb2plY3RJZCkge1xuICAgIHJlbmRlclByb2plY3RUYWJzKHByb2plY3RzKTtcbiAgICByZW5kZXJUYXNrcyhwcm9qZWN0c1tjdXJyZW50UHJvamVjdElkXSk7XG4gICAgdG9nZ2xlUHJvamVjdFRhYihjdXJyZW50UHJvamVjdElkKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2xlYXJDaGlsZE5vZGVzLFxuICAgIGNoZWNrRXhpc3RpbmdNb2RhbCxcbiAgICBwb3BVcEVkaXRQcm9qZWN0TW9kYWwsXG4gICAgcG9wVXBQcm9qZWN0TW9kYWwsXG4gICAgcG9wVXBUYXNrTW9kYWwsXG4gICAgcG9wVXBFZGl0VGFza01vZGFsLFxuICAgIGV4aXRNb2RhbCxcbiAgICByZW5kZXJQcm9qZWN0VGFicyxcbiAgICByZW5kZXJUYXNrcyxcbiAgICB0b2dnbGVQcm9qZWN0VGFiLFxuICAgIHJlbmRlclxuICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5Q29udHJvbGxlcjsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCBUYXNrTWFuYWdlciBmcm9tICcuL3Rhc2tQcm9jZXNzb3InO1xuaW1wb3J0IFByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdFByb2Nlc3Nvcic7XG5pbXBvcnQgRGlzcGxheUNvbnRyb2xsZXIgZnJvbSAnLi9kaXNwbGF5Q29udHJvbGxlcic7XG5pbXBvcnQgTG9jYWxTdG9yYWdlSGFuZGxlciBmcm9tICcuL2xvY2FsU3RvcmFnZUhhbmRsZXInO1xuXG5jb25zdCBET01IYW5kbGVyID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgbXlQcm9qZWN0cyA9IFByb2plY3RNYW5hZ2VyLmdldFByb2plY3RzKCk7XG5cbiAgbGV0IGN1cnJlbnRQcm9qZWN0SWQgPSAwO1xuICBsZXQgcHJvamVjdElkQmVpbmdFZGl0ZWQgPSBudWxsO1xuICBsZXQgdGFza0lkQmVpbmdFZGl0ZWQgPSBudWxsO1xuXG4gIGNvbnN0IHRyaWdnZXJBZGRQcm9qZWN0QnRuID0gZnVuY3Rpb24gKCkge1xuICAgIERpc3BsYXlDb250cm9sbGVyLnBvcFVwUHJvamVjdE1vZGFsKCk7XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyRGVsUHJvamVjdEJ0biA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBnZXRJZE9mKHRhcmdldCwgJ2RhdGEtcHJvamVjdC1pbmRleCcpO1xuICAgIGlmKHByb2plY3RJZCA9PSBjdXJyZW50UHJvamVjdElkKSBjdXJyZW50UHJvamVjdElkID0gMDtcbiAgICBQcm9qZWN0TWFuYWdlci5yZW1vdmVQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgTG9jYWxTdG9yYWdlSGFuZGxlci5zYXZlUHJvamVjdHMobXlQcm9qZWN0cyk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIucmVuZGVyKG15UHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SWQpO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlckV4aXRCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIuZXhpdE1vZGFsKCk7XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyU2F2ZVByb2plY3RCdG4gPSBmdW5jdGlvbiAoZm9ybSkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZm9ybS5wbmFtZS52YWx1ZTtcblxuICAgIERpc3BsYXlDb250cm9sbGVyLmV4aXRNb2RhbCgpO1xuICAgIFByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QoUHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSkpO1xuICAgIExvY2FsU3RvcmFnZUhhbmRsZXIuc2F2ZVByb2plY3RzKG15UHJvamVjdHMpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLnJlbmRlcihteVByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJFZGl0UHJvamVjdEJ0biA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBwcm9qZWN0SWRCZWluZ0VkaXRlZCA9IGdldElkT2YodGFyZ2V0LCAnZGF0YS1wcm9qZWN0LWluZGV4Jyk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIucG9wVXBFZGl0UHJvamVjdE1vZGFsKG15UHJvamVjdHNbcHJvamVjdElkQmVpbmdFZGl0ZWRdLm5hbWUpO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlckNoYW5nZU5hbWVCdG4gPSBmdW5jdGlvbiAoZm9ybSkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZm9ybS5wbmFtZS52YWx1ZTtcblxuICAgIFByb2plY3RNYW5hZ2VyLmVkaXRQcm9qZWN0TmFtZShwcm9qZWN0SWRCZWluZ0VkaXRlZCwgcHJvamVjdE5hbWUpO1xuICAgIExvY2FsU3RvcmFnZUhhbmRsZXIuc2F2ZVByb2plY3RzKG15UHJvamVjdHMpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLmV4aXRNb2RhbCgpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLnJlbmRlcihteVByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJTZWxlY3RlZFByb2plY3QgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgY3VycmVudFByb2plY3RJZCA9IGdldElkT2YodGFyZ2V0LCAnZGF0YS1wcm9qZWN0LWluZGV4Jyk7XG5cbiAgICBEaXNwbGF5Q29udHJvbGxlci5yZW5kZXJUYXNrcyhteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWRdKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci50b2dnbGVQcm9qZWN0VGFiKGN1cnJlbnRQcm9qZWN0SWQpO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlckFkZFRhc2tCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYoIW15UHJvamVjdHNbY3VycmVudFByb2plY3RJZF0pIHJldHVybjtcblxuICAgIERpc3BsYXlDb250cm9sbGVyLnBvcFVwVGFza01vZGFsKCk7XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyU2F2ZVRhc2tCdG4gPSBmdW5jdGlvbiAoZm9ybSkge1xuICAgIGNvbnN0IHRhc2tJbmZvID0ge1xuICAgICAgdGl0bGU6IGZvcm0udGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogZm9ybS5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGR1ZURhdGU6IGZvcm0uZGF0ZS52YWx1ZSxcbiAgICAgIHByaW9yaXR5OiBmb3JtLnByaW9yaXR5LnZhbHVlLFxuICAgICAgZmluaXNoZWRTdGF0dXM6IGZvcm0uc3RhdHVzLnZhbHVlID09ICdZRVMnID8gdHJ1ZSA6IGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IG5ld1Rhc2sgPSBUYXNrTWFuYWdlci5jcmVhdGVUYXNrKHRhc2tJbmZvKTtcblxuICAgIFByb2plY3RNYW5hZ2VyLmFkZFRhc2soY3VycmVudFByb2plY3RJZCwgbmV3VGFzayk7XG4gICAgTG9jYWxTdG9yYWdlSGFuZGxlci5zYXZlUHJvamVjdHMobXlQcm9qZWN0cyk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIuZXhpdE1vZGFsKCk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIucmVuZGVyKG15UHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SWQpO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlckZpbmlzaGVkU3RhdHVzQnRuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGNvbnN0IHRhc2tJZCA9IGdldElkT2YodGFyZ2V0LCAnZGF0YS10YXNrLWluZGV4Jyk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWRdO1xuXG4gICAgY29uc3QgY2hlY2tTdGF0dXMgPSB0YXJnZXQuY2hlY2tlZDtcbiAgICBUYXNrTWFuYWdlci50b2dnbGVTdGF0dXMoY3VycmVudFByb2plY3QudGFza3NbdGFza0lkXSwgY2hlY2tTdGF0dXMpO1xuICAgIExvY2FsU3RvcmFnZUhhbmRsZXIuc2F2ZVByb2plY3RzKG15UHJvamVjdHMpO1xuXG4gICAgRGlzcGxheUNvbnRyb2xsZXIucmVuZGVyKG15UHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SWQpO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlckV4cGFuZFRhc2tCdG4gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgdGFza0lkQmVpbmdFZGl0ZWQgPSBnZXRJZE9mKHRhcmdldCwgJ2RhdGEtdGFzay1pbmRleCcpO1xuXG4gICAgY29uc3QgdGFzayA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJZF0udGFza3NbdGFza0lkQmVpbmdFZGl0ZWRdO1xuXG4gICAgRGlzcGxheUNvbnRyb2xsZXIucG9wVXBFZGl0VGFza01vZGFsKHRhc2spO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlckNoYW5nZVRhc2tCdG4gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgY29uc3QgdGFza0luZm8gPSB7XG4gICAgICB0aXRsZTogdGFyZ2V0LnRpdGxlLnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IHRhcmdldC5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGR1ZURhdGU6IHRhcmdldC5kYXRlLnZhbHVlLFxuICAgICAgcHJpb3JpdHk6IHRhcmdldC5wcmlvcml0eS52YWx1ZSxcbiAgICAgIGZpbmlzaGVkU3RhdHVzOiB0YXJnZXQuc3RhdHVzLnZhbHVlID09PSAnWUVTJyA/IHRydWUgOiBmYWxzZVxuICAgIH1cblxuICAgIGxldCB0YXNrID0gbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdElkXS50YXNrc1t0YXNrSWRCZWluZ0VkaXRlZF07XG5cbiAgICBUYXNrTWFuYWdlci5lZGl0VGFzayh0YXNrLCB0YXNrSW5mbyk7XG4gICAgTG9jYWxTdG9yYWdlSGFuZGxlci5zYXZlUHJvamVjdHMobXlQcm9qZWN0cyk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIuZXhpdE1vZGFsKCk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIucmVuZGVyKG15UHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SWQpO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlckRlbFRhc2tCdG4gPSBmdW5jdGlvbiAoKSB7XG4gICAgUHJvamVjdE1hbmFnZXIucmVtb3ZlVGFzayhjdXJyZW50UHJvamVjdElkLCB0YXNrSWRCZWluZ0VkaXRlZCk7XG4gICAgTG9jYWxTdG9yYWdlSGFuZGxlci5zYXZlUHJvamVjdHMobXlQcm9qZWN0cyk7XG5cbiAgICBEaXNwbGF5Q29udHJvbGxlci5leGl0TW9kYWwoKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5yZW5kZXIobXlQcm9qZWN0cywgY3VycmVudFByb2plY3RJZCk7XG4gIH1cblxuICBjb25zdCBnZXRJZE9mID0gZnVuY3Rpb24gKGN1cnIsIGF0dHJOYW1lKSB7XG4gICAgd2hpbGUoIWN1cnIuaGFzQXR0cmlidXRlKGF0dHJOYW1lKSkgY3VyciA9IGN1cnIucGFyZW50Tm9kZTtcblxuICAgIHJldHVybiBjdXJyLmdldEF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gIH1cblxuICBjb25zdCBsaXN0ZW5FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idG4nKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0Q2xhc3NsaXN0ID0gZS50YXJnZXQuY2xhc3NMaXN0O1xuICAgICAgaWYodGFyZ2V0Q2xhc3NsaXN0LmNvbnRhaW5zKCdkZWxldGUtcHJvamVjdC1idG4nKSkgdHJpZ2dlckRlbFByb2plY3RCdG4oZS50YXJnZXQpO1xuXG4gICAgICBlbHNlIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnZWRpdC1wcm9qZWN0JykpIHRyaWdnZXJFZGl0UHJvamVjdEJ0bihlLnRhcmdldCk7XG5cbiAgICAgIGVsc2UgaWYodGFyZ2V0Q2xhc3NsaXN0LmNvbnRhaW5zKCdleGl0LWJ0bicpKSB0cmlnZ2VyRXhpdEJ0bigpO1xuXG4gICAgICBlbHNlIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygncHJvamVjdC1uYW1lJykpIHRyaWdnZXJTZWxlY3RlZFByb2plY3QoZS50YXJnZXQpO1xuXG4gICAgICBlbHNlIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnZmluaXNoZWQtc3RhdHVzJykpIHRyaWdnZXJGaW5pc2hlZFN0YXR1c0J0bihlLnRhcmdldCk7XG5cbiAgICAgIGVsc2UgaWYodGFyZ2V0Q2xhc3NsaXN0LmNvbnRhaW5zKCdleHBhbmQtYnRuJykpIHRyaWdnZXJFeHBhbmRUYXNrQnRuKGUudGFyZ2V0KTtcblxuICAgICAgZWxzZSBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ2RlbGV0ZS10YXNrJykpIHRyaWdnZXJEZWxUYXNrQnRuKGUudGFyZ2V0KTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHRhcmdldENsYXNzbGlzdCA9IGUudGFyZ2V0LmNsYXNzTGlzdDtcblxuICAgICAgaWYodGFyZ2V0Q2xhc3NsaXN0LmNvbnRhaW5zKCdhZGQtcHJvamVjdC1tb2RhbCcpKSB0cmlnZ2VyU2F2ZVByb2plY3RCdG4oZS50YXJnZXQpO1xuXG4gICAgICBlbHNlIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnZWRpdC1wcm9qZWN0LW1vZGFsJykpIHRyaWdnZXJDaGFuZ2VOYW1lQnRuKGUudGFyZ2V0KTtcblxuICAgICAgZWxzZSBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ2FkZC10YXNrLW1vZGFsJykpIHRyaWdnZXJTYXZlVGFza0J0bihlLnRhcmdldCk7XG5cbiAgICAgIGVsc2UgaWYodGFyZ2V0Q2xhc3NsaXN0LmNvbnRhaW5zKCdlZGl0LXRhc2stbW9kYWwnKSkgdHJpZ2dlckNoYW5nZVRhc2tCdG4oZS50YXJnZXQpO1xuICAgIH0pO1xuXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRyaWdnZXJBZGRQcm9qZWN0QnRuKTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdHJpZ2dlckFkZFRhc2tCdG4pO1xuICB9XG5cbiAgY29uc3QgaW5pdCA9IGZ1bmN0aW9uIGluaXRBcHAoKSB7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIucmVuZGVyKG15UHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SWQpO1xuICAgIGxpc3RlbkV2ZW50cygpO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01IYW5kbGVyOyIsImltcG9ydCBEZWxldGVJY29uIGZyb20gJy4uL2Fzc2V0cy9yZWN5Y2xlLWJpbi5wbmcnO1xuaW1wb3J0IEV4cGFuZEljb24gZnJvbSAnLi4vYXNzZXRzL2V4cGFuZC1pY29uLnN2ZydcblxuY29uc3QgZWxlbWVudHNNb2RlbHMgPSB7XG4gIHByb2plY3RUYWJNb2RlbChuYW1lLCBwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYicpO1xuICAgIHByb2plY3RUYWIuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtaW5kZXgnLCBwcm9qZWN0SWQpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3QgZWRpdFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2plY3QnKTtcbiAgICBlZGl0UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0IE5hbWUnO1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicsICdkZWxldGUtcHJvamVjdC1idG4nKTtcblxuICAgIGNvbnN0IGJpbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBiaW5JY29uLmNsYXNzTGlzdC5hZGQoJ3N2Zy1pY29ucycpO1xuICAgIGJpbkljb24uc3JjID0gRGVsZXRlSWNvbjtcblxuICAgIGRlbGV0ZVByb2plY3RCdG4uYXBwZW5kQ2hpbGQoYmluSWNvbik7XG5cbiAgICBwcm9qZWN0VGFiLmFwcGVuZChwcm9qZWN0TmFtZSwgZWRpdFByb2plY3RCdG4sIGRlbGV0ZVByb2plY3RCdG4pO1xuXG4gICAgcmV0dXJuIHByb2plY3RUYWI7XG4gIH0sXG5cbiAgdGFza01vZGVsKHRhc2ssIHRhc2tJZCkge1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHRhc2tFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWluZGV4JywgdGFza0lkKTtcbiAgICBcbiAgICBjb25zdCBmaW5pc2hlZFN0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZmluaXNoZWRTdGF0dXMudHlwZSA9ICdjaGVja2JveCc7XG4gICAgZmluaXNoZWRTdGF0dXMuY2hlY2tlZCA9IHRhc2suZmluaXNoZWRTdGF0dXM7XG4gICAgZmluaXNoZWRTdGF0dXMuY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQtc3RhdHVzJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRhc2suZmluaXNoZWRTdGF0dXMgPyB0aXRsZS5jbGFzc0xpc3QuYWRkKCdzdHJpa2V0aHJvdWdoJykgOiB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJpa2V0aHJvdWdoJyk7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5JywgdGFzay5wcmlvcml0eS50b0xvd2VyQ2FzZSgpKTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cbiAgICBjb25zdCBleHBhbmRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZXhwYW5kSWNvbi5zcmMgPSBFeHBhbmRJY29uO1xuICAgIGV4cGFuZEljb24uY2xhc3NMaXN0LmFkZCgnc3ZnLWljb25zJywgJ2V4cGFuZC1pY29uJyk7XG5cbiAgICBjb25zdCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWJ0bicpO1xuICAgIGV4cGFuZEJ1dHRvbi5hcHBlbmRDaGlsZChleHBhbmRJY29uKTtcblxuICAgIHRhc2tFbGVtZW50LmFwcGVuZChmaW5pc2hlZFN0YXR1cywgdGl0bGUsIHByaW9yaXR5LCBkdWVEYXRlLCBleHBhbmRCdXR0b24pO1xuXG4gICAgcmV0dXJuIHRhc2tFbGVtZW50O1xuICB9LFxuICBcbiAgYWRkUHJvamVjdE1vZGFsKCkge1xuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0TW9kYWwuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xuICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdhZGQtcHJvamVjdC1tb2RhbCcpO1xuXG4gICAgY29uc3QgcHJvamVjdE1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdE1vZGFsSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWhlYWRlcicpO1xuXG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnRW50ZXIgUHJvamVjdCBOYW1lJztcblxuICAgIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBleGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2V4aXQtYnRuJyk7XG4gICAgZXhpdEJ0bi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG5cbiAgICBwcm9qZWN0TW9kYWxIZWFkZXIuYXBwZW5kKGhlYWRlclRleHQsIGV4aXRCdG4pO1xuXG4gICAgY29uc3QgaW5wdXRQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdwcm9qZWN0IG5hbWUuLi4nO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZS1pbnB1dCcpO1xuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBpbnB1dC5uYW1lID0gJ3BuYW1lJ1xuXG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNhdmVCdG4udHlwZSA9ICdzdWJtaXQnO1xuICAgIHNhdmVCdG4uY2xhc3NMaXN0LmFkZCgnc2F2ZScsICdzYXZlLXByb2plY3QnKTtcbiAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuXG4gICAgaW5wdXRQYXJ0LmFwcGVuZChpbnB1dCwgc2F2ZUJ0bik7XG5cbiAgICBwcm9qZWN0TW9kYWwuYXBwZW5kKHByb2plY3RNb2RhbEhlYWRlciwgaW5wdXRQYXJ0KTtcblxuICAgIHJldHVybiBwcm9qZWN0TW9kYWw7XG4gIH0sXG5cbiAgZWRpdFByb2plY3RNb2RhbChpbnB1dFRleHQpIHtcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvamVjdE1vZGFsLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJyMnKTtcbiAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnZWRpdC1wcm9qZWN0LW1vZGFsJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0TW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TW9kYWxIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QgTmFtZSc7XG5cbiAgICBjb25zdCBleGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZXhpdEJ0bi5jbGFzc0xpc3QuYWRkKCdleGl0LWJ0bicpO1xuICAgIGV4aXRCdG4uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xuXG4gICAgcHJvamVjdE1vZGFsSGVhZGVyLmFwcGVuZChoZWFkZXJUZXh0LCBleGl0QnRuKTtcblxuICAgIGNvbnN0IGlucHV0UGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQudmFsdWUgPSBpbnB1dFRleHQ7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lLWlucHV0Jyk7XG4gICAgaW5wdXQubmFtZSA9ICdwbmFtZSc7XG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNhdmVCdG4udHlwZSA9ICdzdWJtaXQnO1xuICAgIHNhdmVCdG4uY2xhc3NMaXN0LmFkZCgnc2F2ZScsICdlZGl0LW5hbWUnKTtcbiAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NhdmUgQ2hhbmdlcyc7XG5cbiAgICBpbnB1dFBhcnQuYXBwZW5kKGlucHV0LCBzYXZlQnRuKTtcblxuICAgIHByb2plY3RNb2RhbC5hcHBlbmQocHJvamVjdE1vZGFsSGVhZGVyLCBpbnB1dFBhcnQpO1xuXG4gICAgcmV0dXJuIHByb2plY3RNb2RhbDtcbiAgfSxcblxuICBhZGRUYXNrTW9kYWwoKSB7XG4gICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdhZGQtdGFzay1tb2RhbCcpO1xuICAgIFxuICAgIC8vIGhlYWRlclxuICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJylcblxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICAgIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBleGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2V4aXQtYnRuJyk7XG4gICAgZXhpdEJ0bi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG5cbiAgICBtb2RhbEhlYWRlci5hcHBlbmQoaGVhZGVyVGV4dCwgZXhpdEJ0bik7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xuXG4gICAgLy8gVElUTEVcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTogJztcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ3RpdGxlJztcbiAgICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlJztcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZUlucHV0KTtcblxuICAgIC8vIERFU0NSSVBUSU9OXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJztcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuY29scyA9ICc4JztcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb24nXG4gICAgZGVzY3JpcHRpb25JbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgLy8gRHVlIERhdGVcblxuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZS1kYXRlJyk7XG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG5cbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdkdWUtZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQoZHVlRGF0ZUxhYmVsLCBkdWVEYXRlSW5wdXQpO1xuXG4gICAgLy8gUHJpb3JpdHlcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG5cbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7IC8vIFNlbGVjdCBFbGVtZW50XG4gICAgcHJpb3JpdHlJbnB1dC5pZCA9ICdwcmlvcml0eSc7XG4gICAgcHJpb3JpdHlJbnB1dC5uYW1lID0gJ3ByaW9yaXR5JztcblxuICAgIGNvbnN0IGxvd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGxvd09wdGlvbi52YWx1ZSA9ICdMT1cnO1xuICAgIGxvd09wdGlvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgIGxvd09wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICBjb25zdCBtZWRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBtZWRPcHRpb24udmFsdWUgPSAnTUVEJztcbiAgICBtZWRPcHRpb24udGV4dENvbnRlbnQgPSAnTWVkJztcblxuICAgIGNvbnN0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBoaWdoT3B0aW9uLnZhbHVlID0gJ0hJR0gnO1xuICAgIGhpZ2hPcHRpb24udGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZChsb3dPcHRpb24sIG1lZE9wdGlvbiwgaGlnaE9wdGlvbik7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kKHByaW9yaXR5TGFiZWwsIHByaW9yaXR5SW5wdXQpXG5cbiAgICAvLyBmaW5pc2hlZFN0YXR1c1xuXG4gICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHN0YXR1c0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZpbmlzaGVkLXN0YXR1cycpO1xuICAgIHN0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gJ0ZpbmlzaGVkPzonXG5cbiAgICBjb25zdCBzdGF0dXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHN0YXR1c0lucHV0LmlkID0gJ2ZpbmlzaGVkLXN0YXR1cyc7XG4gICAgc3RhdHVzSW5wdXQubmFtZSA9ICdzdGF0dXMnO1xuXG4gICAgY29uc3Qgbm9PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBub09wdGlvbi52YWx1ZSA9ICdOTyc7XG4gICAgbm9PcHRpb24udGV4dENvbnRlbnQgPSAnTm8nO1xuICAgIG5vT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHllc09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHllc09wdGlvbi52YWx1ZSA9ICdZRVMnO1xuICAgIHllc09wdGlvbi50ZXh0Q29udGVudCA9ICdZZXMnO1xuXG4gICAgc3RhdHVzSW5wdXQuYXBwZW5kKG5vT3B0aW9uLCB5ZXNPcHRpb24pO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZChzdGF0dXNMYWJlbCwgc3RhdHVzSW5wdXQpO1xuXG4gICAgLy8gU2F2ZSBCdXR0b25cbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2F2ZUJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdzYXZlJywgJ3NhdmUtdGFzaycpO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kQ2hpbGQoc2F2ZUJ0bik7XG5cbiAgICByZXR1cm4gdGFza01vZGFsO1xuICB9LFxuXG4gIGVkaXRUYXNrTW9kYWwodGFzaykge1xuICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnZWRpdC10YXNrLW1vZGFsJyk7XG4gICAgXG4gICAgLy8gaGVhZGVyXG4gICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkZXInKVxuXG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnRWRpdCBUYXNrJztcblxuICAgIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBleGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2V4aXQtYnRuJyk7XG4gICAgZXhpdEJ0bi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG5cbiAgICBtb2RhbEhlYWRlci5hcHBlbmQoaGVhZGVyVGV4dCwgZXhpdEJ0bik7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xuXG4gICAgLy8gVElUTEVcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTogJztcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdGFzay50aXRsZTtcbiAgICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlJztcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZUlucHV0KTtcblxuICAgIC8vIERFU0NSSVBUSU9OXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJztcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuY29scyA9ICc4JztcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb24nXG4gICAgZGVzY3JpcHRpb25JbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgLy8gRHVlIERhdGVcblxuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZS1kYXRlJyk7XG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG5cbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSAnZHVlLWRhdGUnO1xuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gJ2RhdGUnO1xuICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kKGR1ZURhdGVMYWJlbCwgZHVlRGF0ZUlucHV0KTtcblxuICAgIC8vIFByaW9yaXR5XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpOyAvLyBTZWxlY3QgRWxlbWVudFxuICAgIHByaW9yaXR5SW5wdXQuaWQgPSAncHJpb3JpdHknO1xuICAgIHByaW9yaXR5SW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG5cbiAgICBjb25zdCBsb3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBsb3dPcHRpb24udmFsdWUgPSAnTE9XJztcbiAgICBsb3dPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgIGNvbnN0IG1lZE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1lZE9wdGlvbi52YWx1ZSA9ICdNRUQnO1xuICAgIG1lZE9wdGlvbi50ZXh0Q29udGVudCA9ICdNZWQnO1xuXG4gICAgY29uc3QgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGhpZ2hPcHRpb24udmFsdWUgPSAnSElHSCc7XG4gICAgaGlnaE9wdGlvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgIHN3aXRjaCAodGFzay5wcmlvcml0eSkge1xuICAgICAgY2FzZSBsb3dPcHRpb24udmFsdWU6XG4gICAgICAgIGxvd09wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIG1lZE9wdGlvbi52YWx1ZTpcbiAgICAgICAgbWVkT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBcbiAgICAgIGNhc2UgaGlnaE9wdGlvbi52YWx1ZTpcbiAgICAgICAgaGlnaE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kKGxvd09wdGlvbiwgbWVkT3B0aW9uLCBoaWdoT3B0aW9uKTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlJbnB1dClcblxuICAgIC8vIGZpbmlzaGVkU3RhdHVzXG5cbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgc3RhdHVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZmluaXNoZWQtc3RhdHVzJyk7XG4gICAgc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSAnRmluaXNoZWQ/OidcblxuICAgIGNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc3RhdHVzSW5wdXQuaWQgPSAnZmluaXNoZWQtc3RhdHVzJztcbiAgICBzdGF0dXNJbnB1dC5uYW1lID0gJ3N0YXR1cyc7XG5cbiAgICBjb25zdCBub09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG5vT3B0aW9uLnZhbHVlID0gJ05PJztcbiAgICBub09wdGlvbi50ZXh0Q29udGVudCA9ICdObyc7XG5cbiAgICBjb25zdCB5ZXNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICB5ZXNPcHRpb24udmFsdWUgPSAnWUVTJztcbiAgICB5ZXNPcHRpb24udGV4dENvbnRlbnQgPSAnWWVzJztcblxuICAgIHRhc2suZmluaXNoZWRTdGF0dXMgPyB5ZXNPcHRpb24uc2VsZWN0ZWQgPSB0cnVlIDogbm9PcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgc3RhdHVzSW5wdXQuYXBwZW5kKG5vT3B0aW9uLCB5ZXNPcHRpb24pO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZChzdGF0dXNMYWJlbCwgc3RhdHVzSW5wdXQpO1xuXG4gICAgLy8gU2F2ZSBCdXR0b25cbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2F2ZUJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdzYXZlJywgJ3NhdmUtdGFzaycpO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG5cbiAgICAvLyBEZWxldGUgQnV0dG9uXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnc2F2ZScsICdkZWxldGUtdGFzaycpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gICAgLy8gQnV0dG9ucyBDb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcicpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChzYXZlQnRuLCBkZWxldGVCdG4pO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gdGFza01vZGFsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRzTW9kZWxzOyIsImNvbnN0IExvY2FsU3RvcmFnZUhhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBzYXZlUHJvamVjdHMgPSBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cblxuICBjb25zdCBsb2FkUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdHMnKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNhdmVQcm9qZWN0cyxcbiAgICBsb2FkUHJvamVjdHNcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxTdG9yYWdlSGFuZGxlcjsiLCJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IExvY2FsU3RvcmFnZUhhbmRsZXIgZnJvbSBcIi4vbG9jYWxTdG9yYWdlSGFuZGxlclwiO1xuXG5jb25zdCBQcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbigpIHtcbiAgbGV0IG15UHJvamVjdHMgPSBMb2NhbFN0b3JhZ2VIYW5kbGVyLmxvYWRQcm9qZWN0cygpIHx8IFtdO1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gZnVuY3Rpb24gZ2V0TXlQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gbXlQcm9qZWN0cztcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBuZXcgUHJvamVjdChuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGFkZFByb2plY3QgPSBmdW5jdGlvbiBhZGRQcm9qZWN0VG9NeVByb2plY3RzKHByb2plY3QpIHtcbiAgICBteVByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH1cblxuICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSBmdW5jdGlvbiAocHJvamVjdElkLCBuYW1lKSB7XG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SWRdLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uIChwcm9qZWN0SWQsIHRhc2spIHtcbiAgICBteVByb2plY3RzW3Byb2plY3RJZF0udGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSBmdW5jdGlvbiAocHJvamVjdElkLCB0YXNrSWQpIHtcbiAgICBteVByb2plY3RzW3Byb2plY3RJZF0udGFza3Muc3BsaWNlKHRhc2tJZCwgMSk7XG4gIH1cblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3RJZCkge1xuICAgIG15UHJvamVjdHMuc3BsaWNlKHByb2plY3RJZCwgMSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICBlZGl0UHJvamVjdE5hbWUsXG4gICAgYWRkVGFzayxcbiAgICByZW1vdmVUYXNrLFxuICAgIHJlbW92ZVByb2plY3RcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdE1hbmFnZXI7IiwiY2xhc3MgVGFzayB7XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZmluaXNoZWRTdGF0dXMpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZmluaXNoZWRTdGF0dXMgPSBmaW5pc2hlZFN0YXR1cztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgVGFza01hbmFnZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSBmdW5jdGlvbiAodGFza0luZm8pIHtcbiAgICBsZXQge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZpbmlzaGVkU3RhdHVzfSA9IHRhc2tJbmZvO1xuICAgIHJldHVybiBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBmaW5pc2hlZFN0YXR1cyk7XG4gIH1cblxuICBjb25zdCBlZGl0VGFzayA9IGZ1bmN0aW9uIGVkaXRUYXNrRnJvbUdpdmVuSW5mbyh0YXNrLCBuZXdJbmZvKSB7XG4gICAgbGV0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBmaW5pc2hlZFN0YXR1c30gPSBuZXdJbmZvO1xuXG4gICAgdGFzay50aXRsZSA9IHRpdGxlO1xuICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0YXNrLmZpbmlzaGVkU3RhdHVzID0gZmluaXNoZWRTdGF0dXM7XG4gIH1cblxuICBjb25zdCB0b2dnbGVTdGF0dXMgPSBmdW5jdGlvbiB0b2dnbGVGaW5pc2hlZFN0YXR1cyh0YXNrLCBzdGF0dXMpIHtcbiAgICB0YXNrLmZpbmlzaGVkU3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUYXNrLFxuICAgIGVkaXRUYXNrLFxuICAgIHRvZ2dsZVN0YXR1c1xuICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrTWFuYWdlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBET01IYW5kbGVyIGZyb20gXCIuL2RvbUhhbmRsZXJcIjtcblxuRE9NSGFuZGxlci5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9