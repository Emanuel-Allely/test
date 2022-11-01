"use strict";
(() => {
var exports = {};
exports.id = 7505;
exports.ids = [7505];
exports.modules = {

/***/ 8395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Clearfix)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);


// mterial-ui components

const styles = {
    clearfix: {
        "&:after,&:before": {
            display: "table",
            content: '" "'
        },
        "&:after": {
            clear: "both"
        }
    }
};
const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(styles);
function Clearfix() {
    const classes = useStyles();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classes.clearfix
    });
};


/***/ }),

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

/***/ 5491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Components)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(5031);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(6256);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__(9899);
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);
// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__(9247);
// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__(6103);
// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__(6680);
// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__(1003);
// EXTERNAL MODULE: ./components/Header/HeaderLinks.js
var HeaderLinks = __webpack_require__(5017);
// EXTERNAL MODULE: external "nouislider"
var external_nouislider_ = __webpack_require__(761);
var external_nouislider_default = /*#__PURE__*/__webpack_require__.n(external_nouislider_);
;// CONCATENATED MODULE: external "react-tagsinput"
const external_react_tagsinput_namespaceObject = require("react-tagsinput");
var external_react_tagsinput_default = /*#__PURE__*/__webpack_require__.n(external_react_tagsinput_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__(2944);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__(6320);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);
// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__(5811);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__(8350);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);
;// CONCATENATED MODULE: external "@material-ui/core/Radio"
const Radio_namespaceObject = require("@material-ui/core/Radio");
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/Switch"
const Switch_namespaceObject = require("@material-ui/core/Switch");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__(4614);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(8250);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__(8190);
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);
// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__(6403);
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);
// EXTERNAL MODULE: external "@material-ui/icons/People"
var People_ = __webpack_require__(1075);
var People_default = /*#__PURE__*/__webpack_require__.n(People_);
// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__(9309);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);
;// CONCATENATED MODULE: external "@material-ui/icons/FiberManualRecord"
const FiberManualRecord_namespaceObject = require("@material-ui/icons/FiberManualRecord");
var FiberManualRecord_default = /*#__PURE__*/__webpack_require__.n(FiberManualRecord_namespaceObject);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(6302);
// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__(7817);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: external "@material-ui/core/LinearProgress"
const LinearProgress_namespaceObject = require("@material-ui/core/LinearProgress");
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_namespaceObject);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/customLinearProgressStyle.js

const customLinearProgressStyle = {
    root: {
        height: "4px",
        marginBottom: "20px",
        overflow: "hidden"
    },
    bar: {
        height: "4px"
    },
    primary: {
        backgroundColor: nextjs_material_kit_pro/* primaryColor.0 */.lr[0]
    },
    warning: {
        backgroundColor: nextjs_material_kit_pro/* warningColor.0 */.MA[0]
    },
    danger: {
        backgroundColor: nextjs_material_kit_pro/* dangerColor.0 */.E7[0]
    },
    success: {
        backgroundColor: nextjs_material_kit_pro/* successColor.0 */.nq[0]
    },
    info: {
        backgroundColor: nextjs_material_kit_pro/* infoColor.0 */.bE[0]
    },
    rose: {
        backgroundColor: nextjs_material_kit_pro/* roseColor.0 */.An[0]
    },
    gray: {
        backgroundColor: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    },
    primaryBackground: {
        background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* primaryColor.0 */.lr[0]) + ", 0.2)"
    },
    warningBackground: {
        background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* warningColor.0 */.MA[0]) + ", 0.2)"
    },
    dangerBackground: {
        background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dangerColor.0 */.E7[0]) + ", 0.2)"
    },
    successBackground: {
        background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* successColor.0 */.nq[0]) + ", 0.2)"
    },
    infoBackground: {
        background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* infoColor.0 */.bE[0]) + ", 0.2)"
    },
    roseBackground: {
        background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* roseColor.0 */.An[0]) + ", 0.2)"
    },
    grayBackground: {
        background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.6 */.X_[6]) + ", 0.2)"
    }
};
/* harmony default export */ const components_customLinearProgressStyle = (customLinearProgressStyle);

;// CONCATENATED MODULE: ./components/CustomLinearProgress/CustomLinearProgress.js


// nodejs library to set properties for components

// @material-ui/core components



const useStyles = (0,styles_.makeStyles)(components_customLinearProgressStyle);
function CustomLinearProgress(props) {
    const { color , ...rest } = props;
    const classes = useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx((LinearProgress_default()), {
        ...rest,
        classes: {
            root: classes.root + " " + classes[color + "Background"],
            bar: classes.bar + " " + classes[color]
        }
    });
};
CustomLinearProgress.defaultProps = {
    color: "gray"
};
CustomLinearProgress.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ])
};

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(2610);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/paginationStyle.js

const paginationStyle = {
    pagination: {
        display: "flex",
        paddingLeft: "0",
        listStyle: "none",
        borderRadius: "0.25rem"
    },
    paginationItem: {
        display: "inline"
    },
    paginationLink: {
        ":first-of-type": {
            marginleft: "0"
        },
        letterSpacing: "unset",
        border: "0",
        borderRadius: "30px !important",
        transition: "all .3s",
        padding: "0px 11px",
        margin: "0 3px",
        minWidth: "30px",
        height: "30px",
        minHeight: "auto",
        lineHeight: "30px",
        fontWeight: "400",
        fontSize: "12px",
        textTransform: "uppercase",
        background: "transparent",
        position: "relative",
        float: "left",
        textDecoration: "none",
        boxSizing: "border-box",
        "&,&:hover,&:focus": {
            color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
        },
        "&:hover,&:focus": {
            zIndex: "3",
            backgroundColor: nextjs_material_kit_pro/* grayColor.2 */.X_[2],
            borderColor: nextjs_material_kit_pro/* grayColor.6 */.X_[6]
        },
        "&:hover": {
            cursor: "pointer"
        }
    },
    primary: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* primaryColor.0 */.lr[0],
            borderColor: nextjs_material_kit_pro/* primaryColor.0 */.lr[0],
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 4px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* primaryColor.0 */.lr[0]) + ", 0.14), 0 1px 10px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* primaryColor.0 */.lr[0]) + ", 0.12), 0 2px 4px -1px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* primaryColor.0 */.lr[0]) + ", 0.2)"
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    info: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* infoColor.0 */.bE[0],
            borderColor: nextjs_material_kit_pro/* infoColor.0 */.bE[0],
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 4px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* infoColor.0 */.bE[0]) + ", 0.14), 0 1px 10px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* infoColor.0 */.bE[0]) + ", 0.12), 0 2px 4px -1px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* infoColor.0 */.bE[0]) + ", 0.2)"
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    success: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* successColor.0 */.nq[0],
            borderColor: nextjs_material_kit_pro/* successColor.0 */.nq[0],
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 4px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* successColor.0 */.nq[0]) + ", 0.14), 0 1px 10px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* successColor.0 */.nq[0]) + ", 0.12), 0 2px 4px -1px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* successColor.0 */.nq[0]) + ", 0.2)"
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    warning: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* warningColor.0 */.MA[0],
            borderColor: nextjs_material_kit_pro/* warningColor.0 */.MA[0],
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 4px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* warningColor.0 */.MA[0]) + ", 0.14), 0 1px 10px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* warningColor.0 */.MA[0]) + ", 0.12), 0 2px 4px -1px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* warningColor.0 */.MA[0]) + ", 0.2)"
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    danger: {
        "&,&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* dangerColor.0 */.E7[0],
            borderColor: nextjs_material_kit_pro/* dangerColor.0 */.E7[0],
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 4px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dangerColor.0 */.E7[0]) + ", 0.14), 0 1px 10px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dangerColor.0 */.E7[0]) + ", 0.12), 0 2px 4px -1px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dangerColor.0 */.E7[0]) + ", 0.2)"
        },
        "&:hover,&:focus": {
            zIndex: "2",
            cursor: "default"
        }
    },
    disabled: {
        "&,&:hover,&:focus": {
            color: nextjs_material_kit_pro/* grayColor.10 */.X_[10],
            cursor: "not-allowed",
            backgroundColor: nextjs_material_kit_pro/* whiteColor */.zQ,
            borderColor: nextjs_material_kit_pro/* grayColor.6 */.X_[6]
        }
    }
};
/* harmony default export */ const components_paginationStyle = (paginationStyle);

;// CONCATENATED MODULE: ./components/Pagination/Pagination.js


// nodejs library to set properties for components

// nodejs library that concatenates classes

// @material-ui/core components



const Pagination_useStyles = (0,styles_.makeStyles)(components_paginationStyle);
function Pagination(props) {
    const { pages , color , className  } = props;
    const classes = Pagination_useStyles();
    const paginationClasses = external_classnames_default()(classes.pagination, className);
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: paginationClasses,
        children: pages.map((prop, key)=>{
            const paginationLink = external_classnames_default()({
                [classes.paginationLink]: true,
                [classes[color]]: prop.active,
                [classes.disabled]: prop.disabled
            });
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: classes.paginationItem,
                children: prop.onClick !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    onClick: prop.onClick,
                    className: paginationLink,
                    disabled: prop.disabled,
                    children: prop.text
                }) : /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    onClick: ()=>alert("you've clicked " + prop.text),
                    className: paginationLink,
                    disabled: prop.disabled,
                    children: prop.text
                })
            }, key);
        })
    });
};
Pagination.defaultProps = {
    color: "primary"
};
Pagination.propTypes = {
    pages: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        active: (external_prop_types_default()).bool,
        disabled: (external_prop_types_default()).bool,
        text: external_prop_types_default().oneOfType([
            (external_prop_types_default()).number,
            (external_prop_types_default()).string
        ]).isRequired,
        onClick: (external_prop_types_default()).func
    })).isRequired,
    color: external_prop_types_default().oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger"
    ]),
    className: (external_prop_types_default()).string
};

// EXTERNAL MODULE: ./components/Badge/Badge.js + 1 modules
var Badge = __webpack_require__(4672);
// EXTERNAL MODULE: ./components/CustomDropdown/CustomDropdown.js + 1 modules
var CustomDropdown = __webpack_require__(7161);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/customCheckboxRadioSwitchStyle.js
var customCheckboxRadioSwitchStyle = __webpack_require__(6233);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/customSelectStyle.js
var customSelectStyle = __webpack_require__(7589);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/componentsSections/basicsStyle.js



const basicsStyle = {
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    container: nextjs_material_kit_pro/* container */.nC,
    ...customSelectStyle/* default */.Z,
    ...customCheckboxRadioSwitchStyle/* default */.Z,
    sections: {
        padding: "70px 0"
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    space50: {
        height: "50px",
        display: "block"
    },
    space70: {
        height: "70px",
        display: "block"
    },
    icons: {
        width: "17px",
        height: "17px",
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    }
};
/* harmony default export */ const componentsSections_basicsStyle = (basicsStyle);

;// CONCATENATED MODULE: ./pages-sections/components/SectionBasics.js


// plugin that creates slider

// react component plugin for creating beatiful tags on an input

// @material-ui/core components











// @material-ui/icons




// core components









const SectionBasics_useStyles = (0,styles_.makeStyles)(componentsSections_basicsStyle);
function SectionBasics() {
    const [checked, setChecked] = external_react_default().useState([
        24,
        22
    ]);
    const [selectedEnabled, setSelectedEnabled] = external_react_default().useState("b");
    const [checkedA, setCheckedA] = external_react_default().useState(true);
    const [checkedB, setCheckedB] = external_react_default().useState(false);
    const [simpleSelect, setSimpleSelect] = external_react_default().useState("");
    const [multipleSelect, setMultipleSelect] = external_react_default().useState([]);
    const [tags, setTags] = external_react_default().useState([
        "amsterdam",
        "washington",
        "sydney",
        "beijing"
    ]);
    external_react_default().useEffect(()=>{
        if (!document.getElementById("sliderRegular").classList.contains("noUi-target")) {
            external_nouislider_default().create(document.getElementById("sliderRegular"), {
                start: [
                    40
                ],
                connect: [
                    true,
                    false
                ],
                step: 1,
                range: {
                    min: 0,
                    max: 100
                }
            });
        }
        if (!document.getElementById("sliderDouble").classList.contains("noUi-target")) {
            external_nouislider_default().create(document.getElementById("sliderDouble"), {
                start: [
                    20,
                    60
                ],
                connect: [
                    false,
                    true,
                    false
                ],
                step: 1,
                range: {
                    min: 0,
                    max: 100
                }
            });
        }
        return function cleanup() {};
    });
    const handleToggle = (value)=>{
        const currentIndex = checked.indexOf(value);
        const newChecked = [
            ...checked
        ];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const handleSimple = (event)=>{
        setSimpleSelect(event.target.value);
    };
    const handleMultiple = (event)=>{
        setMultipleSelect(event.target.value);
    };
    const handleTags = (regularTags)=>{
        setTags(regularTags);
    };
    const classes = SectionBasics_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.sections,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.title,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Basic Elements"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "buttons",
                    className: "cd-section",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                children: [
                                    "Buttons",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                        children: "Pick your style"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            justify: "center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        children: "Default"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        round: true,
                                        children: "round"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                        color: "primary",
                                        round: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {
                                                className: classes.icons
                                            }),
                                            " with icon"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        justIcon: true,
                                        round: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        simple: true,
                                        children: "simple"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                    children: "Pick your size"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            justify: "center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        size: "sm",
                                        children: "Small"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        children: "Regular"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        size: "lg",
                                        children: "Large"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                    children: "Pick your color"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            justify: "center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        children: "Default"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        children: "Primary"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "info",
                                        children: "Info"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "success",
                                        children: "Success"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "warning",
                                        children: "Warning"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "danger",
                                        children: "Danger"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "rose",
                                        children: "Rose"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space50
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "social-buttons",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Social Buttons"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 3,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: "Default"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "twitter",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                }),
                                                " Connect with twitter"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "facebook",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-square"
                                                }),
                                                " Share \xb7 2.2k"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "instagram",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                }),
                                                " Follow on instagram"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "google",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-google-plus-square"
                                                }),
                                                " Share on Google+"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "linkedin",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-linkedin"
                                                }),
                                                " Connect with linkedin"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "pinterest",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-pinterest"
                                                }),
                                                " Pint it \xb7 212"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "youtube",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-youtube"
                                                }),
                                                " View on youtube"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "tumblr",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-tumblr-square"
                                                }),
                                                " Repost"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "github",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-github"
                                                }),
                                                " Connect with github"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "behance",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-behance-square"
                                                }),
                                                " Follow us"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "dribbble",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-dribbble"
                                                }),
                                                " Find us on dribbble"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "reddit",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-reddit"
                                                }),
                                                " Repost \xb7 232"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 6,
                                    sm: 3,
                                    md: 3,
                                    lg: 1,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: "\xa0"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "twitter",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "facebook",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "instagram",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "google",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-google"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "linkedin",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-linkedin-in"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "pinterest",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-pinterest"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "youtube",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-youtube"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "tumblr",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-tumblr"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "github",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-github"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "behance",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-behance"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "dribbble",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-dribbble"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "reddit",
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-reddit"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 6,
                                    sm: 2,
                                    md: 2,
                                    lg: 1,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: "\xa0"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "twitter",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "facebook",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "instagram",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "google",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-google"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "linkedin",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-linkedin-in"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "pinterest",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-pinterest"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "youtube",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-youtube"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "tumblr",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-tumblr"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "github",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-github"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "behance",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-behance"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "dribbble",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-dribbble"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "reddit",
                                            round: true,
                                            justIcon: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-reddit"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 4,
                                    sm: 3,
                                    md: 3,
                                    lg: 1,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: "Simple"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "twitter",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "facebook",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-f"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "instagram",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "google",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-google"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "linkedin",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-linkedin-in"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "pinterest",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-pinterest"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "youtube",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-youtube"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "tumblr",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-tumblr"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "github",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-github"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "behance",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-behance"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "dribbble",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-dribbble"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            color: "reddit",
                                            round: true,
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-reddit"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 3,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: "\xa0"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "twitter",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                }),
                                                " Connect with twitter"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "facebook",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-square"
                                                }),
                                                " Share \xb7 2.2k"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "instagram",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                }),
                                                " Follow on instagram"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "google",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-google-plus-square"
                                                }),
                                                " Share on Google+"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "linkedin",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-linkedin"
                                                }),
                                                " Connect with linkedin"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "pinterest",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-pinterest"
                                                }),
                                                " Pint it \xb7 212"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "youtube",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-youtube"
                                                }),
                                                " View on youtube"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "tumblr",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-tumblr-square"
                                                }),
                                                " Repost"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "github",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-github"
                                                }),
                                                " Connect with github"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "behance",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-behance-square"
                                                }),
                                                " Follow us"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "dribbble",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-dribbble"
                                                }),
                                                " Find us on dribbble"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "reddit",
                                            simple: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-reddit"
                                                }),
                                                " Repost \xb7 232"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space50
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "inputs",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Inputs"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                        id: "regular",
                                        inputProps: {
                                            placeholder: "Regular"
                                        },
                                        formControlProps: {
                                            fullWidth: true
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                        labelText: "With floating label",
                                        id: "float",
                                        formControlProps: {
                                            fullWidth: true
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                        labelText: "Success input",
                                        id: "success",
                                        success: true,
                                        formControlProps: {
                                            fullWidth: true
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                        labelText: "Error input",
                                        id: "error",
                                        error: true,
                                        formControlProps: {
                                            fullWidth: true
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                        labelText: "With material Icons",
                                        id: "material",
                                        formControlProps: {
                                            fullWidth: true
                                        },
                                        inputProps: {
                                            endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                position: "end",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((People_default()), {})
                                            })
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                        labelText: "With Font Awesome Icons",
                                        id: "font-awesome",
                                        formControlProps: {
                                            fullWidth: true
                                        },
                                        inputProps: {
                                            endAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                position: "end",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-users"
                                                })
                                            })
                                        }
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space70
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "checkRadios",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 4,
                                md: 4,
                                lg: 3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Checkboxes"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                tabIndex: -1,
                                                onClick: ()=>handleToggle(21),
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.checkedIcon
                                                }),
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.uncheckedIcon
                                                }),
                                                classes: {
                                                    checked: classes.checked,
                                                    root: classes.checkRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "Unchecked"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                tabIndex: -1,
                                                onClick: ()=>handleToggle(22),
                                                checked: checked.indexOf(22) !== -1 ? true : false,
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.checkedIcon
                                                }),
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.uncheckedIcon
                                                }),
                                                classes: {
                                                    checked: classes.checked,
                                                    root: classes.checkRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "Checked"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            disabled: true,
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                tabIndex: -1,
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.checkedIcon
                                                }),
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.uncheckedIcon
                                                }),
                                                classes: {
                                                    checked: classes.checked,
                                                    root: classes.checkRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                disabled: classes.disabledCheckboxAndRadio,
                                                root: classes.labelRoot
                                            },
                                            label: "Disabled Unchecked"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            disabled: true,
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                tabIndex: -1,
                                                checked: checked.indexOf(24) !== -1 ? true : false,
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.checkedIcon
                                                }),
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                    className: classes.uncheckedIcon
                                                }),
                                                classes: {
                                                    checked: classes.checked,
                                                    root: classes.checkRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                disabled: classes.disabledCheckboxAndRadio,
                                                root: classes.labelRoot
                                            },
                                            label: "Disabled Checked"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 4,
                                md: 4,
                                lg: 3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Radio Buttons"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                                checked: selectedEnabled === "a",
                                                onChange: ()=>setSelectedEnabled("a"),
                                                value: "a",
                                                name: "radio button enabled",
                                                "aria-label": "A",
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioUnchecked
                                                }),
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioChecked
                                                }),
                                                classes: {
                                                    checked: classes.radio,
                                                    root: classes.radioRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "First Radio"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                                checked: selectedEnabled === "b",
                                                onChange: ()=>setSelectedEnabled("b"),
                                                value: "b",
                                                name: "radio button enabled",
                                                "aria-label": "B",
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioUnchecked
                                                }),
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioChecked
                                                }),
                                                classes: {
                                                    checked: classes.radio,
                                                    root: classes.radioRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "Second Radio"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            disabled: true,
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                                checked: false,
                                                value: "a",
                                                name: "radio button disabled",
                                                "aria-label": "B",
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioUnchecked
                                                }),
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioChecked
                                                }),
                                                classes: {
                                                    checked: classes.radio,
                                                    disabled: classes.disabledCheckboxAndRadio,
                                                    root: classes.radioRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "Disabled Unchecked Radio"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            disabled: true,
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                                                checked: true,
                                                value: "b",
                                                name: "radio button disabled",
                                                "aria-label": "B",
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioUnchecked
                                                }),
                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((FiberManualRecord_default()), {
                                                    className: classes.radioChecked
                                                }),
                                                classes: {
                                                    checked: classes.radio,
                                                    disabled: classes.disabledCheckboxAndRadio,
                                                    root: classes.radioRoot
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "Disabled Checked Radio"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 4,
                                md: 4,
                                lg: 3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Toggle Buttons"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                                checked: checkedA,
                                                onChange: (event)=>setCheckedA(event.target.checked),
                                                value: "checkedA",
                                                classes: {
                                                    switchBase: classes.switchBase,
                                                    checked: classes.switchChecked,
                                                    thumb: classes.switchIcon,
                                                    track: classes.switchBar
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "Toggle is on"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
                                                checked: checkedB,
                                                onChange: (event)=>setCheckedB(event.target.checked),
                                                value: "checkedB",
                                                classes: {
                                                    switchBase: classes.switchBase,
                                                    checked: classes.switchChecked,
                                                    thumb: classes.switchIcon,
                                                    track: classes.switchBar
                                                }
                                            }),
                                            classes: {
                                                label: classes.label,
                                                root: classes.labelRoot
                                            },
                                            label: "Toggle is off"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space70
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "select",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Customizable Select"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 6,
                                                md: 6,
                                                lg: 5,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                                    fullWidth: true,
                                                    className: classes.selectFormControl,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                            htmlFor: "simple-select",
                                                            className: classes.selectLabel,
                                                            children: "Single Select"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                            MenuProps: {
                                                                className: classes.selectMenu
                                                            },
                                                            classes: {
                                                                select: classes.select
                                                            },
                                                            value: simpleSelect,
                                                            onChange: handleSimple,
                                                            inputProps: {
                                                                name: "simpleSelect",
                                                                id: "simple-select"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    disabled: true,
                                                                    classes: {
                                                                        root: classes.selectMenuItem
                                                                    },
                                                                    children: "Single Select"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    classes: {
                                                                        root: classes.selectMenuItem,
                                                                        selected: classes.selectMenuItemSelected
                                                                    },
                                                                    value: "2",
                                                                    children: "Paris"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    classes: {
                                                                        root: classes.selectMenuItem,
                                                                        selected: classes.selectMenuItemSelected
                                                                    },
                                                                    value: "3",
                                                                    children: "Bucharest"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    classes: {
                                                                        root: classes.selectMenuItem,
                                                                        selected: classes.selectMenuItemSelected
                                                                    },
                                                                    value: "4",
                                                                    children: "Rome"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 6,
                                                md: 6,
                                                lg: 5,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((FormControl_default()), {
                                                    fullWidth: true,
                                                    className: classes.selectFormControl,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                            htmlFor: "multiple-select",
                                                            className: classes.selectLabel,
                                                            children: "Multiple Select"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                            multiple: true,
                                                            value: multipleSelect,
                                                            onChange: handleMultiple,
                                                            MenuProps: {
                                                                className: classes.selectMenu,
                                                                classes: {
                                                                    paper: classes.selectPaper
                                                                }
                                                            },
                                                            classes: {
                                                                select: classes.select
                                                            },
                                                            inputProps: {
                                                                name: "multipleSelect",
                                                                id: "multiple-select"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    disabled: true,
                                                                    classes: {
                                                                        root: classes.selectMenuItem
                                                                    },
                                                                    children: "Multiple Select"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    classes: {
                                                                        root: classes.selectMenuItem,
                                                                        selected: classes.selectMenuItemSelectedMultiple
                                                                    },
                                                                    value: "2",
                                                                    children: "Paris"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    classes: {
                                                                        root: classes.selectMenuItem,
                                                                        selected: classes.selectMenuItemSelectedMultiple
                                                                    },
                                                                    value: "3",
                                                                    children: "Bucharest"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                    classes: {
                                                                        root: classes.selectMenuItem,
                                                                        selected: classes.selectMenuItemSelectedMultiple
                                                                    },
                                                                    value: "4",
                                                                    children: "Rome"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 4,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Dropdown & Dropup"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 12,
                                                md: 8,
                                                lg: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown/* default */.Z, {
                                                    dropdownHeader: "Dropdown header",
                                                    buttonText: "Multilevel Dropdown",
                                                    buttonProps: {
                                                        round: true,
                                                        block: true,
                                                        color: "info"
                                                    },
                                                    dropPlacement: "bottom",
                                                    dropdownList: [
                                                        "Action",
                                                        "Another action",
                                                        "Something else here",
                                                        {
                                                            divider: true
                                                        },
                                                        "Separated link",
                                                        {
                                                            divider: true
                                                        },
                                                        "One more separated link",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown/* default */.Z, {
                                                            "data-ref": "multi",
                                                            innerDropDown: true,
                                                            buttonText: "Submenu",
                                                            buttonProps: {
                                                                simple: true,
                                                                block: true
                                                            },
                                                            dropPlacement: "right-start",
                                                            dropdownList: [
                                                                "Submenu action",
                                                                "Submenu action",
                                                                /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown/* default */.Z, {
                                                                    "data-ref": "multi",
                                                                    innerDropDown: true,
                                                                    buttonText: "Second submenu",
                                                                    buttonProps: {
                                                                        simple: true
                                                                    },
                                                                    dropPlacement: "right-start",
                                                                    dropdownList: [
                                                                        "Submenu action 1",
                                                                        "Submenu action 2"
                                                                    ]
                                                                }, 965816)
                                                            ]
                                                        }, 96586)
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 12,
                                                md: 8,
                                                lg: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown/* default */.Z, {
                                                    dropup: true,
                                                    dropPlacement: "top",
                                                    dropdownHeader: "Dropup header",
                                                    buttonText: "Dropup",
                                                    buttonProps: {
                                                        round: true,
                                                        block: true,
                                                        color: "info"
                                                    },
                                                    dropdownList: [
                                                        "Action",
                                                        "Another action",
                                                        "Something else here",
                                                        {
                                                            divider: true
                                                        },
                                                        "Separated link",
                                                        {
                                                            divider: true
                                                        },
                                                        "One more separated link"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                sm: 12,
                                                md: 8,
                                                lg: 6,
                                                className: classes.mlAuto + " " + classes.mrAuto,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown/* default */.Z, {
                                                    dropdownHeader: "Dropdown header",
                                                    buttonText: "Dropdown",
                                                    buttonProps: {
                                                        round: true,
                                                        block: true,
                                                        color: "info"
                                                    },
                                                    dropPlacement: "bottom",
                                                    dropdownList: [
                                                        "Action",
                                                        "Another action",
                                                        "Sometjing else here",
                                                        {
                                                            divider: true
                                                        },
                                                        "Separeted link"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space70
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "textareaTags",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Textarea"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                        labelText: "You can write your text here...",
                                        id: "textarea-input",
                                        formControlProps: {
                                            fullWidth: true
                                        },
                                        inputProps: {
                                            multiline: true,
                                            rows: 5
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Tags"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_tagsinput_default()), {
                                        value: tags,
                                        onChange: handleTags,
                                        tagProps: {
                                            className: "react-tagsinput-tag rose"
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "progress",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Progress Bars"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLinearProgress, {
                                        variant: "determinate",
                                        color: "primary",
                                        value: 30
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLinearProgress, {
                                        variant: "determinate",
                                        color: "info",
                                        value: 60
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLinearProgress, {
                                        variant: "determinate",
                                        color: "success",
                                        value: 100,
                                        style: {
                                            width: "35%",
                                            display: "inline-block"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLinearProgress, {
                                        variant: "determinate",
                                        color: "warning",
                                        value: 100,
                                        style: {
                                            width: "20%",
                                            display: "inline-block"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLinearProgress, {
                                        variant: "determinate",
                                        color: "danger",
                                        value: 25,
                                        style: {
                                            width: "45%",
                                            display: "inline-block"
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Pagination"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Hidden_default()), {
                                        smDown: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                                                pages: [
                                                    {
                                                        text: 1
                                                    },
                                                    {
                                                        disabled: true,
                                                        text: "..."
                                                    },
                                                    {
                                                        text: 5
                                                    },
                                                    {
                                                        text: 6
                                                    },
                                                    {
                                                        active: true,
                                                        text: 7
                                                    },
                                                    {
                                                        text: 8
                                                    },
                                                    {
                                                        text: 9
                                                    },
                                                    {
                                                        text: "..."
                                                    },
                                                    {
                                                        text: 12
                                                    }
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                                                pages: [
                                                    {
                                                        text: "PREV"
                                                    },
                                                    {
                                                        text: 1
                                                    },
                                                    {
                                                        text: 2
                                                    },
                                                    {
                                                        active: true,
                                                        text: 3
                                                    },
                                                    {
                                                        text: 4
                                                    },
                                                    {
                                                        text: 5
                                                    },
                                                    {
                                                        text: "NEXT"
                                                    }
                                                ],
                                                color: "info"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Hidden_default()), {
                                        smUp: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                                                pages: [
                                                    {
                                                        text: 1
                                                    },
                                                    {
                                                        disabled: true,
                                                        text: "..."
                                                    },
                                                    {
                                                        text: 6
                                                    },
                                                    {
                                                        active: true,
                                                        text: 7
                                                    },
                                                    {
                                                        text: 8
                                                    },
                                                    {
                                                        text: "..."
                                                    }
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                                                pages: [
                                                    {
                                                        text: 1
                                                    },
                                                    {
                                                        text: 2
                                                    },
                                                    {
                                                        active: true,
                                                        text: 3
                                                    },
                                                    {
                                                        text: 4
                                                    },
                                                    {
                                                        text: 5
                                                    }
                                                ],
                                                color: "info"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "sliders",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Sliders"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "sliderRegular",
                                        className: "slider-primary"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "sliderDouble",
                                        className: "slider-info"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Badges"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                                        children: "default"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                                        color: "primary",
                                        children: "primary"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                                        color: "info",
                                        children: "info"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                                        color: "success",
                                        children: "success"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                                        color: "warning",
                                        children: "warning"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                                        color: "danger",
                                        children: "danger"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                                        color: "rose",
                                        children: "rose"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: external "@material-ui/icons/Search"
const Search_namespaceObject = require("@material-ui/icons/Search");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/Email"
var Email_ = __webpack_require__(5732);
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_);
// EXTERNAL MODULE: external "@material-ui/icons/Face"
var Face_ = __webpack_require__(3510);
var Face_default = /*#__PURE__*/__webpack_require__.n(Face_);
;// CONCATENATED MODULE: external "@material-ui/icons/Settings"
const Settings_namespaceObject = require("@material-ui/icons/Settings");
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/AccountCircle"
var AccountCircle_ = __webpack_require__(8261);
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_);
;// CONCATENATED MODULE: external "@material-ui/icons/Explore"
const Explore_namespaceObject = require("@material-ui/icons/Explore");
var Explore_default = /*#__PURE__*/__webpack_require__.n(Explore_namespaceObject);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js
var headerLinksStyle = __webpack_require__(9315);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/componentsSections/navbarsStyle.js


const navbarsStyle = (theme)=>({
        container: nextjs_material_kit_pro/* container */.nC,
        ...(0,headerLinksStyle/* default */.Z)(theme),
        section: {
            padding: "70px 0",
            paddingBottom: "0"
        },
        title: {
            ...nextjs_material_kit_pro/* title */.TN,
            marginTop: "30px",
            minHeight: "32px",
            textDecoration: "none"
        },
        navbar: {
            marginBottom: "-20px",
            zIndex: "100",
            position: "relative",
            overflow: "hidden",
            "& header": {
                borderRadius: "0",
                zIndex: "unset"
            }
        },
        navigation: {
            backgroundPosition: "50%",
            backgroundSize: "cover",
            marginTop: "0",
            minHeight: "740px"
        },
        formControl: {
            [theme.breakpoints.down("md")]: {
                color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
                marginLeft: "20px !important"
            },
            margin: "0 !important",
            paddingTop: "7px",
            paddingBottom: "7px"
        },
        inputRootCustomClasses: {
            margin: "0!important"
        },
        searchIcon: {
            width: "20px",
            height: "20px",
            color: "inherit"
        },
        img: {
            width: "40px",
            height: "40px",
            borderRadius: "50%"
        },
        imageDropdownButton: {
            [theme.breakpoints.down("md")]: {
                top: "0",
                margin: "5px 15px"
            },
            padding: "0px",
            borderRadius: "50%",
            marginLeft: "5px"
        }
    });
/* harmony default export */ const componentsSections_navbarsStyle = (navbarsStyle);

;// CONCATENATED MODULE: ./pages-sections/components/SectionNavbars.js


// @material-ui/core components



// @material-ui/icons






// core components







const SectionNavbars_useStyles = (0,styles_.makeStyles)(componentsSections_navbarsStyle);
function SectionNavbars() {
    const classes = SectionNavbars_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.section + " cd-section",
        id: "navigation",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Menu"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                                        brand: "Menu",
                                        color: "primary",
                                        links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                            className: classes.list,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        href: "#pablo",
                                                        className: classes.navLink + " " + classes.navLinkActive,
                                                        onClick: (e)=>e.preventDefault(),
                                                        color: "transparent",
                                                        children: "Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        href: "#pablo",
                                                        className: classes.navLink,
                                                        onClick: (e)=>e.preventDefault(),
                                                        color: "transparent",
                                                        children: "Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown/* default */.Z, {
                                                        buttonText: "Dropdown",
                                                        dropdownHeader: "Dropdown Header",
                                                        buttonProps: {
                                                            className: classes.navLink,
                                                            color: "transparent"
                                                        },
                                                        dropdownList: [
                                                            "Action",
                                                            "Another action",
                                                            "Something else here",
                                                            {
                                                                divider: true
                                                            },
                                                            "Separated link",
                                                            {
                                                                divider: true
                                                            },
                                                            "One more separated link"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.title,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Menu with Icons"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                                        brand: "Icons",
                                        color: "info",
                                        links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                            className: classes.list + " " + classes.mlAuto,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        color: "transparent",
                                                        className: classes.navLink,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Email_default()), {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        color: "transparent",
                                                        className: classes.navLink,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Face_default()), {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                    className: classes.listItem,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown/* default */.Z, {
                                                        left: true,
                                                        dropdownHeader: "Dropdown Header",
                                                        buttonIcon: (Settings_default()),
                                                        buttonProps: {
                                                            className: classes.navLink,
                                                            color: "transparent"
                                                        },
                                                        dropdownList: [
                                                            "Action",
                                                            "Another action",
                                                            "Something else here",
                                                            {
                                                                divider: true
                                                            },
                                                            "Separated link",
                                                            {
                                                                divider: true
                                                            },
                                                            "One more separated link"
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Navigation"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "navbar",
                className: classes.navbar,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.navigation,
                    style: {
                        backgroundImage: "url('/img/bg.jpg')"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                            brand: "Brand",
                            color: "rose",
                            links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classes.collapse,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                        className: classes.list + " " + classes.mrAuto,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.listItem,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "#pablo",
                                                    className: classes.navLink + " " + classes.navLinkActive,
                                                    onClick: (e)=>e.preventDefault(),
                                                    color: "transparent",
                                                    children: "Link"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.listItem,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "#pablo",
                                                    className: classes.navLink,
                                                    onClick: (e)=>e.preventDefault(),
                                                    color: "transparent",
                                                    children: "Link"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: classes.mlAuto,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                white: true,
                                                inputRootCustomClasses: classes.inputRootCustomClasses,
                                                formControlProps: {
                                                    className: classes.formControl
                                                },
                                                inputProps: {
                                                    placeholder: "Search",
                                                    inputProps: {
                                                        "aria-label": "Search",
                                                        className: classes.searchInput
                                                    }
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                color: "white",
                                                justIcon: true,
                                                round: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {
                                                    className: classes.searchIcon
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                            brand: "Info Color",
                            color: "info",
                            links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                className: classes.list + " " + classes.mlAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink + " " + classes.navLinkActive,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: "Discover"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: "Profile"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: "Settings"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                            brand: "Primary Color",
                            color: "primary",
                            links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                className: classes.list + " " + classes.mlAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink + " " + classes.navLinkActive,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Explore_default()), {}),
                                                " Discover"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((AccountCircle_default()), {}),
                                                " Profile"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Settings_default()), {}),
                                                " Settings"
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                            brand: "Navbar with notifications",
                            color: "dark",
                            links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                className: classes.list + " " + classes.mlAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: "Discover"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: "Wishlist"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.notificationNavLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "rose",
                                            justIcon: true,
                                            round: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Email_default()), {})
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomDropdown/* default */.Z, {
                                            left: true,
                                            caret: false,
                                            hoverColor: "dark",
                                            dropdownHeader: "Dropdown Header",
                                            buttonText: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/faces/avatar.jpg",
                                                className: classes.img,
                                                alt: "profile"
                                            }),
                                            buttonProps: {
                                                className: classes.navLink + " " + classes.imageDropdownButton,
                                                color: "transparent"
                                            },
                                            dropdownList: [
                                                "Me",
                                                "Settings and other stuff",
                                                "Sign out"
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                            brand: "Navbar with profile",
                            links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                className: classes.list + " " + classes.mlAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: "Discover"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.navLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "transparent",
                                            children: "Wishlist"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            className: classes.registerNavLink,
                                            onClick: (e)=>e.preventDefault(),
                                            color: "rose",
                                            round: true,
                                            children: "Register"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                            brand: "Transparent",
                            color: "transparent",
                            links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                className: classes.list + " " + classes.mlAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "transparent",
                                            className: classes.navLink,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-twitter"
                                                }),
                                                " ",
                                                "Twitter"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "transparent",
                                            className: classes.navLink,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-facebook"
                                                }),
                                                " ",
                                                "Facebook"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.listItem,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "transparent",
                                            className: classes.navLink,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-instagram"
                                                }),
                                                " ",
                                                "Instagram"
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: external "@material-ui/icons/Chat"
var Chat_ = __webpack_require__(1677);
var Chat_default = /*#__PURE__*/__webpack_require__.n(Chat_);
// EXTERNAL MODULE: external "@material-ui/icons/Build"
var Build_ = __webpack_require__(504);
var Build_default = /*#__PURE__*/__webpack_require__.n(Build_);
// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__(9033);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);
// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__(2301);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__(7403);
// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__(6721);
// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(9861);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/customTabsStyle.js

const customTabsStyle = {
    cardTitle: {
        ...nextjs_material_kit_pro/* defaultFont */.Df,
        float: "left",
        padding: "10px 10px 10px 0",
        lineHeight: "24px",
        fontSize: "14px",
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    cardTitleRTL: {
        float: "right",
        padding: "10px 0px 10px 10px !important"
    },
    displayNone: {
        display: "none"
    },
    tabsContainer: {},
    tabsContainerRTL: {
        float: "right"
    },
    tabIcon: {
        width: "24px",
        height: "24px",
        marginRight: "4px"
    },
    customTabsRoot: {
        minHeight: "unset !important"
    },
    customTabSelected: {
        backgroundColor: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.2)",
        transition: "background-color .4s"
    },
    customTabRoot: {
        width: "auto",
        minWidth: "70px",
        borderRadius: "3px",
        opacity: "1",
        height: "auto",
        padding: "10px 15px",
        display: "block",
        minHeight: "unset",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "24px"
    },
    customTabWrapper: {
        display: "inline-block",
        minHeight: "unset !important",
        minWidth: "unset !important",
        width: "unset !important",
        height: "unset !important",
        maxWidth: "unset !important",
        maxHeight: "unset !important",
        "& > svg": {
            verticalAlign: "middle",
            margin: "-1.55px 5px 0 0 !important"
        },
        "&,& *": {
            letterSpacing: "normal !important"
        }
    }
};
/* harmony default export */ const components_customTabsStyle = (customTabsStyle);

;// CONCATENATED MODULE: ./components/CustomTabs/CustomTabs.js


// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/Card/CardContent";
// import CardHeader from "@material-ui/core/Card/CardHeader";


// core components




const CustomTabs_useStyles = (0,styles_.makeStyles)(components_customTabsStyle);
function CustomTabs(props) {
    const [value, setValue] = external_react_default().useState(0);
    const handleChange = (event, value)=>{
        setValue(value);
    };
    const { headerColor , title , tabs , rtlActive , plainTabs  } = props;
    const classes = CustomTabs_useStyles();
    const cardTitle = external_classnames_default()({
        [classes.cardTitle]: true,
        [classes.cardTitleRTL]: rtlActive
    });
    const tabsContainer = external_classnames_default()({
        [classes.tabsContainer]: true,
        [classes.tabsContainerRTL]: rtlActive
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
        plain: plainTabs,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                color: headerColor,
                plain: plainTabs,
                children: [
                    title !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: cardTitle,
                        children: "title"
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
                        classes: {
                            root: classes.customTabsRoot,
                            flexContainer: tabsContainer,
                            indicator: classes.displayNone
                        },
                        value: value,
                        onChange: handleChange,
                        textColor: "inherit",
                        children: tabs.map((prop, key)=>{
                            var icon = {};
                            if (prop.tabIcon !== undefined) {
                                icon = {
                                    icon: /*#__PURE__*/ jsx_runtime_.jsx(prop.tabIcon, {
                                        className: classes.tabIcon
                                    })
                                };
                            } else {
                                icon = {};
                            }
                            return /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                classes: {
                                    root: classes.customTabRoot,
                                    selected: classes.customTabSelected,
                                    wrapper: classes.customTabWrapper
                                },
                                ...icon,
                                label: prop.tabName
                            }, key);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CardBody/* default */.Z, {
                children: tabs.map((prop, key)=>{
                    if (key === value) {
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: prop.tabContent
                        }, key);
                    }
                    return null;
                })
            })
        ]
    });
};
CustomTabs.defaultProps = {
    headerColor: "purple"
};
CustomTabs.propTypes = {
    headerColor: external_prop_types_default().oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "rose"
    ]),
    title: (external_prop_types_default()).string,
    tabs: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        tabName: (external_prop_types_default()).string.isRequired,
        tabIcon: (external_prop_types_default()).object,
        tabContent: (external_prop_types_default()).node.isRequired
    })),
    rtlActive: (external_prop_types_default()).bool,
    plainTabs: (external_prop_types_default()).bool
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/componentsSections/tabsStyle.js

const tabsStyle = {
    section: {
        padding: "70px 0"
    },
    container: nextjs_material_kit_pro/* container */.nC,
    textCenter: {
        textAlign: "center"
    }
};
/* harmony default export */ const componentsSections_tabsStyle = (tabsStyle);

;// CONCATENATED MODULE: ./pages-sections/components/SectionTabs.js


// @material-ui/core components

// @material-ui/icons



// core components




const SectionTabs_useStyles = (0,styles_.makeStyles)(componentsSections_tabsStyle);
function SectionTabs() {
    const classes = SectionTabs_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "nav-tabs",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Navigation Tabs"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "Tabs with Icons on Card"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomTabs, {
                                        headerColor: "primary",
                                        tabs: [
                                            {
                                                tabName: "Profile",
                                                tabIcon: (Face_default()),
                                                tabContent: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.textCenter,
                                                    children: "I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                                                })
                                            },
                                            {
                                                tabName: "Messages",
                                                tabIcon: (Chat_default()),
                                                tabContent: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.textCenter,
                                                    children: "I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                                                })
                                            },
                                            {
                                                tabName: "Settings",
                                                tabIcon: (Build_default()),
                                                tabContent: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.textCenter,
                                                    children: "think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                                                })
                                            }
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "Tabs on Plain Card"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomTabs, {
                                        plainTabs: true,
                                        headerColor: "danger",
                                        tabs: [
                                            {
                                                tabName: "Home",
                                                tabContent: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.textCenter,
                                                    children: "I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                                                })
                                            },
                                            {
                                                tabName: "Updates",
                                                tabContent: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.textCenter,
                                                    children: "I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                                                })
                                            },
                                            {
                                                tabName: "History",
                                                tabContent: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.textCenter,
                                                    children: "think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."
                                                })
                                            }
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: external "@material-ui/icons/Dashboard"
var Dashboard_ = __webpack_require__(2857);
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(Dashboard_);
;// CONCATENATED MODULE: external "@material-ui/icons/Schedule"
const Schedule_namespaceObject = require("@material-ui/icons/Schedule");
var Schedule_default = /*#__PURE__*/__webpack_require__.n(Schedule_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/List"
var icons_List_ = __webpack_require__(6240);
var icons_List_default = /*#__PURE__*/__webpack_require__.n(icons_List_);
// EXTERNAL MODULE: ./components/NavPills/NavPills.js + 1 modules
var NavPills = __webpack_require__(4945);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/componentsSections/pillsStyle.js

const pillsStyle = {
    section: {
        padding: "70px 0"
    },
    container: nextjs_material_kit_pro/* container */.nC,
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    }
};
/* harmony default export */ const componentsSections_pillsStyle = (pillsStyle);

;// CONCATENATED MODULE: ./pages-sections/components/SectionPills.js


// @material-ui/core components

// @material-ui/icons



// core components




const SectionPills_useStyles = (0,styles_.makeStyles)(componentsSections_pillsStyle);
function SectionPills() {
    const classes = SectionPills_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "navigation-pills",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Navigation Pills"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 6,
                                lg: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "Horizontal tabs"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavPills/* default */.Z, {
                                        color: "rose",
                                        tabs: [
                                            {
                                                tabButton: "Profile",
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Dramatically visualize customer directed convergence without revolutionary ROI."
                                                        })
                                                    ]
                                                })
                                            },
                                            {
                                                tabButton: "Settings",
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Dramatically maintain clicks-and-mortar solutions without functional solutions."
                                                        })
                                                    ]
                                                })
                                            },
                                            {
                                                tabButton: "Options",
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Dynamically innovate resource-leveling customer service for state of the art customer service."
                                                        })
                                                    ]
                                                })
                                            }
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 6,
                                lg: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "Vertical tabs"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavPills/* default */.Z, {
                                        horizontal: {
                                            tabsGrid: {
                                                xs: 12,
                                                sm: 4,
                                                md: 5
                                            },
                                            contentGrid: {
                                                xs: 12,
                                                sm: 8,
                                                md: 7
                                            }
                                        },
                                        color: "rose",
                                        tabs: [
                                            {
                                                tabButton: "Profile",
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Dramatically visualize customer directed convergence without revolutionary ROI."
                                                        })
                                                    ]
                                                })
                                            },
                                            {
                                                tabButton: "Settings",
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Dramatically maintain clicks-and-mortar solutions without functional solutions."
                                                        })
                                                    ]
                                                })
                                            },
                                            {
                                                tabButton: "Options",
                                                tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.",
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Dynamically innovate resource-leveling customer service for state of the art customer service."
                                                        })
                                                    ]
                                                })
                                            }
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                children: "With Icons"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 8,
                                lg: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavPills/* default */.Z, {
                                    color: "primary",
                                    tabs: [
                                        {
                                            tabButton: "Dashboard",
                                            tabIcon: (Dashboard_default()),
                                            tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    })
                                                ]
                                            })
                                        },
                                        {
                                            tabButton: "Schedule",
                                            tabIcon: (Schedule_default()),
                                            tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    })
                                                ]
                                            })
                                        },
                                        {
                                            tabButton: "Tasks",
                                            tabIcon: (icons_List_default()),
                                            tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    })
                                                ]
                                            })
                                        }
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 8,
                                lg: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavPills/* default */.Z, {
                                    color: "primary",
                                    horizontal: {
                                        tabsGrid: {
                                            xs: 12,
                                            sm: 3,
                                            md: 4
                                        },
                                        contentGrid: {
                                            xs: 12,
                                            sm: 9,
                                            md: 8
                                        }
                                    },
                                    tabs: [
                                        {
                                            tabButton: "Dashboard",
                                            tabIcon: (Dashboard_default()),
                                            tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    })
                                                ]
                                            })
                                        },
                                        {
                                            tabButton: "Schedule",
                                            tabIcon: (Schedule_default()),
                                            tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."
                                                    })
                                                ]
                                            })
                                        }
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: external "@material-ui/icons/Warning"
const Warning_namespaceObject = require("@material-ui/icons/Warning");
var Warning_default = /*#__PURE__*/__webpack_require__.n(Warning_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/SnackbarContent"
const SnackbarContent_namespaceObject = require("@material-ui/core/SnackbarContent");
var SnackbarContent_default = /*#__PURE__*/__webpack_require__.n(SnackbarContent_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(3974);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__(7886);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(7501);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/snackbarContentStyle.js

const snackbarContentStyle = {
    root: {
        ...nextjs_material_kit_pro/* defaultFont */.Df,
        position: "relative",
        padding: "20px 15px",
        lineHeight: "20px",
        marginBottom: "20px",
        fontSize: "14px",
        backgroundColor: "white",
        color: nextjs_material_kit_pro/* grayColor.15 */.X_[15],
        borderRadius: "0px",
        maxWidth: "100%",
        minWidth: "auto",
        boxShadow: "0 12px 20px -10px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.28), 0 4px 20px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 7px 8px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.2)"
    },
    info: {
        backgroundColor: nextjs_material_kit_pro/* infoColor.3 */.bE[3],
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        ...nextjs_material_kit_pro/* infoBoxShadow */.ur
    },
    success: {
        backgroundColor: nextjs_material_kit_pro/* successColor.3 */.nq[3],
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        ...nextjs_material_kit_pro/* successBoxShadow */.TI
    },
    warning: {
        backgroundColor: nextjs_material_kit_pro/* warningColor.3 */.MA[3],
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        ...nextjs_material_kit_pro/* warningBoxShadow */.D6
    },
    danger: {
        backgroundColor: nextjs_material_kit_pro/* dangerColor.3 */.E7[3],
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        ...nextjs_material_kit_pro/* dangerBoxShadow */.iW
    },
    primary: {
        backgroundColor: nextjs_material_kit_pro/* primaryColor.3 */.lr[3],
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        ...nextjs_material_kit_pro/* primaryBoxShadow */.kY
    },
    message: {
        padding: "0",
        display: "block",
        maxWidth: "89%"
    },
    close: {
        width: "20px",
        height: "20px"
    },
    iconButton: {
        width: "24px",
        height: "24px",
        float: "right",
        fontSize: "1.5rem",
        fontWeight: "500",
        lineHeight: "1",
        position: "absolute",
        right: "-4px",
        top: "0",
        padding: "0"
    },
    icon: {
        display: "block",
        float: "left",
        marginRight: "1.071rem"
    },
    container: {
        ...nextjs_material_kit_pro/* container */.nC,
        position: "relative"
    }
};
/* harmony default export */ const components_snackbarContentStyle = (snackbarContentStyle);

;// CONCATENATED MODULE: ./components/Snackbar/SnackbarContent.js


// nodejs library to set properties for components

// @material-ui/core components




// @material-ui/icons

// core components

const SnackbarContent_useStyles = (0,styles_.makeStyles)(components_snackbarContentStyle);
function SnackbarContent(props) {
    const { message , color , close , icon  } = props;
    const classes = SnackbarContent_useStyles();
    var action = [];
    const closeAlert = ()=>{
        setAlert(null);
    };
    if (close !== undefined) {
        action = [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                className: classes.iconButton,
                "aria-label": "Close",
                color: "inherit",
                onClick: closeAlert,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                    className: classes.close
                })
            }, "close")
        ];
    }
    let snackIcon = null;
    switch(typeof icon){
        case "object":
            snackIcon = /*#__PURE__*/ jsx_runtime_.jsx(props.icon, {
                className: classes.icon
            });
            break;
        case "string":
            snackIcon = /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                className: classes.icon,
                children: props.icon
            });
            break;
        default:
            snackIcon = null;
            break;
    }
    const [alert, setAlert] = external_react_default().useState(/*#__PURE__*/ jsx_runtime_.jsx((SnackbarContent_default()), {
        message: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                snackIcon,
                message,
                close !== undefined ? action : null
            ]
        }),
        classes: {
            root: classes.root + " " + classes[color],
            message: classes.message + " " + classes.container
        }
    }));
    return alert;
};
SnackbarContent.propTypes = {
    message: (external_prop_types_default()).node.isRequired,
    color: external_prop_types_default().oneOf([
        "info",
        "success",
        "warning",
        "danger",
        "primary"
    ]),
    close: (external_prop_types_default()).bool,
    icon: external_prop_types_default().oneOfType([
        (external_prop_types_default()).object,
        (external_prop_types_default()).string
    ])
};

// EXTERNAL MODULE: ./components/Clearfix/Clearfix.js
var Clearfix = __webpack_require__(8395);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/componentsSections/notificationsStyles.js

const notificationsStyles = {
    section: {
        backgroundColor: nextjs_material_kit_pro/* whiteColor */.zQ,
        display: "block",
        width: "100%",
        position: "relative",
        padding: "70px 0",
        ...nextjs_material_kit_pro/* section */.qi
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    space70: {
        height: "70px",
        display: "block"
    },
    container: nextjs_material_kit_pro/* container */.nC
};
/* harmony default export */ const componentsSections_notificationsStyles = (notificationsStyles);

;// CONCATENATED MODULE: ./pages-sections/components/SectionNotifications.js


// @material-ui/core components

// @material-ui/icons


// core components



const SectionNotifications_useStyles = (0,styles_.makeStyles)(componentsSections_notificationsStyles);
function SectionNotifications() {
    const classes = SectionNotifications_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.section + " cd-section",
        id: "notifications",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.space70
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Notifications"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SnackbarContent, {
                message: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "INFO ALERT:"
                        }),
                        " You",
                        "'",
                        "ve got some friends nearby, stop looking at your phone and find them..."
                    ]
                }),
                close: true,
                color: "info",
                icon: "info_outline"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SnackbarContent, {
                message: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "SUCCESS ALERT:"
                        }),
                        " You",
                        "'",
                        "ve got some friends nearby, stop looking at your phone and find them..."
                    ]
                }),
                close: true,
                color: "success",
                icon: (Check_default())
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SnackbarContent, {
                message: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "WARNING ALERT:"
                        }),
                        " You",
                        "'",
                        "ve got some friends nearby, stop looking at your phone and find them..."
                    ]
                }),
                close: true,
                color: "warning",
                icon: (Warning_default())
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SnackbarContent, {
                message: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "DANGER ALERT:"
                        }),
                        " You",
                        "'",
                        "ve got some friends nearby, stop looking at your phone and find them..."
                    ]
                }),
                close: true,
                color: "danger",
                icon: "info_outline"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Clearfix/* default */.Z, {})
        ]
    });
};

// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__(9746);
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/componentsSections/preFooter.js

const styles = {
    container: nextjs_material_kit_pro/* container */.nC,
    title: nextjs_material_kit_pro/* title */.TN,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    description: nextjs_material_kit_pro/* description */.WL,
    card: {},
    cardBody: {
        padding: "15px",
        "& form": {
            marginBottom: "0"
        }
    },
    cardForm: {
        margin: "0 0 0 14px",
        padding: 0,
        top: 10
    },
    socialLine: {
        padding: ".9375rem 0px",
        "& $border": {
            borderRight: "1px solid rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ",0.12)"
        },
        "& $border:last-child": {
            border: 0
        }
    },
    textCenter: {
        textAlign: "center !important"
    },
    white: {
        backgroundColor: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    dark: {
        background: "radial-gradient(ellipse at center," + nextjs_material_kit_pro/* grayColor.4 */.X_[4] + " 0," + nextjs_material_kit_pro/* grayColor.5 */.X_[5] + " 100%)",
        backgroundSize: "550% 450%",
        "& $border": {
            borderColor: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ",0.1)"
        }
    },
    bigIcons: {
        "& a": {
            margin: 0,
            width: "100% !important",
            paddingTop: "45px",
            paddingBottom: "45px"
        },
        "& button i.fab, & a i.fab": {
            fontSize: "25px !important",
            lineHeight: "90px !important"
        }
    },
    subscribeLine: {
        padding: "1.875rem 0px",
        "& $card": {
            marginTop: "30px"
        },
        "& form": {
            margin: "0px"
        },
        "& $formFix": {
            paddingTop: "0px"
        },
        "&$subscribeLineImage:after": {
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
            display: "block",
            left: 0,
            top: 0,
            content: "''",
            backgroundColor: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ",0.66)"
        }
    },
    formFix: {},
    subscribeLineWhite: {
        backgroundColor: nextjs_material_kit_pro/* whiteColor */.zQ,
        "& $subscribeButton": {
            top: "-6px"
        }
    },
    subscribeLineImage: {
        position: "relative",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        "& $container": {
            zIndex: 2,
            position: "relative"
        },
        "& $title": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        },
        "& $description": {
            color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
        }
    },
    subscribeButton: {},
    border: {}
};
/* harmony default export */ const preFooter = (styles);

;// CONCATENATED MODULE: ./pages-sections/components/SectionPreFooter.js


// nodejs library that concatenates classes

// core components






// @material-ui/core components


// @material-ui icons


const SectionPreFooter_useStyles = (0,styles_.makeStyles)(preFooter);
function SectionPreFooter() {
    const classes = SectionPreFooter_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.container,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.title,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Pre-Footer Areas"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.socialLine, classes.textCenter, classes.white),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        justify: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                md: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: classes.title,
                                    children: "Thank you for your support!"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                color: "twitter",
                                round: true,
                                href: "#pablo",
                                onClick: (e)=>e.preventDefault(),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-twitter"
                                    }),
                                    " Twitter \xb7 2.5K"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                color: "facebook",
                                round: true,
                                href: "#pablo",
                                onClick: (e)=>e.preventDefault(),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-facebook"
                                    }),
                                    " Facebook \xb7 3.2k"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                color: "google",
                                round: true,
                                href: "#pablo",
                                onClick: (e)=>e.preventDefault(),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-google-plus-g"
                                    }),
                                    " Google \xb7 1.2k"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                color: "dribbble",
                                round: true,
                                href: "#pablo",
                                onClick: (e)=>e.preventDefault(),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-dribbble"
                                    }),
                                    " Dribbble \xb7 1.8k"
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.socialLine, classes.textCenter, classes.white, classes.bigIcons),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        justify: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "twitter",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-twitter"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "facebook",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-facebook"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "google",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-google-plus-g"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "dribbble",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-dribbble"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "youtube",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-youtube"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "instagram",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-instagram"
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.socialLine, classes.textCenter, classes.dark, classes.bigIcons),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        justify: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "white",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-twitter"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "white",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-facebook"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "white",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-google-plus-g"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "white",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-dribbble"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "white",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-youtube"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 2,
                                md: 2,
                                className: classes.border,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    color: "white",
                                    justIcon: true,
                                    simple: true,
                                    href: "#pablo",
                                    onClick: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-instagram"
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.subscribeLine, classes.subscribeLineImage),
                style: {
                    backgroundImage: "url('/img/bg7.jpg')"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 6,
                            md: 6,
                            className: external_classnames_default()(classes.mlAuto, classes.mrAuto),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.textCenter,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: classes.title,
                                            children: "Subscribe to our Newsletter"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: classes.description,
                                            children: "Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    raised: true,
                                    className: classes.card,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CardBody/* default */.Z, {
                                        className: classes.cardBody,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        lg: 8,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                            id: "emailPreFooter",
                                                            formControlProps: {
                                                                fullWidth: true,
                                                                className: classes.cardForm
                                                            },
                                                            inputProps: {
                                                                startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                    position: "start",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                                                }),
                                                                placeholder: "Your Email..."
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        lg: 4,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            color: "primary",
                                                            block: true,
                                                            className: classes.subscribeButton,
                                                            children: "subscribe"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.subscribeLine, classes.subscribeLineWhite),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: classes.title,
                                        children: "Get Tips & Tricks every Week!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: classes.description,
                                        children: "Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    plain: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CardBody/* default */.Z, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        lg: 8,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                            id: "emailPreFooter2",
                                                            formControlProps: {
                                                                fullWidth: true,
                                                                className: classes.formFix
                                                            },
                                                            inputProps: {
                                                                startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                    position: "start",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                                                }),
                                                                placeholder: "Your Email..."
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        lg: 4,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            color: "rose",
                                                            round: true,
                                                            block: true,
                                                            className: classes.subscribeButton,
                                                            children: "subscribe"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js
var footerStyle = __webpack_require__(3769);
;// CONCATENATED MODULE: ./pages-sections/components/SectionFooter.js
/*eslint-disable*/ 

// nodejs library that concatenates classes

// @material-ui/core components



// @material-ui/icons


// core components






const SectionFooter_useStyles = (0,styles_.makeStyles)(footerStyle/* default */.Z);
function SectionFooter() {
    const classes = SectionFooter_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.container,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.title,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Footer Areas"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        theme: "white",
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.left,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmkp-footer-components",
                                        target: "_blank",
                                        className: classes.footerBrand,
                                        children: "NextJS Material Kit PRO"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.pullCenter,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                        className: classes.list,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.creative-tim.com/?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "Creative Tim"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.creative-tim.com/presentation?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "About us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "http://blog.creative-tim.com/?ref=njsmkp-footer-components",
                                                    className: classes.block,
                                                    children: "Blog"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.creative-tim.com/license?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "Licenses"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.rightLinks,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "https://twitter.com/CreativeTim?ref=creativetim",
                                                    target: "_blank",
                                                    color: "twitter",
                                                    justIcon: true,
                                                    simple: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "https://dribbble.com/creativetim?ref=creativetim",
                                                    target: "_blank",
                                                    color: "dribbble",
                                                    justIcon: true,
                                                    simple: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-dribbble"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "https://instagram.com/CreativeTimOfficial?ref=creativetim",
                                                    target: "_blank",
                                                    color: "google",
                                                    justIcon: true,
                                                    simple: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-google-plus-g"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.left,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                        className: classes.list,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.creative-tim.com/?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "Creative Tim"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.creative-tim.com/presentation?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "About us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "http://blog.creative-tim.com/?ref=njsmkp-footer-components",
                                                    className: classes.block,
                                                    children: "Blog"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.creative-tim.com/license?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "Licenses"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.right,
                                    children: [
                                        "\xa9 ",
                                        1900 + new Date().getYear(),
                                        " , made with",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {
                                            className: classes.icon
                                        }),
                                        " by",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com?ref=njsmkp-footer-components",
                                            target: "_blank",
                                            className: classes.aClasses,
                                            children: "Creative Tim"
                                        }),
                                        " ",
                                        "for a better web."
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        theme: "dark",
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.left,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmkp-footer-components",
                                        target: "_blank",
                                        className: classes.footerBrand,
                                        children: "NextJS Material Kit PRO"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.pullCenter,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                        className: classes.list,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "http://blog.creative-tim.com/?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "Blog"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.creative-tim.com/presentation?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "Presentation"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablito",
                                                    onClick: (e)=>e.preventDefault(),
                                                    className: classes.block,
                                                    children: "Discover"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablito",
                                                    onClick: (e)=>e.preventDefault(),
                                                    className: classes.block,
                                                    children: "Payment"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.creative-tim.com/contact-us?ref=njsmkp-footer-components",
                                                    target: "_blank",
                                                    className: classes.block,
                                                    children: "Contact us"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.rightLinks,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "https://twitter.com/CreativeTim?ref=creativetim",
                                                    target: "_blank",
                                                    color: "white",
                                                    justIcon: true,
                                                    simple: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "https://dribbble.com/creativetim?ref=creativetim",
                                                    target: "_blank",
                                                    color: "white",
                                                    justIcon: true,
                                                    simple: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-dribbble"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    href: "https://instagram.com/CreativeTimOfficial?ref=creativetim",
                                                    target: "_blank",
                                                    color: "white",
                                                    justIcon: true,
                                                    simple: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-instagram"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        theme: "dark",
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.left,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                        className: classes.list,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    className: classes.block,
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: "Blog"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    className: classes.block,
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: "Presentation"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    className: classes.block,
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: "Discover"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    className: classes.block,
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: "Payment"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                className: classes.inlineBlock,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    className: classes.block,
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: "Contact Us"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.right,
                                    children: [
                                        "Copyright \xa9 ",
                                        1900 + new Date().getYear(),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com?ref=njsmkp-footer-components",
                                            target: "_blank",
                                            className: classes.aClasses,
                                            children: "Creative Tim"
                                        }),
                                        " ",
                                        "All Rights Reserved."
                                    ]
                                })
                            ]
                        }),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Creative Tim is a startup that creates design tools that make the web development process faster and easier.",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "We love the web and care deeply for how users interact with a digital product. We power businesses and individuals to create better looking web projects around the world.",
                                                " "
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Social Feed"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: classes.socialFeed,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "How to handle ethical disagreements with your clients."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "The tangible benefits of designing at 1x pixel density."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-square"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "A collection of 25 stunning sites that you can use for inspiration."
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Instagram Feed"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: classes.galleryFeed,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/card-profile6-square.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/christian.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/card-profile4-square.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/card-profile1-square.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/marc.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/kendall.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/card-profile5-square.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/faces/card-profile1-square.jpg",
                                                    className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                                    alt: "..."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        theme: "white",
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: external_classnames_default()(classes.pullCenter, classes.copyRight),
                            children: [
                                "Copyright \xa9 ",
                                1900 + new Date().getYear(),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.creative-tim.com?ref=njsmkp-footer-components",
                                    target: "_blank",
                                    children: "Creative Tim"
                                }),
                                " ",
                                "All Rights Reserved."
                            ]
                        }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.footer,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 2,
                                        md: 2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "About Us"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: classes.linksVertical,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Blog"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "About us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Presentation"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Contact Us"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 2,
                                        md: 2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "Market"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: classes.linksVertical,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Sales FAQ"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "How to register"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Sell goods"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Receive Payment"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Transactions issues"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Affiliates program"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "Social Feed"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: classes.socialFeed,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "How to handle ethical disagreements with your clients."
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "The tangible benefits of designing at 1x pixel density."
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-facebook-square"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "A collection of 25 stunning sites that you can use for inspiration."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "Follow Us"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: classes.socialButtons,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            href: "#pablo",
                                                            color: "twitter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            href: "#pablo",
                                                            color: "facebook",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-facebook-square"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            href: "#pablo",
                                                            color: "dribbble",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-dribbble"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            href: "#pablo",
                                                            color: "google",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-google-plus-g"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            href: "#pablo",
                                                            color: "instagram",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                children: [
                                                    "Numbers Don",
                                                    "'",
                                                    "t Lie"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    "14.521 ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "Freelancers"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    "1.423.183 ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "Transactions"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        theme: "white",
                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: classes.socialButtons,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                simple: true,
                                                href: "#pablo",
                                                color: "twitter",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                simple: true,
                                                href: "#pablo",
                                                color: "facebook",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-square"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                simple: true,
                                                href: "#pablo",
                                                color: "dribbble",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-dribbble"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                simple: true,
                                                href: "#pablo",
                                                color: "google",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-google-plus-g"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                simple: true,
                                                href: "#pablo",
                                                color: "youtube",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-youtube"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: external_classnames_default()(classes.pullCenter, classes.copyRight),
                                    children: [
                                        "Copyright \xa9 ",
                                        1900 + new Date().getYear(),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com?ref=njsmkp-footer-components",
                                            target: "_blank",
                                            children: "Creative Tim"
                                        }),
                                        " ",
                                        "All Rights Reserved."
                                    ]
                                })
                            ]
                        }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.footer,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 3,
                                        md: 3,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#pablo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Material Kit PRO"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "Probably the best UI Kit in the world! We know you",
                                                    "'",
                                                    "ve been waiting for it, so don",
                                                    "'",
                                                    "t be shy!"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 2,
                                        md: 2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "About"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: classes.linksVertical,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Blog"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "About us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Presentation"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Contact us"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 2,
                                        md: 2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "Market"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: classes.linksVertical,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Sales FAQ"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "How to register"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Sell Goods"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Receive Payment"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Transactions Issues"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 2,
                                        md: 2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "Legal"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: classes.linksVertical,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Transactions FAQ"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Terms & conditions"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Licenses"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 3,
                                        md: 3,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                children: "Subscribe to Newsletter"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                        id: "footeremail",
                                                        formControlProps: {
                                                            fullWidth: false,
                                                            className: classes.customFormControl
                                                        },
                                                        inputProps: {
                                                            placeholder: "Your Email..."
                                                        }
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        color: "primary",
                                                        justIcon: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/components/typographyStyle.js
var typographyStyle = __webpack_require__(5124);
;// CONCATENATED MODULE: ./components/Typography/Small.js


// nodejs library to set properties for components

// @material-ui/core components

// core components

const Small_useStyles = (0,styles_.makeStyles)(typographyStyle/* default */.Z);
function Small(props) {
    const { children  } = props;
    const classes = Small_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.smallText,
        children: children
    });
};
Small.propTypes = {
    children: (external_prop_types_default()).node
};

// EXTERNAL MODULE: ./components/Typography/Danger.js
var Danger = __webpack_require__(1903);
// EXTERNAL MODULE: ./components/Typography/Warning.js
var Warning = __webpack_require__(4951);
// EXTERNAL MODULE: ./components/Typography/Success.js
var Success = __webpack_require__(3389);
// EXTERNAL MODULE: ./components/Typography/Info.js
var Info = __webpack_require__(7479);
;// CONCATENATED MODULE: ./components/Typography/Primary.js


// nodejs library to set properties for components

// @material-ui/core components

// core components

const Primary_useStyles = (0,styles_.makeStyles)(typographyStyle/* default */.Z);
function Primary(props) {
    const { children  } = props;
    const classes = Primary_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.primaryText,
        children: children
    });
};
Primary.propTypes = {
    children: (external_prop_types_default()).node
};

// EXTERNAL MODULE: ./components/Typography/Muted.js
var Muted = __webpack_require__(3278);
// EXTERNAL MODULE: ./components/Typography/Quote.js
var Quote = __webpack_require__(1394);
// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__(9641);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
;// CONCATENATED MODULE: external "@material-ui/icons/Person"
const Person_namespaceObject = require("@material-ui/icons/Person");
var Person_default = /*#__PURE__*/__webpack_require__.n(Person_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Edit"
const Edit_namespaceObject = require("@material-ui/icons/Edit");
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/Remove"
var Remove_ = __webpack_require__(7149);
var Remove_default = /*#__PURE__*/__webpack_require__.n(Remove_);
// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__(3935);
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_);
// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__(9556);
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_);
// EXTERNAL MODULE: external "@material-ui/icons/Reply"
var Reply_ = __webpack_require__(5473);
var Reply_default = /*#__PURE__*/__webpack_require__.n(Reply_);
// EXTERNAL MODULE: ./components/Table/Table.js + 1 modules
var Table = __webpack_require__(6048);
// EXTERNAL MODULE: ./components/Media/Media.js + 1 modules
var Media = __webpack_require__(1054);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/buttonGroupStyle.js
var buttonGroupStyle = __webpack_require__(7600);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/tooltipsStyle.js
var tooltipsStyle = __webpack_require__(4016);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/componentsSections/contentAreas.js




const contentAreas = {
    title: nextjs_material_kit_pro/* title */.TN,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    ...customCheckboxRadioSwitchStyle/* default */.Z,
    ...buttonGroupStyle/* default */.Z,
    ...tooltipsStyle/* default */.Z,
    space50: {
        height: "50px",
        display: "block"
    },
    padding0: {
        padding: "0 !important"
    },
    imgContainer: {
        width: "120px",
        maxHeight: "160px",
        overflow: "hidden",
        display: "block",
        "& img": {
            width: "100%"
        }
    },
    description: {
        maxWidth: "150px"
    },
    tdName: {
        minWidth: "200px",
        fontWeight: "400",
        fontSize: "1.5em"
    },
    tdNameAnchor: {
        color: nextjs_material_kit_pro/* grayColor.1 */.X_[1]
    },
    tdNameSmall: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
        fontSize: "0.75em",
        fontWeight: "300"
    },
    tdNumber: {
        textAlign: "right",
        minWidth: "150px",
        fontWeight: "300",
        fontSize: "1.125em !important"
    },
    tdNumberSmall: {
        marginRight: "3px"
    },
    tdNumberAndButtonGroup: {
        lineHeight: "1 !important",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            marginRight: "0"
        },
        "& svg": {
            marginRight: "0"
        }
    },
    customFont: {
        fontSize: "16px !important"
    },
    actionButton: {
        margin: "0px",
        padding: "5px"
    },
    textCenter: {
        textAlign: "center"
    },
    textRight: {
        textAlign: "right"
    },
    floatRight: {
        float: "right"
    },
    justifyContentCenter: {
        WebkitBoxPack: "center !important",
        MsFlexPack: "center !important",
        justifyContent: "center !important"
    },
    signInButton: {
        "& button": {
            marginRight: "5px"
        }
    }
};
/* harmony default export */ const componentsSections_contentAreas = (contentAreas);

;// CONCATENATED MODULE: ./pages-sections/components/SectionContentAreas.js


// @material-ui/core components



// @material-ui/core icons









// core components








const SectionContentAreas_useStyles = (0,styles_.makeStyles)(componentsSections_contentAreas);
function SectionContentAreas() {
    const [checked, setChecked] = external_react_default().useState([
        1,
        3,
        5
    ]);
    const handleToggle = (value)=>{
        const currentIndex = checked.indexOf(value);
        const newChecked = [
            ...checked
        ];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const classes = SectionContentAreas_useStyles();
    const fillButtons = [
        {
            color: "info",
            icon: (Person_default())
        },
        {
            color: "success",
            icon: (Edit_default())
        },
        {
            color: "danger",
            icon: (Close_default())
        }
    ].map((prop, key)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
            justIcon: true,
            size: "sm",
            color: prop.color,
            children: /*#__PURE__*/ jsx_runtime_.jsx(prop.icon, {})
        }, key);
    });
    const simpleButtons = [
        {
            color: "info",
            icon: (Person_default())
        },
        {
            color: "success",
            icon: (Edit_default())
        },
        {
            color: "danger",
            icon: (Close_default())
        }
    ].map((prop, key)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
            simple: true,
            justIcon: true,
            size: "sm",
            color: prop.color,
            children: /*#__PURE__*/ jsx_runtime_.jsx(prop.icon, {})
        }, key);
    });
    const roundButtons = [
        {
            color: "info",
            icon: (Person_default())
        },
        {
            color: "success",
            icon: (Edit_default())
        },
        {
            color: "danger",
            icon: (Close_default())
        }
    ].map((prop, key)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
            round: true,
            justIcon: true,
            size: "sm",
            color: prop.color,
            children: /*#__PURE__*/ jsx_runtime_.jsx(prop.icon, {})
        }, key);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cd-section",
        id: "contentAreas",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Content Areas"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "tables",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Tables"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Simple Table"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 10,
                                md: 8,
                                className: classes.mrAuto + " " + classes.mlAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "Simple With Actions"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Table/* default */.Z, {
                                        tableHead: [
                                            "#",
                                            "Name",
                                            "Job Position",
                                            "Since",
                                            "Salary",
                                            "Actions"
                                        ],
                                        tableData: [
                                            [
                                                "1",
                                                "Andrew Mike",
                                                "Develop",
                                                "2013",
                                                "€ 99,225",
                                                fillButtons
                                            ],
                                            [
                                                "2",
                                                "John Doe",
                                                "Design",
                                                "2012",
                                                "€ 89,241",
                                                roundButtons
                                            ],
                                            [
                                                "3",
                                                "Alex Mike",
                                                "Design",
                                                "2010",
                                                "€ 92,144",
                                                simpleButtons
                                            ],
                                            [
                                                "4",
                                                "Mike Monday",
                                                "Marketing",
                                                "2013",
                                                "€ 49,990",
                                                roundButtons
                                            ],
                                            [
                                                "5",
                                                "Paul Dickens",
                                                "Communication",
                                                "2015",
                                                "€ 69,201",
                                                fillButtons
                                            ]
                                        ],
                                        customCellClasses: [
                                            classes.textCenter,
                                            classes.textRight,
                                            classes.textRight
                                        ],
                                        customClassesForCells: [
                                            0,
                                            4,
                                            5
                                        ],
                                        customHeadCellClasses: [
                                            classes.textCenter,
                                            classes.textRight,
                                            classes.textRight
                                        ],
                                        customHeadClassesForCells: [
                                            0,
                                            4,
                                            5
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "Striped With Checkboxes"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Table/* default */.Z, {
                                        striped: true,
                                        tableHead: [
                                            "#",
                                            "",
                                            "Product Name",
                                            "Type",
                                            "Qty",
                                            "Price",
                                            "Amount"
                                        ],
                                        tableData: [
                                            [
                                                "1",
                                                /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                    checked: checked.indexOf(1) !== -1,
                                                    tabIndex: -1,
                                                    onClick: ()=>handleToggle(1),
                                                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.checkedIcon
                                                    }),
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.uncheckedIcon
                                                    }),
                                                    classes: {
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }
                                                }, 81267378),
                                                "Moleskine Agenda",
                                                "Office",
                                                "25",
                                                "€ 49",
                                                "€ 1,225"
                                            ],
                                            [
                                                "2",
                                                /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                    checked: checked.indexOf(2) !== -1,
                                                    tabIndex: -1,
                                                    onClick: ()=>handleToggle(2),
                                                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.checkedIcon
                                                    }),
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.uncheckedIcon
                                                    }),
                                                    classes: {
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }
                                                }, 81267378),
                                                "Stabilo Pen",
                                                "Office",
                                                "30",
                                                "€ 10",
                                                "€ 300"
                                            ],
                                            [
                                                "3",
                                                /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                    checked: checked.indexOf(3) !== -1,
                                                    tabIndex: -1,
                                                    onClick: ()=>handleToggle(3),
                                                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.checkedIcon
                                                    }),
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.uncheckedIcon
                                                    }),
                                                    classes: {
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }
                                                }, 564267512),
                                                "A4 Paper Pack",
                                                "Office",
                                                "50",
                                                "€ 10.99",
                                                "€ 109"
                                            ],
                                            [
                                                "4",
                                                /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                    checked: checked.indexOf(4) !== -1,
                                                    tabIndex: -1,
                                                    onClick: ()=>handleToggle(4),
                                                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.checkedIcon
                                                    }),
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.uncheckedIcon
                                                    }),
                                                    classes: {
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }
                                                }, 5642675122),
                                                "Apple iPad",
                                                "Communication",
                                                "10",
                                                "€ 499.00",
                                                "€ 4,990"
                                            ],
                                            [
                                                "5",
                                                /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                    checked: checked.indexOf(5) !== -1,
                                                    tabIndex: -1,
                                                    onClick: ()=>handleToggle(5),
                                                    checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.checkedIcon
                                                    }),
                                                    icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                        className: classes.uncheckedIcon
                                                    }),
                                                    classes: {
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }
                                                }, 56426751223),
                                                "Apple iPhone",
                                                "Communication",
                                                "10",
                                                "€ 599.00",
                                                "€ 5,999"
                                            ],
                                            {
                                                total: true,
                                                colspan: "5",
                                                amount: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                            children: "€"
                                                        }),
                                                        "12,999"
                                                    ]
                                                })
                                            }
                                        ],
                                        customCellClasses: [
                                            classes.textCenter,
                                            classes.padding0,
                                            classes.textRight,
                                            classes.textRight
                                        ],
                                        customClassesForCells: [
                                            0,
                                            1,
                                            5,
                                            6
                                        ],
                                        customHeadCellClasses: [
                                            classes.textCenter,
                                            classes.textRight,
                                            classes.textRight
                                        ],
                                        customHeadClassesForCells: [
                                            0,
                                            5,
                                            6
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Shopping Cart Table"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 12,
                                md: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Table/* default */.Z, {
                                    tableHead: [
                                        "",
                                        "PRODUCT",
                                        "COLOR",
                                        "SIZE",
                                        "PRICE",
                                        "QTY",
                                        "AMOUNT",
                                        ""
                                    ],
                                    tableData: [
                                        [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.imgContainer,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/product1.jpg",
                                                    alt: "...",
                                                    className: classes.img
                                                })
                                            }, 875643),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#jacket",
                                                        className: classes.tdNameAnchor,
                                                        children: "Spring Jacket"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNameSmall,
                                                        children: "by Dolce&Gabbana"
                                                    })
                                                ]
                                            }, 8756431),
                                            "Red",
                                            "M",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNumberSmall,
                                                        children: "€"
                                                    }),
                                                    " 549"
                                                ]
                                            }, 8756432),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "1",
                                                    ` `,
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: classes.buttonGroup,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "info",
                                                                size: "sm",
                                                                round: true,
                                                                className: classes.firstButton,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Remove_default()), {})
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "info",
                                                                size: "sm",
                                                                round: true,
                                                                className: classes.lastButton,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Add_default()), {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, 8756435),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNumberSmall,
                                                        children: "€"
                                                    }),
                                                    " 549"
                                                ]
                                            }, 87564312),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                id: "close1",
                                                title: "Remove item",
                                                placement: "left",
                                                classes: {
                                                    tooltip: classes.tooltip
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    link: true,
                                                    className: classes.actionButton,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                                                })
                                            }, 8756431234)
                                        ],
                                        [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.imgContainer,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/product2.jpg",
                                                    alt: "...",
                                                    className: classes.img
                                                })
                                            }, 875643),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: "#jacket",
                                                        className: classes.tdNameAnchor,
                                                        children: [
                                                            "Short Pants",
                                                            " "
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNameSmall,
                                                        children: "by Gucci"
                                                    })
                                                ]
                                            }, 875643),
                                            "Purple",
                                            "M",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNumberSmall,
                                                        children: "€"
                                                    }),
                                                    " 499"
                                                ]
                                            }, 875643),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "2",
                                                    ` `,
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: classes.buttonGroup,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "info",
                                                                size: "sm",
                                                                round: true,
                                                                className: classes.firstButton,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Remove_default()), {})
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "info",
                                                                size: "sm",
                                                                round: true,
                                                                className: classes.lastButton,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Add_default()), {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, 875643),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNumberSmall,
                                                        children: "€"
                                                    }),
                                                    " 998"
                                                ]
                                            }, 875643),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                id: "close2",
                                                title: "Remove item",
                                                placement: "left",
                                                classes: {
                                                    tooltip: classes.tooltip
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    link: true,
                                                    className: classes.actionButton,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                                                })
                                            }, 875643)
                                        ],
                                        [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.imgContainer,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/product3.jpg",
                                                    alt: "...",
                                                    className: classes.img
                                                })
                                            }, 875643),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#jacket",
                                                        className: classes.tdNameAnchor,
                                                        children: "Pencil Skirt"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNameSmall,
                                                        children: "by Valentino"
                                                    })
                                                ]
                                            }, 875643),
                                            "White",
                                            "XL",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNumberSmall,
                                                        children: "€"
                                                    }),
                                                    " 799"
                                                ]
                                            }, 875643),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "1",
                                                    ` `,
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: classes.buttonGroup,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "info",
                                                                size: "sm",
                                                                round: true,
                                                                className: classes.firstButton,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Remove_default()), {})
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "info",
                                                                size: "sm",
                                                                round: true,
                                                                className: classes.lastButton,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Add_default()), {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, 875643),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: classes.tdNumberSmall,
                                                        children: "€"
                                                    }),
                                                    " 799"
                                                ]
                                            }, 875643),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                id: "close3",
                                                title: "Remove item",
                                                placement: "left",
                                                classes: {
                                                    tooltip: classes.tooltip
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    link: true,
                                                    className: classes.actionButton,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                                                })
                                            }, 875643)
                                        ],
                                        {
                                            purchase: true,
                                            colspan: "3",
                                            amount: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "€"
                                                    }),
                                                    "2,346"
                                                ]
                                            }),
                                            col: {
                                                colspan: 3,
                                                text: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    color: "info",
                                                    round: true,
                                                    children: [
                                                        "Complete Purchase ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowRight_default()), {})
                                                    ]
                                                })
                                            }
                                        }
                                    ],
                                    tableShopping: true,
                                    customHeadCellClasses: [
                                        classes.textCenter,
                                        classes.description,
                                        classes.description,
                                        classes.textCenter,
                                        classes.textRight,
                                        classes.textRight
                                    ],
                                    customHeadClassesForCells: [
                                        0,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6
                                    ],
                                    customCellClasses: [
                                        classes.tdName,
                                        classes.customFont,
                                        classes.customFont,
                                        classes.tdNumber + " " + classes.textCenter,
                                        classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                                        classes.tdNumber + " " + classes.textCenter
                                    ],
                                    customClassesForCells: [
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.space50
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "comments",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Comments"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 8,
                            md: 8,
                            className: classes.mlAuto + " " + classes.mrAuto,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: classes.title + " " + classes.textCenter,
                                            children: "10 Comments"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Media/* default */.Z, {
                                            avatar: "/img/faces/avatar.jpg",
                                            title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "Tina Andrew ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "\xb7 7 minutes ago"
                                                    })
                                                ]
                                            }),
                                            body: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "Chance too good. God level bars. I",
                                                            "'",
                                                            "m so proud of @LifeOfDesiigner #1 song in the country. Panda! Don",
                                                            "'",
                                                            "t be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "All praises and blessings to the families of people who never gave up on dreams. Don",
                                                            "'",
                                                            "t forget, You",
                                                            "'",
                                                            "re Awesome!"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                        id: "tooltip-tina",
                                                        title: "Reply to comment",
                                                        placement: "top",
                                                        classes: {
                                                            tooltip: classes.tooltip
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                            color: "primary",
                                                            simple: true,
                                                            className: classes.floatRight,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {}),
                                                                " Reply"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                        color: "danger",
                                                        simple: true,
                                                        className: classes.floatRight,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                            " 243"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            innerMedias: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Media/* default */.Z, {
                                                    avatar: "/img/faces/kendall.jpg",
                                                    body: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                        id: "reply",
                                                        formControlProps: {
                                                            fullWidth: true
                                                        },
                                                        inputProps: {
                                                            multiline: true,
                                                            rows: 4,
                                                            placeholder: " Write some nice stuff or nothing..."
                                                        }
                                                    }),
                                                    footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                        color: "primary",
                                                        className: classes.floatRight,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {}),
                                                            " Reply"
                                                        ]
                                                    })
                                                }, Math.random() * Date.now())
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Media/* default */.Z, {
                                            avatar: "/img/faces/card-profile1-square.jpg",
                                            title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "John Camber ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "\xb7 Yesterday"
                                                    })
                                                ]
                                            }),
                                            body: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "Don",
                                                            "'",
                                                            "t forget, You",
                                                            "'",
                                                            "re Awesome!"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                        id: "tooltip-john",
                                                        title: "Reply to comment",
                                                        placement: "top",
                                                        classes: {
                                                            tooltip: classes.tooltip
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                            color: "primary",
                                                            simple: true,
                                                            className: classes.floatRight,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {}),
                                                                " Reply"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                        link: true,
                                                        className: classes.floatRight,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                            " 25"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            innerMedias: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Media/* default */.Z, {
                                                    avatar: "/img/faces/avatar.jpg",
                                                    title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            "Tina Andrew ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "\xb7 2 Days Ago"
                                                            })
                                                        ]
                                                    }),
                                                    body: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                children: [
                                                                    "Don",
                                                                    "'",
                                                                    "t forget, You",
                                                                    "'",
                                                                    "re Awesome!"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                                id: "tooltip-tina2",
                                                                title: "Reply to comment",
                                                                placement: "top",
                                                                classes: {
                                                                    tooltip: classes.tooltip
                                                                },
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                    color: "primary",
                                                                    simple: true,
                                                                    className: classes.floatRight,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {}),
                                                                        " Reply"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                simple: true,
                                                                color: "danger",
                                                                className: classes.floatRight,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                                    " 243"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, Math.random() * Date.now())
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Media/* default */.Z, {
                                            avatar: "/img/faces/avatar.jpg",
                                            title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "Rosa Thompson ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "\xb7 2 Days Ago"
                                                    })
                                                ]
                                            }),
                                            body: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        children: [
                                                            "Don",
                                                            "'",
                                                            "t forget, You",
                                                            "'",
                                                            "re Awesome!"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                        id: "tooltip-tina2",
                                                        title: "Reply to comment",
                                                        placement: "top",
                                                        classes: {
                                                            tooltip: classes.tooltip
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                            color: "primary",
                                                            simple: true,
                                                            className: classes.floatRight,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {}),
                                                                " Reply"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                        simple: true,
                                                        color: "danger",
                                                        className: classes.floatRight,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                            " 243"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, Math.random() * Date.now()),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                                                className: classes.textCenter + " " + classes.justifyContentCenter,
                                                pages: [
                                                    {
                                                        text: "\xab"
                                                    },
                                                    {
                                                        text: 1
                                                    },
                                                    {
                                                        text: 2
                                                    },
                                                    {
                                                        active: true,
                                                        text: 3
                                                    },
                                                    {
                                                        text: 4
                                                    },
                                                    {
                                                        text: 5
                                                    },
                                                    {
                                                        text: "\xbb"
                                                    }
                                                ],
                                                color: "primary"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: classes.textCenter,
                                    children: [
                                        "Post your comment ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "- Logged In User -"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Media/* default */.Z, {
                                    avatar: "/img/faces/avatar.jpg",
                                    body: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                        id: "logged",
                                        formControlProps: {
                                            fullWidth: true
                                        },
                                        inputProps: {
                                            multiline: true,
                                            rows: 6,
                                            placeholder: " Write some nice stuff or nothing..."
                                        }
                                    }),
                                    footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                        color: "primary",
                                        className: classes.floatRight,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {}),
                                            " Reply"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: classes.textCenter,
                                    children: [
                                        "Post your comment ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "- Not Logged In User -"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Media/* default */.Z, {
                                    avatar: "/img/placeholder.jpg",
                                    body: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                            id: "not-logged-name",
                                                            formControlProps: {
                                                                fullWidth: true
                                                            },
                                                            inputProps: {
                                                                placeholder: "Your Name"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                            id: "not-logged-email",
                                                            formControlProps: {
                                                                fullWidth: true
                                                            },
                                                            inputProps: {
                                                                placeholder: "Your Email"
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                id: "not-logged-message",
                                                formControlProps: {
                                                    fullWidth: true
                                                },
                                                inputProps: {
                                                    multiline: true,
                                                    rows: 6,
                                                    placeholder: " Write some nice stuff or nothing..."
                                                }
                                            })
                                        ]
                                    }),
                                    footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: classes.signInButton,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: "SIGN IN WITH"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                round: true,
                                                color: "twitter",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                round: true,
                                                color: "facebook",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-square"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                justIcon: true,
                                                round: true,
                                                color: "google",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-google-plus-square"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                color: "primary",
                                                className: classes.floatRight,
                                                children: "Post comment"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/imagesStyles.js
var imagesStyles = __webpack_require__(3055);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/componentsSections/typographyStyle.js


const typographyStyle_typographyStyle = {
    section: {
        padding: "70px 0"
    },
    container: nextjs_material_kit_pro/* container */.nC,
    space50: {
        height: "50px",
        display: "block"
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    typo: {
        paddingLeft: "25%",
        marginBottom: "40px",
        position: "relative",
        width: "100%"
    },
    note: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        bottom: "10px",
        color: nextjs_material_kit_pro/* grayColor.21 */.X_[21],
        display: "block",
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "13px",
        left: "0",
        marginLeft: "20px",
        position: "absolute",
        width: "260px"
    },
    marginLeft: {
        marginLeft: "auto !important"
    },
    ...imagesStyles/* default */.Z
};
/* harmony default export */ const componentsSections_typographyStyle = (typographyStyle_typographyStyle);

;// CONCATENATED MODULE: ./pages-sections/components/SectionTypography.js


// @material-ui/core components

// @material-ui/icons
// core components












const SectionTypography_useStyles = (0,styles_.makeStyles)(componentsSections_typographyStyle);
function SectionTypography() {
    const classes = SectionTypography_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "typography",
                    className: "cd-section",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Typography"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 2"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 3"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 5"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 6"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: classes.title,
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 2"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: classes.title,
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 3"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: classes.title,
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Header 4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: classes.title,
                                            children: "The Life of Material Kit"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Paragraph"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Quote"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Quote/* default */.Z, {
                                            text: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
                                            author: " Kanye West, Musician"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Muted Text"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Primary Text"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Primary, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Info Text"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Success Text"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Warning Text"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Warning/* default */.Z, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Danger Text"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Danger/* default */.Z, {
                                            children: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers..."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.typo,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.note,
                                            children: "Small Tag"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                            children: [
                                                "Header with small subtitle",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Small, {
                                                    children: [
                                                        "Use ",
                                                        '"',
                                                        "Small",
                                                        '"',
                                                        " tag for the headers"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space50
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "images",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "Images"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 2,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Rounded Image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/avatar.jpg",
                                            alt: "...",
                                            className: classes.imgRounded + " " + classes.imgFluid
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 2,
                                    className: classes.marginLeft,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Circle Image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/avatar.jpg",
                                            alt: "...",
                                            className: classes.imgRoundedCircle + " " + classes.imgFluid
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 2,
                                    className: classes.marginLeft,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Rounded Raised"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/avatar.jpg",
                                            alt: "...",
                                            className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 2,
                                    className: classes.marginLeft,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Circle Raised"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/avatar.jpg",
                                            alt: "...",
                                            className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space50
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SectionContentAreas, {})
            ]
        })
    });
};

// EXTERNAL MODULE: external "@material-ui/icons/Share"
var Share_ = __webpack_require__(4306);
var Share_default = /*#__PURE__*/__webpack_require__.n(Share_);
;// CONCATENATED MODULE: external "@material-ui/icons/ChatBubble"
const ChatBubble_namespaceObject = require("@material-ui/icons/ChatBubble");
var ChatBubble_default = /*#__PURE__*/__webpack_require__.n(ChatBubble_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/TrendingUp"
var TrendingUp_ = __webpack_require__(9321);
var TrendingUp_default = /*#__PURE__*/__webpack_require__.n(TrendingUp_);
// EXTERNAL MODULE: external "@material-ui/icons/Subject"
var Subject_ = __webpack_require__(8933);
var Subject_default = /*#__PURE__*/__webpack_require__.n(Subject_);
// EXTERNAL MODULE: external "@material-ui/icons/WatchLater"
var WatchLater_ = __webpack_require__(7225);
var WatchLater_default = /*#__PURE__*/__webpack_require__.n(WatchLater_);
// EXTERNAL MODULE: external "@material-ui/icons/Business"
var Business_ = __webpack_require__(472);
var Business_default = /*#__PURE__*/__webpack_require__.n(Business_);
;// CONCATENATED MODULE: external "@material-ui/icons/Delete"
const Delete_namespaceObject = require("@material-ui/icons/Delete");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Bookmark"
const Bookmark_namespaceObject = require("@material-ui/icons/Bookmark");
var Bookmark_default = /*#__PURE__*/__webpack_require__.n(Bookmark_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Refresh"
const Refresh_namespaceObject = require("@material-ui/icons/Refresh");
var Refresh_default = /*#__PURE__*/__webpack_require__.n(Refresh_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Receipt"
const Receipt_namespaceObject = require("@material-ui/icons/Receipt");
var Receipt_default = /*#__PURE__*/__webpack_require__.n(Receipt_namespaceObject);
// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__(8864);
// EXTERNAL MODULE: ./components/Card/CardAvatar.js + 1 modules
var CardAvatar = __webpack_require__(686);
;// CONCATENATED MODULE: ./components/Typography/Rose.js


// nodejs library to set properties for components

// @material-ui/core components

// core components

const Rose_useStyles = (0,styles_.makeStyles)(typographyStyle/* default */.Z);
function Rose(props) {
    const { children  } = props;
    const classes = Rose_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.defaultFontStyle + " " + classes.roseText,
        children: children
    });
};
Rose.propTypes = {
    children: (external_prop_types_default()).node
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/rotatingCards.js

const style = {
    rotatingCardContainer: {
        perspective: "800px",
        "& $cardRotate $back": {
            transform: "rotateY(180deg)",
            zIndex: "5",
            textAlign: "center",
            width: "100%",
            height: "100%"
        },
        "&:not($manualRotate):hover $cardRotate": {
            transform: "rotateY(180deg)"
        },
        "&$manualRotate$activateRotate $cardRotate": {
            transform: "rotateY(180deg)"
        },
        "& $cardRotate $front": {
            zIndex: "2",
            position: "relative"
        },
        "& $cardRotate $front, & $cardRotate $back": {
            backfaceVisibility: "hidden",
            boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.2)",
            position: "absolute",
            backgroundColor: nextjs_material_kit_pro/* whiteColor */.zQ,
            borderRadius: "6px",
            top: "0",
            left: "0",
            WebkitBoxPack: "center",
            MsFlexPack: "center",
            justifyContent: "center",
            MsFlexLinePack: "center",
            alignContent: "center",
            display: "flex",
            WebkitBoxOrient: "vertical",
            WebkitBoxDirection: "normal",
            flexDirection: "column"
        }
    },
    activateRotate: {},
    manualRotate: {},
    cardRotate: {
        transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
        transformStyle: "preserve-3d",
        position: "relative",
        background: "transparent"
    },
    front: {},
    back: {},
    wrapperBackground: {
        backgroundPosition: "50%",
        backgroundSize: "cover",
        textAlign: "center",
        "&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''",
            backgroundColor: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.56)",
            borderRadius: "6px"
        }
    },
    cardBodyRotate: {
        WebkitBoxPack: "center",
        MsFlexPack: "center",
        justifyContent: "center",
        MsFlexLinePack: "center",
        alignContent: "center",
        display: "flex",
        WebkitBoxOrient: "vertical",
        WebkitBoxDirection: "normal",
        flexDirection: "column"
    },
    wrapperPrimary: {
        background: "linear-gradient(60deg," + nextjs_material_kit_pro/* primaryColor.1 */.lr[1] + "," + nextjs_material_kit_pro/* primaryColor.2 */.lr[2] + ")",
        "& h1 small": {
            color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.8)"
        },
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    wrapperInfo: {
        background: "linear-gradient(60deg," + nextjs_material_kit_pro/* infoColor.1 */.bE[1] + "," + nextjs_material_kit_pro/* infoColor.2 */.bE[2] + ")",
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    wrapperSuccess: {
        background: "linear-gradient(60deg," + nextjs_material_kit_pro/* successColor.1 */.nq[1] + "," + nextjs_material_kit_pro/* successColor.2 */.nq[2] + ")",
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    wrapperWarning: {
        background: "linear-gradient(60deg," + nextjs_material_kit_pro/* warningColor.1 */.MA[1] + "," + nextjs_material_kit_pro/* warningColor.2 */.MA[2] + ")",
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    wrapperDanger: {
        background: "linear-gradient(60deg," + nextjs_material_kit_pro/* dangerColor.1 */.E7[1] + "," + nextjs_material_kit_pro/* dangerColor.2 */.E7[2] + ")",
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    wrapperRose: {
        background: "linear-gradient(60deg," + nextjs_material_kit_pro/* roseColor.1 */.An[1] + "," + nextjs_material_kit_pro/* roseColor.2 */.An[2] + ")",
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    }
};
/* harmony default export */ const rotatingCards = (style);

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js



const sectionCards_styles = {
    container: nextjs_material_kit_pro/* container */.nC,
    coloredShadow: nextjs_material_kit_pro/* coloredShadow */.DF,
    title: nextjs_material_kit_pro/* title */.TN,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    cardTitle: nextjs_material_kit_pro/* cardTitle */.X5,
    ...imagesStyles/* default */.Z,
    ...rotatingCards,
    sectionGray: {
        background: nextjs_material_kit_pro/* grayColor.14 */.X_[14]
    },
    sectionWhite: {
        background: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    cardTitleAbsolute: {
        ...nextjs_material_kit_pro/* cardTitle */.X5,
        position: "absolute !important",
        bottom: "15px !important",
        left: "15px !important",
        color: nextjs_material_kit_pro/* whiteColor */.zQ + " !important",
        fontSize: "1.125rem !important",
        textShadow: "0 2px 5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.9 */.X_[9]) + ", 0.5) !important"
    },
    cardTitleWhite: {
        "&, & a": {
            ...nextjs_material_kit_pro/* title */.TN,
            marginTop: ".625rem",
            marginBottom: "0",
            minHeight: "auto",
            color: nextjs_material_kit_pro/* whiteColor */.zQ + " !important"
        }
    },
    cardCategory: {
        marginTop: "10px",
        "& svg": {
            position: "relative",
            top: "8px"
        }
    },
    cardCategorySocial: {
        marginTop: "10px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "22px",
            position: "relative",
            marginTop: "-4px",
            top: "2px",
            marginRight: "5px"
        },
        "& svg": {
            position: "relative",
            top: "5px"
        }
    },
    cardCategorySocialWhite: {
        marginTop: "10px",
        color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.8)",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "22px",
            position: "relative",
            marginTop: "-4px",
            top: "2px",
            marginRight: "5px"
        },
        "& svg": {
            position: "relative",
            top: "5px"
        }
    },
    cardCategoryWhite: {
        marginTop: "10px",
        color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.7)"
    },
    cardCategoryFullWhite: {
        marginTop: "10px",
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    cardDescription: {
        ...nextjs_material_kit_pro/* description */.WL
    },
    cardDescriptionWhite: {
        color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.8)"
    },
    author: {
        display: "inline-flex",
        "& a": {
            color: nextjs_material_kit_pro/* grayColor.1 */.X_[1]
        }
    },
    authorWhite: {
        display: "inline-flex",
        "& a": {
            color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.8)"
        }
    },
    avatar: {
        width: "30px",
        height: "30px",
        overflow: "hidden",
        borderRadius: "50%",
        marginRight: "5px"
    },
    statsWhite: {
        color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.8)",
        display: "inline-flex",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            fontSize: "18px",
            lineHeight: "18px"
        },
        "& svg": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            width: "18px",
            height: "18px"
        }
    },
    stats: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
        display: "flex",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            fontSize: "18px",
            lineHeight: "18px"
        },
        "& svg": {
            position: "relative",
            top: "3px",
            marginRight: "3px",
            marginLeft: "3px",
            width: "18px",
            height: "18px"
        }
    },
    justifyContentCenter: {
        WebkitBoxPack: "center !important",
        MsFlexPack: "center !important",
        justifyContent: "center !important"
    },
    iconWrapper: {
        color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.76)",
        margin: "10px auto 0",
        width: "130px",
        height: "130px",
        border: "1px solid " + nextjs_material_kit_pro/* grayColor.14 */.X_[14],
        borderRadius: "50%",
        lineHeight: "174px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "55px",
            lineHeight: "55px"
        },
        "& svg": {
            width: "55px",
            height: "55px"
        }
    },
    iconWrapperColor: {
        borderColor: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.25)"
    },
    iconWhite: {
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    iconRose: {
        color: nextjs_material_kit_pro/* roseColor.0 */.An[0]
    },
    iconInfo: {
        color: nextjs_material_kit_pro/* infoColor.0 */.bE[0]
    },
    marginTop30: {
        marginTop: "30px"
    },
    textCenter: {
        textAlign: "center"
    },
    marginBottom20: {
        marginBottom: "20px"
    }
};
/* harmony default export */ const sectionCards = (sectionCards_styles);

;// CONCATENATED MODULE: ./pages-sections/components/SectionCards.js


// @material-ui/core components


// @material-ui/icons















// core components














const SectionCards_useStyles = (0,styles_.makeStyles)(sectionCards);
function SectionCards() {
    const [activeRotate1, setActiveRotate1] = external_react_default().useState("");
    const [activeRotate2, setActiveRotate2] = external_react_default().useState("");
    const [activeRotate3, setActiveRotate3] = external_react_default().useState("");
    const classes = SectionCards_useStyles();
    external_react_default().useEffect(()=>{
        if (window) {
            window.addEventListener("resize", addStylesForRotatingCards);
        }
        addStylesForRotatingCards();
        return function cleanup() {
            if (window) {
                window.removeEventListener("resize", addStylesForRotatingCards);
            }
        };
    });
    const addStylesForRotatingCards = ()=>{
        var rotatingCards = document.getElementsByClassName(classes.cardRotate);
        for(let i = 0; i < rotatingCards.length; i++){
            var rotatingCard = rotatingCards[i];
            var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
            var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
            cardFront.style.height = "unset";
            cardFront.style.width = "unset";
            cardBack.style.height = "unset";
            cardBack.style.width = "unset";
            var rotatingWrapper = rotatingCard.parentElement;
            var cardWidth = rotatingCard.parentElement.offsetWidth;
            var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
            rotatingWrapper.style.height = cardHeight + "px";
            rotatingWrapper.style["margin-bottom"] = 30 + "px";
            cardFront.style.height = "unset";
            cardFront.style.width = "unset";
            cardBack.style.height = "unset";
            cardBack.style.width = "unset";
            cardFront.style.height = cardHeight + 35 + "px";
            cardFront.style.width = cardWidth + "px";
            cardBack.style.height = cardHeight + 35 + "px";
            cardBack.style.width = cardWidth + "px";
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cd-section",
        id: "cards",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.sectionGray,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.container,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: classes.title,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Cards"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    children: "Blog Cards"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    lg: 4,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                            blog: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                                    image: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: "/img/examples/card-blog1.jpg",
                                                                                    alt: "..."
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: classes.cardTitleAbsolute,
                                                                                    children: "This Summer Will be Awesome"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.coloredShadow,
                                                                            style: {
                                                                                backgroundImage: "url('/img/examples/card-blog1.jpg')",
                                                                                opacity: "1"
                                                                            }
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                                className: classes.cardCategory,
                                                                                children: "FASHION"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: classes.cardDescription,
                                                                            children: [
                                                                                "Don",
                                                                                "'",
                                                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                            color: "info",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    color: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                            className: classes.cardCategorySocialWhite,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-twitter"
                                                                                }),
                                                                                "Twitter"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                            className: classes.cardTitleWhite,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: [
                                                                                    '"',
                                                                                    "You Don",
                                                                                    "'",
                                                                                    "t Have to Sacrifice Joy to Build a Fabulous Business and Life",
                                                                                    '"'
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.authorWhite,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "/img/faces/avatar.jpg",
                                                                                        alt: "...",
                                                                                        className: classes.imgRaised + " " + classes.avatar
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: "Tania Andrew"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: classes.statsWhite + " " + classes.mlAuto,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                                                "2.4K \xb7",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Share_default()), {}),
                                                                                "45"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    lg: 4,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Danger/* default */.Z, {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                                className: classes.cardCategory,
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((TrendingUp_default()), {}),
                                                                                    " TRENDING"
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                            className: classes.cardTitle,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: "To Grow Your Business Start Focusing on Your Employees"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.author,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "/img/faces/christian.jpg",
                                                                                        alt: "...",
                                                                                        className: classes.imgRaised + " " + classes.avatar
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: "Lord Alex"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: classes.stats + " " + classes.mlAuto,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                                                "345 \xb7",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((ChatBubble_default()), {}),
                                                                                "45"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                            blog: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                                    image: true,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/img/examples/card-blog2.jpg",
                                                                                alt: "..."
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.coloredShadow,
                                                                            style: {
                                                                                backgroundImage: "url('/img/examples/card-blog2.jpg')",
                                                                                opacity: "1"
                                                                            }
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                                className: classes.cardCategory,
                                                                                children: "Legal"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                            className: classes.cardTitle,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: "5 Common Legal Mistakes That Can Trip-Up Your Startup"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            className: classes.cardDescription,
                                                                            children: [
                                                                                "Don",
                                                                                "'",
                                                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.author,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "/img/faces/marc.jpg",
                                                                                        alt: "...",
                                                                                        className: classes.imgRaised + " " + classes.avatar
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: "Mike John"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: classes.stats + " " + classes.mlAuto,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Schedule_default()), {}),
                                                                                "5 min read"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    lg: 4,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                            blog: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                                    image: true,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/img/examples/blog8.jpg",
                                                                                alt: "..."
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.coloredShadow,
                                                                            style: {
                                                                                backgroundImage: "url('/img/examples/blog8.jpg')",
                                                                                opacity: "1"
                                                                            }
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Danger/* default */.Z, {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                                className: classes.cardCategory,
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((TrendingUp_default()), {}),
                                                                                    " TRENDING"
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                            className: classes.cardTitle,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: "To Grow Your Business Start Focusing on Your Employees"
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.author,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "/img/faces/marc.jpg",
                                                                                        alt: "...",
                                                                                        className: classes.imgRaised + " " + classes.avatar
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: "Mike John"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: classes.stats + " " + classes.mlAuto,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Schedule_default()), {}),
                                                                                "5 min read"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                            color: "success",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                color: true,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                        className: classes.cardCategorySocialWhite,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "far fa-newspaper"
                                                                            }),
                                                                            "TechCrunch"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: [
                                                                                '"',
                                                                                "Focus on Your Employees",
                                                                                '"'
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescriptionWhite,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: classes.stats + " " + classes.justifyContentCenter,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                            color: "white",
                                                                            round: true,
                                                                            children: "Read Article"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.container,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.title,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Profile Cards"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 4,
                                                    md: 4,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                        profile: true,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                                image: true,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/img/examples/card-profile4.jpg",
                                                                                alt: "..."
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: classes.cardTitleAbsolute,
                                                                                children: "Tania Andrew"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: classes.coloredShadow,
                                                                        style: {
                                                                            backgroundImage: "url('/img/examples/card-profile4.jpg')",
                                                                            opacity: "1"
                                                                        }
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: classes.cardCategory,
                                                                            children: "WEB DESIGNER"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescription,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                                profile: true,
                                                                className: classes.justifyContentCenter,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        simple: true,
                                                                        color: "twitter",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-twitter"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        simple: true,
                                                                        color: "dribbble",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-dribbble"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        simple: true,
                                                                        color: "instagram",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-instagram"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 4,
                                                    md: 4,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                        profile: true,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                                image: true,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/examples/card-profile1.jpg",
                                                                            alt: "..."
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: classes.coloredShadow,
                                                                        style: {
                                                                            backgroundImage: "url('/img/examples/card-profile1.jpg')",
                                                                            opacity: "1"
                                                                        }
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: classes.cardTitle,
                                                                        children: "Alec Thompson"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                        className: classes.cardCategory + " " + classes.cardDescription,
                                                                        children: "CEO / CO-FOUNDER"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                                profile: true,
                                                                className: classes.justifyContentCenter,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        round: true,
                                                                        color: "twitter",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-twitter"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        round: true,
                                                                        color: "facebook",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-facebook"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        round: true,
                                                                        color: "google",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-google"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 4,
                                                    md: 4,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                        profile: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                                profile: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/faces/marc.jpg",
                                                                        alt: "..."
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                        className: classes.cardCategory + " " + classes.cardDescription,
                                                                        children: "CEO / CO-FOUNDER"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: classes.cardTitle,
                                                                        children: "Alec Thompson"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescription,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        round: true,
                                                                        color: "info",
                                                                        children: "Follow"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.container,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.title,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Full Background Cards"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                        background: true,
                                                        style: {
                                                            backgroundImage: "url('/img/examples/office1.jpg')"
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            background: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: classes.cardCategoryWhite,
                                                                    children: "PRODUCTIVITY APPS"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: "The Best Productivity Apps on Market"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: classes.cardDescriptionWhite,
                                                                    children: [
                                                                        "Don",
                                                                        "'",
                                                                        "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                    simple: true,
                                                                    color: "white",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                                        " Read Article"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                    simple: true,
                                                                    color: "white",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((WatchLater_default()), {}),
                                                                        " Watch Later"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                        background: true,
                                                        style: {
                                                            backgroundImage: "url('/img/examples/card-blog3.jpg')"
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            background: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: classes.cardCategoryWhite,
                                                                    children: "MATERIALS"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: "The Sculpture Where Details Matter"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: classes.cardDescriptionWhite,
                                                                    children: [
                                                                        "Don",
                                                                        "'",
                                                                        "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                    round: true,
                                                                    color: "danger",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                                        " Read Article"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.container,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.title,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Pricing Cards"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    lg: 3,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                        pricing: true,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            pricing: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: classes.cardCategory + " " + classes.cardDescription + " " + classes.marginBottom20,
                                                                    children: "SMALL COMPANY"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: classes.iconWrapper,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((People_default()), {
                                                                        className: classes.iconInfo
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: classes.cardTitle + " " + classes.marginTop30,
                                                                    children: "$29"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: classes.cardDescription,
                                                                    children: "This is good if your company size is between 2 and 10 Persons."
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    round: true,
                                                                    color: "info",
                                                                    children: "Choose plan"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    lg: 3,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                        pricing: true,
                                                        color: "primary",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            pricing: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: classes.iconWrapper + " " + classes.iconWrapperColor,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Business_default()), {
                                                                        className: classes.iconWhite
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: classes.cardTitleWhite + " " + classes.marginTop30,
                                                                    children: "$69"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: classes.cardDescriptionWhite,
                                                                    children: "This is good if your company size is between 11 and 99 Persons."
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    round: true,
                                                                    color: "white",
                                                                    children: "Choose plan"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    lg: 3,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                        pricing: true,
                                                        background: true,
                                                        style: {
                                                            backgroundImage: "url('/img/examples/card-blog3.jpg')"
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            pricing: true,
                                                            background: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: classes.cardCategoryFullWhite,
                                                                    children: "PREMIUM"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                                    className: classes.cardTitleWhite,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                            children: "$"
                                                                        }),
                                                                        "89"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                    children: "100"
                                                                                }),
                                                                                " Projects"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                    children: "5"
                                                                                }),
                                                                                " Team Members"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                    children: "55"
                                                                                }),
                                                                                " Personal Contacts"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                    children: "5.000"
                                                                                }),
                                                                                " Messages"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    color: "danger",
                                                                    children: "Get Started"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 6,
                                                    md: 6,
                                                    lg: 3,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                        pricing: true,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            pricing: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                        className: classes.cardCategory,
                                                                        children: "PLATINUM"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                                    className: classes.cardTitle,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                            children: "$"
                                                                        }),
                                                                        "89"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {})
                                                                                }),
                                                                                " ",
                                                                                "Sharing Tools"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {})
                                                                                }),
                                                                                " ",
                                                                                "Design Tools"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Danger/* default */.Z, {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                                                                                }),
                                                                                " ",
                                                                                "Private Messages"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Danger/* default */.Z, {
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                                                                                }),
                                                                                " ",
                                                                                "Personal Brand"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    color: "primary",
                                                                    round: true,
                                                                    children: "Get Started"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "morphingCards",
                        className: "cd-section",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.container,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.title,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "Morphing Cards"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: "Rotating Cards"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.rotatingCardContainer,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    background: true,
                                                    className: classes.cardRotate,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.front + " " + classes.wrapperBackground,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-blog5.jpg')"
                                                            },
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                background: true,
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                        className: classes.cardCategoryWhite,
                                                                        children: "Full Background Card"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                            className: classes.cardTitleWhite,
                                                                            children: "This Background Card Will Rotate on Hover"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescriptionWhite,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.back + " " + classes.wrapperBackground,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-blog5.jpg')"
                                                            },
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                background: true,
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: "Manage Post"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: classes.cardDescriptionWhite,
                                                                        children: "As an Admin, you have shortcuts to edit, view or delete the posts."
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: classes.textCenter,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "info",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {})
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "success",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                                                                    children: "mode_edit"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "danger",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {})
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.rotatingCardContainer,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    className: classes.cardRotate,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.front,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                            className: classes.cardCategorySocial,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "far fa-newspaper"
                                                                                }),
                                                                                "TechCrunch"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: classes.cardTitle,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: "This Card is Doing a Full Rotation on Hover..."
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescription,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.back,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: classes.cardTitle,
                                                                        children: "Do more..."
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: classes.cardDescription,
                                                                        children: "You can read this article or share it with your friends and family on different networks..."
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: classes.textCenter,
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                                round: true,
                                                                                color: "rose",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                                                    " Read"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "twitter",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-twitter"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "dribbble",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-dribbble"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "facebook",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-facebook"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.rotatingCardContainer,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    color: "rose",
                                                    className: classes.cardRotate,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: classes.front + " " + classes.wrapperRose,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    color: true,
                                                                    className: classes.cardBodyRotate,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                            className: classes.cardCategorySocialWhite,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-dribbble"
                                                                                }),
                                                                                " Dribbble"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                            className: classes.cardTitleWhite,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: [
                                                                                    '"',
                                                                                    "Dribbble just acquired Crew, a very interesting startup...",
                                                                                    '"'
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            className: classes.cardDescriptionWhite,
                                                                            children: [
                                                                                "Don",
                                                                                "'",
                                                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.authorWhite,
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                href: "#pablo",
                                                                                onClick: (e)=>e.preventDefault(),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        src: "/img/faces/avatar.jpg",
                                                                                        alt: "...",
                                                                                        className: classes.imgRaised + " " + classes.avatar
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        children: "Tania Andrew"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: classes.statsWhite + " " + classes.mlAuto,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                                                "2.4K \xb7",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Share_default()), {}),
                                                                                "45"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.back + " " + classes.wrapperRose,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                        className: classes.cardCategorySocialWhite,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fab fa-dribbble"
                                                                            }),
                                                                            " Dribbble"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: [
                                                                                '"',
                                                                                "Dribbble just acquired Crew, a very interesting startup...",
                                                                                '"'
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                                round: true,
                                                                                color: "white",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                                                    " Read"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                                simple: true,
                                                                                color: "white",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Bookmark_default()), {}),
                                                                                    " Bookmark"
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Manual Rotating Cards"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.rotatingCardContainer + " " + classes.manualRotate + " " + activeRotate1,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    className: classes.cardRotate,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.front,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                            className: classes.cardCategorySocial,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "far fa-newspaper"
                                                                                }),
                                                                                " Manual Rotating Card"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: classes.cardTitle,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: [
                                                                                '"',
                                                                                "This card is doing a full rotation, click on the rotate button",
                                                                                '"'
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescription,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: classes.textCenter,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                            round: true,
                                                                            color: "success",
                                                                            onClick: ()=>setActiveRotate1(classes.activateRotate),
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Refresh_default()), {}),
                                                                                " Rotate"
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.back,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: classes.cardTitle,
                                                                        children: "Do more..."
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: classes.cardDescription,
                                                                        children: "You can read this article or share it with your friends and family on different networks..."
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: classes.textCenter,
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                                round: true,
                                                                                color: "rose",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                                                    " Read"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "twitter",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-twitter"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "dribbble",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-dribbble"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "facebook",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-facebook"
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                        link: true,
                                                                        onClick: ()=>setActiveRotate1(""),
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Refresh_default()), {}),
                                                                            " Back..."
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.rotatingCardContainer + " " + classes.manualRotate + " " + activeRotate2,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    className: classes.cardRotate,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.front + " " + classes.wrapperBackground,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-blog6.jpg')"
                                                            },
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                background: true,
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                        className: classes.cardCategoryWhite,
                                                                        children: "Full Background Card"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                            className: classes.cardTitleWhite,
                                                                            children: "This card is doing a full rotation, click on the rotate button"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescriptionWhite,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human..."
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: classes.textCenter,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                            round: true,
                                                                            color: "danger",
                                                                            onClick: ()=>setActiveRotate2(classes.activateRotate),
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Refresh_default()), {}),
                                                                                " Rotate"
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.back + " " + classes.wrapperBackground,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-blog6.jpg')"
                                                            },
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                background: true,
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: "Manage Post"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: classes.cardDescriptionWhite,
                                                                        children: "As an Admin, you have shortcuts to edit, view or delete the posts."
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: classes.textCenter,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "info",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {})
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "success",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                                                                    children: "mode_edit"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "danger",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Delete_default()), {})
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                                round: true,
                                                                                color: "danger",
                                                                                onClick: ()=>setActiveRotate2(""),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Refresh_default()), {}),
                                                                                    " Back..."
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.rotatingCardContainer + " " + classes.manualRotate + " " + activeRotate3,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    className: classes.cardRotate,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.front + " " + classes.wrapperWarning,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                        className: classes.cardCategorySocialWhite,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Receipt_default()), {}),
                                                                            " Manual Rotating Card"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            href: "#pablo",
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            children: [
                                                                                '"',
                                                                                "This card is doing a full rotation, click on the rotate button",
                                                                                '"'
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: classes.cardDescriptionWhite,
                                                                        children: [
                                                                            "Don",
                                                                            "'",
                                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: classes.textCenter,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                            round: true,
                                                                            color: "white",
                                                                            onClick: ()=>setActiveRotate3(classes.activateRotate),
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Refresh_default()), {}),
                                                                                " Rotate"
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.back + " " + classes.wrapperWarning,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                className: classes.cardBodyRotate,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                        className: classes.cardTitleWhite,
                                                                        children: "Do more..."
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: classes.cardDescriptionWhite,
                                                                        children: "You can read this article or share it with your friends and family on different networks..."
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: classes.textCenter,
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                                round: true,
                                                                                color: "white",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                                                    " Read"
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "white",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-twitter"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "white",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-dribbble"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                round: true,
                                                                                justIcon: true,
                                                                                color: "white",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fab fa-facebook"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                                round: true,
                                                                                color: "white",
                                                                                onClick: ()=>setActiveRotate3(""),
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Refresh_default()), {}),
                                                                                    " Rotate"
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: classes.container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 7,
                                    md: 7,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: classes.title,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: "Dynamic Shadows™"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    "Material Kit PRO is coming with the famous colored shadows. That means each image from the cards is getting an unique color shadow. You don",
                                                    "'",
                                                    "t have to do anything to activate them, just enjoy the new look of your website."
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            blog: true,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/color1.jpg",
                                                                alt: "..."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/color1.jpg')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Warning/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: classes.cardCategory,
                                                                children: "DYNAMIC SHADOWS"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: "The image from this card is getting a yellow shadow"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            blog: true,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/color2.jpg",
                                                                alt: "..."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/color2.jpg')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Rose, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: classes.cardCategory,
                                                                children: "DYNAMIC SHADOWS"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: "The image from this card is getting a pink shadow"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            blog: true,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/color3.jpg",
                                                                alt: "..."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/color3.jpg')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: classes.cardCategory,
                                                                children: "DYNAMIC SHADOWS"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: "The image from this card is getting a blue shadow"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.sectionWhite,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.container,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Plain Card"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    blog: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                            image: true,
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/examples/blog5.jpg",
                                                                            alt: "..."
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: classes.cardTitleAbsolute,
                                                                            children: "This Summer Will be Awesome"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: classes.coloredShadow,
                                                                    style: {
                                                                        backgroundImage: "url('/img/examples/blog5.jpg')",
                                                                        opacity: "1"
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                        className: classes.cardCategory,
                                                                        children: "FASHION"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: classes.cardDescription,
                                                                    children: [
                                                                        "Don",
                                                                        "'",
                                                                        "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    color: "info",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            color: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                    className: classes.cardCategorySocialWhite,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "fab fa-twitter"
                                                                        }),
                                                                        "Twitter"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    className: classes.cardTitleWhite,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: [
                                                                            '"',
                                                                            "You Don",
                                                                            "'",
                                                                            "t Have to Sacrifice Joy to Build a Fabulous Business and Life",
                                                                            '"'
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: classes.authorWhite,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/img/faces/avatar.jpg",
                                                                                alt: "...",
                                                                                className: classes.imgRaised + " " + classes.avatar
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "Tania Andrew"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: classes.statsWhite + " " + classes.mlAuto,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {}),
                                                                        "2.4K \xb7",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Share_default()), {}),
                                                                        "45"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                blog: true,
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                        image: true,
                                                        plain: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/img/examples/blog1.jpg",
                                                                    alt: "..."
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.coloredShadow,
                                                                style: {
                                                                    backgroundImage: "url('/img/examples/blog1.jpg')",
                                                                    opacity: "1"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        plain: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: classes.cardCategory,
                                                                    children: "Legal"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: "5 Common Legal Mistakes That Can Trip-Up Your Startup"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: classes.cardDescription,
                                                                children: [
                                                                    "Don",
                                                                    "'",
                                                                    "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                        plain: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.author,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "/img/faces/marc.jpg",
                                                                            alt: "...",
                                                                            className: classes.imgRaised + " " + classes.avatar
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "Mike John"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: classes.stats + " " + classes.mlAuto,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Schedule_default()), {}),
                                                                    "5 min read"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                    blog: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                            image: true,
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/examples/blog6.jpg",
                                                                        alt: "..."
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: classes.coloredShadow,
                                                                    style: {
                                                                        backgroundImage: "url('/img/examples/blog6.jpg')",
                                                                        opacity: "1"
                                                                    }
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Danger/* default */.Z, {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                        className: classes.cardCategory,
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((TrendingUp_default()), {}),
                                                                            " TRENDING"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    className: classes.cardTitle,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: "To Grow Your Business Start Focusing on Your Employees"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: classes.author,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                src: "/img/faces/marc.jpg",
                                                                                alt: "...",
                                                                                className: classes.imgRaised + " " + classes.avatar
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "Mike John"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: classes.stats + " " + classes.mlAuto,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Schedule_default()), {}),
                                                                        "5 min read"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                                    color: "danger",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        color: true,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                                className: classes.cardCategorySocialWhite,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "far fa-newspaper"
                                                                    }),
                                                                    " The Next Web"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitleWhite,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: [
                                                                        '"',
                                                                        "Focus on Your Employees",
                                                                        '"'
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: classes.cardDescriptionWhite,
                                                                children: [
                                                                    "Don",
                                                                    "'",
                                                                    "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.stats + " " + classes.justifyContentCenter,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    color: "white",
                                                                    round: true,
                                                                    children: "Read Article"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.container,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            profile: true,
                                            plain: true,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/img/examples/card-profile4.jpg",
                                                                    alt: "..."
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: classes.cardTitleAbsolute,
                                                                    children: "Tania Andrew"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-profile4.jpg')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: classes.cardCategory,
                                                                children: "WEB DESIGNER"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: classes.cardDescription,
                                                            children: [
                                                                "Don",
                                                                "'",
                                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                    profile: true,
                                                    plain: true,
                                                    className: classes.justifyContentCenter,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "twitter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "dribbble",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-dribbble"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "instagram",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            profile: true,
                                            plain: true,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/card-profile1.jpg",
                                                                alt: "..."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-profile1.jpg')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Alec Thompson"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: classes.cardCategory + " " + classes.cardDescription,
                                                            children: "CEO / CO-FOUNDER"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                    profile: true,
                                                    plain: true,
                                                    className: classes.justifyContentCenter,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            round: true,
                                                            color: "twitter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            round: true,
                                                            color: "facebook",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-facebook"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            round: true,
                                                            color: "google",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-google"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            profile: true,
                                            plain: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                    profile: true,
                                                    plain: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/faces/marc.jpg",
                                                            alt: "..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: classes.cardCategory + " " + classes.cardDescription,
                                                            children: "CEO / CO-FOUNDER"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Alec Thompson"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: classes.cardDescription,
                                                            children: [
                                                                "Don",
                                                                "'",
                                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            round: true,
                                                            color: "info",
                                                            children: "Follow"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: external "react-datetime"
const external_react_datetime_namespaceObject = require("react-datetime");
var external_react_datetime_default = /*#__PURE__*/__webpack_require__.n(external_react_datetime_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/Slide"
const Slide_namespaceObject = require("@material-ui/core/Slide");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/Dialog"
const Dialog_namespaceObject = require("@material-ui/core/Dialog");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/DialogTitle"
const DialogTitle_namespaceObject = require("@material-ui/core/DialogTitle");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/DialogContent"
const DialogContent_namespaceObject = require("@material-ui/core/DialogContent");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/DialogActions"
const DialogActions_namespaceObject = require("@material-ui/core/DialogActions");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/core/Popover"
const Popover_namespaceObject = require("@material-ui/core/Popover");
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/LibraryBooks"
const LibraryBooks_namespaceObject = require("@material-ui/icons/LibraryBooks");
var LibraryBooks_default = /*#__PURE__*/__webpack_require__.n(LibraryBooks_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Notifications"
const Notifications_namespaceObject = require("@material-ui/icons/Notifications");
var Notifications_default = /*#__PURE__*/__webpack_require__.n(Notifications_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/Assignment"
var Assignment_ = __webpack_require__(1185);
var Assignment_default = /*#__PURE__*/__webpack_require__.n(Assignment_);
// EXTERNAL MODULE: external "@material-ui/icons/Timeline"
var Timeline_ = __webpack_require__(1080);
var Timeline_default = /*#__PURE__*/__webpack_require__.n(Timeline_);
// EXTERNAL MODULE: external "@material-ui/icons/Code"
var Code_ = __webpack_require__(752);
var Code_default = /*#__PURE__*/__webpack_require__.n(Code_);
// EXTERNAL MODULE: external "@material-ui/icons/Group"
var Group_ = __webpack_require__(8495);
var Group_default = /*#__PURE__*/__webpack_require__.n(Group_);
;// CONCATENATED MODULE: external "@material-ui/icons/AttachFile"
const AttachFile_namespaceObject = require("@material-ui/icons/AttachFile");
var AttachFile_default = /*#__PURE__*/__webpack_require__.n(AttachFile_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/Layers"
var Layers_ = __webpack_require__(3462);
var Layers_default = /*#__PURE__*/__webpack_require__.n(Layers_);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/instructionStyle.js
const instructionStyle = {
    instruction: {},
    picture: {},
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "6px",
        display: "block",
        maxWidth: "100%"
    }
};
/* harmony default export */ const components_instructionStyle = (instructionStyle);

;// CONCATENATED MODULE: ./components/Instruction/Instruction.js




// @material-ui/core components

// core components



const Instruction_useStyles = (0,styles_.makeStyles)(components_instructionStyle);
function Instruction(props) {
    const { title , text , image , className , imageClassName , imageAlt  } = props;
    const classes = Instruction_useStyles();
    const instructionClasses = external_classnames_default()({
        [classes.instruction]: true,
        [className]: className !== undefined
    });
    const pictureClasses = external_classnames_default()({
        [classes.picture]: true,
        [imageClassName]: imageClassName !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: instructionClasses,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 12,
                    md: 8,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: text
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 12,
                    md: 4,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: pictureClasses,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image,
                            alt: imageAlt,
                            className: classes.image
                        })
                    })
                })
            ]
        })
    });
};
Instruction.defaultProps = {
    imageAlt: "..."
};
Instruction.propTypes = {
    title: (external_prop_types_default()).node.isRequired,
    text: (external_prop_types_default()).node.isRequired,
    image: (external_prop_types_default()).string.isRequired,
    imageAlt: (external_prop_types_default()).string,
    className: (external_prop_types_default()).string,
    imageClassName: (external_prop_types_default()).string
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/customFileInputStyle.js
const customFileInputStyle = {
    inputFile: {
        opacity: "0",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "-1"
    },
    inputFileWrapper: {
        "& button svg": {
            color: "inherit"
        }
    }
};
/* harmony default export */ const components_customFileInputStyle = (customFileInputStyle);

;// CONCATENATED MODULE: ./components/CustomFileInput/CustomFileInput.js


// used for making the prop types of this component

// @material-ui/core components

// core components



const CustomFileInput_useStyles = (0,styles_.makeStyles)(components_customFileInputStyle);
function CustomFileInput(props) {
    const [fileNames, setFileNames] = external_react_default().useState("");
    // eslint-disable-next-line
    const [files, setFiles] = external_react_default().useState(null);
    let hiddenFile = /*#__PURE__*/ external_react_default().createRef();
    const onFocus = (e)=>{
        hiddenFile.current.click(e);
    };
    // eslint-disable-next-line
    const handleSubmit = (e)=>{
        e.preventDefault();
    // files is the file/image uploaded
    // in this function you can save the image (files) on form submit
    // you have to call it yourself
    };
    const addFile = (e)=>{
        let fileNames = "";
        let files = e.target.files;
        for(let i = 0; i < e.target.files.length; i++){
            fileNames = fileNames + e.target.files[i].name;
            if (props.multiple && i !== e.target.files.length - 1) {
                fileNames = fileNames + ", ";
            }
        }
        setFiles(files);
        setFileNames(fileNames);
    };
    const { id , endButton , startButton , inputProps , formControlProps , multiple  } = props;
    const classes = CustomFileInput_useStyles();
    if (inputProps && inputProps.type && inputProps.type === "file") {
        inputProps.type = "text";
    }
    let buttonStart;
    let buttonEnd;
    if (startButton) {
        buttonStart = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
            ...startButton.buttonProps,
            children: [
                startButton.icon !== undefined ? startButton.icon : null,
                startButton.text !== undefined ? startButton.text : null
            ]
        });
    }
    if (endButton) {
        buttonEnd = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
            ...endButton.buttonProps,
            children: [
                endButton.icon !== undefined ? endButton.icon : null,
                endButton.text !== undefined ? endButton.text : null
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.inputFileWrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "file",
                className: classes.inputFile,
                multiple: multiple,
                ref: hiddenFile,
                onChange: addFile
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                id: id,
                formControlProps: {
                    ...formControlProps
                },
                inputProps: {
                    ...inputProps,
                    onClick: onFocus,
                    value: fileNames,
                    endAdornment: buttonEnd,
                    startAdornment: buttonStart
                }
            })
        ]
    });
};
CustomFileInput.defaultProps = {
    multiple: false
};
CustomFileInput.propTypes = {
    id: (external_prop_types_default()).string,
    endButton: (external_prop_types_default()).object,
    startButton: (external_prop_types_default()).object,
    inputProps: (external_prop_types_default()).object,
    formControlProps: (external_prop_types_default()).object,
    multiple: (external_prop_types_default()).bool
};

// EXTERNAL MODULE: ./components/InfoArea/InfoArea.js + 1 modules
var InfoArea = __webpack_require__(3044);
// EXTERNAL MODULE: ./components/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(7371);
;// CONCATENATED MODULE: ./components/CustomUpload/ImageUpload.js


// used for making the prop types of this component

// core components

function ImageUpload(props) {
    const [file, setFile] = external_react_default().useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = external_react_default().useState(props.avatar ? "/img/placeholder.jpg" : "/img/image_placeholder.jpg");
    let fileInput = /*#__PURE__*/ external_react_default().createRef();
    const handleImageChange = (e)=>{
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = ()=>{
            setFile(file);
            setImagePreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };
    // eslint-disable-next-line
    const handleSubmit = (e)=>{
        e.preventDefault();
    // file is the file/image uploaded
    // in this function you can save the image (file) on form submit
    // you have to call it yourself
    };
    const handleClick = ()=>{
        fileInput.current.click();
    };
    const handleRemove = ()=>{
        setFile(null);
        setImagePreviewUrl(props.avatar ? "/img/placeholder.jpg" : "/img/image_placeholder.jpg");
        fileInput.current.value = null;
    };
    let { avatar , addButtonProps , changeButtonProps , removeButtonProps  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fileinput text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "file",
                onChange: handleImageChange,
                ref: fileInput
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "thumbnail" + (avatar ? " img-circle" : ""),
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: imagePreviewUrl,
                    alt: "..."
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: file === null ? /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    ...addButtonProps,
                    onClick: ()=>handleClick(),
                    children: avatar ? "Add Photo" : "Select image"
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            ...changeButtonProps,
                            onClick: ()=>handleClick(),
                            children: "Change"
                        }),
                        avatar ? /*#__PURE__*/ jsx_runtime_.jsx("br", {}) : null,
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                            ...removeButtonProps,
                            onClick: ()=>handleRemove(),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-times"
                                }),
                                " Remove"
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
ImageUpload.propTypes = {
    avatar: (external_prop_types_default()).bool,
    addButtonProps: (external_prop_types_default()).object,
    changeButtonProps: (external_prop_types_default()).object,
    removeButtonProps: (external_prop_types_default()).object
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/modalStyle.js

const modalStyle = (theme)=>({
        modalRoot: {
            overflow: "auto",
            display: "block"
        },
        modal: {
            [theme.breakpoints.up("sm")]: {
                maxWidth: "500px",
                margin: "auto"
            },
            borderRadius: "6px",
            overflow: "visible",
            maxHeight: "unset",
            width: "100%",
            marginTop: "130px !important"
        },
        modalHeader: {
            borderBottom: "none",
            paddingTop: "24px",
            paddingRight: "24px",
            paddingBottom: "0",
            paddingLeft: "24px",
            minHeight: "16.43px"
        },
        modalTitle: {
            margin: "0",
            lineHeight: "1.5"
        },
        modalCloseButton: {
            "&, &:hover": {
                color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
            },
            "&:hover": {
                opacity: "1"
            },
            cursor: "pointer",
            padding: "1rem",
            margin: "-1rem -1rem -1rem auto",
            backgroundColor: "transparent",
            border: "0",
            WebkitAppearance: "none",
            float: "right",
            fontSize: "1.5rem",
            fontWeight: "500",
            lineHeight: "1",
            textShadow: "0 1px 0 " + nextjs_material_kit_pro/* whiteColor */.zQ,
            opacity: ".5"
        },
        modalClose: {
            width: "16px",
            height: "16px"
        },
        modalBody: {
            paddingTop: "24px",
            paddingRight: "24px",
            paddingBottom: "16px",
            paddingLeft: "24px",
            position: "relative",
            overflow: "visible"
        },
        modalFooter: {
            padding: "15px",
            textAlign: "right",
            paddingTop: "0",
            margin: "0"
        },
        modalFooterCenter: {
            marginLeft: "auto",
            marginRight: "auto"
        },
        instructionNoticeModal: {
            marginBottom: "25px"
        },
        imageNoticeModal: {
            maxWidth: "150px"
        },
        modalLarge: {
            [theme.breakpoints.up("md")]: {
                maxWidth: "800px"
            }
        },
        modalSmall: {
            [theme.breakpoints.up("sm")]: {
                width: "300px",
                margin: "auto"
            },
            margin: "0 auto"
        },
        modalSmallBody: {
            marginTop: "20px"
        },
        modalSmallFooterFirstButton: {
            margin: "0",
            paddingLeft: "16px",
            paddingRight: "16px",
            width: "auto"
        },
        modalSmallFooterSecondButton: {
            marginBottom: "0",
            marginLeft: "5px"
        },
        modalLogin: {
            maxWidth: "360px",
            overflowY: "visible",
            width: "100%",
            "& $modalCloseButton": {
                color: nextjs_material_kit_pro/* whiteColor */.zQ,
                top: "-10px",
                right: "10px",
                textShadow: "none",
                position: "relative"
            },
            "& $modalHeader": {
                borderBottom: "none",
                paddingTop: "24px",
                paddingRight: "24px",
                paddingBottom: "0",
                paddingLeft: "24px"
            },
            "& $modalBody": {
                paddingBottom: "0",
                paddingTop: "0"
            },
            "& $modalFooter": {
                paddingBottom: "0",
                paddingTop: "0"
            }
        },
        modalLoginCard: {
            marginBottom: "0",
            margin: "0",
            "& $modalHeader": {
                paddingTop: "0"
            }
        },
        modalSignup: {
            maxWidth: "900px",
            width: "100%",
            "& $modalHeader": {
                paddingTop: "0"
            },
            "& $modalTitle": {
                textAlign: "center",
                width: "100%",
                marginTop: "0.625rem"
            },
            "& $modalBody": {
                paddingBottom: "0",
                paddingTop: "0"
            }
        },
        modalSignupCard: {
            padding: "40px 0",
            margin: "0"
        }
    });
/* harmony default export */ const nextjs_material_kit_pro_modalStyle = (modalStyle);

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/popoverStyles.js

const popoverStyles = {
    popover: {
        padding: "0",
        boxShadow: "0 16px 24px 2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.14), 0 6px 30px 5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.2)",
        lineHeight: "1.5em",
        background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.15 */.X_[15]) + ",0.9)",
        border: "none",
        borderRadius: "3px",
        display: "block",
        maxWidth: "276px",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontStyle: "normal",
        fontWeight: "400",
        textAlign: "start",
        textDecoration: "none",
        textShadow: "none",
        textTransform: "none",
        letterSpacing: "normal",
        wordBreak: "normal",
        wordSpacing: "normal",
        whiteSpace: "normal",
        lineBreak: "auto",
        fontSize: "0.875rem",
        wordWrap: "break-word"
    },
    popoverBottom: {
        marginTop: "5px"
    },
    popoverHeader: {
        border: "none",
        padding: "15px 15px 5px",
        fontSize: "1.125rem",
        margin: "0",
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        borderTopLeftRadius: "calc(0.3rem - 1px)",
        borderTopRightRadius: "calc(0.3rem - 1px)"
    },
    popoverBody: {
        padding: "10px 15px 15px",
        lineHeight: "1.4",
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    }
};
/* harmony default export */ const nextjs_material_kit_pro_popoverStyles = (popoverStyles);

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/componentsSections/javascriptStyles.js





const javascriptStyles = (theme)=>({
        container: nextjs_material_kit_pro/* container */.nC,
        description: nextjs_material_kit_pro/* description */.WL,
        cardTitle: nextjs_material_kit_pro/* cardTitle */.X5,
        mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
        mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
        ...tooltipsStyle/* default */.Z,
        ...nextjs_material_kit_pro_popoverStyles,
        ...nextjs_material_kit_pro_modalStyle(theme),
        ...customCheckboxRadioSwitchStyle/* default */.Z,
        section: {
            padding: "70px 0 0"
        },
        title: {
            ...nextjs_material_kit_pro/* title */.TN,
            marginTop: "30px",
            minHeight: "32px",
            textDecoration: "none"
        },
        icon: {
            width: "24px",
            height: "24px",
            color: nextjs_material_kit_pro/* grayColor.13 */.X_[13]
        },
        label: {
            color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.26)",
            cursor: "pointer",
            display: "inline-flex",
            fontSize: "14px",
            transition: "0.3s ease all",
            lineHeight: "1.428571429",
            fontWeight: "400",
            paddingLeft: "0"
        },
        textCenter: {
            textAlign: "center"
        },
        cardTitleWhite: {
            ...nextjs_material_kit_pro/* cardTitle */.X5,
            color: nextjs_material_kit_pro/* whiteColor */.zQ + "  !important"
        },
        socialLine: {
            marginTop: "1rem",
            textAlign: "center",
            padding: "0"
        },
        socialLineButton: {
            "&, &:hover": {
                color: nextjs_material_kit_pro/* whiteColor */.zQ
            },
            marginLeft: "5px",
            marginRight: "5px"
        },
        cardLoginHeader: {
            marginTop: "-40px",
            padding: "20px 0",
            width: "100%",
            marginBottom: "15px"
        },
        cardLoginBody: {
            paddingTop: "0",
            paddingBottom: "0"
        },
        justifyContentCenter: {
            WebkitBoxPack: "center !important",
            MsFlexPack: "center !important",
            justifyContent: "center !important"
        },
        infoArea: {
            padding: "0px 0px 20px !important"
        },
        space50: {
            height: "50px",
            display: "block"
        }
    });
/* harmony default export */ const componentsSections_javascriptStyles = (javascriptStyles);

;// CONCATENATED MODULE: ./pages-sections/components/SectionJavascript.js
/*eslint-disable*/ 

// react plugin for creating date-time-picker

// @material-ui/core components














// @material-ui/icons














// core components













const SectionJavascript_useStyles = (0,styles_.makeStyles)(componentsSections_javascriptStyles);
const Transition = /*#__PURE__*/ external_react_default().forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Slide_default()), {
        direction: "down",
        ref: ref,
        ...props
    });
});
Transition.displayName = "Transition";
function SectionJavascript() {
    const [anchorElLeft, setAnchorElLeft] = external_react_default().useState(null);
    const [anchorElTop, setAnchorElTop] = external_react_default().useState(null);
    const [anchorElBottom, setAnchorElBottom] = external_react_default().useState(null);
    const [anchorElRight, setAnchorElRight] = external_react_default().useState(null);
    const [checked, setChecked] = external_react_default().useState([]);
    const [classicModal, setClassicModal] = external_react_default().useState(false);
    const [noticeModal, setNoticeModal] = external_react_default().useState(false);
    const [smallModal, setSmallModal] = external_react_default().useState(false);
    const [loginModal, setLoginModal] = external_react_default().useState(false);
    const [signupModal, setSignupModal] = external_react_default().useState(false);
    const handleToggle = (value)=>{
        const currentIndex = checked.indexOf(value);
        const newChecked = [
            ...checked
        ];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const classes = SectionJavascript_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section + " cd-section",
        id: "javascriptComponents",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.title,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Javascript components"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 6,
                            md: 6,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Modal"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    block: true,
                                                    round: true,
                                                    onClick: ()=>setClassicModal(true),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((LibraryBooks_default()), {}),
                                                        "Classic"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                                                    classes: {
                                                        root: classes.modalRoot,
                                                        paper: classes.modal
                                                    },
                                                    open: classicModal,
                                                    TransitionComponent: Transition,
                                                    keepMounted: true,
                                                    onClose: ()=>setClassicModal(false),
                                                    "aria-labelledby": "classic-modal-slide-title",
                                                    "aria-describedby": "classic-modal-slide-description",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogTitle_default()), {
                                                            id: "classic-modal-slide-title",
                                                            disableTypography: true,
                                                            className: classes.modalHeader,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                    simple: true,
                                                                    className: classes.modalCloseButton,
                                                                    "aria-label": "Close",
                                                                    onClick: ()=>setClassicModal(false),
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                            className: classes.modalClose
                                                                        })
                                                                    ]
                                                                }, "close"),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    className: classes.modalTitle,
                                                                    children: "Modal title"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                                                            id: "classic-modal-slide-description",
                                                            className: classes.modalBody,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                                                            className: classes.modalFooter,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    link: true,
                                                                    children: "Nice Button"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    onClick: ()=>setClassicModal(false),
                                                                    color: "danger",
                                                                    simple: true,
                                                                    children: "Close"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    block: true,
                                                    round: true,
                                                    onClick: ()=>setNoticeModal(true),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                                            children: "info_outline"
                                                        }),
                                                        " Notice"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                                                    classes: {
                                                        root: classes.modalRoot,
                                                        paper: classes.modal
                                                    },
                                                    open: noticeModal,
                                                    TransitionComponent: Transition,
                                                    keepMounted: true,
                                                    onClose: ()=>setNoticeModal(false),
                                                    "aria-labelledby": "notice-modal-slide-title",
                                                    "aria-describedby": "notice-modal-slide-description",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogTitle_default()), {
                                                            id: "notice-modal-slide-title",
                                                            disableTypography: true,
                                                            className: classes.modalHeader,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                    simple: true,
                                                                    className: classes.modalCloseButton,
                                                                    "aria-label": "Close",
                                                                    onClick: ()=>setNoticeModal(false),
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                            className: classes.modalClose
                                                                        })
                                                                    ]
                                                                }, "close"),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    className: classes.modalTitle,
                                                                    children: "How Do You Become an Affiliate?"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogContent_default()), {
                                                            id: "notice-modal-slide-description",
                                                            className: classes.modalBody,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Instruction, {
                                                                    title: "1. Register",
                                                                    text: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        children: [
                                                                            "The first step is to create an account at",
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "https://www.creative-tim.com/?ref=njsmkp-javascript-components",
                                                                                target: "_blank",
                                                                                children: "Creative Tim"
                                                                            }),
                                                                            ". You can choose a social network or go for the classic version, whatever works best for you."
                                                                        ]
                                                                    }),
                                                                    image: "/img/dg1.jpg",
                                                                    className: classes.instructionNoticeModal,
                                                                    imageClassName: classes.imageNoticeModal
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Instruction, {
                                                                    title: "2. Apply",
                                                                    text: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        children: [
                                                                            "The first step is to create an account at",
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: "https://www.creative-tim.com/?ref=njsmkp-javascript-components",
                                                                                target: "_blank",
                                                                                children: "Creative Tim"
                                                                            }),
                                                                            ". You can choose a social network or go for the classic version, whatever works best for you."
                                                                        ]
                                                                    }),
                                                                    image: "/img/dg2.jpg",
                                                                    className: classes.instructionNoticeModal,
                                                                    imageClassName: classes.imageNoticeModal
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    children: [
                                                                        "If you have more questions, don",
                                                                        "'",
                                                                        "t hesitate to contact us or send us a tweet @creativetim. We",
                                                                        "'",
                                                                        "re here to help!"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((DialogActions_default()), {
                                                            className: classes.modalFooter + " " + classes.modalFooterCenter,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                onClick: ()=>setNoticeModal(false),
                                                                color: "info",
                                                                round: true,
                                                                children: "Sounds Good"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 4,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    block: true,
                                                    round: true,
                                                    onClick: ()=>setSmallModal(true),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Notifications_default()), {}),
                                                        " Small Alert"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                                                    classes: {
                                                        root: classes.modalRoot,
                                                        paper: classes.modal + " " + classes.modalSmall
                                                    },
                                                    open: smallModal,
                                                    TransitionComponent: Transition,
                                                    keepMounted: true,
                                                    onClose: ()=>setSmallModal(false),
                                                    "aria-labelledby": "small-modal-slide-title",
                                                    "aria-describedby": "small-modal-slide-description",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                                                            id: "small-modal-slide-title",
                                                            disableTypography: true,
                                                            className: classes.modalHeader,
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                simple: true,
                                                                className: classes.modalCloseButton,
                                                                "aria-label": "Close",
                                                                onClick: ()=>setSmallModal(false),
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                        className: classes.modalClose
                                                                    })
                                                                ]
                                                            }, "close")
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                                                            id: "small-modal-slide-description",
                                                            className: classes.modalBody + " " + classes.modalSmallBody,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: "Are you sure you want to do this?"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogActions_default()), {
                                                            className: classes.modalFooter + " " + classes.modalFooterCenter,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    onClick: ()=>setSmallModal(false),
                                                                    link: true,
                                                                    className: classes.modalSmallFooterFirstButton,
                                                                    children: "Never Mind"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    onClick: ()=>setSmallModal(false),
                                                                    color: "success",
                                                                    simple: true,
                                                                    className: classes.modalSmallFooterFirstButton + " " + classes.modalSmallFooterSecondButton,
                                                                    children: "Yes"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 6,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    block: true,
                                                    round: true,
                                                    onClick: ()=>setLoginModal(true),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((AccountCircle_default()), {}),
                                                        " Login"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
                                                    classes: {
                                                        root: classes.modalRoot,
                                                        paper: classes.modal + " " + classes.modalLogin
                                                    },
                                                    open: loginModal,
                                                    TransitionComponent: Transition,
                                                    keepMounted: true,
                                                    onClose: ()=>setLoginModal(false),
                                                    "aria-labelledby": "login-modal-slide-title",
                                                    "aria-describedby": "login-modal-slide-description",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                        plain: true,
                                                        className: classes.modalLoginCard,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                                                                id: "login-modal-slide-title",
                                                                disableTypography: true,
                                                                className: classes.modalHeader,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                                    plain: true,
                                                                    color: "primary",
                                                                    className: classes.textCenter + " " + classes.cardLoginHeader,
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                            simple: true,
                                                                            className: classes.modalCloseButton,
                                                                            "aria-label": "Close",
                                                                            onClick: ()=>setLoginModal(false),
                                                                            children: [
                                                                                " ",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                                    className: classes.modalClose
                                                                                })
                                                                            ]
                                                                        }, "close"),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                            className: classes.cardTitleWhite,
                                                                            children: "Log in"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: classes.socialLine,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                    justIcon: true,
                                                                                    link: true,
                                                                                    className: classes.socialLineButton,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fab fa-facebook-square"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                    justIcon: true,
                                                                                    link: true,
                                                                                    className: classes.socialLineButton,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fab fa-twitter"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                    justIcon: true,
                                                                                    link: true,
                                                                                    className: classes.socialLineButton,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                        className: "fab fa-google-plus-g"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                                                                id: "login-modal-slide-description",
                                                                className: classes.modalBody,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            className: classes.description + " " + classes.textCenter,
                                                                            children: "Or Be Classical"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                            className: classes.cardLoginBody,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                                                    id: "login-modal-first",
                                                                                    formControlProps: {
                                                                                        fullWidth: true
                                                                                    },
                                                                                    inputProps: {
                                                                                        startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                                            position: "start",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Face_default()), {
                                                                                                className: classes.icon
                                                                                            })
                                                                                        }),
                                                                                        placeholder: "First Name..."
                                                                                    }
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                                                    id: "login-modal-email",
                                                                                    formControlProps: {
                                                                                        fullWidth: true
                                                                                    },
                                                                                    inputProps: {
                                                                                        startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                                            position: "start",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {
                                                                                                className: classes.icon
                                                                                            })
                                                                                        }),
                                                                                        placeholder: "Email..."
                                                                                    }
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                                                    id: "login-modal-pass",
                                                                                    formControlProps: {
                                                                                        fullWidth: true
                                                                                    },
                                                                                    inputProps: {
                                                                                        startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                                            position: "start",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                                                                                className: classes.icon,
                                                                                                children: "lock_outline"
                                                                                            })
                                                                                        }),
                                                                                        placeholder: "Password..."
                                                                                    }
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((DialogActions_default()), {
                                                                className: classes.modalFooter + " " + classes.justifyContentCenter,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    color: "primary",
                                                                    simple: true,
                                                                    size: "lg",
                                                                    children: "Get started"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 6,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    block: true,
                                                    round: true,
                                                    onClick: ()=>setSignupModal(true),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Assignment_default()), {}),
                                                        " Signup"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Dialog_default()), {
                                                    classes: {
                                                        root: classes.modalRoot,
                                                        paper: classes.modal + " " + classes.modalSignup
                                                    },
                                                    open: signupModal,
                                                    TransitionComponent: Transition,
                                                    keepMounted: true,
                                                    onClose: ()=>setSignupModal(false),
                                                    "aria-labelledby": "signup-modal-slide-title",
                                                    "aria-describedby": "signup-modal-slide-description",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                        plain: true,
                                                        className: classes.modalSignupCard,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((DialogTitle_default()), {
                                                                id: "signup-modal-slide-title",
                                                                disableTypography: true,
                                                                className: classes.modalHeader,
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                        simple: true,
                                                                        className: classes.modalCloseButton,
                                                                        "aria-label": "Close",
                                                                        onClick: ()=>setSignupModal(false),
                                                                        children: [
                                                                            " ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                                className: classes.modalClose
                                                                            })
                                                                        ]
                                                                    }, "close"),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                        className: classes.cardTitle + " " + classes.modalTitle,
                                                                        children: "Register"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                                                                id: "signup-modal-slide-description",
                                                                className: classes.modalBody,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                                            xs: 12,
                                                                            sm: 5,
                                                                            md: 5,
                                                                            className: classes.mlAuto,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                                                    className: classes.infoArea,
                                                                                    title: "Marketing",
                                                                                    description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                        children: [
                                                                                            "We",
                                                                                            "'",
                                                                                            "ve created the marketing campaign of the website. It was a very interesting collaboration."
                                                                                        ]
                                                                                    }),
                                                                                    icon: (Timeline_default()),
                                                                                    iconColor: "rose"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                                                    className: classes.infoArea,
                                                                                    title: "Fully Coded in HTML5",
                                                                                    description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                                        children: [
                                                                                            "We",
                                                                                            "'",
                                                                                            "ve developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                                                                                        ]
                                                                                    }),
                                                                                    icon: (Code_default()),
                                                                                    iconColor: "primary"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                                                    className: classes.infoArea,
                                                                                    title: "Built Audience",
                                                                                    description: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                        children: "There is also a Fully Customizable CMS Admin Dashboard for this product."
                                                                                    }),
                                                                                    icon: (Group_default()),
                                                                                    iconColor: "info"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                                            xs: 12,
                                                                            sm: 5,
                                                                            md: 5,
                                                                            className: classes.mrAuto,
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: classes.textCenter,
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                            justIcon: true,
                                                                                            round: true,
                                                                                            color: "twitter",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fab fa-twitter"
                                                                                            })
                                                                                        }),
                                                                                        ` `,
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                            justIcon: true,
                                                                                            round: true,
                                                                                            color: "dribbble",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fab fa-dribbble"
                                                                                            })
                                                                                        }),
                                                                                        ` `,
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                            justIcon: true,
                                                                                            round: true,
                                                                                            color: "facebook",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                                className: "fab fa-facebook-f"
                                                                                            })
                                                                                        }),
                                                                                        ` `,
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                                            className: classes.socialTitle,
                                                                                            children: "or be classical"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                                                    className: classes.form,
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                                                            formControlProps: {
                                                                                                fullWidth: true,
                                                                                                className: classes.customFormControlClasses
                                                                                            },
                                                                                            inputProps: {
                                                                                                startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                                                    position: "start",
                                                                                                    className: classes.inputAdornment,
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Face_default()), {
                                                                                                        className: classes.inputAdornmentIcon
                                                                                                    })
                                                                                                }),
                                                                                                placeholder: "First Name..."
                                                                                            }
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                                                            formControlProps: {
                                                                                                fullWidth: true,
                                                                                                className: classes.customFormControlClasses
                                                                                            },
                                                                                            inputProps: {
                                                                                                startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                                                    position: "start",
                                                                                                    className: classes.inputAdornment,
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Email_default()), {
                                                                                                        className: classes.inputAdornmentIcon
                                                                                                    })
                                                                                                }),
                                                                                                placeholder: "Email..."
                                                                                            }
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                                                            formControlProps: {
                                                                                                fullWidth: true,
                                                                                                className: classes.customFormControlClasses
                                                                                            },
                                                                                            inputProps: {
                                                                                                startAdornment: /*#__PURE__*/ jsx_runtime_.jsx((InputAdornment_default()), {
                                                                                                    position: "start",
                                                                                                    className: classes.inputAdornment,
                                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                                                                                        className: classes.inputAdornmentIcon,
                                                                                                        children: "lock_outline"
                                                                                                    })
                                                                                                }),
                                                                                                placeholder: "Password..."
                                                                                            }
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                                            classes: {
                                                                                                label: classes.label
                                                                                            },
                                                                                            control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                                                tabIndex: -1,
                                                                                                onClick: ()=>handleToggle(1),
                                                                                                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                                                                    className: classes.checkedIcon
                                                                                                }),
                                                                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                                                                    className: classes.uncheckedIcon
                                                                                                }),
                                                                                                classes: {
                                                                                                    checked: classes.checked,
                                                                                                    root: classes.checkRoot
                                                                                                }
                                                                                            }),
                                                                                            label: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                                children: [
                                                                                                    "I agree to the",
                                                                                                    " ",
                                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                        href: "#pablo",
                                                                                                        children: "terms and conditions"
                                                                                                    }),
                                                                                                    "."
                                                                                                ]
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                            className: classes.textCenter,
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                                                round: true,
                                                                                                color: "primary",
                                                                                                children: "Get started"
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 12,
                                    md: 12,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.title,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Datetime Picker"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 6,
                                                md: 6,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                        className: classes.label,
                                                        children: "Datetime Picker"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                                                        fullWidth: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_datetime_default()), {
                                                            inputProps: {
                                                                placeholder: "Datetime Picker Here"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                        className: classes.label,
                                                        children: "Date Picker"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                                                        fullWidth: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_datetime_default()), {
                                                            timeFormat: false,
                                                            inputProps: {
                                                                placeholder: "Date Picker Here"
                                                            }
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((InputLabel_default()), {
                                                        className: classes.label,
                                                        children: "Time Picker"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                                                        fullWidth: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_datetime_default()), {
                                                            dateFormat: false,
                                                            inputProps: {
                                                                placeholder: "Time Picker Here"
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 6,
                            md: 6,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Popovers"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    onClick: (event)=>setAnchorElLeft(event.currentTarget),
                                    children: "On left"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Popover_default()), {
                                    classes: {
                                        paper: classes.popover
                                    },
                                    open: Boolean(anchorElLeft),
                                    anchorEl: anchorElLeft,
                                    onClose: ()=>setAnchorElLeft(null),
                                    anchorOrigin: {
                                        vertical: "center",
                                        horizontal: "left"
                                    },
                                    transformOrigin: {
                                        vertical: "center",
                                        horizontal: "right"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: classes.popoverHeader,
                                            children: "Popover on left"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.popoverBody,
                                            children: "Here will be some very useful information about his popover. Here will be some very useful information about his popover."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    onClick: (event)=>setAnchorElTop(event.currentTarget),
                                    children: "On top"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Popover_default()), {
                                    classes: {
                                        paper: classes.popover
                                    },
                                    open: Boolean(anchorElTop),
                                    anchorEl: anchorElTop,
                                    onClose: ()=>setAnchorElTop(null),
                                    anchorOrigin: {
                                        vertical: "top",
                                        horizontal: "center"
                                    },
                                    transformOrigin: {
                                        vertical: "bottom",
                                        horizontal: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: classes.popoverHeader,
                                            children: "Popover on top"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.popoverBody,
                                            children: "Here will be some very useful information about his popover."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    onClick: (event)=>setAnchorElBottom(event.currentTarget),
                                    children: "On bottom"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Popover_default()), {
                                    classes: {
                                        paper: classes.popover
                                    },
                                    open: Boolean(anchorElBottom),
                                    anchorEl: anchorElBottom,
                                    onClose: ()=>setAnchorElBottom(null),
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "center"
                                    },
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: classes.popoverHeader,
                                            children: "Popover on bottom"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.popoverBody,
                                            children: "Here will be some very useful information about his popover."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    onClick: (event)=>setAnchorElRight(event.currentTarget),
                                    children: "On right"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Popover_default()), {
                                    classes: {
                                        paper: classes.popover
                                    },
                                    open: Boolean(anchorElRight),
                                    anchorEl: anchorElRight,
                                    onClose: ()=>setAnchorElRight(null),
                                    anchorOrigin: {
                                        vertical: "center",
                                        horizontal: "right"
                                    },
                                    transformOrigin: {
                                        vertical: "center",
                                        horizontal: "left"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: classes.popoverHeader,
                                            children: "Popover on right"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.popoverBody,
                                            children: "Here will be some very useful information about his popover."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.title,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: "Tooltips"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                    id: "tooltip-left",
                                    title: "Tooltip on left",
                                    placement: "left",
                                    classes: {
                                        tooltip: classes.tooltip
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        children: "On left"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                    id: "tooltip-top",
                                    title: "Tooltip on top",
                                    placement: "top",
                                    classes: {
                                        tooltip: classes.tooltip
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        children: "On top"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                    id: "tooltip-bottom",
                                    title: "Tooltip on bottom",
                                    placement: "bottom",
                                    classes: {
                                        tooltip: classes.tooltip
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        children: "On bottom"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                    id: "tooltip-right",
                                    title: "Tooltip on right",
                                    placement: "right",
                                    classes: {
                                        tooltip: classes.tooltip
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        children: "On right"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "collapse",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Collapse"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Accordion/* default */.Z, {
                                    active: 0,
                                    activeColor: "rose",
                                    collapses: [
                                        {
                                            title: "Collapsible group Item #1",
                                            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                                        },
                                        {
                                            title: "Collapsible group Item #2",
                                            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                                        },
                                        {
                                            title: "Collapsible group Item #3",
                                            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                                        }
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.space50
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "file-uploader",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.title,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "File Uploader"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 5,
                                    md: 5,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Regular Image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ImageUpload, {
                                            addButtonProps: {
                                                round: true
                                            },
                                            changeButtonProps: {
                                                round: true
                                            },
                                            removeButtonProps: {
                                                round: true,
                                                color: "danger"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 3,
                                    md: 3,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Avatar"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ImageUpload, {
                                            avatar: true,
                                            addButtonProps: {
                                                round: true
                                            },
                                            changeButtonProps: {
                                                round: true
                                            },
                                            removeButtonProps: {
                                                round: true,
                                                color: "danger"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 3,
                                    md: 3,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Simple Material Input"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomFileInput, {
                                            formControlProps: {
                                                fullWidth: true
                                            },
                                            inputProps: {
                                                placeholder: "Simple chooser..."
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomFileInput, {
                                            formControlProps: {
                                                fullWidth: true
                                            },
                                            inputProps: {
                                                placeholder: "Single File..."
                                            },
                                            endButton: {
                                                buttonProps: {
                                                    round: true,
                                                    color: "primary",
                                                    justIcon: true,
                                                    fileButton: true
                                                },
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((AttachFile_default()), {})
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(CustomFileInput, {
                                            multiple: true,
                                            formControlProps: {
                                                fullWidth: true
                                            },
                                            inputProps: {
                                                placeholder: "Multiple File..."
                                            },
                                            endButton: {
                                                buttonProps: {
                                                    round: true,
                                                    color: "info",
                                                    justIcon: true,
                                                    fileButton: true
                                                },
                                                icon: /*#__PURE__*/ jsx_runtime_.jsx((Layers_default()), {})
                                            }
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.title,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Carousel"
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@material-ui/icons/LocationOn"
var LocationOn_ = __webpack_require__(9616);
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/componentsSections/carouselStyle.js

const carouselStyle = {
    section: {
        padding: "70px 0"
    },
    container: nextjs_material_kit_pro/* container */.nC,
    marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important"
    }
};
/* harmony default export */ const componentsSections_carouselStyle = (carouselStyle);

;// CONCATENATED MODULE: ./pages-sections/components/SectionCarousel.js


// react component for creating beautiful carousel

// @material-ui/core components

// @material-ui/icons

// core components




const SectionCarousel_useStyles = (0,styles_.makeStyles)(componentsSections_carouselStyle);
function SectionCarousel() {
    const classes = SectionCarousel_useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        id: "carousel",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 10,
                    md: 8,
                    className: classes.marginAuto,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                            ...settings,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/bg.jpg",
                                            alt: "First slide",
                                            className: "slick-image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "slick-caption",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((LocationOn_default()), {
                                                        className: "slick-icons"
                                                    }),
                                                    "Yellowstone National Park, United States"
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/bg2.jpg",
                                            alt: "Second slide",
                                            className: "slick-image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "slick-caption",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((LocationOn_default()), {
                                                        className: "slick-icons"
                                                    }),
                                                    "Somewhere Beyond, United States"
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/bg3.jpg",
                                            alt: "Third slide",
                                            className: "slick-image"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "slick-caption",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((LocationOn_default()), {
                                                        className: "slick-icons"
                                                    }),
                                                    "Yellowstone National Park, United States"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/componentsStyle.js

const componentsStyle = {
    main: nextjs_material_kit_pro/* main */.DH,
    mainRaised: nextjs_material_kit_pro/* mainRaised */._p,
    parallax: {
        height: "90vh",
        overflow: "hidden",
        backgroundPosition: "center top"
    },
    container: {
        ...nextjs_material_kit_pro/* container */.nC,
        zIndex: "2",
        position: "relative"
    },
    brand: {
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        textAlign: "center",
        "& h1": {
            fontSize: "4.2rem",
            fontWeight: "600",
            display: "inline-block",
            position: "relative"
        },
        "& h3": {
            fontSize: "1.313rem",
            maxWidth: "500px",
            margin: "10px auto 0"
        }
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        color: nextjs_material_kit_pro/* whiteColor */.zQ + "  !important"
    },
    link: {
        textDecoration: "none"
    },
    textCenter: {
        textAlign: "center"
    },
    proBadge: {
        position: "absolute",
        fontSize: "22px",
        textTransform: "uppercase",
        fontWeight: "bold",
        right: "-90px",
        top: "-3px",
        padding: "10px 18px",
        backgroundColor: nextjs_material_kit_pro/* whiteColor */.zQ,
        borderRadius: "3px",
        color: nextjs_material_kit_pro/* grayColor.18 */.X_[18],
        lineHeight: "22px",
        boxShadow: "0px 5px 5px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.25 */.X_[25]) + ",0.4)"
    },
    section: {
        ...nextjs_material_kit_pro/* section */.qi,
        padding: "70px 0px"
    },
    sectionGray: {
        background: nextjs_material_kit_pro/* grayColor.14 */.X_[14]
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
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right"
    },
    icon: {
        width: "18px",
        height: "18px",
        top: "3px",
        position: "relative"
    }
};
/* harmony default export */ const pages_componentsStyle = (componentsStyle);

;// CONCATENATED MODULE: ./pages/components.js
/*eslint-disable*/ 

// nodejs library that concatenates classes

// @material-ui/core components



// @material-ui/icons

// core components






// sections for this page












const components_useStyles = (0,styles_.makeStyles)(pages_componentsStyle);
function Components() {
    external_react_default().useEffect(()=>{
        var href = window.location.href.substring(window.location.href.lastIndexOf("#") + 1);
        if (window.location.href.lastIndexOf("#") > 0) {
            document.getElementById(href).scrollIntoView();
        }
        window.addEventListener("scroll", updateView);
        updateView();
        return function cleanup() {
            window.removeEventListener("scroll", updateView);
        };
    });
    const easeInOutQuad = (t, b, c, d)=>{
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    const updateView = ()=>{
        var contentSections = document.getElementsByClassName("cd-section");
        var navigationItems = document.getElementById("cd-vertical-nav").getElementsByTagName("a");
        for(let i = 0; i < contentSections.length; i++){
            var activeSection = parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
            if (contentSections[i].offsetTop - window.innerHeight / 2 + document.getElementById("main-panel").offsetTop < window.pageYOffset && contentSections[i].offsetTop + contentSections[i].scrollHeight - window.innerHeight / 2 + document.getElementById("main-panel").offsetTop > window.pageYOffset) {
                navigationItems[activeSection].classList.add("is-selected");
            } else {
                navigationItems[activeSection].classList.remove("is-selected");
            }
        }
    };
    const smoothScroll = (target)=>{
        var targetScroll = document.getElementById(target);
        scrollTo(document.documentElement, targetScroll.offsetTop, 900);
    };
    const scrollTo = (element, to, duration)=>{
        var start = element.scrollTop, change = to - start + document.getElementById("main-panel").offsetTop, currentTime = 0, increment = 20;
        var animateScroll = function() {
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    };
    const classes = components_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                brand: "NextJS Material Kit PRO",
                links: /*#__PURE__*/ jsx_runtime_.jsx(HeaderLinks/* default */.Z, {
                    dropdownHoverColor: "info"
                }),
                fixed: true,
                color: "transparent",
                changeColorOnScroll: {
                    height: 400,
                    color: "info"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Parallax/* default */.Z, {
                image: "/img/nextjs_header.jpg",
                className: classes.parallax,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classes.brand,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        children: [
                                            "NextJS Material Kit",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: classes.proBadge,
                                                children: "PRO"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: classes.title,
                                        children: "All Components"
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()(classes.main, classes.mainRaised),
                id: "main-panel",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionBasics, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionNavbars, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionTabs, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionPills, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionNotifications, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: external_classnames_default()(classes.section, classes.sectionGray, "cd-section"),
                        id: "footers",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SectionPreFooter, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(SectionFooter, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionTypography, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionCards, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionJavascript, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionCarousel, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                id: "cd-vertical-nav",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#buttons",
                                "data-number": "1",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("buttons");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Basic Elements"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#navigation",
                                "data-number": "2",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("navigation");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Navigation"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#notifications",
                                "data-number": "3",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("notifications");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Notifications"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#footers",
                                "data-number": "4",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("footers");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Footers"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#typography",
                                "data-number": "5",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("typography");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Typography"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#contentAreas",
                                "data-number": "6",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("contentAreas");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Content Areas"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#cards",
                                "data-number": "7",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("cards");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Cards"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#morphingCards",
                                "data-number": "8",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("morphingCards");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Morphing Cards"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#pablo",
                                "data-number": "9",
                                className: "",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    smoothScroll("javascriptComponents");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Javascript"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.left,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                className: classes.list,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/?ref=njsmkp-components",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "Creative Tim"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/presentation?ref=njsmkp-components",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "About us"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "http://blog.creative-tim.com/?ref=njsmkp-components",
                                            className: classes.block,
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/license?ref=njsmkp-components",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "Licenses"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.right,
                            children: [
                                "\xa9 ",
                                1900 + new Date().getYear(),
                                " , made with",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {
                                    className: classes.icon
                                }),
                                " by",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.creative-tim.com?ref=njsmkp-components",
                                    target: "_blank",
                                    children: "Creative Tim"
                                }),
                                " ",
                                "for a better web."
                            ]
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 3700:
/***/ ((module) => {

module.exports = require("@material-ui/core/Accordion");

/***/ }),

/***/ 362:
/***/ ((module) => {

module.exports = require("@material-ui/core/AccordionDetails");

/***/ }),

/***/ 1467:
/***/ ((module) => {

module.exports = require("@material-ui/core/AccordionSummary");

/***/ }),

/***/ 8736:
/***/ ((module) => {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ 2610:
/***/ ((module) => {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ 8350:
/***/ ((module) => {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ 7730:
/***/ ((module) => {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ 2217:
/***/ ((module) => {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ 5555:
/***/ ((module) => {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ 5811:
/***/ ((module) => {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ 6320:
/***/ ((module) => {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ 3266:
/***/ ((module) => {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ 6491:
/***/ ((module) => {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ 6403:
/***/ ((module) => {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ 7886:
/***/ ((module) => {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ 3974:
/***/ ((module) => {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ 3302:
/***/ ((module) => {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ 2944:
/***/ ((module) => {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ 8190:
/***/ ((module) => {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ 5031:
/***/ ((module) => {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 6256:
/***/ ((module) => {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ 8250:
/***/ ((module) => {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ 73:
/***/ ((module) => {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ 640:
/***/ ((module) => {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ 2767:
/***/ ((module) => {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ 4614:
/***/ ((module) => {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ 2301:
/***/ ((module) => {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ 4880:
/***/ ((module) => {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ 1555:
/***/ ((module) => {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ 2740:
/***/ ((module) => {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ 6956:
/***/ ((module) => {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ 1236:
/***/ ((module) => {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ 9033:
/***/ ((module) => {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ 5722:
/***/ ((module) => {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ 9641:
/***/ ((module) => {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 5201:
/***/ ((module) => {

module.exports = require("@material-ui/icons/AccountBalance");

/***/ }),

/***/ 8261:
/***/ ((module) => {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ 3935:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ 5356:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Apps");

/***/ }),

/***/ 3776:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ArtTrack");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Assignment");

/***/ }),

/***/ 9418:
/***/ ((module) => {

module.exports = require("@material-ui/icons/AttachMoney");

/***/ }),

/***/ 504:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Build");

/***/ }),

/***/ 472:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Business");

/***/ }),

/***/ 3259:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Call");

/***/ }),

/***/ 1677:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ 9309:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ 6617:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ 7501:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ 752:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Code");

/***/ }),

/***/ 2857:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ 7556:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Dns");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ 5615:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Error");

/***/ }),

/***/ 7806:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ 3510:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Face");

/***/ }),

/***/ 9899:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ 952:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Fingerprint");

/***/ }),

/***/ 8495:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Group");

/***/ }),

/***/ 9556:
/***/ ((module) => {

module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),

/***/ 3462:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Layers");

/***/ }),

/***/ 4401:
/***/ ((module) => {

module.exports = require("@material-ui/icons/LineStyle");

/***/ }),

/***/ 6240:
/***/ ((module) => {

module.exports = require("@material-ui/icons/List");

/***/ }),

/***/ 9616:
/***/ ((module) => {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ 9746:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ 4176:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ 9534:
/***/ ((module) => {

module.exports = require("@material-ui/icons/MonetizationOn");

/***/ }),

/***/ 1075:
/***/ ((module) => {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ 1848:
/***/ ((module) => {

module.exports = require("@material-ui/icons/PersonAdd");

/***/ }),

/***/ 7149:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Remove");

/***/ }),

/***/ 5473:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Reply");

/***/ }),

/***/ 4306:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Share");

/***/ }),

/***/ 448:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ShoppingBasket");

/***/ }),

/***/ 9637:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ 4582:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Store");

/***/ }),

/***/ 8933:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Subject");

/***/ }),

/***/ 1080:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Timeline");

/***/ }),

/***/ 9321:
/***/ ((module) => {

module.exports = require("@material-ui/icons/TrendingUp");

/***/ }),

/***/ 9081:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ViewCarousel");

/***/ }),

/***/ 3806:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ViewDay");

/***/ }),

/***/ 6640:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ViewQuilt");

/***/ }),

/***/ 7225:
/***/ ((module) => {

module.exports = require("@material-ui/icons/WatchLater");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 761:
/***/ ((module) => {

module.exports = require("nouislider");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_exports__ = __webpack_require__.X(0, [2952,1270,1664,1194,7012,6103,9628,1003,7817,9861,3044,3055,8864,4945,5124,6233,686,516,4672,7371,7589,1655,9204,3769,4951], () => (__webpack_exec__(5491)));
module.exports = __webpack_exports__;

})();