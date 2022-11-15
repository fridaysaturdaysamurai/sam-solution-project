/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _assets_img_corona_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/corona.jpg */ \"./src/assets/img/corona.jpg\");\n/* harmony import */ var _assets_img_garage_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/garage.jpg */ \"./src/assets/img/garage.jpg\");\n/* harmony import */ var _assets_img_grolls_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/grolls.png */ \"./src/assets/img/grolls.png\");\n/* harmony import */ var _assets_img_guinnes_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/guinnes.jpg */ \"./src/assets/img/guinnes.jpg\");\n/* harmony import */ var _assets_img_obolon_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/obolon.jpg */ \"./src/assets/img/obolon.jpg\");\n/* harmony import */ var _assets_img_paulaner_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/img/paulaner.jpg */ \"./src/assets/img/paulaner.jpg\");\n\n\n\n\n\n\n\nvar ul = document.querySelector('.price-list');\nvar items = [{\n  id: 1,\n  imgSrc: _assets_img_corona_jpg__WEBPACK_IMPORTED_MODULE_1__,\n  alt: \"corona\",\n  title: 'Corona Extra',\n  cl: 0.33,\n  price: 3,\n  counter: 1\n}, {\n  id: 2,\n  imgSrc: _assets_img_garage_jpg__WEBPACK_IMPORTED_MODULE_2__,\n  alt: \"garage\",\n  title: 'Garage',\n  cl: 0.5,\n  price: 1,\n  counter: 1\n}, {\n  id: 3,\n  imgSrc: _assets_img_grolls_png__WEBPACK_IMPORTED_MODULE_3__,\n  alt: \"grolls\",\n  title: 'Grolls',\n  cl: 0.35,\n  price: 3,\n  counter: 1\n}, {\n  id: 4,\n  imgSrc: _assets_img_guinnes_jpg__WEBPACK_IMPORTED_MODULE_4__,\n  alt: \"guinnes\",\n  title: 'Guinnes',\n  cl: 0.5,\n  price: 5,\n  counter: 1\n}, {\n  id: 5,\n  imgSrc: _assets_img_obolon_jpg__WEBPACK_IMPORTED_MODULE_5__,\n  alt: \"obolon\",\n  title: 'Obolon',\n  cl: 0.5,\n  price: 2,\n  counter: 1\n}, {\n  id: 6,\n  imgSrc: _assets_img_paulaner_jpg__WEBPACK_IMPORTED_MODULE_6__,\n  alt: \"Paulaner\",\n  title: 'Paulaner',\n  cl: 0.5,\n  price: 4,\n  counter: 1\n}];\nwindow.addEventListener('DOMContentLoaded', function () {\n  var lol = items.map(function (i) {\n    return getCardTemplate(i);\n  }).join('');\n  ul.insertAdjacentHTML('beforeend', lol);\n});\nfunction getCardTemplate(obj) {\n  return \"\\n    <li class=\\\"item\\\" data-id=\\\"\".concat(obj.id, \"\\\">\\n        <img src=\\\"\").concat(obj.imgSrc, \"\\\" alt=\\\"\").concat(obj.alt, \"\\\" class=\\\"item-img\\\">\\n        <h2 class=\\\"item-name\\\">\").concat(obj.title, \"</h2>\\n        <p class=\\\"cl\\\">\").concat(obj.cl, \"cl</p>\\n        <div class=\\\"details\\\">\\n            <div class=\\\"price\\\">\").concat(obj.price, \"$</div>\\n        </div>\\n        <button data-cart>\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u0432 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443</button>\\n    </li>\\n            \");\n}\nfunction calculateResault() {\n  var result = 0;\n  basketItems.forEach(function (item) {\n    result += item.price * item.counter;\n  });\n  document.getElementById('result').innerHTML = \"\\u0418\\u0442\\u043E\\u0433\\u043E: \".concat(result, \"$\");\n}\nfunction renderBasket() {\n  cartWrapper.innerHTML = \"\";\n  function basketItemHTML(basketItem) {\n    return \"\\n            <div class=\\\"basket-item\\\">\\n            <div class=\\\"top-content\\\">\\n                <h2 class=\\\"item-name\\\">\".concat(basketItem.title, \"</h2>\\n                <p class=\\\"cl\\\">\").concat(basketItem.cl, \"</p>\\n            </div>\\n            <div class=\\\"bottom-content\\\">\\n                <div class=\\\"price\\\">\\u0426\\u0435\\u043D\\u0430: \").concat(basketItem.price, \" $</div>\\n                <div class=\\\"counter-wrapper\\\">\\n                    <div class=\\\"counter-control\\\" data-action=\\\"minus\\\" data-item-id=\\\"\").concat(basketItem.id, \"\\\">-</div>\\n                    <div class=\\\"counter-current\\\" data-counter>\").concat(basketItem.counter, \"</div>\\n                    <div class=\\\"counter-control\\\" data-action=\\\"plus\\\" data-item-id=\\\"\").concat(basketItem.id, \"\\\">+</div>\\n                </div>\\n                <button class=\\\"delete-product\\\" data-action=\\\"delete\\\" data-item-id=\\\"\").concat(basketItem.id, \"\\\">\\u0423\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C \\u0442\\u043E\\u0432\\u0430\\u0440</button>\\n            </div>\\n        </div>\\n            \");\n  }\n  var lolo = basketItems.map(function (i) {\n    return basketItemHTML(i);\n  }).join(\"\");\n  cartWrapper.insertAdjacentHTML(\"beforeend\", lolo);\n  calculateResault();\n}\nwindow.addEventListener('click', function (event) {\n  var counter;\n  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {\n    var counterWrapper = event.target.closest('.counter-wrapper');\n    counter = counterWrapper.querySelector('[data-counter]');\n  }\n  if (event.target.dataset.action === 'plus') {\n    var elementoPlus = basketItems.find(function (item) {\n      return event.target.dataset.itemId == item.id;\n    });\n    elementoPlus.counter = elementoPlus.counter + 1;\n    renderBasket();\n  }\n  if (event.target.dataset.action === 'minus') {\n    var _elementoPlus = basketItems.find(function (item) {\n      return event.target.dataset.itemId == item.id;\n    });\n    _elementoPlus.counter = _elementoPlus.counter - 1;\n    if (_elementoPlus.counter < 1) {\n      basketItems = basketItems.filter(function (item) {\n        return item.id != event.target.dataset.itemId;\n      });\n      renderBasket();\n    }\n    renderBasket();\n  }\n  if (event.target.dataset.action === 'delete') {\n    basketItems = basketItems.filter(function (item) {\n      return item.id != event.target.dataset.itemId;\n    });\n    basketItems.counter = 0;\n    renderBasket();\n  }\n});\nvar cartWrapper = document.querySelector('.cart-wrapper');\nvar basket = document.querySelector('.basket');\nvar basketItems = [];\nul.addEventListener('click', function (event) {\n  if (event.target.hasAttribute('data-cart')) {\n    var id = event.target.parentElement.getAttribute(\"data-id\");\n    var foundEl = items.find(function (i) {\n      return +id === i.id;\n    });\n    var existingBacketItem = basketItems.find(function (item) {\n      return foundEl.id === item.id;\n    });\n    if (existingBacketItem) {\n      // todo: increase counter\n    } else {\n      basketItems.push(foundEl);\n    }\n    var _cartWrapper = document.querySelector(\".cart-wrapper\");\n  }\n  renderBasket();\n});\nvar clearBasket = document.querySelector('.clear-basket').addEventListener('click', function () {\n  basketItems = [];\n  renderBasket();\n});\nvar checkout = document.querySelector('.buy-beer').addEventListener('click', function () {\n  if (basketItems.length > 0) {\n    alert('thank you for the purchase');\n  }\n  basketItems = [];\n  renderBasket();\n});\n\n//# sourceURL=webpack://sam-task/./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sam-task/./src/index.scss?");

/***/ }),

/***/ "./src/assets/img/corona.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/corona.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/corona.jpg\";\n\n//# sourceURL=webpack://sam-task/./src/assets/img/corona.jpg?");

/***/ }),

/***/ "./src/assets/img/garage.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/garage.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/garage.jpg\";\n\n//# sourceURL=webpack://sam-task/./src/assets/img/garage.jpg?");

/***/ }),

/***/ "./src/assets/img/grolls.png":
/*!***********************************!*\
  !*** ./src/assets/img/grolls.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/grolls.png\";\n\n//# sourceURL=webpack://sam-task/./src/assets/img/grolls.png?");

/***/ }),

/***/ "./src/assets/img/guinnes.jpg":
/*!************************************!*\
  !*** ./src/assets/img/guinnes.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/guinnes.jpg\";\n\n//# sourceURL=webpack://sam-task/./src/assets/img/guinnes.jpg?");

/***/ }),

/***/ "./src/assets/img/obolon.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/obolon.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/obolon.jpg\";\n\n//# sourceURL=webpack://sam-task/./src/assets/img/obolon.jpg?");

/***/ }),

/***/ "./src/assets/img/paulaner.jpg":
/*!*************************************!*\
  !*** ./src/assets/img/paulaner.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/img/paulaner.jpg\";\n\n//# sourceURL=webpack://sam-task/./src/assets/img/paulaner.jpg?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;