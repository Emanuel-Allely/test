"use strict";
exports.id = 8864;
exports.ids = [8864];
exports.modules = {

/***/ 8864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CardFooter)
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
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/cardFooterStyle.js
const cardFooterStyle = {
    cardFooter: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        padding: "0.9375rem 1.875rem",
        paddingTop: "0"
    },
    cardFooterProfile: {
        marginTop: "-15px"
    },
    cardFooterPlain: {
        paddingLeft: "5px",
        paddingRight: "5px",
        backgroundColor: "transparent"
    },
    cardFooterPricing: {
        zIndex: "2"
    },
    cardFooterTestimonial: {
        display: "block"
    }
};
/* harmony default export */ const components_cardFooterStyle = (cardFooterStyle);

;// CONCATENATED MODULE: ./components/Card/CardFooter.js


// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons
// core components

const useStyles = (0,styles_.makeStyles)(components_cardFooterStyle);
function CardFooter(props) {
    const { className , children , plain , profile , pricing , testimonial , ...rest } = props;
    const classes = useStyles();
    const cardFooterClasses = external_classnames_default()({
        [classes.cardFooter]: true,
        [classes.cardFooterPlain]: plain,
        [classes.cardFooterProfile]: profile || testimonial,
        [classes.cardFooterPricing]: pricing,
        [classes.cardFooterTestimonial]: testimonial,
        [className]: className !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cardFooterClasses,
        ...rest,
        children: children
    });
};
CardFooter.propTypes = {
    className: (external_prop_types_default()).string,
    plain: (external_prop_types_default()).bool,
    profile: (external_prop_types_default()).bool,
    pricing: (external_prop_types_default()).bool,
    testimonial: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node
};


/***/ })

};
;