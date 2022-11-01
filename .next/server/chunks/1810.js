"use strict";
exports.id = 1810;
exports.ids = [1810];
exports.modules = {

/***/ 1810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1194);

const errorPageStyles = (theme)=>({
        contentCenter: {
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: "3",
            transform: "translate(-50%,-50%)",
            textAlign: "center",
            color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .whiteColor */ .zQ,
            padding: "0 15px",
            width: "100%",
            maxWidth: "880px"
        },
        title: {
            [theme.breakpoints.down("sm")]: {
                fontSize: "5.7em"
            },
            ..._styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .title */ .TN,
            fontSize: "13.7em",
            color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .whiteColor */ .zQ,
            letterSpacing: "14px !important",
            fontWeight: "700"
        },
        subTitle: {
            fontSize: "2.25rem",
            marginTop: "0",
            marginBottom: "8px"
        },
        description: {
            fontSize: "1.125rem",
            marginTop: "0",
            marginBottom: "8px"
        },
        pageHeader: {
            minHeight: "100vh",
            height: "auto",
            display: "inherit",
            position: "relative",
            margin: "0",
            padding: "0",
            border: "0",
            alignItems: "center",
            "&:before": {
                background: "rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", 0.5)"
            },
            "&:before,&:after": {
                position: "absolute",
                zIndex: "1",
                width: "100%",
                height: "100%",
                display: "block",
                left: "0",
                top: "0",
                content: '""'
            }
        },
        block: {
            color: "inherit",
            padding: "0.9375rem",
            fontWeight: "500",
            fontSize: "12px",
            textTransform: "uppercase",
            borderRadius: "3px",
            textDecoration: "none",
            position: "relative",
            display: "block"
        },
        inlineBlock: {
            display: "inline-block",
            padding: "0px",
            width: "auto"
        },
        list: {
            marginBottom: "0",
            padding: "0",
            marginTop: "0"
        },
        left: {
            float: "left!important",
            display: "block",
            "&,& *,& *:hover,& *:focus": {
                color: "inherit !important"
            }
        },
        right: {
            padding: "15px 0",
            margin: "0",
            float: "right",
            "&,& *,& *:hover,& *:focus": {
                color: "inherit !important"
            }
        },
        icon: {
            width: "18px",
            height: "18px",
            top: "3px",
            position: "relative"
        }
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errorPageStyles);


/***/ })

};
;