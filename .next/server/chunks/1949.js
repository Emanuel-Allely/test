"use strict";
exports.id = 1949;
exports.ids = [1949];
exports.modules = {

/***/ 3278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Muted)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_jss_nextjs_material_kit_pro_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5124);


// nodejs library to set properties for components

// @material-ui/core components

// core components

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(_styles_jss_nextjs_material_kit_pro_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
function Muted(props) {
    const { children  } = props;
    const classes = useStyles();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.mutedText,
        children: children
    });
};
Muted.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
};


/***/ }),

/***/ 6156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1194);

const teamsSection = {
    container: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .container */ .nC,
    title: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .title */ .TN,
    mlAuto: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .mlAuto */ .hU,
    mrAuto: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .mrAuto */ .kq,
    cardTitle: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .cardTitle */ .X5,
    coloredShadow: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .coloredShadow */ .DF,
    description: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .description */ .WL,
    descriptionWhite: {
        ..._styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .description */ .WL
    },
    textCenter: {
        textAlign: "center"
    },
    team: {
        padding: "80px 0",
        "& h5$description,& h5$descriptionWhite": {
            marginBottom: "80px"
        }
    },
    section: {
        ..._styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .sectionDark */ .Yw,
        ..._styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .section */ .qi,
        position: "relative",
        "& $title": {
            color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .whiteColor */ .zQ
        },
        "& $descriptionWhite": {
            color: "rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .whiteColor */ .zQ) + ", 0.76)"
        },
        "& $container": {
            zIndex: "2",
            position: "relative"
        },
        "&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''",
            backgroundColor: "rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", 0.7)"
        }
    },
    justifyContent: {
        WebkitBoxPack: "center !important",
        MsFlexPack: "center !important",
        justifyContent: "center !important"
    },
    cardCategory: {
        marginTop: "10px"
    },
    btn: {
        marginTop: "0 !important"
    },
    card3: {
        textAlign: "left"
    },
    card5: {
        textAlign: "left",
        "& $cardTitle": {
            color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .whiteColor */ .zQ
        },
        "& $description": {
            color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .whiteColor */ .zQ
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (teamsSection);


/***/ })

};
;