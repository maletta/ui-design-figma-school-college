"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
;// CONCATENATED MODULE: ./src/styles/global.ts

const GlobalStyles = external_styled_components_.createGlobalStyle`
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
/* harmony default export */ const global = (GlobalStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Prova FIAP / Front-End"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:wght@100;300;400;500;700&display=swap",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(global, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
};

/* harmony default export */ const _app = (App);

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(862));
module.exports = __webpack_exports__;

})();