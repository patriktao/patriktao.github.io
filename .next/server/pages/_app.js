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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeContext: () => (/* binding */ ThemeContext),\n/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeProvider = ({ children })=>{\n    const [isLightTheme, setIsLightTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    const setTheme = (s)=>{\n        setIsLightTheme(s);\n    };\n    const getTheme = ()=>{\n        return isLightTheme;\n    };\n    // Provide the theme state and toggle function to the children\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            getTheme,\n            setTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\patri\\\\Documents\\\\GitHub\\\\patriktao.github.io\\\\contexts\\\\ThemeContext.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    getTheme: ()=>\"light\",\n    setTheme: ()=>{}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9UaGVtZUNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0U7QUFXM0QsTUFBTUcsZ0JBQThDLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3RFLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFtQjtJQUVuRSxNQUFNSyxXQUFXLENBQUNDO1FBQ2hCRixnQkFBZ0JFO0lBQ2xCO0lBRUEsTUFBTUMsV0FBVztRQUNmLE9BQU9KO0lBQ1Q7SUFFQSw4REFBOEQ7SUFDOUQscUJBQ0UsOERBQUNLLGFBQWFDLFFBQVE7UUFBQ0MsT0FBTztZQUFFSDtZQUFVRjtRQUFTO2tCQUNoREg7Ozs7OztBQUdQLEVBQUU7QUFFSyxNQUFNTSw2QkFBZVQsb0RBQWFBLENBQW9CO0lBQzNEUSxVQUFVLElBQU07SUFDaEJGLFVBQVUsS0FBTztBQUNuQixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcG9ydGZvbGlvLy4vY29udGV4dHMvVGhlbWVDb250ZXh0LnRzeD85MjU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgVGhlbWVQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVGhlbWVDb250ZXh0UHJvcHMge1xyXG4gIGdldFRoZW1lOiAoKSA9PiBcImxpZ2h0XCIgfCBcImRhcmtcIjtcclxuICBzZXRUaGVtZTogKHZhbHVlOiBcImxpZ2h0XCIgfCBcImRhcmtcIikgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRoZW1lUHJvdmlkZXI6IFJlYWN0LkZDPFRoZW1lUHJvdmlkZXJQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTGlnaHRUaGVtZSwgc2V0SXNMaWdodFRoZW1lXSA9IHVzZVN0YXRlPFwibGlnaHRcIiB8IFwiZGFya1wiPihcImxpZ2h0XCIpO1xyXG5cclxuICBjb25zdCBzZXRUaGVtZSA9IChzOiBcImxpZ2h0XCIgfCBcImRhcmtcIikgPT4ge1xyXG4gICAgc2V0SXNMaWdodFRoZW1lKHMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRoZW1lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGlzTGlnaHRUaGVtZTtcclxuICB9O1xyXG5cclxuICAvLyBQcm92aWRlIHRoZSB0aGVtZSBzdGF0ZSBhbmQgdG9nZ2xlIGZ1bmN0aW9uIHRvIHRoZSBjaGlsZHJlblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGdldFRoZW1lLCBzZXRUaGVtZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFRoZW1lQ29udGV4dFByb3BzPih7XHJcbiAgZ2V0VGhlbWU6ICgpID0+IFwibGlnaHRcIixcclxuICBzZXRUaGVtZTogKCkgPT4ge30sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc0xpZ2h0VGhlbWUiLCJzZXRJc0xpZ2h0VGhlbWUiLCJzZXRUaGVtZSIsInMiLCJnZXRUaGVtZSIsIlRoZW1lQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/ThemeContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/component.css */ \"./styles/component.css\");\n/* harmony import */ var _styles_component_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_component_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MacBook_MacBook_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MacBook/MacBook.css */ \"./components/MacBook/MacBook.css\");\n/* harmony import */ var _components_MacBook_MacBook_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_MacBook_MacBook_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/ThemeContext */ \"./contexts/ThemeContext.tsx\");\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\patri\\\\Documents\\\\GitHub\\\\patriktao.github.io\\\\pages\\\\_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\patri\\\\Documents\\\\GitHub\\\\patriktao.github.io\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNFO0FBQ1c7QUFFYTtBQUV6QyxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDSCxpRUFBYUE7a0JBQ1osNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wb3J0Zm9saW8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcIkAvc3R5bGVzL2NvbXBvbmVudC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9NYWNCb29rL01hY0Jvb2suY3NzXCI7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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