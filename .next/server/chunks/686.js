"use strict";
exports.id = 686;
exports.ids = [686];
exports.modules = {

/***/ 686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CardAvatar)
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
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/cardAvatarStyle.js

const cardAvatarStyle = {
    cardAvatar: {
        "&$cardAvatarProfile img,&$cardAvatarTestimonial img": {
            width: "100%",
            height: "auto"
        }
    },
    cardAvatarProfile: {
        maxWidth: "130px",
        maxHeight: "130px",
        margin: "-50px auto 0",
        borderRadius: "50%",
        overflow: "hidden",
        padding: "0",
        boxShadow: "0 16px 38px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.56), 0 4px 25px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.2)",
        "&$cardAvatarPlain": {
            marginTop: "0"
        }
    },
    cardAvatarPlain: {},
    cardAvatarTestimonial: {
        margin: "-50px auto 0",
        maxWidth: "100px",
        maxHeight: "100px",
        borderRadius: "50%",
        overflow: "hidden",
        padding: "0",
        boxShadow: "0 16px 38px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.56), 0 4px 25px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.2)",
        "&$cardAvatarPlain": {
            marginTop: "0"
        }
    },
    cardAvatarTestimonialFooter: {
        marginBottom: "-50px",
        marginTop: "10px"
    }
};
/* harmony default export */ const components_cardAvatarStyle = (cardAvatarStyle);

;// CONCATENATED MODULE: ./components/Card/CardAvatar.js


// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons
// core components

const useStyles = (0,styles_.makeStyles)(components_cardAvatarStyle);
function CardAvatar(props) {
    const { children , className , plain , profile , testimonial , testimonialFooter , ...rest } = props;
    const classes = useStyles();
    const cardAvatarClasses = external_classnames_default()({
        [classes.cardAvatar]: true,
        [classes.cardAvatarProfile]: profile,
        [classes.cardAvatarPlain]: plain,
        [classes.cardAvatarTestimonial]: testimonial,
        [classes.cardAvatarTestimonialFooter]: testimonialFooter,
        [className]: className !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cardAvatarClasses,
        ...rest,
        children: children
    });
};
CardAvatar.propTypes = {
    children: (external_prop_types_default()).node.isRequired,
    className: (external_prop_types_default()).string,
    profile: (external_prop_types_default()).bool,
    plain: (external_prop_types_default()).bool,
    testimonial: (external_prop_types_default()).bool,
    testimonialFooter: (external_prop_types_default()).bool
};


/***/ })

};
;