"use strict";
exports.id = 6233;
exports.ids = [6233];
exports.modules = {

/***/ 6233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1194);

const customCheckboxRadioSwitch = {
    checkRoot: {
        padding: "14px",
        "&:hover": {
            backgroundColor: "unset !important"
        }
    },
    radioRoot: {
        padding: "16px",
        "&:hover": {
            backgroundColor: "unset !important"
        }
    },
    labelRoot: {
        marginLeft: "-14px"
    },
    checkboxAndRadio: {
        position: "relative",
        display: "block",
        marginTop: "10px",
        marginBottom: "10px"
    },
    checkboxAndRadioHorizontal: {
        position: "relative",
        display: "block",
        "&:first-child": {
            marginTop: "10px"
        },
        "&:not(:first-child)": {
            marginTop: "-14px"
        },
        marginTop: "0",
        marginBottom: "0"
    },
    checked: {
        color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .primaryColor[0] */ .lr[0] + "!important"
    },
    checkedIcon: {
        width: "20px",
        height: "20px",
        border: "1px solid rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", 0.84)",
        borderRadius: "3px"
    },
    uncheckedIcon: {
        width: "0px",
        height: "0px",
        padding: "9px",
        border: "1px solid rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", .54)",
        borderRadius: "3px"
    },
    disabledCheckboxAndRadio: {
        "& $checkedIcon,& $uncheckedIcon,& $radioChecked,& $radioUnchecked": {
            borderColor: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT,
            opacity: "0.26",
            color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT
        }
    },
    label: {
        cursor: "pointer",
        paddingLeft: "0",
        color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .grayColor[12] */ .X_[12],
        fontSize: "14px",
        lineHeight: "1.428571429",
        fontWeight: "400",
        display: "inline-flex",
        transition: "0.3s ease all",
        letterSpacing: "unset"
    },
    labelHorizontal: {
        color: "rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", 0.26)",
        cursor: "pointer",
        display: "inline-flex",
        fontSize: "14px",
        lineHeight: "1.428571429",
        fontWeight: "400",
        paddingTop: "39px",
        marginRight: "0",
        "@media (min-width: 992px)": {
            float: "right"
        }
    },
    labelHorizontalRadioCheckbox: {
        paddingTop: "22px"
    },
    labelLeftHorizontal: {
        color: "rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", 0.26)",
        cursor: "pointer",
        display: "inline-flex",
        fontSize: "14px",
        lineHeight: "1.428571429",
        fontWeight: "400",
        paddingTop: "22px",
        marginRight: "0"
    },
    labelError: {
        color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .dangerColor[0] */ .E7[0]
    },
    radio: {
        color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .primaryColor[0] */ .lr[0] + "!important"
    },
    radioChecked: {
        width: "16px",
        height: "16px",
        border: "1px solid " + _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .primaryColor[0] */ .lr[0],
        borderRadius: "50%"
    },
    radioUnchecked: {
        width: "0px",
        height: "0px",
        padding: "7px",
        border: "1px solid rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", .54)",
        borderRadius: "50%"
    },
    inlineChecks: {
        marginTop: "8px"
    },
    iconCheckbox: {
        height: "116px",
        width: "116px",
        color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .grayColor[0] */ .X_[0],
        "& > span:first-child": {
            borderWidth: "4px",
            borderStyle: "solid",
            borderColor: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .grayColor[17] */ .X_[17],
            textAlign: "center",
            verticalAlign: "middle",
            borderRadius: "50%",
            color: "inherit",
            margin: "0 auto 20px",
            transition: "all 0.2s"
        },
        "&:hover": {
            color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .roseColor[0] */ .An[0],
            "& > span:first-child": {
                borderColor: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .roseColor[0] */ .An[0]
            }
        }
    },
    iconCheckboxChecked: {
        color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .roseColor[0] */ .An[0],
        "& > span:first-child": {
            borderColor: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .roseColor[0] */ .An[0]
        }
    },
    iconCheckboxIcon: {
        fontSize: "40px",
        lineHeight: "111px"
    },
    switchBase: {
        color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .primaryColor[0] */ .lr[0] + "!important"
    },
    switchIcon: {
        boxShadow: "0 1px 3px 1px rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", 0.4)",
        color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .whiteColor */ .zQ + "  !important",
        border: "1px solid rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", .54)"
    },
    switchIconChecked: {
        borderColor: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .primaryColor[0] */ .lr[0],
        transform: "translateX(0px)!important"
    },
    switchBar: {
        width: "30px",
        height: "15px",
        backgroundColor: "rgb(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .grayColor[24] */ .X_[24]) + ")",
        borderRadius: "15px",
        opacity: "0.7!important"
    },
    switchChecked: {
        "& + $switchBar": {
            backgroundColor: "rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .primaryColor[0] */ .lr[0]) + ", 1) !important"
        },
        "& $switchIcon": {
            borderColor: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .primaryColor[0] */ .lr[0]
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customCheckboxRadioSwitch);


/***/ })

};
;