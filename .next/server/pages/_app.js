/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/ThemeContext.tsx":
/*!***********************************!*\
  !*** ./contexts/ThemeContext.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeContext: () => (/* binding */ ThemeContext),\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeProvider = ({ children })=>{\n    const [isLightTheme, setIsLightTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    const setTheme = (s)=>{\n        setIsLightTheme(s);\n    };\n    const getTheme = ()=>{\n        return isLightTheme;\n    };\n    // Provide the theme state and toggle function to the children\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            getTheme,\n            setTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/patriktao/Documents/patriktao.github.io/contexts/ThemeContext.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    getTheme: ()=>\"light\",\n    setTheme: ()=>{}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9UaGVtZUNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0U7QUFXM0QsTUFBTUcsZ0JBQThDLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3RFLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFtQjtJQUVuRSxNQUFNSyxXQUFXLENBQUNDO1FBQ2hCRixnQkFBZ0JFO0lBQ2xCO0lBRUEsTUFBTUMsV0FBVztRQUNmLE9BQU9KO0lBQ1Q7SUFFQSw4REFBOEQ7SUFDOUQscUJBQ0UsOERBQUNLLGFBQWFDLFFBQVE7UUFBQ0MsT0FBTztZQUFFSDtZQUFVRjtRQUFTO2tCQUNoREg7Ozs7OztBQUdQLEVBQUU7QUFFSyxNQUFNTSw2QkFBZVQsb0RBQWFBLENBQW9CO0lBQzNEUSxVQUFVLElBQU07SUFDaEJGLFVBQVUsS0FBTztBQUNuQixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4vY29udGV4dHMvVGhlbWVDb250ZXh0LnRzeD85MjU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBUaGVtZVByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5pbnRlcmZhY2UgVGhlbWVDb250ZXh0UHJvcHMge1xuICBnZXRUaGVtZTogKCkgPT4gXCJsaWdodFwiIHwgXCJkYXJrXCI7XG4gIHNldFRoZW1lOiAodmFsdWU6IFwibGlnaHRcIiB8IFwiZGFya1wiKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlcjogUmVhY3QuRkM8VGhlbWVQcm92aWRlclByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2lzTGlnaHRUaGVtZSwgc2V0SXNMaWdodFRoZW1lXSA9IHVzZVN0YXRlPFwibGlnaHRcIiB8IFwiZGFya1wiPihcImxpZ2h0XCIpO1xuXG4gIGNvbnN0IHNldFRoZW1lID0gKHM6IFwibGlnaHRcIiB8IFwiZGFya1wiKSA9PiB7XG4gICAgc2V0SXNMaWdodFRoZW1lKHMpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRoZW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBpc0xpZ2h0VGhlbWU7XG4gIH07XG5cbiAgLy8gUHJvdmlkZSB0aGUgdGhlbWUgc3RhdGUgYW5kIHRvZ2dsZSBmdW5jdGlvbiB0byB0aGUgY2hpbGRyZW5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGdldFRoZW1lLCBzZXRUaGVtZSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFRoZW1lQ29udGV4dFByb3BzPih7XG4gIGdldFRoZW1lOiAoKSA9PiBcImxpZ2h0XCIsXG4gIHNldFRoZW1lOiAoKSA9PiB7fSxcbn0pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwiaXNMaWdodFRoZW1lIiwic2V0SXNMaWdodFRoZW1lIiwic2V0VGhlbWUiLCJzIiwiZ2V0VGhlbWUiLCJUaGVtZUNvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/ThemeContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/component.css */ \"./styles/component.css\");\n/* harmony import */ var _styles_component_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_component_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MacBook_MacBook_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MacBook/MacBook.css */ \"./components/MacBook/MacBook.css\");\n/* harmony import */ var _components_MacBook_MacBook_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_MacBook_MacBook_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/ThemeContext */ \"./contexts/ThemeContext.tsx\");\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/patriktao/Documents/patriktao.github.io/pages/_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/patriktao/Documents/patriktao.github.io/pages/_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNFO0FBQ1c7QUFFYTtBQUV6QyxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDSCxpRUFBYUE7a0JBQ1osNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCJAL3N0eWxlcy9jb21wb25lbnQuY3NzXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL01hY0Jvb2svTWFjQm9vay5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0cy9UaGVtZUNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVGhlbWVQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./components/MacBook/MacBook.css":
/*!****************************************!*\
  !*** ./components/MacBook/MacBook.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/component.css":
/*!******************************!*\
  !*** ./styles/component.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();