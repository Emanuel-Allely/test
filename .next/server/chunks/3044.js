"use strict";
exports.id = 3044;
exports.ids = [3044];
exports.modules = {

/***/ 3044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ InfoArea)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__(7886);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/infoStyle.js

const infoStyle = {
    infoArea: {
        maxWidth: "360px",
        margin: "0 auto",
        padding: "70px 0 30px"
    },
    iconWrapper: {
        float: "left",
        marginTop: "24px",
        marginRight: "10px"
    },
    primary: {
        color: nextjs_material_kit_pro/* primaryColor.0 */.lr[0]
    },
    warning: {
        color: nextjs_material_kit_pro/* warningColor.0 */.MA[0]
    },
    danger: {
        color: nextjs_material_kit_pro/* dangerColor.0 */.E7[0]
    },
    success: {
        color: nextjs_material_kit_pro/* successColor.0 */.nq[0]
    },
    info: {
        color: nextjs_material_kit_pro/* infoColor.0 */.bE[0]
    },
    rose: {
        color: nextjs_material_kit_pro/* roseColor.0 */.An[0]
    },
    gray: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    },
    icon: {
        width: "2.25rem",
        height: "2.25rem",
        fontSize: "2.25rem"
    },
    descriptionWrapper: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
        overflow: "hidden"
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        margin: "1.75rem 0 0.875rem !important",
        minHeight: "unset"
    },
    description: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
        overflow: "hidden",
        marginTop: "0px",
        "& p": {
            color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
            fontSize: "14px"
        }
    },
    iconWrapperVertical: {
        float: "none"
    },
    iconVertical: {
        width: "61px",
        height: "61px"
    }
};
/* harmony default export */ const components_infoStyle = (infoStyle);

;// CONCATENATED MODULE: ./components/InfoArea/InfoArea.js


// nodejs library to set properties for components

// nodejs library that concatenates classes

// @material-ui/core components



const useStyles = (0,styles_.makeStyles)(components_infoStyle);
function InfoArea(props) {
    const { title , description , iconColor , vertical , className  } = props;
    const classes = useStyles();
    const iconWrapper = external_classnames_default()({
        [classes.iconWrapper]: true,
        [classes[iconColor]]: true,
        [classes.iconWrapperVertical]: vertical
    });
    const iconClasses = external_classnames_default()({
        [classes.icon]: true,
        [classes.iconVertical]: vertical
    });
    const infoAreaClasses = external_classnames_default()({
        [classes.infoArea]: true,
        [className]: className !== undefined
    });
    let icon = null;
    switch(typeof props.icon){
        case "string":
            icon = /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                className: iconClasses,
                children: props.icon
            });
            break;
        default:
            icon = /*#__PURE__*/ jsx_runtime_.jsx(props.icon, {
                className: iconClasses
            });
            break;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: infoAreaClasses,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: iconWrapper,
                children: icon
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.descriptionWrapper,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: classes.title,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.description,
                        children: description
                    })
                ]
            })
        ]
    });
};
InfoArea.defaultProps = {
    iconColor: "gray"
};
InfoArea.propTypes = {
    icon: external_prop_types_default().oneOfType([
        (external_prop_types_default()).object,
        (external_prop_types_default()).string
    ]).isRequired,
    title: (external_prop_types_default()).string.isRequired,
    description: (external_prop_types_default()).node.isRequired,
    iconColor: external_prop_types_default().oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    vertical: (external_prop_types_default()).bool,
    className: (external_prop_types_default()).string
};


/***/ })

};
;