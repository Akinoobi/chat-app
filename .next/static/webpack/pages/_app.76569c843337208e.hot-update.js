"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/lib/db/firebase.js":
/*!********************************!*\
  !*** ./src/lib/db/firebase.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appAuth: function() { return /* binding */ appAuth; },\n/* harmony export */   firebaseAppDB: function() { return /* binding */ firebaseAppDB; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n// Import the functions you need from the SDKs you need\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nvar firebaseConfig = {\n    apiKey: \"AIzaSyCaLUy0IyD2d8BcHMIQh7wgMMHjPMwkTVg\",\n    authDomain: \"chat-app-9d461.firebaseapp.com\",\n    projectId: \"chat-app-9d461\",\n    storageBucket: \"chat-app-9d461.appspot.com\",\n    messagingSenderId: \"759965119030\",\n    appId: \"1:759965119030:web:f05b828d7f63092fb99e97\",\n    measurementId: \"G-Z0NRL2V9MW\"\n};\n// Initialize Firebase\nvar app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nvar firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)() : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nvar firebaseAppDB = getFirestore(firebaseApp);\nvar appAuth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(firebaseApp);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2RiL2ZpcmViYXNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDRDtBQUNkO0FBQ3hDLDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsd0NBQXdDO0FBQ3hDLG1FQUFtRTtBQUNuRSxJQUFNRyxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0lBQ1BDLGVBQWU7QUFDakI7QUFFQSxzQkFBc0I7QUFDdEIsSUFBTUMsTUFBTVYsMkRBQWFBLENBQUNFO0FBRTFCLElBQU1TLGNBQWNaLHFEQUFPQSxHQUFHYSxNQUFNLEdBQUdiLHFEQUFPQSxLQUFLQywyREFBYUEsQ0FBQ0U7QUFDakUsSUFBTVcsZ0JBQWdCQyxhQUFhSDtBQUNuQyxJQUFNSSxVQUFVZCxzREFBT0EsQ0FBQ1U7QUFDUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL2RiL2ZpcmViYXNlLmpzP2IwYTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgZ2V0QXBwcywgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuLy8gVE9ETzogQWRkIFNES3MgZm9yIEZpcmViYXNlIHByb2R1Y3RzIHRoYXQgeW91IHdhbnQgdG8gdXNlXG4vLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYXZhaWxhYmxlLWxpYnJhcmllc1xuXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUNhTFV5MEl5RDJkOEJjSE1JUWg3d2dNTUhqUE13a1RWZ1wiLFxuICBhdXRoRG9tYWluOiBcImNoYXQtYXBwLTlkNDYxLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwiY2hhdC1hcHAtOWQ0NjFcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJjaGF0LWFwcC05ZDQ2MS5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI3NTk5NjUxMTkwMzBcIixcbiAgYXBwSWQ6IFwiMTo3NTk5NjUxMTkwMzA6d2ViOmYwNWI4MjhkN2Y2MzA5MmZiOTllOTdcIixcbiAgbWVhc3VyZW1lbnRJZDogXCJHLVowTlJMMlY5TVdcIlxufTtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbmNvbnN0IGZpcmViYXNlQXBwID0gZ2V0QXBwcygpLmxlbmd0aCA/IGdldEFwcHMoKSA6IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuY29uc3QgZmlyZWJhc2VBcHBEQiA9IGdldEZpcmVzdG9yZShmaXJlYmFzZUFwcCk7XG5jb25zdCBhcHBBdXRoID0gZ2V0QXV0aChmaXJlYmFzZUFwcCk7XG5leHBvcnQgeyBmaXJlYmFzZUFwcERCLCBhcHBBdXRoIH0iXSwibmFtZXMiOlsiZ2V0QXBwcyIsImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiZmlyZWJhc2VBcHAiLCJsZW5ndGgiLCJmaXJlYmFzZUFwcERCIiwiZ2V0RmlyZXN0b3JlIiwiYXBwQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/db/firebase.js\n"));

/***/ })

});