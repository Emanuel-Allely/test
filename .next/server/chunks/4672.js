"use strict";
exports.id = 4672;
exports.ids = [4672];
exports.modules = {

/***/ 4672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Badge)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/badgeStyle.js

const badgeStyle = {
    badge: {
        marginRight: "3px",
        borderRadius: "12px",
        padding: "5px 12px",
        textTransform: "uppercase",
        fontSize: "10px",
        fontWeight: "500",
        lineHeight: "1",
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "baseline",
        display: "inline-block"
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
        backgroundColor: nextjs_material_kit_pro/* grayColor.7 */.X_[7]
    }
};
/* harmony default export */ const components_badgeStyle = (badgeStyle);

;// CONCATENATED MODULE: ./components/Badge/Badge.js


// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components


const useStyles = (0,styles_.makeStyles)(components_badgeStyle);
function Badge(props) {
    const { color , children , className  } = props;
    const classes = useStyles();
    const badgeClasses = external_classnames_default()({
        [classes.badge]: true,
        [classes[color]]: true,
        [className]: className !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: badgeClasses,
        children: children
    });
};
Badge.defaultProps = {
    color: "gray"
};
Badge.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    className: (external_prop_types_default()).string,
    children: (external_prop_types_default()).node
};


/***/ })

};
;