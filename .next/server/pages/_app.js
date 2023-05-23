"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/global */ "./src/styles/global.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/maletta/projects/js/ui-design-figma-school-college/src/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: "Prova FIAP / Front-End"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:wght@100;300;400;500;700&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(styles_global__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0%;
    font-size: 12px;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('/fonts/gotham/gotham-htf-ultra.woff2') format('woff2'),
      url('/fonts/gotham/gotham-htf-ultra.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('/fonts/gotham/gotham-htf-black.woff2') format('woff2'),
      url('/fonts/gotham/gotham-htf-black.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('/fonts/gotham/gotham-htf-bold.woff2') format('woff2'),
      url('/fonts/gotham/gotham-htf-bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('/fonts/gotham/gotham-htf-medium.woff2') format('woff2'),
      url('/fonts/gotham/gotham-htf-medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('/fonts/gotham/gotham-htf-book.woff2') format('woff2'),
      url('/fonts/gotham/gotham-htf-book.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('/fonts/gotham/gotham-htf-light.woff2') format('woff2'),
      url('/fonts/gotham/gotham-htf-light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham HTF';
    src: url('/fonts/gotham/gotham-htf-thin.woff2') format('woff2'),
      url('/fonts/gotham/gotham-htf-thin.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }

  :root{
    --black: #000;
    --gray: #202121;
    --light-gray: #8A959B;
    --dark-gray: #0B0C0D;
    --pink: #F80D5A;
    --white: #FFF;
  }

`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBOzs7O0FBRUEsTUFBTUUsR0FBRyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQUQsS0FBd0M7QUFDbEQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsd0lBRFA7QUFFRSxXQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFTRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQSxrQkFERjtBQWFELENBZEQ7O0FBZ0JBLGlFQUFlRixHQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUEsTUFBTUQsWUFBWSxHQUFHSSxnRUFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakZBO0FBbUZBLGlFQUFlSixZQUFmOzs7Ozs7Ozs7O0FDckZBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3ZhLWZpYXAvLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vcHJvdmEtZmlhcC8uL3NyYy9zdHlsZXMvZ2xvYmFsLnRzIiwid2VicGFjazovL3Byb3ZhLWZpYXAvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9wcm92YS1maWFwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcHJvdmEtZmlhcC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJ3N0eWxlcy9nbG9iYWwnO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlByb3ZhIEZJQVAgLyBGcm9udC1FbmQ8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBUK1NhbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIGh0bWwsIGJvZHksICNfX25leHQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICB9XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdHb3RoYW0gSFRGJztcbiAgICBzcmM6IHVybCgnL2ZvbnRzL2dvdGhhbS9nb3RoYW0taHRmLXVsdHJhLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcvZm9udHMvZ290aGFtL2dvdGhhbS1odGYtdWx0cmEud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdHb3RoYW0gSFRGJztcbiAgICBzcmM6IHVybCgnL2ZvbnRzL2dvdGhhbS9nb3RoYW0taHRmLWJsYWNrLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcvZm9udHMvZ290aGFtL2dvdGhhbS1odGYtYmxhY2sud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdHb3RoYW0gSFRGJztcbiAgICBzcmM6IHVybCgnL2ZvbnRzL2dvdGhhbS9nb3RoYW0taHRmLWJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy9mb250cy9nb3RoYW0vZ290aGFtLWh0Zi1ib2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnR290aGFtIEhURic7XG4gICAgc3JjOiB1cmwoJy9mb250cy9nb3RoYW0vZ290aGFtLWh0Zi1tZWRpdW0ud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy9mb250cy9nb3RoYW0vZ290aGFtLWh0Zi1tZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdHb3RoYW0gSFRGJztcbiAgICBzcmM6IHVybCgnL2ZvbnRzL2dvdGhhbS9nb3RoYW0taHRmLWJvb2sud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICB1cmwoJy9mb250cy9nb3RoYW0vZ290aGFtLWh0Zi1ib29rLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnR290aGFtIEhURic7XG4gICAgc3JjOiB1cmwoJy9mb250cy9nb3RoYW0vZ290aGFtLWh0Zi1saWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgIHVybCgnL2ZvbnRzL2dvdGhhbS9nb3RoYW0taHRmLWxpZ2h0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnR290aGFtIEhURic7XG4gICAgc3JjOiB1cmwoJy9mb250cy9nb3RoYW0vZ290aGFtLWh0Zi10aGluLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgdXJsKCcvZm9udHMvZ290aGFtL2dvdGhhbS1odGYtdGhpbi53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cblxuICA6cm9vdHtcbiAgICAtLWJsYWNrOiAjMDAwO1xuICAgIC0tZ3JheTogIzIwMjEyMTtcbiAgICAtLWxpZ2h0LWdyYXk6ICM4QTk1OUI7XG4gICAgLS1kYXJrLWdyYXk6ICMwQjBDMEQ7XG4gICAgLS1waW5rOiAjRjgwRDVBO1xuICAgIC0td2hpdGU6ICNGRkY7XG4gIH1cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwibmFtZXMiOlsiSGVhZCIsIkdsb2JhbFN0eWxlcyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==