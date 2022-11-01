"use strict";
exports.id = 9861;
exports.ids = [9861];
exports.modules = {

/***/ 9861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CardHeader)
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
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/cardHeaderStyle.js

const cardHeaderStyle = {
    cardHeader: {
        borderRadius: "3px",
        padding: "1rem 15px",
        marginLeft: "15px",
        marginRight: "15px",
        marginTop: "-30px",
        border: "0",
        marginBottom: "0"
    },
    cardHeaderPlain: {
        marginLeft: "0px",
        marginRight: "0px",
        "&$cardHeaderImage": {
            margin: "0 !important"
        }
    },
    cardHeaderImage: {
        position: "relative",
        padding: "0",
        zIndex: "1",
        marginLeft: "15px",
        marginRight: "15px",
        marginTop: "-30px",
        borderRadius: "6px",
        "& img": {
            width: "100%",
            borderRadius: "6px",
            pointerEvents: "none",
            boxShadow: "0 5px 15px -8px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.24), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.2)"
        },
        "& a": {
            display: "block"
        }
    },
    noShadow: {
        "& img": {
            boxShadow: "none !important"
        }
    },
    cardHeaderContact: {
        margin: "0 15px",
        marginTop: "-20px"
    },
    cardHeaderSignup: {
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "-40px",
        padding: "20px 0",
        width: "100%",
        marginBottom: "15px"
    },
    warningCardHeader: nextjs_material_kit_pro/* warningCardHeader */.rt,
    successCardHeader: nextjs_material_kit_pro/* successCardHeader */.aT,
    dangerCardHeader: nextjs_material_kit_pro/* dangerCardHeader */.yF,
    infoCardHeader: nextjs_material_kit_pro/* infoCardHeader */.Yi,
    primaryCardHeader: nextjs_material_kit_pro/* primaryCardHeader */.hF,
    roseCardHeader: nextjs_material_kit_pro/* roseCardHeader */.Bp
};
/* harmony default export */ const components_cardHeaderStyle = (cardHeaderStyle);

;// CONCATENATED MODULE: ./components/Card/CardHeader.js


// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons
// core components

const useStyles = (0,styles_.makeStyles)(components_cardHeaderStyle);
function CardHeader(props) {
    const { className , children , color , plain , image , contact , signup , noShadow , ...rest } = props;
    const classes = useStyles();
    const cardHeaderClasses = external_classnames_default()({
        [classes.cardHeader]: true,
        [classes[color + "CardHeader"]]: color,
        [classes.cardHeaderPlain]: plain,
        [classes.cardHeaderImage]: image,
        [classes.cardHeaderContact]: contact,
        [classes.cardHeaderSignup]: signup,
        [classes.noShadow]: noShadow,
        [className]: className !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cardHeaderClasses,
        ...rest,
        children: children
    });
};
CardHeader.propTypes = {
    className: (external_prop_types_default()).string,
    color: external_prop_types_default().oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "rose"
    ]),
    plain: (external_prop_types_default()).bool,
    image: (external_prop_types_default()).bool,
    contact: (external_prop_types_default()).bool,
    signup: (external_prop_types_default()).bool,
    noShadow: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node
};


/***/ })

};
;