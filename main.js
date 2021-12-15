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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n:root {\n  --darkened-color: rgb(166, 230, 255);\n  --pale-color: rgb(215, 241, 251);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  width: 100%;\n  background-color: #000;\n  color: #fff;\n  font-size: 48px;\n  font-weight: bold;\n  padding: 12px 0px;\n}\n\n.logo {\n  margin-left: 48px;\n}\n\n.wrapper {\n  flex: 1;\n  display: flex;\n}\n\n.tabs-wrapper {\n  flex-shrink: 0;\n\n  background-color: #ffffff;\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.tasks-wrapper {\n  flex: 1;\n  background-color: var(--pale-color);\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n}\n\n.tasks-container {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.project-header {\n  font-size: 2em;\n  font-weight: bold;\n  align-self: center;\n}\n\n.projects-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.project-tab {\n  width: 100%;\n  display: flex;\n\n  /* background-color: rgb(255, 143, 246); */\n}\n\n.task {\n  width: 100%;\n  background-color: #fff;\n  min-height: 48px;\n\n  border-radius: 4px;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.13);\n\n  display: grid;\n  grid-template-columns: 5% auto 20% 20% 5%;\n  align-items: center;\n}\n\n.low {\n  color: green;\n}\n\n.med {\n  color: rgb(255, 123, 0);\n}\n\n.high {\n  color: red;\n}\n\n.expand-btn {\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.save-task {\n  align-self: center;\n}\n\n.expand-icon:hover {\n  color: red;\n}\n\n.task > div {\n  direction: ltr;\n}\n\n.input-container {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.strikethrough {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.project-name {\n  cursor: pointer;\n  flex-grow: 4;\n  text-align: center;\n  padding: 12px 0 12px 0;\n  background-color: var(--pale-color);\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.project-name:hover {\n  background-color: black;\n  color: white;\n}\n\n.active-project {\n  background-color: black;\n  color: white;\n}\n\n.edit-project {\n  background-color: rgb(235, 235, 235);\n  cursor: pointer;\n}\n\n.edit-project:hover {\n  background-color: var(--darkened-color)\n}\n\n.delete-btn {\n  background-color: transparent;\n  flex-grow: 1;\n  cursor: pointer;\n}\n\n.delete-btn:hover, .exit-btn:hover {\n  transform: scale(1.3);\n}\n\n.save {\n  padding: 6px 10px;\n  background-color: rgb(118, 255, 118);\n}\n\n.save:hover {\n  background-color: rgb(86, 189, 86);\n}\n\n.save-project {\n  margin-left: 6px;\n}\n\nimg {\n  pointer-events: none;\n}\n\n.svg-icons {\n  width: 16px;\n}\n\n.add-project-btn, .add-task-btn {\n  align-self: center;\n  padding: 8px 12px;\n  background-color: #000;\n  color: white;\n  font-weight: bold;\n}\n\n.add-task-btn {\n  align-self: flex-end;\n}\n\n.add-project-btn:hover, .add-task-btn:hover {\n  background-color: rgb(136, 136, 136);\n  color: #000;\n}\n\n.delete-task:hover {\n  background-color: red;\n}\n\n.btn-container {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n\n.modal {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  width: 360px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  background-color: var(--darkened-color);\n  border-radius: 4px;\n  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.061);\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.exit-btn {\n  background-color: transparent;\n  cursor: pointer;\n}\n\nfooter {\n  margin-top: auto;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #000;\n  color: #fff;\n  padding: 16px 0;\n}\n\nbutton {\n  border-style: none;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;;EAEb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,cAAc;;EAEd,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,OAAO;EACP,mCAAmC;;EAEnC,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,aAAa;;EAEb,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,gBAAgB;;EAEhB,kBAAkB;EAClB,8CAA8C;;EAE9C,aAAa;EACb,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,mCAAmC;EACnC,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE;AACF;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,uCAAuC;EACvC,kBAAkB;EAClB,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n:root {\n  --darkened-color: rgb(166, 230, 255);\n  --pale-color: rgb(215, 241, 251);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  width: 100%;\n  background-color: #000;\n  color: #fff;\n  font-size: 48px;\n  font-weight: bold;\n  padding: 12px 0px;\n}\n\n.logo {\n  margin-left: 48px;\n}\n\n.wrapper {\n  flex: 1;\n  display: flex;\n}\n\n.tabs-wrapper {\n  flex-shrink: 0;\n\n  background-color: #ffffff;\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.tasks-wrapper {\n  flex: 1;\n  background-color: var(--pale-color);\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n}\n\n.tasks-container {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.project-header {\n  font-size: 2em;\n  font-weight: bold;\n  align-self: center;\n}\n\n.projects-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.project-tab {\n  width: 100%;\n  display: flex;\n\n  /* background-color: rgb(255, 143, 246); */\n}\n\n.task {\n  width: 100%;\n  background-color: #fff;\n  min-height: 48px;\n\n  border-radius: 4px;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.13);\n\n  display: grid;\n  grid-template-columns: 5% auto 20% 20% 5%;\n  align-items: center;\n}\n\n.low {\n  color: green;\n}\n\n.med {\n  color: rgb(255, 123, 0);\n}\n\n.high {\n  color: red;\n}\n\n.expand-btn {\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.save-task {\n  align-self: center;\n}\n\n.expand-icon:hover {\n  color: red;\n}\n\n.task > div {\n  direction: ltr;\n}\n\n.input-container {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.strikethrough {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.project-name {\n  cursor: pointer;\n  flex-grow: 4;\n  text-align: center;\n  padding: 12px 0 12px 0;\n  background-color: var(--pale-color);\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.project-name:hover {\n  background-color: black;\n  color: white;\n}\n\n.active-project {\n  background-color: black;\n  color: white;\n}\n\n.edit-project {\n  background-color: rgb(235, 235, 235);\n  cursor: pointer;\n}\n\n.edit-project:hover {\n  background-color: var(--darkened-color)\n}\n\n.delete-btn {\n  background-color: transparent;\n  flex-grow: 1;\n  cursor: pointer;\n}\n\n.delete-btn:hover, .exit-btn:hover {\n  transform: scale(1.3);\n}\n\n.save {\n  padding: 6px 10px;\n  background-color: rgb(118, 255, 118);\n}\n\n.save:hover {\n  background-color: rgb(86, 189, 86);\n}\n\n.save-project {\n  margin-left: 6px;\n}\n\nimg {\n  pointer-events: none;\n}\n\n.svg-icons {\n  width: 16px;\n}\n\n.add-project-btn, .add-task-btn {\n  align-self: center;\n  padding: 8px 12px;\n  background-color: #000;\n  color: white;\n  font-weight: bold;\n}\n\n.add-task-btn {\n  align-self: flex-end;\n}\n\n.add-project-btn:hover, .add-task-btn:hover {\n  background-color: rgb(136, 136, 136);\n  color: #000;\n}\n\n.delete-task:hover {\n  background-color: red;\n}\n\n.btn-container {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n\n.modal {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  width: 360px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  background-color: var(--darkened-color);\n  border-radius: 4px;\n  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.061);\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.exit-btn {\n  background-color: transparent;\n  cursor: pointer;\n}\n\nfooter {\n  margin-top: auto;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #000;\n  color: #fff;\n  padding: 16px 0;\n}\n\nbutton {\n  border-style: none;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLG9EQUFVO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7OztBQ2phN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7O0FDZmxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7O0FDUFU7QUFDd0I7O0FBRXhEO0FBQ0EsbUJBQW1CLHlFQUFnQzs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxnREFBTztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUM3QzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDWE87O0FBRTFCO0FBQ0E7QUFDQSxTQUFTLHVEQUF1RDtBQUNoRSxlQUFlLDZDQUFJO0FBQ25COztBQUVBO0FBQ0EsU0FBUyx1REFBdUQ7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNmc0M7O0FBRXRDLHdEQUFlLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21IYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lbGVtZW50TW9kZWxzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0UHJvY2Vzc29yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrUHJvY2Vzc29yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWRhcmtlbmVkLWNvbG9yOiByZ2IoMTY2LCAyMzAsIDI1NSk7XFxuICAtLXBhbGUtY29sb3I6IHJnYigyMTUsIDI0MSwgMjUxKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAxMnB4IDBweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWFyZ2luLWxlZnQ6IDQ4cHg7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFicy13cmFwcGVyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIHdpZHRoOiAzODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4udGFza3Mtd3JhcHBlciB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1jb2xvcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi50YXNrcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE0cHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnByb2plY3QtdGFiIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0MywgMjQ2KTsgKi9cXG59XFxuXFxuLnRhc2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWluLWhlaWdodDogNDhweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1JSBhdXRvIDIwJSAyMCUgNSU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG93IHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLm1lZCB7XFxuICBjb2xvcjogcmdiKDI1NSwgMTIzLCAwKTtcXG59XFxuXFxuLmhpZ2gge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmV4cGFuZC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zYXZlLXRhc2sge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZXhwYW5kLWljb246aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2sgPiBkaXYge1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLnN0cmlrZXRocm91Z2gge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmbGV4LWdyb3c6IDQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4IDAgMTJweCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1jb2xvcik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0LW5hbWU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hY3RpdmUtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lZGl0LXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VuZWQtY29sb3IpXFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZmxleC1ncm93OiAxO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlLWJ0bjpob3ZlciwgLmV4aXQtYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuLnNhdmUge1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE4LCAyNTUsIDExOCk7XFxufVxcblxcbi5zYXZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NiwgMTg5LCA4Nik7XFxufVxcblxcbi5zYXZlLXByb2plY3Qge1xcbiAgbWFyZ2luLWxlZnQ6IDZweDtcXG59XFxuXFxuaW1nIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc3ZnLWljb25zIHtcXG4gIHdpZHRoOiAxNnB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuLCAuYWRkLXRhc2stYnRuIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyLCAuYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzYsIDEzNiwgMTM2KTtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzYwcHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZW5lZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAwIDAgOHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDYxKTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZXhpdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTZweCAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztB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c0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrZW5lZC1jb2xvcjogcmdiKDE2NiwgMjMwLCAyNTUpO1xcbiAgLS1wYWxlLWNvbG9yOiByZ2IoMjE1LCAyNDEsIDI1MSk7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMTJweCAwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1hcmdpbi1sZWZ0OiA0OHB4O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhYnMtd3JhcHBlciB7XFxuICBmbGV4LXNocmluazogMDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICB3aWR0aDogMzgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnRhc2tzLXdyYXBwZXIge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtY29sb3IpO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNHB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5wcm9qZWN0LXRhYiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNDMsIDI0Nik7ICovXFxufVxcblxcbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XFxuXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNSUgYXV0byAyMCUgMjAlIDUlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvdyB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5tZWQge1xcbiAgY29sb3I6IHJnYigyNTUsIDEyMywgMCk7XFxufVxcblxcbi5oaWdoIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5leHBhbmQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2F2ZS10YXNrIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZC1pY29uOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrID4gZGl2IHtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5zdHJpa2V0aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleC1ncm93OiA0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweCAwIDEycHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5lZGl0LXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlbmVkLWNvbG9yKVxcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1idG46aG92ZXIsIC5leGl0LWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbi5zYXZlIHtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExOCwgMjU1LCAxMTgpO1xcbn1cXG5cXG4uc2F2ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODYsIDE4OSwgODYpO1xcbn1cXG5cXG4uc2F2ZS1wcm9qZWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxufVxcblxcbmltZyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnN2Zy1pY29ucyB7XFxuICB3aWR0aDogMTZweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biwgLmFkZC10YXNrLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlciwgLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmRlbGV0ZS10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VuZWQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA2MSk7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmV4aXQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDE2cHggMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZWxlbWVudHNNb2RlbHMgZnJvbSBcIi4vZWxlbWVudE1vZGVsc1wiO1xuXG5jb25zdCBEaXNwbGF5Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcblxuICBjb25zdCBjbGVhckNoaWxkTm9kZXMgPSBmdW5jdGlvbiBjbGVhckNoaWxkTm9kZXNGcm9tUGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgd2hpbGUocGFyZW50Tm9kZS5maXJzdENoaWxkKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBjb25zdCBjaGVja0V4aXN0aW5nTW9kYWwgPSBmdW5jdGlvbiBjaGVja0V4aXN0aW5nTW9kYWxJbldpbmRvdygpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGlmKG1vZGFsKSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHBvcFVwUHJvamVjdE1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKGNoZWNrRXhpc3RpbmdNb2RhbCgpKSByZXR1cm47XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50c01vZGVscy5hZGRQcm9qZWN0TW9kYWwoKSk7XG4gIH1cblxuICBjb25zdCBwb3BVcEVkaXRQcm9qZWN0TW9kYWwgPSBmdW5jdGlvbiAoaW5wdXRUZXh0KSB7XG4gICAgaWYoY2hlY2tFeGlzdGluZ01vZGFsKCkpIHJldHVybjtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudHNNb2RlbHMuZWRpdFByb2plY3RNb2RhbChpbnB1dFRleHQpKTtcbiAgfVxuXG4gIGNvbnN0IHBvcFVwVGFza01vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKGNoZWNrRXhpc3RpbmdNb2RhbCgpKSByZXR1cm47XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50c01vZGVscy5hZGRUYXNrTW9kYWwoKSk7XG4gIH1cblxuICBjb25zdCBwb3BVcEVkaXRUYXNrTW9kYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgIGlmKGNoZWNrRXhpc3RpbmdNb2RhbCgpKSByZXR1cm47XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnRzTW9kZWxzLmVkaXRUYXNrTW9kYWwodGFzaykpO1xuICB9XG5cbiAgY29uc3QgZXhpdE1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY2hpbGQucmVtb3ZlKCk7XG4gIH1cblxuICBjb25zdCByZW5kZXJQcm9qZWN0VGFicyA9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3RzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy13cmFwcGVyJyk7XG4gICAgY2xlYXJDaGlsZE5vZGVzKHByb2plY3RzV3JhcHBlcik7XG5cbiAgICBpZihwcm9qZWN0cy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHNNb2RlbHMucHJvamVjdFRhYk1vZGVsKHByb2plY3QubmFtZSwgcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcmVuZGVyVGFza3MgPSBmdW5jdGlvbiByZW5kZXJUYXNrc09mQ3VycmVudFByb2plY3QgKHByb2plY3QpIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKTtcbiAgICBjbGVhckNoaWxkTm9kZXModGFza3NDb250YWluZXIpO1xuXG4gICAgaWYoIXByb2plY3QpIHJldHVybjtcblxuICAgIGNvbnN0IHRhc2tzID0gcHJvamVjdC50YXNrcztcblxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50c01vZGVscy50YXNrTW9kZWwodGFzaywgdGFza3MuaW5kZXhPZih0YXNrKSkpO1xuICAgIH0pXG4gIH1cblxuICBjb25zdCB0b2dnbGVQcm9qZWN0VGFiID0gZnVuY3Rpb24gdG9nZ2xlQ3VycmVudFByb2plY3RUYWJTdHlsZSAocHJvamVjdElkKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1uYW1lJyk7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWluZGV4Jyk7XG5cbiAgICAgIHByb2plY3RJZCA9PSBwcm9qZWN0SW5kZXggPyBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0JykgOiBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlckFsbCAocHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SWQpIHtcbiAgICByZW5kZXJQcm9qZWN0VGFicyhwcm9qZWN0cyk7XG4gICAgcmVuZGVyVGFza3MocHJvamVjdHNbY3VycmVudFByb2plY3RJZF0pO1xuICAgIHRvZ2dsZVByb2plY3RUYWIoY3VycmVudFByb2plY3RJZCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsZWFyQ2hpbGROb2RlcyxcbiAgICBjaGVja0V4aXN0aW5nTW9kYWwsXG4gICAgcG9wVXBFZGl0UHJvamVjdE1vZGFsLFxuICAgIHBvcFVwUHJvamVjdE1vZGFsLFxuICAgIHBvcFVwVGFza01vZGFsLFxuICAgIHBvcFVwRWRpdFRhc2tNb2RhbCxcbiAgICBleGl0TW9kYWwsXG4gICAgcmVuZGVyUHJvamVjdFRhYnMsXG4gICAgcmVuZGVyVGFza3MsXG4gICAgdG9nZ2xlUHJvamVjdFRhYixcbiAgICByZW5kZXJcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheUNvbnRyb2xsZXI7IiwiaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5pbXBvcnQgVGFza01hbmFnZXIgZnJvbSAnLi90YXNrUHJvY2Vzc29yJztcbmltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3RQcm9jZXNzb3InO1xuaW1wb3J0IERpc3BsYXlDb250cm9sbGVyIGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXInO1xuaW1wb3J0IExvY2FsU3RvcmFnZUhhbmRsZXIgZnJvbSAnLi9sb2NhbFN0b3JhZ2VIYW5kbGVyJztcblxuY29uc3QgRE9NSGFuZGxlciA9IChmdW5jdGlvbigpIHtcbiAgbGV0IG15UHJvamVjdHMgPSBQcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpO1xuXG4gIGxldCBjdXJyZW50UHJvamVjdElkID0gMDtcbiAgbGV0IHByb2plY3RJZEJlaW5nRWRpdGVkID0gbnVsbDtcbiAgbGV0IHRhc2tJZEJlaW5nRWRpdGVkID0gbnVsbDtcblxuICBjb25zdCB0cmlnZ2VyQWRkUHJvamVjdEJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5wb3BVcFByb2plY3RNb2RhbCgpO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlckRlbFByb2plY3RCdG4gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgY29uc3QgcHJvamVjdElkID0gZ2V0SWRPZih0YXJnZXQsICdkYXRhLXByb2plY3QtaW5kZXgnKTtcbiAgICBpZihwcm9qZWN0SWQgPT0gY3VycmVudFByb2plY3RJZCkgY3VycmVudFByb2plY3RJZCA9IDA7XG4gICAgUHJvamVjdE1hbmFnZXIucmVtb3ZlUHJvamVjdChwcm9qZWN0SWQpO1xuICAgIExvY2FsU3RvcmFnZUhhbmRsZXIuc2F2ZVByb2plY3RzKG15UHJvamVjdHMpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLnJlbmRlcihteVByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJFeGl0QnRuID0gZnVuY3Rpb24gKCkge1xuICAgIERpc3BsYXlDb250cm9sbGVyLmV4aXRNb2RhbCgpO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlclNhdmVQcm9qZWN0QnRuID0gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGZvcm0ucG5hbWUudmFsdWU7XG5cbiAgICBEaXNwbGF5Q29udHJvbGxlci5leGl0TW9kYWwoKTtcbiAgICBQcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KFByb2plY3RNYW5hZ2VyLmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgICBMb2NhbFN0b3JhZ2VIYW5kbGVyLnNhdmVQcm9qZWN0cyhteVByb2plY3RzKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5yZW5kZXIobXlQcm9qZWN0cywgY3VycmVudFByb2plY3RJZCk7XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyRWRpdFByb2plY3RCdG4gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgcHJvamVjdElkQmVpbmdFZGl0ZWQgPSBnZXRJZE9mKHRhcmdldCwgJ2RhdGEtcHJvamVjdC1pbmRleCcpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLnBvcFVwRWRpdFByb2plY3RNb2RhbChteVByb2plY3RzW3Byb2plY3RJZEJlaW5nRWRpdGVkXS5uYW1lKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJDaGFuZ2VOYW1lQnRuID0gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGZvcm0ucG5hbWUudmFsdWU7XG5cbiAgICBQcm9qZWN0TWFuYWdlci5lZGl0UHJvamVjdE5hbWUocHJvamVjdElkQmVpbmdFZGl0ZWQsIHByb2plY3ROYW1lKTtcbiAgICBMb2NhbFN0b3JhZ2VIYW5kbGVyLnNhdmVQcm9qZWN0cyhteVByb2plY3RzKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5leGl0TW9kYWwoKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5yZW5kZXIobXlQcm9qZWN0cywgY3VycmVudFByb2plY3RJZCk7XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyU2VsZWN0ZWRQcm9qZWN0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGN1cnJlbnRQcm9qZWN0SWQgPSBnZXRJZE9mKHRhcmdldCwgJ2RhdGEtcHJvamVjdC1pbmRleCcpO1xuXG4gICAgRGlzcGxheUNvbnRyb2xsZXIucmVuZGVyVGFza3MobXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdElkXSk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIudG9nZ2xlUHJvamVjdFRhYihjdXJyZW50UHJvamVjdElkKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJBZGRUYXNrQnRuID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKCFteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWRdKSByZXR1cm47XG5cbiAgICBEaXNwbGF5Q29udHJvbGxlci5wb3BVcFRhc2tNb2RhbCgpO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlclNhdmVUYXNrQnRuID0gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICBjb25zdCB0YXNrSW5mbyA9IHtcbiAgICAgIHRpdGxlOiBmb3JtLnRpdGxlLnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IGZvcm0uZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICBkdWVEYXRlOiBmb3JtLmRhdGUudmFsdWUsXG4gICAgICBwcmlvcml0eTogZm9ybS5wcmlvcml0eS52YWx1ZSxcbiAgICAgIGZpbmlzaGVkU3RhdHVzOiBmb3JtLnN0YXR1cy52YWx1ZSA9PSAnWUVTJyA/IHRydWUgOiBmYWxzZVxuICAgIH1cblxuICAgIGxldCBuZXdUYXNrID0gVGFza01hbmFnZXIuY3JlYXRlVGFzayh0YXNrSW5mbyk7XG5cbiAgICBQcm9qZWN0TWFuYWdlci5hZGRUYXNrKGN1cnJlbnRQcm9qZWN0SWQsIG5ld1Rhc2spO1xuICAgIExvY2FsU3RvcmFnZUhhbmRsZXIuc2F2ZVByb2plY3RzKG15UHJvamVjdHMpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLmV4aXRNb2RhbCgpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLnJlbmRlcihteVByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJGaW5pc2hlZFN0YXR1c0J0biA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBjb25zdCB0YXNrSWQgPSBnZXRJZE9mKHRhcmdldCwgJ2RhdGEtdGFzay1pbmRleCcpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdElkXTtcblxuICAgIGNvbnN0IGNoZWNrU3RhdHVzID0gdGFyZ2V0LmNoZWNrZWQ7XG4gICAgVGFza01hbmFnZXIudG9nZ2xlU3RhdHVzKGN1cnJlbnRQcm9qZWN0LnRhc2tzW3Rhc2tJZF0sIGNoZWNrU3RhdHVzKTtcbiAgICBMb2NhbFN0b3JhZ2VIYW5kbGVyLnNhdmVQcm9qZWN0cyhteVByb2plY3RzKTtcblxuICAgIERpc3BsYXlDb250cm9sbGVyLnJlbmRlcihteVByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJFeHBhbmRUYXNrQnRuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRhc2tJZEJlaW5nRWRpdGVkID0gZ2V0SWRPZih0YXJnZXQsICdkYXRhLXRhc2staW5kZXgnKTtcblxuICAgIGNvbnN0IHRhc2sgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZEJlaW5nRWRpdGVkXTtcblxuICAgIERpc3BsYXlDb250cm9sbGVyLnBvcFVwRWRpdFRhc2tNb2RhbCh0YXNrKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJDaGFuZ2VUYXNrQnRuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGNvbnN0IHRhc2tJbmZvID0ge1xuICAgICAgdGl0bGU6IHRhcmdldC50aXRsZS52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0YXJnZXQuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICBkdWVEYXRlOiB0YXJnZXQuZGF0ZS52YWx1ZSxcbiAgICAgIHByaW9yaXR5OiB0YXJnZXQucHJpb3JpdHkudmFsdWUsXG4gICAgICBmaW5pc2hlZFN0YXR1czogdGFyZ2V0LnN0YXR1cy52YWx1ZSA9PT0gJ1lFUycgPyB0cnVlIDogZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgdGFzayA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJZF0udGFza3NbdGFza0lkQmVpbmdFZGl0ZWRdO1xuXG4gICAgVGFza01hbmFnZXIuZWRpdFRhc2sodGFzaywgdGFza0luZm8pO1xuICAgIExvY2FsU3RvcmFnZUhhbmRsZXIuc2F2ZVByb2plY3RzKG15UHJvamVjdHMpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLmV4aXRNb2RhbCgpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLnJlbmRlcihteVByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJEZWxUYXNrQnRuID0gZnVuY3Rpb24gKCkge1xuICAgIFByb2plY3RNYW5hZ2VyLnJlbW92ZVRhc2soY3VycmVudFByb2plY3RJZCwgdGFza0lkQmVpbmdFZGl0ZWQpO1xuICAgIExvY2FsU3RvcmFnZUhhbmRsZXIuc2F2ZVByb2plY3RzKG15UHJvamVjdHMpO1xuXG4gICAgRGlzcGxheUNvbnRyb2xsZXIuZXhpdE1vZGFsKCk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIucmVuZGVyKG15UHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SWQpO1xuICB9XG5cbiAgY29uc3QgZ2V0SWRPZiA9IGZ1bmN0aW9uIChjdXJyLCBhdHRyTmFtZSkge1xuICAgIHdoaWxlKCFjdXJyLmhhc0F0dHJpYnV0ZShhdHRyTmFtZSkpIGN1cnIgPSBjdXJyLnBhcmVudE5vZGU7XG5cbiAgICByZXR1cm4gY3Vyci5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICB9XG5cbiAgY29uc3QgbGlzdGVuRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldENsYXNzbGlzdCA9IGUudGFyZ2V0LmNsYXNzTGlzdDtcbiAgICAgIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnZGVsZXRlLXByb2plY3QtYnRuJykpIHRyaWdnZXJEZWxQcm9qZWN0QnRuKGUudGFyZ2V0KTtcblxuICAgICAgZWxzZSBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ2VkaXQtcHJvamVjdCcpKSB0cmlnZ2VyRWRpdFByb2plY3RCdG4oZS50YXJnZXQpO1xuXG4gICAgICBlbHNlIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnZXhpdC1idG4nKSkgdHJpZ2dlckV4aXRCdG4oKTtcblxuICAgICAgZWxzZSBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ3Byb2plY3QtbmFtZScpKSB0cmlnZ2VyU2VsZWN0ZWRQcm9qZWN0KGUudGFyZ2V0KTtcblxuICAgICAgZWxzZSBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ2ZpbmlzaGVkLXN0YXR1cycpKSB0cmlnZ2VyRmluaXNoZWRTdGF0dXNCdG4oZS50YXJnZXQpO1xuXG4gICAgICBlbHNlIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnZXhwYW5kLWJ0bicpKSB0cmlnZ2VyRXhwYW5kVGFza0J0bihlLnRhcmdldCk7XG5cbiAgICAgIGVsc2UgaWYodGFyZ2V0Q2xhc3NsaXN0LmNvbnRhaW5zKCdkZWxldGUtdGFzaycpKSB0cmlnZ2VyRGVsVGFza0J0bihlLnRhcmdldCk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0YXJnZXRDbGFzc2xpc3QgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XG5cbiAgICAgIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnYWRkLXByb2plY3QtbW9kYWwnKSkgdHJpZ2dlclNhdmVQcm9qZWN0QnRuKGUudGFyZ2V0KTtcblxuICAgICAgZWxzZSBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ2VkaXQtcHJvamVjdC1tb2RhbCcpKSB0cmlnZ2VyQ2hhbmdlTmFtZUJ0bihlLnRhcmdldCk7XG5cbiAgICAgIGVsc2UgaWYodGFyZ2V0Q2xhc3NsaXN0LmNvbnRhaW5zKCdhZGQtdGFzay1tb2RhbCcpKSB0cmlnZ2VyU2F2ZVRhc2tCdG4oZS50YXJnZXQpO1xuXG4gICAgICBlbHNlIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnZWRpdC10YXNrLW1vZGFsJykpIHRyaWdnZXJDaGFuZ2VUYXNrQnRuKGUudGFyZ2V0KTtcbiAgICB9KTtcblxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0cmlnZ2VyQWRkUHJvamVjdEJ0bik7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRyaWdnZXJBZGRUYXNrQnRuKTtcbiAgfVxuXG4gIGNvbnN0IGluaXQgPSBmdW5jdGlvbiBpbml0QXBwKCkge1xuICAgIERpc3BsYXlDb250cm9sbGVyLnJlbmRlcihteVByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKTtcbiAgICBsaXN0ZW5FdmVudHMoKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NSGFuZGxlcjsiLCJpbXBvcnQgRGVsZXRlSWNvbiBmcm9tICcuLi9hc3NldHMvcmVjeWNsZS1iaW4ucG5nJztcbmltcG9ydCBFeHBhbmRJY29uIGZyb20gJy4uL2Fzc2V0cy9leHBhbmQtaWNvbi5zdmcnXG5cbmNvbnN0IGVsZW1lbnRzTW9kZWxzID0ge1xuICBwcm9qZWN0VGFiTW9kZWwobmFtZSwgcHJvamVjdElkKSB7XG4gICAgY29uc3QgcHJvamVjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YWInKTtcbiAgICBwcm9qZWN0VGFiLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWluZGV4JywgcHJvamVjdElkKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0Jyk7XG4gICAgZWRpdFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRWRpdCBOYW1lJztcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nLCAnZGVsZXRlLXByb2plY3QtYnRuJyk7XG5cbiAgICBjb25zdCBiaW5JY29uID0gbmV3IEltYWdlKCk7XG4gICAgYmluSWNvbi5jbGFzc0xpc3QuYWRkKCdzdmctaWNvbnMnKTtcbiAgICBiaW5JY29uLnNyYyA9IERlbGV0ZUljb247XG5cbiAgICBkZWxldGVQcm9qZWN0QnRuLmFwcGVuZENoaWxkKGJpbkljb24pO1xuXG4gICAgcHJvamVjdFRhYi5hcHBlbmQocHJvamVjdE5hbWUsIGVkaXRQcm9qZWN0QnRuLCBkZWxldGVQcm9qZWN0QnRuKTtcblxuICAgIHJldHVybiBwcm9qZWN0VGFiO1xuICB9LFxuXG4gIHRhc2tNb2RlbCh0YXNrLCB0YXNrSWQpIHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICB0YXNrRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pbmRleCcsIHRhc2tJZCk7XG4gICAgXG4gICAgY29uc3QgZmluaXNoZWRTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGZpbmlzaGVkU3RhdHVzLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGZpbmlzaGVkU3RhdHVzLmNoZWNrZWQgPSB0YXNrLmZpbmlzaGVkU3RhdHVzO1xuICAgIGZpbmlzaGVkU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkLXN0YXR1cycpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0YXNrLmZpbmlzaGVkU3RhdHVzID8gdGl0bGUuY2xhc3NMaXN0LmFkZCgnc3RyaWtldGhyb3VnaCcpIDogdGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RyaWtldGhyb3VnaCcpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScsIHRhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKSk7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgY29uc3QgZXhwYW5kSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGV4cGFuZEljb24uc3JjID0gRXhwYW5kSWNvbjtcbiAgICBleHBhbmRJY29uLmNsYXNzTGlzdC5hZGQoJ3N2Zy1pY29ucycsICdleHBhbmQtaWNvbicpO1xuXG4gICAgY29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1idG4nKTtcbiAgICBleHBhbmRCdXR0b24uYXBwZW5kQ2hpbGQoZXhwYW5kSWNvbik7XG5cbiAgICB0YXNrRWxlbWVudC5hcHBlbmQoZmluaXNoZWRTdGF0dXMsIHRpdGxlLCBwcmlvcml0eSwgZHVlRGF0ZSwgZXhwYW5kQnV0dG9uKTtcblxuICAgIHJldHVybiB0YXNrRWxlbWVudDtcbiAgfSxcbiAgXG4gIGFkZFByb2plY3RNb2RhbCgpIHtcbiAgICBjb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvamVjdE1vZGFsLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJyMnKTtcbiAgICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnYWRkLXByb2plY3QtbW9kYWwnKTtcblxuICAgIGNvbnN0IHByb2plY3RNb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RNb2RhbEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkZXInKTtcblxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gJ0VudGVyIFByb2plY3QgTmFtZSc7XG5cbiAgICBjb25zdCBleGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZXhpdEJ0bi5jbGFzc0xpc3QuYWRkKCdleGl0LWJ0bicpO1xuICAgIGV4aXRCdG4uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xuXG4gICAgcHJvamVjdE1vZGFsSGVhZGVyLmFwcGVuZChoZWFkZXJUZXh0LCBleGl0QnRuKTtcblxuICAgIGNvbnN0IGlucHV0UGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSAncHJvamVjdCBuYW1lLi4uJztcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUtaW5wdXQnKTtcbiAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgaW5wdXQubmFtZSA9ICdwbmFtZSdcblxuICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlQnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzYXZlQnRuLmNsYXNzTGlzdC5hZGQoJ3NhdmUnLCAnc2F2ZS1wcm9qZWN0Jyk7XG4gICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdTYXZlJztcblxuICAgIGlucHV0UGFydC5hcHBlbmQoaW5wdXQsIHNhdmVCdG4pO1xuXG4gICAgcHJvamVjdE1vZGFsLmFwcGVuZChwcm9qZWN0TW9kYWxIZWFkZXIsIGlucHV0UGFydCk7XG5cbiAgICByZXR1cm4gcHJvamVjdE1vZGFsO1xuICB9LFxuXG4gIGVkaXRQcm9qZWN0TW9kYWwoaW5wdXRUZXh0KSB7XG4gICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2plY3RNb2RhbC5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gICAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2VkaXQtcHJvamVjdC1tb2RhbCcpO1xuXG4gICAgY29uc3QgcHJvamVjdE1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdE1vZGFsSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWhlYWRlcicpO1xuXG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0IE5hbWUnO1xuXG4gICAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnZXhpdC1idG4nKTtcbiAgICBleGl0QnRuLmlubmVySFRNTCA9ICcmdGltZXM7JztcblxuICAgIHByb2plY3RNb2RhbEhlYWRlci5hcHBlbmQoaGVhZGVyVGV4dCwgZXhpdEJ0bik7XG5cbiAgICBjb25zdCBpbnB1dFBhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0LnZhbHVlID0gaW5wdXRUZXh0O1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZS1pbnB1dCcpO1xuICAgIGlucHV0Lm5hbWUgPSAncG5hbWUnO1xuICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlQnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzYXZlQnRuLmNsYXNzTGlzdC5hZGQoJ3NhdmUnLCAnZWRpdC1uYW1lJyk7XG4gICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdTYXZlIENoYW5nZXMnO1xuXG4gICAgaW5wdXRQYXJ0LmFwcGVuZChpbnB1dCwgc2F2ZUJ0bik7XG5cbiAgICBwcm9qZWN0TW9kYWwuYXBwZW5kKHByb2plY3RNb2RhbEhlYWRlciwgaW5wdXRQYXJ0KTtcblxuICAgIHJldHVybiBwcm9qZWN0TW9kYWw7XG4gIH0sXG5cbiAgYWRkVGFza01vZGFsKCkge1xuICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0YXNrTW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAnYWRkLXRhc2stbW9kYWwnKTtcbiAgICBcbiAgICAvLyBoZWFkZXJcbiAgICBjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWhlYWRlcicpXG5cbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5cbiAgICBjb25zdCBleGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZXhpdEJ0bi5jbGFzc0xpc3QuYWRkKCdleGl0LWJ0bicpO1xuICAgIGV4aXRCdG4uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xuXG4gICAgbW9kYWxIZWFkZXIuYXBwZW5kKGhlYWRlclRleHQsIGV4aXRCdG4pO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKTtcblxuICAgIC8vIFRJVExFXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6ICc7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9ICd0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCk7XG5cbiAgICAvLyBERVNDUklQVElPTlxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICc7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvbklucHV0LmNvbHMgPSAnOCc7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJ1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZChkZXNjcmlwdGlvbkxhYmVsLCBkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIC8vIER1ZSBEYXRlXG5cbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWUtZGF0ZScpO1xuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonO1xuXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSAnZHVlLWRhdGUnO1xuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gJ2RhdGUnO1xuICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kKGR1ZURhdGVMYWJlbCwgZHVlRGF0ZUlucHV0KTtcblxuICAgIC8vIFByaW9yaXR5XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpOyAvLyBTZWxlY3QgRWxlbWVudFxuICAgIHByaW9yaXR5SW5wdXQuaWQgPSAncHJpb3JpdHknO1xuICAgIHByaW9yaXR5SW5wdXQubmFtZSA9ICdwcmlvcml0eSc7XG5cbiAgICBjb25zdCBsb3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBsb3dPcHRpb24udmFsdWUgPSAnTE9XJztcbiAgICBsb3dPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcbiAgICBsb3dPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgbWVkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbWVkT3B0aW9uLnZhbHVlID0gJ01FRCc7XG4gICAgbWVkT3B0aW9uLnRleHRDb250ZW50ID0gJ01lZCc7XG5cbiAgICBjb25zdCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaGlnaE9wdGlvbi52YWx1ZSA9ICdISUdIJztcbiAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmQobG93T3B0aW9uLCBtZWRPcHRpb24sIGhpZ2hPcHRpb24pO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eUlucHV0KVxuXG4gICAgLy8gZmluaXNoZWRTdGF0dXNcblxuICAgIGNvbnN0IHN0YXR1c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBzdGF0dXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmaW5pc2hlZC1zdGF0dXMnKTtcbiAgICBzdGF0dXNMYWJlbC50ZXh0Q29udGVudCA9ICdGaW5pc2hlZD86J1xuXG4gICAgY29uc3Qgc3RhdHVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzdGF0dXNJbnB1dC5pZCA9ICdmaW5pc2hlZC1zdGF0dXMnO1xuICAgIHN0YXR1c0lucHV0Lm5hbWUgPSAnc3RhdHVzJztcblxuICAgIGNvbnN0IG5vT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbm9PcHRpb24udmFsdWUgPSAnTk8nO1xuICAgIG5vT3B0aW9uLnRleHRDb250ZW50ID0gJ05vJztcbiAgICBub09wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICBjb25zdCB5ZXNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICB5ZXNPcHRpb24udmFsdWUgPSAnWUVTJztcbiAgICB5ZXNPcHRpb24udGV4dENvbnRlbnQgPSAnWWVzJztcblxuICAgIHN0YXR1c0lucHV0LmFwcGVuZChub09wdGlvbiwgeWVzT3B0aW9uKTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQoc3RhdHVzTGFiZWwsIHN0YXR1c0lucHV0KTtcblxuICAgIC8vIFNhdmUgQnV0dG9uXG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNhdmVCdG4udHlwZSA9ICdzdWJtaXQnO1xuICAgIHNhdmVCdG4uY2xhc3NMaXN0LmFkZCgnc2F2ZScsICdzYXZlLXRhc2snKTtcbiAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuXG4gICAgcmV0dXJuIHRhc2tNb2RhbDtcbiAgfSxcblxuICBlZGl0VGFza01vZGFsKHRhc2spIHtcbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2VkaXQtdGFzay1tb2RhbCcpO1xuICAgIFxuICAgIC8vIGhlYWRlclxuICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJylcblxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XG5cbiAgICBjb25zdCBleGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZXhpdEJ0bi5jbGFzc0xpc3QuYWRkKCdleGl0LWJ0bicpO1xuICAgIGV4aXRCdG4uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xuXG4gICAgbW9kYWxIZWFkZXIuYXBwZW5kKGhlYWRlclRleHQsIGV4aXRCdG4pO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKTtcblxuICAgIC8vIFRJVExFXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6ICc7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCk7XG5cbiAgICAvLyBERVNDUklQVElPTlxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICc7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvbklucHV0LmNvbHMgPSAnOCc7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJ1xuICAgIGRlc2NyaXB0aW9uSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZChkZXNjcmlwdGlvbkxhYmVsLCBkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIC8vIER1ZSBEYXRlXG5cbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWUtZGF0ZScpO1xuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonO1xuXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgZHVlRGF0ZUlucHV0LmlkID0gJ2R1ZS1kYXRlJztcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkYXRlJztcbiAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZChkdWVEYXRlTGFiZWwsIGR1ZURhdGVJbnB1dCk7XG5cbiAgICAvLyBQcmlvcml0eVxuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcblxuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTsgLy8gU2VsZWN0IEVsZW1lbnRcbiAgICBwcmlvcml0eUlucHV0LmlkID0gJ3ByaW9yaXR5JztcbiAgICBwcmlvcml0eUlucHV0Lm5hbWUgPSAncHJpb3JpdHknO1xuXG4gICAgY29uc3QgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbG93T3B0aW9uLnZhbHVlID0gJ0xPVyc7XG4gICAgbG93T3B0aW9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICBjb25zdCBtZWRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBtZWRPcHRpb24udmFsdWUgPSAnTUVEJztcbiAgICBtZWRPcHRpb24udGV4dENvbnRlbnQgPSAnTWVkJztcblxuICAgIGNvbnN0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBoaWdoT3B0aW9uLnZhbHVlID0gJ0hJR0gnO1xuICAgIGhpZ2hPcHRpb24udGV4dENvbnRlbnQgPSAnSGlnaCc7XG5cbiAgICBzd2l0Y2ggKHRhc2sucHJpb3JpdHkpIHtcbiAgICAgIGNhc2UgbG93T3B0aW9uLnZhbHVlOlxuICAgICAgICBsb3dPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBtZWRPcHRpb24udmFsdWU6XG4gICAgICAgIG1lZE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgXG4gICAgICBjYXNlIGhpZ2hPcHRpb24udmFsdWU6XG4gICAgICAgIGhpZ2hPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZChsb3dPcHRpb24sIG1lZE9wdGlvbiwgaGlnaE9wdGlvbik7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kKHByaW9yaXR5TGFiZWwsIHByaW9yaXR5SW5wdXQpXG5cbiAgICAvLyBmaW5pc2hlZFN0YXR1c1xuXG4gICAgY29uc3Qgc3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHN0YXR1c0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZpbmlzaGVkLXN0YXR1cycpO1xuICAgIHN0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gJ0ZpbmlzaGVkPzonXG5cbiAgICBjb25zdCBzdGF0dXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHN0YXR1c0lucHV0LmlkID0gJ2ZpbmlzaGVkLXN0YXR1cyc7XG4gICAgc3RhdHVzSW5wdXQubmFtZSA9ICdzdGF0dXMnO1xuXG4gICAgY29uc3Qgbm9PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBub09wdGlvbi52YWx1ZSA9ICdOTyc7XG4gICAgbm9PcHRpb24udGV4dENvbnRlbnQgPSAnTm8nO1xuXG4gICAgY29uc3QgeWVzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgeWVzT3B0aW9uLnZhbHVlID0gJ1lFUyc7XG4gICAgeWVzT3B0aW9uLnRleHRDb250ZW50ID0gJ1llcyc7XG5cbiAgICB0YXNrLmZpbmlzaGVkU3RhdHVzID8geWVzT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZSA6IG5vT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIHN0YXR1c0lucHV0LmFwcGVuZChub09wdGlvbiwgeWVzT3B0aW9uKTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQoc3RhdHVzTGFiZWwsIHN0YXR1c0lucHV0KTtcblxuICAgIC8vIFNhdmUgQnV0dG9uXG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNhdmVCdG4udHlwZSA9ICdzdWJtaXQnO1xuICAgIHNhdmVCdG4uY2xhc3NMaXN0LmFkZCgnc2F2ZScsICdzYXZlLXRhc2snKTtcbiAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuXG4gICAgLy8gRGVsZXRlIEJ1dHRvblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3NhdmUnLCAnZGVsZXRlLXRhc2snKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcblxuICAgIC8vIEJ1dHRvbnMgQ29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bi1jb250YWluZXInKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoc2F2ZUJ0biwgZGVsZXRlQnRuKTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgcmV0dXJuIHRhc2tNb2RhbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50c01vZGVsczsiLCJjb25zdCBMb2NhbFN0b3JhZ2VIYW5kbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2F2ZVByb2plY3RzID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215UHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICB9XG5cbiAgY29uc3QgbG9hZFByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVByb2plY3RzJykpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzYXZlUHJvamVjdHMsXG4gICAgbG9hZFByb2plY3RzXG4gIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsU3RvcmFnZUhhbmRsZXI7IiwiY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBMb2NhbFN0b3JhZ2VIYW5kbGVyIGZyb20gXCIuL2xvY2FsU3RvcmFnZUhhbmRsZXJcIjtcblxuY29uc3QgUHJvamVjdE1hbmFnZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCBteVByb2plY3RzID0gTG9jYWxTdG9yYWdlSGFuZGxlci5sb2FkUHJvamVjdHMoKSB8fCBbXTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9IGZ1bmN0aW9uIGdldE15UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIG15UHJvamVjdHM7XG4gIH1cblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSk7XG4gIH1cblxuICBjb25zdCBhZGRQcm9qZWN0ID0gZnVuY3Rpb24gYWRkUHJvamVjdFRvTXlQcm9qZWN0cyhwcm9qZWN0KSB7XG4gICAgbXlQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9XG5cbiAgY29uc3QgZWRpdFByb2plY3ROYW1lID0gZnVuY3Rpb24gKHByb2plY3RJZCwgbmFtZSkge1xuICAgIG15UHJvamVjdHNbcHJvamVjdElkXS5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhc2sgPSBmdW5jdGlvbiAocHJvamVjdElkLCB0YXNrKSB7XG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICBjb25zdCByZW1vdmVUYXNrID0gZnVuY3Rpb24gKHByb2plY3RJZCwgdGFza0lkKSB7XG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzLnNwbGljZSh0YXNrSWQsIDEpO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0SWQpIHtcbiAgICBteVByb2plY3RzLnNwbGljZShwcm9qZWN0SWQsIDEpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBjcmVhdGVQcm9qZWN0LFxuICAgIGFkZFByb2plY3QsXG4gICAgZWRpdFByb2plY3ROYW1lLFxuICAgIGFkZFRhc2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgICByZW1vdmVQcm9qZWN0XG4gIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RNYW5hZ2VyOyIsImNsYXNzIFRhc2sge1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZpbmlzaGVkU3RhdHVzKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmZpbmlzaGVkU3RhdHVzID0gZmluaXNoZWRTdGF0dXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmNvbnN0IFRhc2tNYW5hZ2VyID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCBjcmVhdGVUYXNrID0gZnVuY3Rpb24gKHRhc2tJbmZvKSB7XG4gICAgbGV0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBmaW5pc2hlZFN0YXR1c30gPSB0YXNrSW5mbztcbiAgICByZXR1cm4gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZmluaXNoZWRTdGF0dXMpO1xuICB9XG5cbiAgY29uc3QgZWRpdFRhc2sgPSBmdW5jdGlvbiBlZGl0VGFza0Zyb21HaXZlbkluZm8odGFzaywgbmV3SW5mbykge1xuICAgIGxldCB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZmluaXNoZWRTdGF0dXN9ID0gbmV3SW5mbztcblxuICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGFzay5maW5pc2hlZFN0YXR1cyA9IGZpbmlzaGVkU3RhdHVzO1xuICB9XG5cbiAgY29uc3QgdG9nZ2xlU3RhdHVzID0gZnVuY3Rpb24gdG9nZ2xlRmluaXNoZWRTdGF0dXModGFzaywgc3RhdHVzKSB7XG4gICAgdGFzay5maW5pc2hlZFN0YXR1cyA9IHN0YXR1cztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlVGFzayxcbiAgICBlZGl0VGFzayxcbiAgICB0b2dnbGVTdGF0dXNcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFza01hbmFnZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgRE9NSGFuZGxlciBmcm9tIFwiLi9kb21IYW5kbGVyXCI7XG5cbkRPTUhhbmRsZXIuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==