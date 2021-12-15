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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n:root {\n  --darkened-color: rgb(166, 230, 255);\n  --pale-color: rgb(215, 241, 251);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  width: 100%;\n  background-color: #000;\n  color: #fff;\n  font-size: 48px;\n  font-weight: bold;\n  padding: 12px 0px;\n}\n\n.logo {\n  margin-left: 48px;\n}\n\n.wrapper {\n  flex: 1;\n  display: flex;\n}\n\n.tabs-wrapper {\n  flex-shrink: 0;\n\n  background-color: #ffffff;\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.tasks-wrapper {\n  flex: 1;\n  background-color: var(--pale-color);\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n}\n\n.tasks-container {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.project-header {\n  font-size: 2em;\n  font-weight: bold;\n  align-self: center;\n}\n\n.projects-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.project-tab {\n  width: 100%;\n  display: flex;\n\n  /* background-color: rgb(255, 143, 246); */\n}\n\n.task {\n  width: 100%;\n  background-color: #fff;\n  min-height: 48px;\n\n  border-radius: 4px;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.13);\n\n  display: grid;\n  grid-template-columns: 5% auto 20% 20% 5%;\n  align-items: center;\n}\n\n.expand-btn {\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.save-task {\n  align-self: center;\n}\n\n.expand-icon:hover {\n  color: red;\n}\n\n.task > div {\n  direction: ltr;\n}\n\n.input-container {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.strikethrough {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.project-name {\n  cursor: pointer;\n  flex-grow: 4;\n  text-align: center;\n  padding: 12px 0 12px 0;\n  background-color: var(--pale-color);\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.project-name:hover {\n  background-color: black;\n  color: white;\n}\n\n.active-project {\n  background-color: black;\n  color: white;\n}\n\n.edit-project {\n  background-color: rgb(235, 235, 235);\n  cursor: pointer;\n}\n\n.edit-project:hover {\n  background-color: var(--darkened-color)\n}\n\n.delete-btn {\n  background-color: transparent;\n  flex-grow: 1;\n  cursor: pointer;\n}\n\n.delete-btn:hover, .exit-btn:hover {\n  transform: scale(1.3);\n}\n\n.save {\n  padding: 6px 10px;\n  background-color: rgb(118, 255, 118);\n}\n\n.save:hover {\n  background-color: rgb(86, 189, 86);\n}\n\n.save-project {\n  margin-left: 6px;\n}\n\nimg {\n  pointer-events: none;\n}\n\n.svg-icons {\n  width: 16px;\n}\n\n.add-project-btn, .add-task-btn {\n  align-self: center;\n  padding: 8px 12px;\n  background-color: #000;\n  color: white;\n  font-weight: bold;\n}\n\n.add-task-btn {\n  align-self: flex-end;\n}\n\n.add-project-btn:hover, .add-task-btn:hover {\n  background-color: rgb(136, 136, 136);\n  color: #000;\n}\n\n.delete-task:hover {\n  background-color: red;\n}\n\n.btn-container {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n\n.modal {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  width: 360px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  background-color: var(--darkened-color);\n  border: 1px solid #000;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.exit-btn {\n  background-color: transparent;\n  cursor: pointer;\n}\n\nfooter {\n  margin-top: auto;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #000;\n  color: #fff;\n  padding: 16px 0;\n}\n\nbutton {\n  border-style: none;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;;EAEb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,cAAc;;EAEd,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,OAAO;EACP,mCAAmC;;EAEnC,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,aAAa;;EAEb,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,gBAAgB;;EAEhB,kBAAkB;EAClB,8CAA8C;;EAE9C,aAAa;EACb,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,mCAAmC;EACnC,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE;AACF;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET,uCAAuC;EACvC,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\n:root {\n  --darkened-color: rgb(166, 230, 255);\n  --pale-color: rgb(215, 241, 251);\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  width: 100%;\n  background-color: #000;\n  color: #fff;\n  font-size: 48px;\n  font-weight: bold;\n  padding: 12px 0px;\n}\n\n.logo {\n  margin-left: 48px;\n}\n\n.wrapper {\n  flex: 1;\n  display: flex;\n}\n\n.tabs-wrapper {\n  flex-shrink: 0;\n\n  background-color: #ffffff;\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.tasks-wrapper {\n  flex: 1;\n  background-color: var(--pale-color);\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 16px;\n}\n\n.tasks-container {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.project-header {\n  font-size: 2em;\n  font-weight: bold;\n  align-self: center;\n}\n\n.projects-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.project-tab {\n  width: 100%;\n  display: flex;\n\n  /* background-color: rgb(255, 143, 246); */\n}\n\n.task {\n  width: 100%;\n  background-color: #fff;\n  min-height: 48px;\n\n  border-radius: 4px;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.13);\n\n  display: grid;\n  grid-template-columns: 5% auto 20% 20% 5%;\n  align-items: center;\n}\n\n.expand-btn {\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.save-task {\n  align-self: center;\n}\n\n.expand-icon:hover {\n  color: red;\n}\n\n.task > div {\n  direction: ltr;\n}\n\n.input-container {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.strikethrough {\n  text-decoration: line-through;\n  color: grey;\n}\n\n.project-name {\n  cursor: pointer;\n  flex-grow: 4;\n  text-align: center;\n  padding: 12px 0 12px 0;\n  background-color: var(--pale-color);\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.project-name:hover {\n  background-color: black;\n  color: white;\n}\n\n.active-project {\n  background-color: black;\n  color: white;\n}\n\n.edit-project {\n  background-color: rgb(235, 235, 235);\n  cursor: pointer;\n}\n\n.edit-project:hover {\n  background-color: var(--darkened-color)\n}\n\n.delete-btn {\n  background-color: transparent;\n  flex-grow: 1;\n  cursor: pointer;\n}\n\n.delete-btn:hover, .exit-btn:hover {\n  transform: scale(1.3);\n}\n\n.save {\n  padding: 6px 10px;\n  background-color: rgb(118, 255, 118);\n}\n\n.save:hover {\n  background-color: rgb(86, 189, 86);\n}\n\n.save-project {\n  margin-left: 6px;\n}\n\nimg {\n  pointer-events: none;\n}\n\n.svg-icons {\n  width: 16px;\n}\n\n.add-project-btn, .add-task-btn {\n  align-self: center;\n  padding: 8px 12px;\n  background-color: #000;\n  color: white;\n  font-weight: bold;\n}\n\n.add-task-btn {\n  align-self: flex-end;\n}\n\n.add-project-btn:hover, .add-task-btn:hover {\n  background-color: rgb(136, 136, 136);\n  color: #000;\n}\n\n.delete-task:hover {\n  background-color: red;\n}\n\n.btn-container {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n\n.modal {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  width: 360px;\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n\n  background-color: var(--darkened-color);\n  border: 1px solid #000;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.exit-btn {\n  background-color: transparent;\n  cursor: pointer;\n}\n\nfooter {\n  margin-top: auto;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #000;\n  color: #fff;\n  padding: 16px 0;\n}\n\nbutton {\n  border-style: none;\n}"],"sourceRoot":""}]);
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
    priority.classList.add('priority', task.priority);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDL1o3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7QUNmbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUNQVTtBQUN3Qjs7QUFFeEQ7QUFDQSxtQkFBbUIseUVBQWdDOztBQUVuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGdEQUFPO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7OztBQzdDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNYTzs7QUFFMUI7QUFDQTtBQUNBLFNBQVMsdURBQXVEO0FBQ2hFLGVBQWUsNkNBQUk7QUFDbkI7O0FBRUE7QUFDQSxTQUFTLHVEQUF1RDs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdCMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2ZzQzs7QUFFdEMsd0RBQWUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VsZW1lbnRNb2RlbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RQcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tQcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZGFya2VuZWQtY29sb3I6IHJnYigxNjYsIDIzMCwgMjU1KTtcXG4gIC0tcGFsZS1jb2xvcjogcmdiKDIxNSwgMjQxLCAyNTEpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDEycHggMHB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBtYXJnaW4tbGVmdDogNDhweDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YWJzLXdyYXBwZXIge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgd2lkdGg6IDM4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi50YXNrcy13cmFwcGVyIHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWNvbG9yKTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTRweDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucHJvamVjdC10YWIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTQzLCAyNDYpOyAqL1xcbn1cXG5cXG4udGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtaW4taGVpZ2h0OiA0OHB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIGF1dG8gMjAlIDIwJSA1JTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5leHBhbmQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2F2ZS10YXNrIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmV4cGFuZC1pY29uOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrID4gZGl2IHtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5zdHJpa2V0aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleC1ncm93OiA0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweCAwIDEycHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWN0aXZlLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5lZGl0LXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlbmVkLWNvbG9yKVxcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1idG46aG92ZXIsIC5leGl0LWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbi5zYXZlIHtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExOCwgMjU1LCAxMTgpO1xcbn1cXG5cXG4uc2F2ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODYsIDE4OSwgODYpO1xcbn1cXG5cXG4uc2F2ZS1wcm9qZWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxufVxcblxcbmltZyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnN2Zy1pY29ucyB7XFxuICB3aWR0aDogMTZweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biwgLmFkZC10YXNrLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlciwgLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmRlbGV0ZS10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VuZWQtY29sb3IpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZXhpdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTZweCAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTs7RUFFYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYzs7RUFFZCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztFQUNQLG1DQUFtQzs7RUFFbkMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7O0VBRWIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7O0VBRWhCLGtCQUFrQjtFQUNsQiw4Q0FBOEM7O0VBRTlDLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUzs7RUFFVCx1Q0FBdUM7RUFDdkMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWRhcmtlbmVkLWNvbG9yOiByZ2IoMTY2LCAyMzAsIDI1NSk7XFxuICAtLXBhbGUtY29sb3I6IHJnYigyMTUsIDI0MSwgMjUxKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAxMnB4IDBweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWFyZ2luLWxlZnQ6IDQ4cHg7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFicy13cmFwcGVyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIHdpZHRoOiAzODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4udGFza3Mtd3JhcHBlciB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1jb2xvcik7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi50YXNrcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE0cHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnByb2plY3QtdGFiIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0MywgMjQ2KTsgKi9cXG59XFxuXFxuLnRhc2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWluLWhlaWdodDogNDhweDtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1JSBhdXRvIDIwJSAyMCUgNSU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZXhwYW5kLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNhdmUtdGFzayB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5leHBhbmQtaWNvbjpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udGFzayA+IGRpdiB7XFxuICBkaXJlY3Rpb246IGx0cjtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4uc3RyaWtldGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsZXgtZ3JvdzogNDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEycHggMCAxMnB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3QtbmFtZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFjdGl2ZS1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVkaXQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZW5lZC1jb2xvcilcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGUtYnRuOmhvdmVyLCAuZXhpdC1idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbn1cXG5cXG4uc2F2ZSB7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTgsIDI1NSwgMTE4KTtcXG59XFxuXFxuLnNhdmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg2LCAxODksIDg2KTtcXG59XFxuXFxuLnNhdmUtcHJvamVjdCB7XFxuICBtYXJnaW4tbGVmdDogNnB4O1xcbn1cXG5cXG5pbWcge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zdmctaWNvbnMge1xcbiAgd2lkdGg6IDE2cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4sIC5hZGQtdGFzay1idG4ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG46aG92ZXIsIC5hZGQtdGFzay1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNiwgMTM2LCAxMzYpO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5kZWxldGUtdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzNjBweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlbmVkLWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmV4aXQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDE2cHggMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZWxlbWVudHNNb2RlbHMgZnJvbSBcIi4vZWxlbWVudE1vZGVsc1wiO1xuXG5jb25zdCBEaXNwbGF5Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcblxuICBjb25zdCBjbGVhckNoaWxkTm9kZXMgPSBmdW5jdGlvbiBjbGVhckNoaWxkTm9kZXNGcm9tUGFyZW50Tm9kZShwYXJlbnROb2RlKSB7XG4gICAgd2hpbGUocGFyZW50Tm9kZS5maXJzdENoaWxkKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBjb25zdCBjaGVja0V4aXN0aW5nTW9kYWwgPSBmdW5jdGlvbiBjaGVja0V4aXN0aW5nTW9kYWxJbldpbmRvdygpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgIGlmKG1vZGFsKSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHBvcFVwUHJvamVjdE1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKGNoZWNrRXhpc3RpbmdNb2RhbCgpKSByZXR1cm47XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50c01vZGVscy5hZGRQcm9qZWN0TW9kYWwoKSk7XG4gIH1cblxuICBjb25zdCBwb3BVcEVkaXRQcm9qZWN0TW9kYWwgPSBmdW5jdGlvbiAoaW5wdXRUZXh0KSB7XG4gICAgaWYoY2hlY2tFeGlzdGluZ01vZGFsKCkpIHJldHVybjtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudHNNb2RlbHMuZWRpdFByb2plY3RNb2RhbChpbnB1dFRleHQpKTtcbiAgfVxuXG4gIGNvbnN0IHBvcFVwVGFza01vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKGNoZWNrRXhpc3RpbmdNb2RhbCgpKSByZXR1cm47XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50c01vZGVscy5hZGRUYXNrTW9kYWwoKSk7XG4gIH1cblxuICBjb25zdCBwb3BVcEVkaXRUYXNrTW9kYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgIGlmKGNoZWNrRXhpc3RpbmdNb2RhbCgpKSByZXR1cm47XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnRzTW9kZWxzLmVkaXRUYXNrTW9kYWwodGFzaykpO1xuICB9XG5cbiAgY29uc3QgZXhpdE1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgY2hpbGQucmVtb3ZlKCk7XG4gIH1cblxuICBjb25zdCByZW5kZXJQcm9qZWN0VGFicyA9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3RzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy13cmFwcGVyJyk7XG4gICAgY2xlYXJDaGlsZE5vZGVzKHByb2plY3RzV3JhcHBlcik7XG5cbiAgICBpZihwcm9qZWN0cy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHNNb2RlbHMucHJvamVjdFRhYk1vZGVsKHByb2plY3QubmFtZSwgcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcmVuZGVyVGFza3MgPSBmdW5jdGlvbiByZW5kZXJUYXNrc09mQ3VycmVudFByb2plY3QgKHByb2plY3QpIHtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1jb250YWluZXInKTtcbiAgICBjbGVhckNoaWxkTm9kZXModGFza3NDb250YWluZXIpO1xuXG4gICAgaWYoIXByb2plY3QpIHJldHVybjtcblxuICAgIGNvbnN0IHRhc2tzID0gcHJvamVjdC50YXNrcztcblxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50c01vZGVscy50YXNrTW9kZWwodGFzaywgdGFza3MuaW5kZXhPZih0YXNrKSkpO1xuICAgIH0pXG4gIH1cblxuICBjb25zdCB0b2dnbGVQcm9qZWN0VGFiID0gZnVuY3Rpb24gdG9nZ2xlQ3VycmVudFByb2plY3RUYWJTdHlsZSAocHJvamVjdElkKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1uYW1lJyk7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWluZGV4Jyk7XG5cbiAgICAgIHByb2plY3RJZCA9PSBwcm9qZWN0SW5kZXggPyBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0JykgOiBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlckFsbCAocHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SWQpIHtcbiAgICByZW5kZXJQcm9qZWN0VGFicyhwcm9qZWN0cyk7XG4gICAgcmVuZGVyVGFza3MocHJvamVjdHNbY3VycmVudFByb2plY3RJZF0pO1xuICAgIHRvZ2dsZVByb2plY3RUYWIoY3VycmVudFByb2plY3RJZCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsZWFyQ2hpbGROb2RlcyxcbiAgICBjaGVja0V4aXN0aW5nTW9kYWwsXG4gICAgcG9wVXBFZGl0UHJvamVjdE1vZGFsLFxuICAgIHBvcFVwUHJvamVjdE1vZGFsLFxuICAgIHBvcFVwVGFza01vZGFsLFxuICAgIHBvcFVwRWRpdFRhc2tNb2RhbCxcbiAgICBleGl0TW9kYWwsXG4gICAgcmVuZGVyUHJvamVjdFRhYnMsXG4gICAgcmVuZGVyVGFza3MsXG4gICAgdG9nZ2xlUHJvamVjdFRhYixcbiAgICByZW5kZXJcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheUNvbnRyb2xsZXI7IiwiaW1wb3J0ICcuL3N0eWxlL3N0eWxlLmNzcyc7XG5pbXBvcnQgVGFza01hbmFnZXIgZnJvbSAnLi90YXNrUHJvY2Vzc29yJztcbmltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3RQcm9jZXNzb3InO1xuaW1wb3J0IERpc3BsYXlDb250cm9sbGVyIGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXInO1xuaW1wb3J0IExvY2FsU3RvcmFnZUhhbmRsZXIgZnJvbSAnLi9sb2NhbFN0b3JhZ2VIYW5kbGVyJztcblxuY29uc3QgRE9NSGFuZGxlciA9IChmdW5jdGlvbigpIHtcbiAgbGV0IG15UHJvamVjdHMgPSBQcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpO1xuXG4gIGxldCBjdXJyZW50UHJvamVjdElkID0gMDtcbiAgbGV0IHByb2plY3RJZEJlaW5nRWRpdGVkID0gbnVsbDtcbiAgbGV0IHRhc2tJZEJlaW5nRWRpdGVkID0gbnVsbDtcblxuICBjb25zdCB0cmlnZ2VyQWRkUHJvamVjdEJ0biA9IGZ1bmN0aW9uICgpIHtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5wb3BVcFByb2plY3RNb2RhbCgpO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlckRlbFByb2plY3RCdG4gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgY29uc3QgcHJvamVjdElkID0gZ2V0SWRPZih0YXJnZXQsICdkYXRhLXByb2plY3QtaW5kZXgnKTtcbiAgICBpZihwcm9qZWN0SWQgPT0gY3VycmVudFByb2plY3RJZCkgY3VycmVudFByb2plY3RJZCA9IDA7XG4gICAgUHJvamVjdE1hbmFnZXIucmVtb3ZlUHJvamVjdChwcm9qZWN0SWQpO1xuICAgIExvY2FsU3RvcmFnZUhhbmRsZXIuc2F2ZVByb2plY3RzKG15UHJvamVjdHMpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLnJlbmRlcihteVByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJFeGl0QnRuID0gZnVuY3Rpb24gKCkge1xuICAgIERpc3BsYXlDb250cm9sbGVyLmV4aXRNb2RhbCgpO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlclNhdmVQcm9qZWN0QnRuID0gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGZvcm0ucG5hbWUudmFsdWU7XG5cbiAgICBEaXNwbGF5Q29udHJvbGxlci5leGl0TW9kYWwoKTtcbiAgICBQcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KFByb2plY3RNYW5hZ2VyLmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgICBMb2NhbFN0b3JhZ2VIYW5kbGVyLnNhdmVQcm9qZWN0cyhteVByb2plY3RzKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5yZW5kZXIobXlQcm9qZWN0cywgY3VycmVudFByb2plY3RJZCk7XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyRWRpdFByb2plY3RCdG4gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgcHJvamVjdElkQmVpbmdFZGl0ZWQgPSBnZXRJZE9mKHRhcmdldCwgJ2RhdGEtcHJvamVjdC1pbmRleCcpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLnBvcFVwRWRpdFByb2plY3RNb2RhbChteVByb2plY3RzW3Byb2plY3RJZEJlaW5nRWRpdGVkXS5uYW1lKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJDaGFuZ2VOYW1lQnRuID0gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGZvcm0ucG5hbWUudmFsdWU7XG5cbiAgICBQcm9qZWN0TWFuYWdlci5lZGl0UHJvamVjdE5hbWUocHJvamVjdElkQmVpbmdFZGl0ZWQsIHByb2plY3ROYW1lKTtcbiAgICBMb2NhbFN0b3JhZ2VIYW5kbGVyLnNhdmVQcm9qZWN0cyhteVByb2plY3RzKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5leGl0TW9kYWwoKTtcbiAgICBEaXNwbGF5Q29udHJvbGxlci5yZW5kZXIobXlQcm9qZWN0cywgY3VycmVudFByb2plY3RJZCk7XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyU2VsZWN0ZWRQcm9qZWN0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGN1cnJlbnRQcm9qZWN0SWQgPSBnZXRJZE9mKHRhcmdldCwgJ2RhdGEtcHJvamVjdC1pbmRleCcpO1xuXG4gICAgRGlzcGxheUNvbnRyb2xsZXIucmVuZGVyVGFza3MobXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdElkXSk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIudG9nZ2xlUHJvamVjdFRhYihjdXJyZW50UHJvamVjdElkKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJBZGRUYXNrQnRuID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKCFteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWRdKSByZXR1cm47XG5cbiAgICBEaXNwbGF5Q29udHJvbGxlci5wb3BVcFRhc2tNb2RhbCgpO1xuICB9XG5cbiAgY29uc3QgdHJpZ2dlclNhdmVUYXNrQnRuID0gZnVuY3Rpb24gKGZvcm0pIHtcbiAgICBjb25zdCB0YXNrSW5mbyA9IHtcbiAgICAgIHRpdGxlOiBmb3JtLnRpdGxlLnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IGZvcm0uZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICBkdWVEYXRlOiBmb3JtLmRhdGUudmFsdWUsXG4gICAgICBwcmlvcml0eTogZm9ybS5wcmlvcml0eS52YWx1ZSxcbiAgICAgIGZpbmlzaGVkU3RhdHVzOiBmb3JtLnN0YXR1cy52YWx1ZSA9PSAnWUVTJyA/IHRydWUgOiBmYWxzZVxuICAgIH1cblxuICAgIGxldCBuZXdUYXNrID0gVGFza01hbmFnZXIuY3JlYXRlVGFzayh0YXNrSW5mbyk7XG5cbiAgICBQcm9qZWN0TWFuYWdlci5hZGRUYXNrKGN1cnJlbnRQcm9qZWN0SWQsIG5ld1Rhc2spO1xuICAgIExvY2FsU3RvcmFnZUhhbmRsZXIuc2F2ZVByb2plY3RzKG15UHJvamVjdHMpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLmV4aXRNb2RhbCgpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLnJlbmRlcihteVByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJGaW5pc2hlZFN0YXR1c0J0biA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBjb25zdCB0YXNrSWQgPSBnZXRJZE9mKHRhcmdldCwgJ2RhdGEtdGFzay1pbmRleCcpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdElkXTtcblxuICAgIGNvbnN0IGNoZWNrU3RhdHVzID0gdGFyZ2V0LmNoZWNrZWQ7XG4gICAgVGFza01hbmFnZXIudG9nZ2xlU3RhdHVzKGN1cnJlbnRQcm9qZWN0LnRhc2tzW3Rhc2tJZF0sIGNoZWNrU3RhdHVzKTtcbiAgICBMb2NhbFN0b3JhZ2VIYW5kbGVyLnNhdmVQcm9qZWN0cyhteVByb2plY3RzKTtcblxuICAgIERpc3BsYXlDb250cm9sbGVyLnJlbmRlcihteVByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJFeHBhbmRUYXNrQnRuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRhc2tJZEJlaW5nRWRpdGVkID0gZ2V0SWRPZih0YXJnZXQsICdkYXRhLXRhc2staW5kZXgnKTtcblxuICAgIGNvbnN0IHRhc2sgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZEJlaW5nRWRpdGVkXTtcblxuICAgIERpc3BsYXlDb250cm9sbGVyLnBvcFVwRWRpdFRhc2tNb2RhbCh0YXNrKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJDaGFuZ2VUYXNrQnRuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGNvbnN0IHRhc2tJbmZvID0ge1xuICAgICAgdGl0bGU6IHRhcmdldC50aXRsZS52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0YXJnZXQuZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICBkdWVEYXRlOiB0YXJnZXQuZGF0ZS52YWx1ZSxcbiAgICAgIHByaW9yaXR5OiB0YXJnZXQucHJpb3JpdHkudmFsdWUsXG4gICAgICBmaW5pc2hlZFN0YXR1czogdGFyZ2V0LnN0YXR1cy52YWx1ZSA9PT0gJ1lFUycgPyB0cnVlIDogZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgdGFzayA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJZF0udGFza3NbdGFza0lkQmVpbmdFZGl0ZWRdO1xuXG4gICAgVGFza01hbmFnZXIuZWRpdFRhc2sodGFzaywgdGFza0luZm8pO1xuICAgIExvY2FsU3RvcmFnZUhhbmRsZXIuc2F2ZVByb2plY3RzKG15UHJvamVjdHMpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLmV4aXRNb2RhbCgpO1xuICAgIERpc3BsYXlDb250cm9sbGVyLnJlbmRlcihteVByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKTtcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJEZWxUYXNrQnRuID0gZnVuY3Rpb24gKCkge1xuICAgIFByb2plY3RNYW5hZ2VyLnJlbW92ZVRhc2soY3VycmVudFByb2plY3RJZCwgdGFza0lkQmVpbmdFZGl0ZWQpO1xuICAgIExvY2FsU3RvcmFnZUhhbmRsZXIuc2F2ZVByb2plY3RzKG15UHJvamVjdHMpO1xuXG4gICAgRGlzcGxheUNvbnRyb2xsZXIuZXhpdE1vZGFsKCk7XG4gICAgRGlzcGxheUNvbnRyb2xsZXIucmVuZGVyKG15UHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SWQpO1xuICB9XG5cbiAgY29uc3QgZ2V0SWRPZiA9IGZ1bmN0aW9uIChjdXJyLCBhdHRyTmFtZSkge1xuICAgIHdoaWxlKCFjdXJyLmhhc0F0dHJpYnV0ZShhdHRyTmFtZSkpIGN1cnIgPSBjdXJyLnBhcmVudE5vZGU7XG5cbiAgICByZXR1cm4gY3Vyci5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICB9XG5cbiAgY29uc3QgbGlzdGVuRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldENsYXNzbGlzdCA9IGUudGFyZ2V0LmNsYXNzTGlzdDtcbiAgICAgIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnZGVsZXRlLXByb2plY3QtYnRuJykpIHRyaWdnZXJEZWxQcm9qZWN0QnRuKGUudGFyZ2V0KTtcblxuICAgICAgZWxzZSBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ2VkaXQtcHJvamVjdCcpKSB0cmlnZ2VyRWRpdFByb2plY3RCdG4oZS50YXJnZXQpO1xuXG4gICAgICBlbHNlIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnZXhpdC1idG4nKSkgdHJpZ2dlckV4aXRCdG4oKTtcblxuICAgICAgZWxzZSBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ3Byb2plY3QtbmFtZScpKSB0cmlnZ2VyU2VsZWN0ZWRQcm9qZWN0KGUudGFyZ2V0KTtcblxuICAgICAgZWxzZSBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ2ZpbmlzaGVkLXN0YXR1cycpKSB0cmlnZ2VyRmluaXNoZWRTdGF0dXNCdG4oZS50YXJnZXQpO1xuXG4gICAgICBlbHNlIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnZXhwYW5kLWJ0bicpKSB0cmlnZ2VyRXhwYW5kVGFza0J0bihlLnRhcmdldCk7XG5cbiAgICAgIGVsc2UgaWYodGFyZ2V0Q2xhc3NsaXN0LmNvbnRhaW5zKCdkZWxldGUtdGFzaycpKSB0cmlnZ2VyRGVsVGFza0J0bihlLnRhcmdldCk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0YXJnZXRDbGFzc2xpc3QgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XG5cbiAgICAgIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnYWRkLXByb2plY3QtbW9kYWwnKSkgdHJpZ2dlclNhdmVQcm9qZWN0QnRuKGUudGFyZ2V0KTtcblxuICAgICAgZWxzZSBpZih0YXJnZXRDbGFzc2xpc3QuY29udGFpbnMoJ2VkaXQtcHJvamVjdC1tb2RhbCcpKSB0cmlnZ2VyQ2hhbmdlTmFtZUJ0bihlLnRhcmdldCk7XG5cbiAgICAgIGVsc2UgaWYodGFyZ2V0Q2xhc3NsaXN0LmNvbnRhaW5zKCdhZGQtdGFzay1tb2RhbCcpKSB0cmlnZ2VyU2F2ZVRhc2tCdG4oZS50YXJnZXQpO1xuXG4gICAgICBlbHNlIGlmKHRhcmdldENsYXNzbGlzdC5jb250YWlucygnZWRpdC10YXNrLW1vZGFsJykpIHRyaWdnZXJDaGFuZ2VUYXNrQnRuKGUudGFyZ2V0KTtcbiAgICB9KTtcblxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0cmlnZ2VyQWRkUHJvamVjdEJ0bik7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRyaWdnZXJBZGRUYXNrQnRuKTtcbiAgfVxuXG4gIGNvbnN0IGluaXQgPSBmdW5jdGlvbiBpbml0QXBwKCkge1xuICAgIERpc3BsYXlDb250cm9sbGVyLnJlbmRlcihteVByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKTtcbiAgICBsaXN0ZW5FdmVudHMoKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NSGFuZGxlcjsiLCJpbXBvcnQgRGVsZXRlSWNvbiBmcm9tICcuLi9hc3NldHMvcmVjeWNsZS1iaW4ucG5nJztcbmltcG9ydCBFeHBhbmRJY29uIGZyb20gJy4uL2Fzc2V0cy9leHBhbmQtaWNvbi5zdmcnXG5cbmNvbnN0IGVsZW1lbnRzTW9kZWxzID0ge1xuICBwcm9qZWN0VGFiTW9kZWwobmFtZSwgcHJvamVjdElkKSB7XG4gICAgY29uc3QgcHJvamVjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YWInKTtcbiAgICBwcm9qZWN0VGFiLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LWluZGV4JywgcHJvamVjdElkKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0Jyk7XG4gICAgZWRpdFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnRWRpdCBOYW1lJztcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nLCAnZGVsZXRlLXByb2plY3QtYnRuJyk7XG5cbiAgICBjb25zdCBiaW5JY29uID0gbmV3IEltYWdlKCk7XG4gICAgYmluSWNvbi5jbGFzc0xpc3QuYWRkKCdzdmctaWNvbnMnKTtcbiAgICBiaW5JY29uLnNyYyA9IERlbGV0ZUljb247XG5cbiAgICBkZWxldGVQcm9qZWN0QnRuLmFwcGVuZENoaWxkKGJpbkljb24pO1xuXG4gICAgcHJvamVjdFRhYi5hcHBlbmQocHJvamVjdE5hbWUsIGVkaXRQcm9qZWN0QnRuLCBkZWxldGVQcm9qZWN0QnRuKTtcblxuICAgIHJldHVybiBwcm9qZWN0VGFiO1xuICB9LFxuXG4gIHRhc2tNb2RlbCh0YXNrLCB0YXNrSWQpIHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICB0YXNrRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pbmRleCcsIHRhc2tJZCk7XG4gICAgXG4gICAgY29uc3QgZmluaXNoZWRTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGZpbmlzaGVkU3RhdHVzLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGZpbmlzaGVkU3RhdHVzLmNoZWNrZWQgPSB0YXNrLmZpbmlzaGVkU3RhdHVzO1xuICAgIGZpbmlzaGVkU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkLXN0YXR1cycpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0YXNrLmZpbmlzaGVkU3RhdHVzID8gdGl0bGUuY2xhc3NMaXN0LmFkZCgnc3RyaWtldGhyb3VnaCcpIDogdGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RyaWtldGhyb3VnaCcpO1xuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScsIHRhc2sucHJpb3JpdHkpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblxuICAgIGNvbnN0IGV4cGFuZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBleHBhbmRJY29uLnNyYyA9IEV4cGFuZEljb247XG4gICAgZXhwYW5kSWNvbi5jbGFzc0xpc3QuYWRkKCdzdmctaWNvbnMnLCAnZXhwYW5kLWljb24nKTtcblxuICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtYnRuJyk7XG4gICAgZXhwYW5kQnV0dG9uLmFwcGVuZENoaWxkKGV4cGFuZEljb24pO1xuXG4gICAgdGFza0VsZW1lbnQuYXBwZW5kKGZpbmlzaGVkU3RhdHVzLCB0aXRsZSwgcHJpb3JpdHksIGR1ZURhdGUsIGV4cGFuZEJ1dHRvbik7XG5cbiAgICByZXR1cm4gdGFza0VsZW1lbnQ7XG4gIH0sXG4gIFxuICBhZGRQcm9qZWN0TW9kYWwoKSB7XG4gICAgY29uc3QgcHJvamVjdE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2plY3RNb2RhbC5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XG4gICAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2FkZC1wcm9qZWN0LW1vZGFsJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0TW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0TW9kYWxIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9ICdFbnRlciBQcm9qZWN0IE5hbWUnO1xuXG4gICAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnZXhpdC1idG4nKTtcbiAgICBleGl0QnRuLmlubmVySFRNTCA9ICcmdGltZXM7JztcblxuICAgIHByb2plY3RNb2RhbEhlYWRlci5hcHBlbmQoaGVhZGVyVGV4dCwgZXhpdEJ0bik7XG5cbiAgICBjb25zdCBpbnB1dFBhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJ3Byb2plY3QgbmFtZS4uLic7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lLWlucHV0Jyk7XG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGlucHV0Lm5hbWUgPSAncG5hbWUnXG5cbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2F2ZUJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdzYXZlJywgJ3NhdmUtcHJvamVjdCcpO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG5cbiAgICBpbnB1dFBhcnQuYXBwZW5kKGlucHV0LCBzYXZlQnRuKTtcblxuICAgIHByb2plY3RNb2RhbC5hcHBlbmQocHJvamVjdE1vZGFsSGVhZGVyLCBpbnB1dFBhcnQpO1xuXG4gICAgcmV0dXJuIHByb2plY3RNb2RhbDtcbiAgfSxcblxuICBlZGl0UHJvamVjdE1vZGFsKGlucHV0VGV4dCkge1xuICAgIGNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0TW9kYWwuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xuICAgIHByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdlZGl0LXByb2plY3QtbW9kYWwnKTtcblxuICAgIGNvbnN0IHByb2plY3RNb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RNb2RhbEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkZXInKTtcblxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCBOYW1lJztcblxuICAgIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBleGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2V4aXQtYnRuJyk7XG4gICAgZXhpdEJ0bi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XG5cbiAgICBwcm9qZWN0TW9kYWxIZWFkZXIuYXBwZW5kKGhlYWRlclRleHQsIGV4aXRCdG4pO1xuXG4gICAgY29uc3QgaW5wdXRQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dC52YWx1ZSA9IGlucHV0VGV4dDtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUtaW5wdXQnKTtcbiAgICBpbnB1dC5uYW1lID0gJ3BuYW1lJztcbiAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2F2ZUJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdzYXZlJywgJ2VkaXQtbmFtZScpO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSBDaGFuZ2VzJztcblxuICAgIGlucHV0UGFydC5hcHBlbmQoaW5wdXQsIHNhdmVCdG4pO1xuXG4gICAgcHJvamVjdE1vZGFsLmFwcGVuZChwcm9qZWN0TW9kYWxIZWFkZXIsIGlucHV0UGFydCk7XG5cbiAgICByZXR1cm4gcHJvamVjdE1vZGFsO1xuICB9LFxuXG4gIGFkZFRhc2tNb2RhbCgpIHtcbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdGFza01vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2FkZC10YXNrLW1vZGFsJyk7XG4gICAgXG4gICAgLy8gaGVhZGVyXG4gICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbEhlYWRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1oZWFkZXInKVxuXG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuXG4gICAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnZXhpdC1idG4nKTtcbiAgICBleGl0QnRuLmlubmVySFRNTCA9ICcmdGltZXM7JztcblxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZChoZWFkZXJUZXh0LCBleGl0QnRuKTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcik7XG5cbiAgICAvLyBUSVRMRVxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAndGl0bGUnO1xuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xuXG4gICAgLy8gREVTQ1JJUFRJT05cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jb2xzID0gJzgnO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbidcbiAgICBkZXNjcmlwdGlvbklucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICAvLyBEdWUgRGF0ZVxuXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKTtcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcblxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0LmlkID0gJ2R1ZS1kYXRlJztcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkYXRlJztcbiAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZChkdWVEYXRlTGFiZWwsIGR1ZURhdGVJbnB1dCk7XG5cbiAgICAvLyBQcmlvcml0eVxuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcblxuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTsgLy8gU2VsZWN0IEVsZW1lbnRcbiAgICBwcmlvcml0eUlucHV0LmlkID0gJ3ByaW9yaXR5JztcbiAgICBwcmlvcml0eUlucHV0Lm5hbWUgPSAncHJpb3JpdHknO1xuXG4gICAgY29uc3QgbG93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbG93T3B0aW9uLnZhbHVlID0gJ0xPVyc7XG4gICAgbG93T3B0aW9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgbG93T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IG1lZE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1lZE9wdGlvbi52YWx1ZSA9ICdNRUQnO1xuICAgIG1lZE9wdGlvbi50ZXh0Q29udGVudCA9ICdNZWQnO1xuXG4gICAgY29uc3QgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGhpZ2hPcHRpb24udmFsdWUgPSAnSElHSCc7XG4gICAgaGlnaE9wdGlvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kKGxvd09wdGlvbiwgbWVkT3B0aW9uLCBoaWdoT3B0aW9uKTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlJbnB1dClcblxuICAgIC8vIGZpbmlzaGVkU3RhdHVzXG5cbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgc3RhdHVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZmluaXNoZWQtc3RhdHVzJyk7XG4gICAgc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSAnRmluaXNoZWQ/OidcblxuICAgIGNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc3RhdHVzSW5wdXQuaWQgPSAnZmluaXNoZWQtc3RhdHVzJztcbiAgICBzdGF0dXNJbnB1dC5uYW1lID0gJ3N0YXR1cyc7XG5cbiAgICBjb25zdCBub09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG5vT3B0aW9uLnZhbHVlID0gJ05PJztcbiAgICBub09wdGlvbi50ZXh0Q29udGVudCA9ICdObyc7XG4gICAgbm9PcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgeWVzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgeWVzT3B0aW9uLnZhbHVlID0gJ1lFUyc7XG4gICAgeWVzT3B0aW9uLnRleHRDb250ZW50ID0gJ1llcyc7XG5cbiAgICBzdGF0dXNJbnB1dC5hcHBlbmQobm9PcHRpb24sIHllc09wdGlvbik7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kKHN0YXR1c0xhYmVsLCBzdGF0dXNJbnB1dCk7XG5cbiAgICAvLyBTYXZlIEJ1dHRvblxuICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlQnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzYXZlQnRuLmNsYXNzTGlzdC5hZGQoJ3NhdmUnLCAnc2F2ZS10YXNrJyk7XG4gICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdTYXZlJztcblxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChzYXZlQnRuKTtcblxuICAgIHJldHVybiB0YXNrTW9kYWw7XG4gIH0sXG5cbiAgZWRpdFRhc2tNb2RhbCh0YXNrKSB7XG4gICAgY29uc3QgdGFza01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdlZGl0LXRhc2stbW9kYWwnKTtcbiAgICBcbiAgICAvLyBoZWFkZXJcbiAgICBjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWhlYWRlcicpXG5cbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuXG4gICAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnZXhpdC1idG4nKTtcbiAgICBleGl0QnRuLmlubmVySFRNTCA9ICcmdGltZXM7JztcblxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZChoZWFkZXJUZXh0LCBleGl0QnRuKTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcik7XG5cbiAgICAvLyBUSVRMRVxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICB0YXNrTW9kYWwuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xuXG4gICAgLy8gREVTQ1JJUFRJT05cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5jb2xzID0gJzgnO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbidcbiAgICBkZXNjcmlwdGlvbklucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICAvLyBEdWUgRGF0ZVxuXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlLWRhdGUnKTtcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcblxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdkdWUtZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQoZHVlRGF0ZUxhYmVsLCBkdWVEYXRlSW5wdXQpO1xuXG4gICAgLy8gUHJpb3JpdHlcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG5cbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7IC8vIFNlbGVjdCBFbGVtZW50XG4gICAgcHJpb3JpdHlJbnB1dC5pZCA9ICdwcmlvcml0eSc7XG4gICAgcHJpb3JpdHlJbnB1dC5uYW1lID0gJ3ByaW9yaXR5JztcblxuICAgIGNvbnN0IGxvd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGxvd09wdGlvbi52YWx1ZSA9ICdMT1cnO1xuICAgIGxvd09wdGlvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgY29uc3QgbWVkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbWVkT3B0aW9uLnZhbHVlID0gJ01FRCc7XG4gICAgbWVkT3B0aW9uLnRleHRDb250ZW50ID0gJ01lZCc7XG5cbiAgICBjb25zdCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaGlnaE9wdGlvbi52YWx1ZSA9ICdISUdIJztcbiAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgc3dpdGNoICh0YXNrLnByaW9yaXR5KSB7XG4gICAgICBjYXNlIGxvd09wdGlvbi52YWx1ZTpcbiAgICAgICAgbG93T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgbWVkT3B0aW9uLnZhbHVlOlxuICAgICAgICBtZWRPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgXG4gICAgICBjYXNlIGhpZ2hPcHRpb24udmFsdWU6XG4gICAgICAgIGhpZ2hPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kKGxvd09wdGlvbiwgbWVkT3B0aW9uLCBoaWdoT3B0aW9uKTtcblxuICAgIHRhc2tNb2RhbC5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlJbnB1dClcblxuICAgIC8vIGZpbmlzaGVkU3RhdHVzXG5cbiAgICBjb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgc3RhdHVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZmluaXNoZWQtc3RhdHVzJyk7XG4gICAgc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSAnRmluaXNoZWQ/OidcblxuICAgIGNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc3RhdHVzSW5wdXQuaWQgPSAnZmluaXNoZWQtc3RhdHVzJztcbiAgICBzdGF0dXNJbnB1dC5uYW1lID0gJ3N0YXR1cyc7XG5cbiAgICBjb25zdCBub09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG5vT3B0aW9uLnZhbHVlID0gJ05PJztcbiAgICBub09wdGlvbi50ZXh0Q29udGVudCA9ICdObyc7XG5cbiAgICBjb25zdCB5ZXNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICB5ZXNPcHRpb24udmFsdWUgPSAnWUVTJztcbiAgICB5ZXNPcHRpb24udGV4dENvbnRlbnQgPSAnWWVzJztcblxuICAgIHRhc2suZmluaXNoZWRTdGF0dXMgPyB5ZXNPcHRpb24uc2VsZWN0ZWQgPSB0cnVlIDogbm9PcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgc3RhdHVzSW5wdXQuYXBwZW5kKG5vT3B0aW9uLCB5ZXNPcHRpb24pO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZChzdGF0dXNMYWJlbCwgc3RhdHVzSW5wdXQpO1xuXG4gICAgLy8gU2F2ZSBCdXR0b25cbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2F2ZUJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdzYXZlJywgJ3NhdmUtdGFzaycpO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG5cbiAgICAvLyBEZWxldGUgQnV0dG9uXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnc2F2ZScsICdkZWxldGUtdGFzaycpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuXG4gICAgLy8gQnV0dG9ucyBDb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcicpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChzYXZlQnRuLCBkZWxldGVCdG4pO1xuXG4gICAgdGFza01vZGFsLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gdGFza01vZGFsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRzTW9kZWxzOyIsImNvbnN0IExvY2FsU3RvcmFnZUhhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBzYXZlUHJvamVjdHMgPSBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIH1cblxuICBjb25zdCBsb2FkUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdHMnKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNhdmVQcm9qZWN0cyxcbiAgICBsb2FkUHJvamVjdHNcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxTdG9yYWdlSGFuZGxlcjsiLCJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IExvY2FsU3RvcmFnZUhhbmRsZXIgZnJvbSBcIi4vbG9jYWxTdG9yYWdlSGFuZGxlclwiO1xuXG5jb25zdCBQcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbigpIHtcbiAgbGV0IG15UHJvamVjdHMgPSBMb2NhbFN0b3JhZ2VIYW5kbGVyLmxvYWRQcm9qZWN0cygpIHx8IFtdO1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gZnVuY3Rpb24gZ2V0TXlQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gbXlQcm9qZWN0cztcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBuZXcgUHJvamVjdChuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGFkZFByb2plY3QgPSBmdW5jdGlvbiBhZGRQcm9qZWN0VG9NeVByb2plY3RzKHByb2plY3QpIHtcbiAgICBteVByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH1cblxuICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSBmdW5jdGlvbiAocHJvamVjdElkLCBuYW1lKSB7XG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SWRdLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uIChwcm9qZWN0SWQsIHRhc2spIHtcbiAgICBteVByb2plY3RzW3Byb2plY3RJZF0udGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSBmdW5jdGlvbiAocHJvamVjdElkLCB0YXNrSWQpIHtcbiAgICBteVByb2plY3RzW3Byb2plY3RJZF0udGFza3Muc3BsaWNlKHRhc2tJZCwgMSk7XG4gIH1cblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3RJZCkge1xuICAgIG15UHJvamVjdHMuc3BsaWNlKHByb2plY3RJZCwgMSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICBlZGl0UHJvamVjdE5hbWUsXG4gICAgYWRkVGFzayxcbiAgICByZW1vdmVUYXNrLFxuICAgIHJlbW92ZVByb2plY3RcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdE1hbmFnZXI7IiwiY2xhc3MgVGFzayB7XG5cbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZmluaXNoZWRTdGF0dXMpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZmluaXNoZWRTdGF0dXMgPSBmaW5pc2hlZFN0YXR1cztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgVGFza01hbmFnZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSBmdW5jdGlvbiAodGFza0luZm8pIHtcbiAgICBsZXQge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGZpbmlzaGVkU3RhdHVzfSA9IHRhc2tJbmZvO1xuICAgIHJldHVybiBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBmaW5pc2hlZFN0YXR1cyk7XG4gIH1cblxuICBjb25zdCBlZGl0VGFzayA9IGZ1bmN0aW9uIGVkaXRUYXNrRnJvbUdpdmVuSW5mbyh0YXNrLCBuZXdJbmZvKSB7XG4gICAgbGV0IHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBmaW5pc2hlZFN0YXR1c30gPSBuZXdJbmZvO1xuXG4gICAgdGFzay50aXRsZSA9IHRpdGxlO1xuICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0YXNrLmZpbmlzaGVkU3RhdHVzID0gZmluaXNoZWRTdGF0dXM7XG4gIH1cblxuICBjb25zdCB0b2dnbGVTdGF0dXMgPSBmdW5jdGlvbiB0b2dnbGVGaW5pc2hlZFN0YXR1cyh0YXNrLCBzdGF0dXMpIHtcbiAgICB0YXNrLmZpbmlzaGVkU3RhdHVzID0gc3RhdHVzO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUYXNrLFxuICAgIGVkaXRUYXNrLFxuICAgIHRvZ2dsZVN0YXR1c1xuICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrTWFuYWdlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBET01IYW5kbGVyIGZyb20gXCIuL2RvbUhhbmRsZXJcIjtcblxuRE9NSGFuZGxlci5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9