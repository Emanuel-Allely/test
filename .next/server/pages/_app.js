"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 6326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
;// CONCATENATED MODULE: external "@material-ui/core/CircularProgress"
const CircularProgress_namespaceObject = require("@material-ui/core/CircularProgress");
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_namespaceObject);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./components/PageChange/PageChange.js


// @material-ui/core components


// core components

const useStyles = (0,styles_.makeStyles)({
    progress: {
        color: nextjs_material_kit_pro/* infoColor.0 */.bE[0],
        width: "6rem !important",
        height: "6rem !important"
    },
    wrapperDiv: {
        margin: "100px auto",
        padding: "0px",
        maxWidth: "360px",
        textAlign: "center",
        position: "relative",
        zIndex: "9999",
        top: "0"
    },
    iconWrapper: {
        display: "block"
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    }
});
function PageChange(props) {
    const classes = useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.wrapperDiv,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.iconWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                        className: classes.progress
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                    className: classes.title,
                    children: [
                        "Loading page contents for: ",
                        props.path
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/_app.js
/*!

=========================================================
* NextJS Material Kit PRO v1.2.1 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/ct-nextjs-material-kit-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/ 









router_default().events.on("routeChangeStart", (url)=>{
    console.log(`Loading: ${url}`);
    document.body.classList.add("body-page-transition");
    external_react_dom_default().render(/*#__PURE__*/ jsx_runtime_.jsx(PageChange, {
        path: url
    }), document.getElementById("page-transition"));
});
router_default().events.on("routeChangeComplete", ()=>{
    external_react_dom_default().unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
router_default().events.on("routeChangeError", ()=>{
    external_react_dom_default().unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
class MyApp extends app["default"] {
    componentDidMount() {
        let comment = document.createComment(`

=========================================================
* NextJS Material Kit PRO v1.2.1 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
        document.insertBefore(comment, document.documentElement);
    }
    static async getInitialProps({ Component , router , ctx  }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return {
            pageProps
        };
    }
    render() {
        const { Component , pageProps  } = this.props;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            src: "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "NextJS Material Kit by Creative Tim"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        });
    }
};


/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [1270,7544,1194], () => (__webpack_exec__(6326)));
module.exports = __webpack_exports__;

})();