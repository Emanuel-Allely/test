"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 4256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
;// CONCATENATED MODULE: external "@material-ui/styles"
const styles_namespaceObject = require("@material-ui/styles");
;// CONCATENATED MODULE: ./pages/_document.js




class MyDocument extends next_document["default"] {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            charSet: "utf-8"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "theme-color",
                            content: "#000000"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "shortcut icon",
                            href: "/img/favicon.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "76x76",
                            href: "/img/apple-icon.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            href: "https://use.fontawesome.com/releases/v5.0.10/css/all.css",
                            rel: "stylesheet"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "page-transition"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                    ]
                })
            ]
        });
    }
}
MyDocument.getInitialProps = async (ctx)=>{
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new styles_namespaceObject.ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>(props)=>sheets.collect(/*#__PURE__*/ jsx_runtime_.jsx(App, {
                        ...props
                    }))
        });
    const initialProps = await next_document["default"].getInitialProps(ctx);
    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                children: [
                    initialProps.styles,
                    sheets.getStyleElement()
                ]
            }, "styles"), 
        ]
    };
};
/* harmony default export */ const _document = (MyDocument);


/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,6859], () => (__webpack_exec__(4256)));
module.exports = __webpack_exports__;

})();