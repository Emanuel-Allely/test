"use strict";
exports.id = 7012;
exports.ids = [7012];
exports.modules = {

/***/ 6302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(2610);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/buttonStyle.js

const buttonStyle = {
    button: {
        minHeight: "auto",
        minWidth: "auto",
        backgroundColor: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.0 */.X_[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.0 */.X_[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.0 */.X_[0]) + ", 0.12)",
        border: "none",
        borderRadius: "3px",
        position: "relative",
        padding: "12px 30px",
        margin: ".3125rem 1px",
        fontSize: "12px",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",
        "&:hover,&:focus": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            backgroundColor: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.0 */.X_[0]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.0 */.X_[0]) + ", 0.2)"
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            display: "inline-block",
            top: "0",
            marginTop: "-1em",
            marginBottom: "-1em",
            fontSize: "1.1rem",
            marginRight: "4px",
            verticalAlign: "middle"
        },
        "& svg": {
            position: "relative",
            display: "inline-block",
            top: "0",
            width: "18px",
            height: "18px",
            marginRight: "4px",
            verticalAlign: "middle"
        },
        "&$justIcon": {
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                marginTop: "0px",
                marginRight: "0px",
                position: "absolute",
                width: "100%",
                transform: "none",
                left: "0px",
                top: "0px",
                height: "100%",
                lineHeight: "41px",
                fontSize: "20px"
            }
        }
    },
    fullWidth: {
        width: "100%"
    },
    primary: {
        backgroundColor: nextjs_material_kit_pro/* primaryColor.0 */.lr[0],
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* primaryColor.0 */.lr[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* primaryColor.0 */.lr[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* primaryColor.0 */.lr[0]) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* primaryColor.0 */.lr[0],
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* primaryColor.0 */.lr[0]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* primaryColor.0 */.lr[0]) + ", 0.2)"
        }
    },
    secondary: {
        color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ",.87)",
        backgroundColor: nextjs_material_kit_pro/* secondaryColor.0 */.dY[0],
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* secondaryColor.0 */.dY[0]) + ",.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* secondaryColor.0 */.dY[0]) + ",.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* secondaryColor.0 */.dY[0]) + ",.12)",
        "&:hover,&:focus": {
            boxShdow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* secondaryColor.0 */.dY[0]) + ",.42), 0 4px 23px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ",.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* secondaryColor.0 */.dY[0]) + ",.2)",
            color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ",.87)",
            backgroundColor: nextjs_material_kit_pro/* grayColor.19 */.X_[19]
        }
    },
    info: {
        backgroundColor: nextjs_material_kit_pro/* infoColor.0 */.bE[0],
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* infoColor.0 */.bE[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* infoColor.0 */.bE[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* infoColor.0 */.bE[0]) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* infoColor.0 */.bE[0],
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* infoColor.0 */.bE[0]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* infoColor.0 */.bE[0]) + ", 0.2)"
        }
    },
    success: {
        backgroundColor: nextjs_material_kit_pro/* successColor.0 */.nq[0],
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* successColor.0 */.nq[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* successColor.0 */.nq[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* successColor.0 */.nq[0]) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* successColor.0 */.nq[0],
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* successColor.0 */.nq[0]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* successColor.0 */.nq[0]) + ", 0.2)"
        }
    },
    warning: {
        backgroundColor: nextjs_material_kit_pro/* warningColor.0 */.MA[0],
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* warningColor.0 */.MA[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* warningColor.0 */.MA[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* warningColor.0 */.MA[0]) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* warningColor.0 */.MA[0],
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* warningColor.0 */.MA[0]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* warningColor.0 */.MA[0]) + ", 0.2)"
        }
    },
    danger: {
        backgroundColor: nextjs_material_kit_pro/* dangerColor.0 */.E7[0],
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dangerColor.0 */.E7[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dangerColor.0 */.E7[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dangerColor.0 */.E7[0]) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* dangerColor.0 */.E7[0],
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dangerColor.0 */.E7[0]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dangerColor.0 */.E7[0]) + ", 0.2)"
        }
    },
    rose: {
        backgroundColor: nextjs_material_kit_pro/* roseColor.0 */.An[0],
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* roseColor.0 */.An[0]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* roseColor.0 */.An[0]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* roseColor.0 */.An[0]) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* roseColor.0 */.An[0],
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* roseColor.0 */.An[0]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* roseColor.0 */.An[0]) + ", 0.2)"
        }
    },
    white: {
        "&,&:focus,&:hover": {
            backgroundColor: nextjs_material_kit_pro/* whiteColor */.zQ,
            color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
        }
    },
    twitter: {
        backgroundColor: nextjs_material_kit_pro/* twitterColor */.QR,
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* twitterColor */.QR) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* twitterColor */.QR) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* twitterColor */.QR) + ", 0.12)",
        "&:hover,&:focus,&:visited": {
            backgroundColor: nextjs_material_kit_pro/* twitterColor */.QR,
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* twitterColor */.QR) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* twitterColor */.QR) + ", 0.2)"
        }
    },
    facebook: {
        backgroundColor: nextjs_material_kit_pro/* facebookColor */.Q0,
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* facebookColor */.Q0) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* facebookColor */.Q0) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* facebookColor */.Q0) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* facebookColor */.Q0,
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* facebookColor */.Q0) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* facebookColor */.Q0) + ", 0.2)"
        }
    },
    google: {
        backgroundColor: nextjs_material_kit_pro/* googleColor */.o7,
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* googleColor */.o7) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* googleColor */.o7) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* googleColor */.o7) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* googleColor */.o7,
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* googleColor */.o7) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* googleColor */.o7) + ", 0.2)"
        }
    },
    linkedin: {
        backgroundColor: nextjs_material_kit_pro/* linkedinColor */.JL,
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* linkedinColor */.JL) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* linkedinColor */.JL) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* linkedinColor */.JL) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* linkedinColor */.JL,
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* linkedinColor */.JL) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* linkedinColor */.JL) + ", 0.2)"
        }
    },
    pinterest: {
        backgroundColor: nextjs_material_kit_pro/* pinterestColor */.$7,
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* pinterestColor */.$7) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* pinterestColor */.$7) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* pinterestColor */.$7) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* pinterestColor */.$7,
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* pinterestColor */.$7) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* pinterestColor */.$7) + ", 0.2)"
        }
    },
    youtube: {
        backgroundColor: nextjs_material_kit_pro/* youtubeColor */.Hc,
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* youtubeColor */.Hc) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* youtubeColor */.Hc) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* youtubeColor */.Hc) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* youtubeColor */.Hc,
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* youtubeColor */.Hc) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* youtubeColor */.Hc) + ", 0.2)"
        }
    },
    tumblr: {
        backgroundColor: nextjs_material_kit_pro/* tumblrColor */.YW,
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* tumblrColor */.YW) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* tumblrColor */.YW) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* tumblrColor */.YW) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* tumblrColor */.YW,
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* tumblrColor */.YW) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* tumblrColor */.YW) + ", 0.2)"
        }
    },
    github: {
        backgroundColor: nextjs_material_kit_pro/* grayColor.8 */.X_[8],
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.8 */.X_[8]) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.8 */.X_[8]) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.8 */.X_[8]) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* grayColor.8 */.X_[8],
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.8 */.X_[8]) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.8 */.X_[8]) + ", 0.2)"
        }
    },
    behance: {
        backgroundColor: nextjs_material_kit_pro/* behanceColor */.Zd,
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* behanceColor */.Zd) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* behanceColor */.Zd) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* behanceColor */.Zd) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* behanceColor */.Zd,
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* behanceColor */.Zd) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* behanceColor */.Zd) + ", 0.2)"
        }
    },
    dribbble: {
        backgroundColor: nextjs_material_kit_pro/* dribbbleColor */.Aj,
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dribbbleColor */.Aj) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dribbbleColor */.Aj) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dribbbleColor */.Aj) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* dribbbleColor */.Aj,
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dribbbleColor */.Aj) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dribbbleColor */.Aj) + ", 0.2)"
        }
    },
    reddit: {
        backgroundColor: nextjs_material_kit_pro/* redditColor */.Oi,
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* redditColor */.Oi) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* redditColor */.Oi) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* redditColor */.Oi) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* redditColor */.Oi,
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* redditColor */.Oi) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* redditColor */.Oi) + ", 0.2)"
        }
    },
    instagram: {
        backgroundColor: nextjs_material_kit_pro/* instagramColor */.Un,
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* instagramColor */.Un) + ", 0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* instagramColor */.Un) + ", 0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* instagramColor */.Un) + ", 0.12)",
        "&:hover,&:focus": {
            backgroundColor: nextjs_material_kit_pro/* instagramColor */.Un,
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 14px 26px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* instagramColor */.Un) + ", 0.42), 0 4px 23px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* instagramColor */.Un) + ", 0.2)"
        }
    },
    simple: {
        "&,&:focus,&:hover": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            background: "transparent",
            boxShadow: "none"
        },
        "&$primary": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* primaryColor.0 */.lr[0]
            }
        },
        "&$info": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* infoColor.0 */.bE[0]
            }
        },
        "&$success": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* successColor.0 */.nq[0]
            }
        },
        "&$warning": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* warningColor.0 */.MA[0]
            }
        },
        "&$rose": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* roseColor.0 */.An[0]
            }
        },
        "&$danger": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* dangerColor.0 */.E7[0]
            }
        },
        "&$twitter": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* twitterColor */.QR
            }
        },
        "&$facebook": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* facebookColor */.Q0
            }
        },
        "&$google": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* googleColor */.o7
            }
        },
        "&$linkedin": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* linkedinColor */.JL
            }
        },
        "&$pinterest": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* pinterestColor */.$7
            }
        },
        "&$youtube": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* youtubeColor */.Hc
            }
        },
        "&$tumblr": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* tumblrColor */.YW
            }
        },
        "&$github": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* grayColor.8 */.X_[8]
            }
        },
        "&$behance": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* behanceColor */.Zd
            }
        },
        "&$dribbble": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* dribbbleColor */.Aj
            }
        },
        "&$reddit": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* redditColor */.Oi
            }
        },
        "&$instagram": {
            "&,&:focus,&:hover,&:visited": {
                color: nextjs_material_kit_pro/* instagramColor */.Un
            }
        }
    },
    transparent: {
        "&,&:focus,&:hover": {
            color: "inherit",
            background: "transparent",
            boxShadow: "none"
        }
    },
    disabled: {
        opacity: "0.65",
        pointerEvents: "none"
    },
    lg: {
        "&$justIcon": {
            "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
                marginTop: "-4px"
            }
        },
        padding: "1.125rem 2.25rem",
        fontSize: "0.875rem",
        lineHeight: "1.333333",
        borderRadius: "0.2rem"
    },
    sm: {
        "&$justIcon": {
            "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
                marginTop: "1px"
            }
        },
        padding: "0.40625rem 1.25rem",
        fontSize: "0.6875rem",
        lineHeight: "1.5",
        borderRadius: "0.2rem"
    },
    round: {
        borderRadius: "30px"
    },
    block: {
        width: "100% !important"
    },
    link: {
        "&,&:hover,&:focus": {
            backgroundColor: "transparent",
            color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
            boxShadow: "none"
        }
    },
    justIcon: {
        paddingLeft: "12px",
        paddingRight: "12px",
        fontSize: "20px",
        height: "41px",
        minWidth: "41px",
        width: "41px",
        "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
            marginRight: "0px"
        },
        "&$lg": {
            height: "57px",
            minWidth: "57px",
            width: "57px",
            lineHeight: "56px",
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                fontSize: "32px",
                lineHeight: "56px"
            },
            "& svg": {
                width: "32px",
                height: "32px"
            }
        },
        "&$sm": {
            height: "30px",
            minWidth: "30px",
            width: "30px",
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                fontSize: "17px",
                lineHeight: "29px"
            },
            "& svg": {
                width: "17px",
                height: "17px"
            }
        }
    },
    fileButton: {
    }
};
/* harmony default export */ const components_buttonStyle = (buttonStyle);

;// CONCATENATED MODULE: ./components/CustomButtons/Button.js


// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components



const useStyles = (0,styles_.makeStyles)(components_buttonStyle);
const RegularButton = /*#__PURE__*/ external_react_default().forwardRef((props, ref)=>{
    const { color , round , children , fullWidth , disabled , simple , size , block , link , justIcon , fileButton , className , ...rest } = props;
    const classes = useStyles();
    const btnClasses = external_classnames_default()({
        [classes.button]: true,
        [classes[size]]: size,
        [classes[color]]: color,
        [classes.round]: round,
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
        [classes.simple]: simple,
        [classes.block]: block,
        [classes.link]: link,
        [classes.justIcon]: justIcon,
        [classes.fileButton]: fileButton,
        [className]: className
    });
    return /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
        ...rest,
        ref: ref,
        className: btnClasses,
        children: children
    });
});
RegularButton.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "white",
        "twitter",
        "facebook",
        "google",
        "linkedin",
        "pinterest",
        "youtube",
        "tumblr",
        "github",
        "behance",
        "dribbble",
        "reddit",
        "instagram",
        "transparent"
    ]),
    size: external_prop_types_default().oneOf([
        "sm",
        "lg"
    ]),
    simple: (external_prop_types_default()).bool,
    round: (external_prop_types_default()).bool,
    fullWidth: (external_prop_types_default()).bool,
    disabled: (external_prop_types_default()).bool,
    block: (external_prop_types_default()).bool,
    link: (external_prop_types_default()).bool,
    justIcon: (external_prop_types_default()).bool,
    fileButton: (external_prop_types_default()).bool,
    children: (external_prop_types_default()).node,
    className: (external_prop_types_default()).string
};
/* harmony default export */ const Button = (RegularButton);


/***/ }),

/***/ 7161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CustomDropdown)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(8250);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@material-ui/core/MenuList"
var MenuList_ = __webpack_require__(73);
var MenuList_default = /*#__PURE__*/__webpack_require__.n(MenuList_);
// EXTERNAL MODULE: external "@material-ui/core/ClickAwayListener"
var ClickAwayListener_ = __webpack_require__(7730);
var ClickAwayListener_default = /*#__PURE__*/__webpack_require__.n(ClickAwayListener_);
// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__(640);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@material-ui/core/Grow"
var Grow_ = __webpack_require__(6491);
var Grow_default = /*#__PURE__*/__webpack_require__.n(Grow_);
// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__(2217);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@material-ui/core/Popper"
var Popper_ = __webpack_require__(2767);
var Popper_default = /*#__PURE__*/__webpack_require__.n(Popper_);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(6302);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/customDropdownStyle.js

const customDropdownStyle = (theme)=>({
        popperClose: {
            pointerEvents: "none",
            display: "none !important"
        },
        popperNav: {
            [theme.breakpoints.down("sm")]: {
                "&, &$popperResponsive": {
                    position: "static !important",
                    left: "unset !important",
                    top: "unset !important",
                    transform: "none !important",
                    willChange: "none !important",
                    "& > div": {
                        boxShadow: "none !important",
                        marginLeft: "1.5rem",
                        marginRight: "1.5rem",
                        transition: "none !important",
                        marginTop: "0px !important",
                        marginBottom: "5px !important",
                        padding: "0px !important"
                    }
                }
            }
        },
        manager: {
            "& > div > button:first-child > span:first-child, & > div > a:first-child > span:first-child": {
                width: "100%"
            }
        },
        innerManager: {
            display: "block",
            "& > div > button,& > div > a": {
                margin: "0px !important",
                color: "inherit !important",
                padding: "10px 20px !important",
                "& > span:first-child": {
                    width: "100%",
                    justifyContent: "flex-start"
                }
            }
        },
        target: {
            "& > button:first-child > span:first-child, & > a:first-child > span:first-child": {
                display: "inline-block"
            },
            "& $caret": {
                marginLeft: "0px"
            }
        },
        dropdown: {
            borderRadius: "3px",
            border: "0",
            boxShadow: "0 2px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.26)",
            top: "100%",
            zIndex: "1000",
            minWidth: "160px",
            padding: "5px 0",
            margin: "2px 0 0",
            fontSize: "14px",
            textAlign: "left",
            listStyle: "none",
            backgroundColor: nextjs_material_kit_pro/* whiteColor */.zQ,
            backgroundClip: "padding-box"
        },
        menuList: {
            padding: "0"
        },
        popperResponsive: {
            zIndex: "1200",
            position: "absolute !important",
            [theme.breakpoints.down("sm")]: {
                zIndex: "1640",
                float: "none",
                width: "auto",
                marginTop: "0",
                backgroundColor: "transparent",
                border: "0",
                boxShadow: "none",
                color: "black"
            }
        },
        dropdownItem: {
            ...nextjs_material_kit_pro/* defaultFont */.Df,
            fontSize: "13px",
            padding: "10px 20px",
            margin: "0 5px",
            borderRadius: "2px",
            position: "relative",
            transition: "all 150ms linear",
            display: "block",
            clear: "both",
            fontWeight: "400",
            height: "100%",
            color: nextjs_material_kit_pro/* grayColor.8 */.X_[8],
            whiteSpace: "nowrap",
            minHeight: "unset"
        },
        darkHover: {
            "&:hover": {
                boxShadow: "0 4px 20px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.14), 0 7px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.9 */.X_[9]) + ", 0.4)",
                backgroundColor: nextjs_material_kit_pro/* grayColor.9 */.X_[9],
                color: nextjs_material_kit_pro/* whiteColor */.zQ
            }
        },
        primaryHover: {
            "&:hover": {
                backgroundColor: nextjs_material_kit_pro/* primaryColor.0 */.lr[0],
                color: nextjs_material_kit_pro/* whiteColor */.zQ,
                ...nextjs_material_kit_pro/* primaryBoxShadow */.kY
            }
        },
        infoHover: {
            "&:hover": {
                backgroundColor: nextjs_material_kit_pro/* infoColor.0 */.bE[0],
                color: nextjs_material_kit_pro/* whiteColor */.zQ,
                ...nextjs_material_kit_pro/* infoBoxShadow */.ur
            }
        },
        successHover: {
            "&:hover": {
                backgroundColor: nextjs_material_kit_pro/* successColor.0 */.nq[0],
                color: nextjs_material_kit_pro/* whiteColor */.zQ,
                ...nextjs_material_kit_pro/* successBoxShadow */.TI
            }
        },
        warningHover: {
            "&:hover": {
                backgroundColor: nextjs_material_kit_pro/* warningColor.0 */.MA[0],
                color: nextjs_material_kit_pro/* whiteColor */.zQ,
                ...nextjs_material_kit_pro/* warningBoxShadow */.D6
            }
        },
        dangerHover: {
            "&:hover": {
                backgroundColor: nextjs_material_kit_pro/* dangerColor.0 */.E7[0],
                color: nextjs_material_kit_pro/* whiteColor */.zQ,
                ...nextjs_material_kit_pro/* dangerBoxShadow */.iW
            }
        },
        roseHover: {
            "&:hover": {
                backgroundColor: nextjs_material_kit_pro/* roseColor.0 */.An[0],
                color: nextjs_material_kit_pro/* whiteColor */.zQ,
                ...nextjs_material_kit_pro/* roseBoxShadow */.cq
            }
        },
        dropdownItemRTL: {
            textAlign: "right"
        },
        dropdownDividerItem: {
            margin: "5px 0",
            backgroundColor: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12)",
            height: "1px",
            overflow: "hidden"
        },
        buttonIcon: {
            width: "20px",
            height: "20px"
        },
        caret: {
            transition: "all 150ms ease-in",
            display: "inline-block",
            width: "0",
            height: "0",
            marginLeft: "4px",
            verticalAlign: "middle",
            borderTop: "4px solid",
            borderRight: "4px solid transparent",
            borderLeft: "4px solid transparent"
        },
        caretActive: {
            transform: "rotate(180deg)"
        },
        caretDropup: {
            transform: "rotate(180deg)"
        },
        caretRTL: {
            marginRight: "4px"
        },
        dropdownHeader: {
            display: "block",
            padding: "0.1875rem 1.25rem",
            fontSize: "0.75rem",
            lineHeight: "1.428571",
            color: nextjs_material_kit_pro/* grayColor.10 */.X_[10],
            whiteSpace: "nowrap",
            fontWeight: "inherit",
            marginTop: "10px",
            minHeight: "24px",
            "&:hover,&:focus": {
                backgroundColor: "transparent",
                cursor: "auto"
            }
        },
        noLiPadding: {
            padding: "0"
        }
    });
/* harmony default export */ const components_customDropdownStyle = (customDropdownStyle);

;// CONCATENATED MODULE: ./components/CustomDropdown/CustomDropdown.js


// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components








// core components


const useStyles = (0,styles_.makeStyles)(components_customDropdownStyle);
function CustomDropdown(props) {
    const [anchorEl, setAnchorEl] = external_react_default().useState(null);
    const handleClick = (event)=>{
        if (anchorEl && anchorEl.contains(event.target)) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = (event)=>{
        if (anchorEl.contains(event.target)) {
            return;
        }
        setAnchorEl(null);
    };
    const handleCloseMenu = (param)=>{
        setAnchorEl(null);
        if (props && props.onClick) {
            props.onClick(param);
        }
    };
    const { buttonText , buttonIcon , dropdownList , buttonProps , dropup , dropdownHeader , caret , hoverColor , dropPlacement , rtlActive , noLiPadding , innerDropDown , navDropdown  } = props;
    const classes = useStyles();
    const caretClasses = external_classnames_default()({
        [classes.caret]: true,
        [classes.caretDropup]: dropup && !anchorEl,
        [classes.caretActive]: Boolean(anchorEl) && !dropup,
        [classes.caretRTL]: rtlActive
    });
    const dropdownItem = external_classnames_default()({
        [classes.dropdownItem]: true,
        [classes[hoverColor + "Hover"]]: true,
        [classes.noLiPadding]: noLiPadding,
        [classes.dropdownItemRTL]: rtlActive
    });
    const dropDownMenu = /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuList_default()), {
        role: "menu",
        className: classes.menuList,
        children: [
            dropdownHeader !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                onClick: ()=>handleCloseMenu(dropdownHeader),
                className: classes.dropdownHeader,
                children: dropdownHeader
            }) : null,
            dropdownList.map((prop, key)=>{
                if (prop.divider) {
                    return /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        onClick: ()=>handleCloseMenu("divider"),
                        className: classes.dropdownDividerItem
                    }, key);
                } else if (prop.props !== undefined && prop.props["data-ref"] === "multi") {
                    return /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                        className: dropdownItem,
                        style: {
                            overflow: "visible",
                            padding: 0
                        },
                        children: prop
                    }, key);
                }
                return /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                    onClick: ()=>handleCloseMenu(prop),
                    className: dropdownItem,
                    children: prop
                }, key);
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: innerDropDown ? classes.innerManager : classes.manager,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: buttonText !== undefined ? "" : classes.target,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                    "aria-label": "Notifications",
                    "aria-owns": anchorEl ? "menu-list" : null,
                    "aria-haspopup": "true",
                    ...buttonProps,
                    onClick: handleClick,
                    children: [
                        buttonIcon !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx(props.buttonIcon, {
                            className: classes.buttonIcon
                        }) : null,
                        buttonText !== undefined ? buttonText : null,
                        caret ? /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            className: caretClasses
                        }) : null
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Popper_default()), {
                open: Boolean(anchorEl),
                anchorEl: anchorEl,
                transition: true,
                disablePortal: true,
                placement: dropPlacement,
                className: external_classnames_default()({
                    [classes.popperClose]: !anchorEl,
                    [classes.popperResponsive]: true,
                    [classes.popperNav]: Boolean(anchorEl) && navDropdown
                }),
                children: ()=>/*#__PURE__*/ jsx_runtime_.jsx((Grow_default()), {
                        in: Boolean(anchorEl),
                        id: "menu-list",
                        style: dropup ? {
                            transformOrigin: "0 100% 0"
                        } : {
                            transformOrigin: "0 0 0"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                            className: classes.dropdown,
                            children: innerDropDown ? dropDownMenu : /*#__PURE__*/ jsx_runtime_.jsx((ClickAwayListener_default()), {
                                onClickAway: handleClose,
                                children: dropDownMenu
                            })
                        })
                    })
            })
        ]
    });
};
CustomDropdown.defaultProps = {
    caret: true,
    dropup: false,
    hoverColor: "primary"
};
CustomDropdown.propTypes = {
    hoverColor: external_prop_types_default().oneOf([
        "dark",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ]),
    buttonText: (external_prop_types_default()).node,
    buttonIcon: (external_prop_types_default()).object,
    dropdownList: (external_prop_types_default()).array,
    buttonProps: (external_prop_types_default()).object,
    dropup: (external_prop_types_default()).bool,
    dropdownHeader: (external_prop_types_default()).node,
    rtlActive: (external_prop_types_default()).bool,
    caret: (external_prop_types_default()).bool,
    dropPlacement: external_prop_types_default().oneOf([
        "bottom",
        "top",
        "right",
        "left",
        "bottom-start",
        "bottom-end",
        "top-start",
        "top-end",
        "right-start",
        "right-end",
        "left-start",
        "left-end"
    ]),
    noLiPadding: (external_prop_types_default()).bool,
    innerDropDown: (external_prop_types_default()).bool,
    navDropdown: (external_prop_types_default()).bool,
    // This is a function that returns the clicked menu item
    onClick: (external_prop_types_default()).func
};


/***/ }),

/***/ 4041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GridContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3266);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);


// nodejs library to set properties for components

// @material-ui/core components


const styles = {
    grid: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "auto"
    }
};
const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(styles);
function GridContainer(props) {
    const { children , className , ...rest } = props;
    const classes = useStyles();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
        container: true,
        ...rest,
        className: classes.grid + " " + className,
        children: children
    });
};
GridContainer.defaultProps = {
    className: ""
};
GridContainer.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};


/***/ }),

/***/ 6680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GridItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3266);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);


// nodejs library to set properties for components

// @material-ui/core components


const styles = {
    grid: {
        position: "relative",
        width: "100%",
        minHeight: "1px",
        paddingRight: "15px",
        paddingLeft: "15px"
    }
};
const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(styles);
function GridItem(props) {
    const { children , className , ...rest } = props;
    const classes = useStyles();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
        item: true,
        ...rest,
        className: classes.grid + " " + className,
        children: children
    });
};
GridItem.defaultProps = {
    className: ""
};
GridItem.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};


/***/ }),

/***/ 9247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__(8736);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__(5722);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__(3974);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(2610);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__(6403);
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);
// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__(5555);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__(4176);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(7501);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/headerStyle.js

const headerStyle = (theme)=>({
        appBar: {
            display: "flex",
            border: "0",
            borderRadius: "3px",
            padding: "0.625rem 0",
            marginBottom: "20px",
            color: nextjs_material_kit_pro/* grayColor.15 */.X_[15],
            width: "100%",
            backgroundColor: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 4px 18px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 7px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.15)",
            transition: "all 150ms ease 0s",
            alignItems: "center",
            flexFlow: "row nowrap",
            justifyContent: "flex-start",
            position: "relative"
        },
        absolute: {
            position: "absolute",
            top: "auto"
        },
        fixed: {
            position: "fixed"
        },
        container: {
            ...nextjs_material_kit_pro/* container */.nC,
            minHeight: "50px",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            flexWrap: "nowrap"
        },
        title: {
            letterSpacing: "unset",
            "&,& a": {
                ...nextjs_material_kit_pro/* defaultFont */.Df,
                minWidth: "unset",
                lineHeight: "30px",
                fontSize: "18px",
                borderRadius: "3px",
                textTransform: "none",
                whiteSpace: "nowrap",
                color: "inherit",
                "&:hover,&:focus": {
                    color: "inherit",
                    background: "transparent"
                }
            }
        },
        appResponsive: {
            margin: "20px 10px",
            marginTop: "0px"
        },
        primary: {
            backgroundColor: nextjs_material_kit_pro/* primaryColor.0 */.lr[0],
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 4px 20px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.14), 0 7px 12px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* primaryColor.0 */.lr[0]) + ", 0.46)"
        },
        info: {
            backgroundColor: nextjs_material_kit_pro/* infoColor.0 */.bE[0],
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 4px 20px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.14), 0 7px 12px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* infoColor.0 */.bE[0]) + ", 0.46)"
        },
        success: {
            backgroundColor: nextjs_material_kit_pro/* successColor.0 */.nq[0],
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 4px 20px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.14), 0 7px 12px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* successColor.0 */.nq[0]) + ", 0.46)"
        },
        warning: {
            backgroundColor: nextjs_material_kit_pro/* warningColor.0 */.MA[0],
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 4px 20px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.14), 0 7px 12px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* warningColor.0 */.MA[0]) + ", 0.46)"
        },
        danger: {
            backgroundColor: nextjs_material_kit_pro/* dangerColor.0 */.E7[0],
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 4px 20px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.14), 0 7px 12px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dangerColor.0 */.E7[0]) + ", 0.46)"
        },
        rose: {
            backgroundColor: nextjs_material_kit_pro/* roseColor.0 */.An[0],
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            boxShadow: "0 4px 20px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.14), 0 7px 12px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* roseColor.0 */.An[0]) + ", 0.46)"
        },
        transparent: {
            backgroundColor: "transparent !important",
            boxShadow: "none",
            paddingTop: "25px",
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        },
        dark: {
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            backgroundColor: nextjs_material_kit_pro/* grayColor.9 */.X_[9] + " !important",
            boxShadow: "0 4px 20px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.14), 0 7px 12px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.9 */.X_[9]) + ", 0.46)"
        },
        white: {
            border: "0",
            padding: "0.625rem 0",
            marginBottom: "20px",
            color: nextjs_material_kit_pro/* grayColor.15 */.X_[15],
            backgroundColor: nextjs_material_kit_pro/* whiteColor */.zQ + " !important",
            boxShadow: "0 4px 18px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 7px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.15)"
        },
        drawerPaper: {
            border: "none",
            bottom: "0",
            transitionProperty: "top, bottom, width",
            transitionDuration: ".2s, .2s, .35s",
            transitionTimingFunction: "linear, linear, ease",
            width: nextjs_material_kit_pro/* drawerWidth */.RK,
            ...nextjs_material_kit_pro/* boxShadow */.Wn,
            position: "fixed",
            display: "block",
            top: "0",
            height: "100vh",
            right: "0",
            left: "auto",
            visibility: "visible",
            overflowY: "visible",
            borderTop: "none",
            textAlign: "left",
            paddingRight: "0px",
            paddingLeft: "0",
            ...nextjs_material_kit_pro/* transition */.eR
        },
        hidden: {
            width: "100%"
        },
        collapse: {
            [theme.breakpoints.up("md")]: {
                display: "flex !important",
                MsFlexPreferredSize: "auto",
                flexBasis: "auto"
            },
            WebkitBoxFlex: "1",
            MsFlexPositive: "1",
            flexGrow: "1",
            WebkitBoxAlign: "center",
            MsFlexAlign: "center",
            alignItems: "center"
        },
        closeButtonDrawer: {
            position: "absolute",
            right: "8px",
            top: "9px",
            zIndex: "1"
        }
    });
/* harmony default export */ const components_headerStyle = (headerStyle);

;// CONCATENATED MODULE: ./components/Header/Header.js



// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components







// @material-ui/icons


// core components

const useStyles = (0,styles_.makeStyles)(components_headerStyle);
function Header(props) {
    const [mobileOpen, setMobileOpen] = external_react_default().useState(false);
    const classes = useStyles();
    external_react_default().useEffect(()=>{
        if (props.changeColorOnScroll) {
            window.addEventListener("scroll", headerColorChange);
        }
        return function cleanup() {
            if (props.changeColorOnScroll) {
                window.removeEventListener("scroll", headerColorChange);
            }
        };
    });
    const handleDrawerToggle = ()=>{
        setMobileOpen(!mobileOpen);
    };
    const headerColorChange = ()=>{
        const { color , changeColorOnScroll  } = props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
            document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
        } else {
            document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
            document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
        }
    };
    const { color , links , brand , fixed , absolute  } = props;
    const appBarClasses = external_classnames_default()({
        [classes.appBar]: true,
        [classes[color]]: color,
        [classes.absolute]: absolute,
        [classes.fixed]: fixed
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AppBar_default()), {
        className: appBarClasses,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                className: classes.container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        className: classes.title,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/presentation",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: brand
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Hidden_default()), {
                        smDown: true,
                        implementation: "css",
                        className: classes.hidden,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.collapse,
                            children: links
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Hidden_default()), {
                        mdUp: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            color: "inherit",
                            "aria-label": "open drawer",
                            onClick: handleDrawerToggle,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Hidden_default()), {
                mdUp: true,
                implementation: "js",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
                    variant: "temporary",
                    anchor: "right",
                    open: mobileOpen,
                    classes: {
                        paper: classes.drawerPaper
                    },
                    onClose: handleDrawerToggle,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            color: "inherit",
                            "aria-label": "open drawer",
                            onClick: handleDrawerToggle,
                            className: classes.closeButtonDrawer,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.appResponsive,
                            children: links
                        })
                    ]
                })
            })
        ]
    });
};
Header.defaultProp = {
    color: "white"
};
Header.propTypes = {
    color: external_prop_types_default().oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "transparent",
        "white",
        "rose",
        "dark"
    ]),
    links: (external_prop_types_default()).node,
    brand: (external_prop_types_default()).string,
    fixed: (external_prop_types_default()).bool,
    absolute: (external_prop_types_default()).bool,
    // this will cause the sidebar to change the color from
    // props.color (see above) to changeColorOnScroll.color
    // when the window.pageYOffset is heigher or equal to
    // changeColorOnScroll.height and then when it is smaller than
    // changeColorOnScroll.height change it back to
    // props.color (see above)
    changeColorOnScroll: external_prop_types_default().shape({
        height: (external_prop_types_default()).number.isRequired,
        color: external_prop_types_default().oneOf([
            "primary",
            "info",
            "success",
            "warning",
            "danger",
            "transparent",
            "white",
            "rose",
            "dark"
        ]).isRequired
    })
};


/***/ }),

/***/ 5017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeaderLinks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5031);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6256);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7886);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6403);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5356);
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9637);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3806);
/* harmony import */ var _material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7556);
/* harmony import */ var _material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(504);
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6240);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1075);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1185);
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9534);
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1677);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3259);
/* harmony import */ var _material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9081);
/* harmony import */ var _material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5201);
/* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(3776);
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6640);
/* harmony import */ var _material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9616);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(952);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(9418);
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(4582);
/* harmony import */ var _material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(8261);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(1848);
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(3462);
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(448);
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(4401);
/* harmony import */ var _material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(5615);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(7161);
/* harmony import */ var _components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(6302);
/* harmony import */ var _styles_jss_nextjs_material_kit_pro_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(9315);
/* eslint-disable */ 

// nodejs library to set properties for components

// react components for routing our app without refresh

// @material-ui/core components





// @material-ui/icons

























// core components



const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(_styles_jss_nextjs_material_kit_pro_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .Z);
function HeaderLinks(props) {
    const easeInOutQuad = (t, b, c, d)=>{
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    const smoothScroll = (e, target)=>{
        if (window.location.pathname === "/sections") {
            var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
            if (isMobile) {
            // if we are on mobile device the scroll into view will be managed by the browser
            } else {
                e.preventDefault();
                var targetScroll = document.getElementById(target);
                scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
            }
        }
    };
    const scrollGo = (element, to, duration)=>{
        var start = element.scrollTop, change = to - start, currentTime = 0, increment = 20;
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
    var onClickSections = {};
    const { dropdownHoverColor  } = props;
    const classes = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: classes.list + " " + classes.mlAuto,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                    noLiPadding: true,
                    navDropdown: true,
                    hoverColor: dropdownHoverColor,
                    buttonText: "Components",
                    buttonProps: {
                        className: classes.navLink,
                        color: "transparent"
                    },
                    buttonIcon: (_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_9___default()),
                    dropdownList: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/presentation",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_LineStyle__WEBPACK_IMPORTED_MODULE_32___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Presentation Page"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/components",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_30___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    "All components"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: "https://demos.creative-tim.com/nextjs-material-kit-pro/documentation/tutorial?ref=njsmkp-navbar",
                            target: "_blank",
                            className: classes.dropdownLink,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    className: classes.dropdownIcons,
                                    children: "content_paste"
                                }),
                                "Documentation"
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                    noLiPadding: true,
                    navDropdown: true,
                    hoverColor: dropdownHoverColor,
                    buttonText: "Sections",
                    buttonProps: {
                        className: classes.navLink,
                        color: "transparent"
                    },
                    buttonIcon: (_material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_11___default()),
                    dropdownList: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/sections#headers",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                onClick: (e)=>smoothScroll(e, "headers"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Dns__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Headers"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/sections#features",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                onClick: (e)=>smoothScroll(e, "features"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Features"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/sections#blogs",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                onClick: (e)=>smoothScroll(e, "blogs"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_14___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Blogs"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/sections#teams",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                onClick: (e)=>smoothScroll(e, "teams"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_15___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Teams"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/sections#projects",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                onClick: (e)=>smoothScroll(e, "projects"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_16___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Projects"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/sections#pricing",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                onClick: (e)=>smoothScroll(e, "pricing"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_17___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Pricing"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/sections#testimonials",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                onClick: (e)=>smoothScroll(e, "testimonials"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_18___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Testimonials"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/sections#contacts",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                onClick: (e)=>smoothScroll(e, "contacts"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Call__WEBPACK_IMPORTED_MODULE_19___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Contacts"
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                className: classes.listItem,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z, {
                    noLiPadding: true,
                    navDropdown: true,
                    hoverColor: dropdownHoverColor,
                    buttonText: "Examples",
                    buttonProps: {
                        className: classes.navLink,
                        color: "transparent"
                    },
                    buttonIcon: (_material_ui_icons_ViewCarousel__WEBPACK_IMPORTED_MODULE_20___default()),
                    dropdownList: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/about-us",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_21___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " About Us"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/blog-post",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_22___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Blog Post"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/blog-posts",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ViewQuilt__WEBPACK_IMPORTED_MODULE_23___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Blog Posts"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/contact-us",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_24___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Contact Us"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/landing-page",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ViewDay__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Landing Page"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/login",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_25___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Login Page"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/pricing",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_26___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Pricing Page"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/shopping-cart",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_31___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Shopping Cart"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/ecommerce",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Store__WEBPACK_IMPORTED_MODULE_27___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Ecommerce Page"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/product",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Product Page"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/profile",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_28___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Profile Page"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/signup",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_29___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Signup Page"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/error-page",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: classes.dropdownLink,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_33___default()), {
                                        className: classes.dropdownIcons
                                    }),
                                    " Error Page"
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                className: classes.listItem,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8___default()), {
                        mdDown: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                            href: "https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmkp-navbar",
                            color: "white",
                            target: "_blank",
                            className: classes.navButton,
                            round: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    className: classes.icons
                                }),
                                " buy now"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8___default()), {
                        mdUp: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z, {
                            href: "https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmkp-navbar",
                            color: "info",
                            target: "_blank",
                            className: classes.navButton,
                            round: true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    className: classes.icons
                                }),
                                " buy now"
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
HeaderLinks.defaultProps = {
    hoverColor: "primary"
};
HeaderLinks.propTypes = {
    dropdownHoverColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([
        "dark",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose"
    ])
};


/***/ }),

/***/ 9315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1194);
/* harmony import */ var _styles_jss_nextjs_material_kit_pro_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4016);


const headerLinksStyle = (theme)=>({
        list: {
            [theme.breakpoints.up("md")]: {
                WebkitBoxAlign: "center",
                MsFlexAlign: "center",
                alignItems: "center",
                WebkitBoxOrient: "horizontal",
                WebkitBoxDirection: "normal",
                MsFlexDirection: "row",
                flexDirection: "row"
            },
            [theme.breakpoints.down("sm")]: {
                display: "block"
            },
            marginTop: "0px",
            display: "flex",
            paddingLeft: "0",
            marginBottom: "0",
            listStyle: "none",
            padding: "0"
        },
        listItem: {
            float: "left",
            color: "inherit",
            position: "relative",
            display: "block",
            width: "auto",
            margin: "0",
            padding: "0",
            [theme.breakpoints.down("sm")]: {
                "& ul": {
                    maxHeight: "300px",
                    overflow: "scroll"
                },
                width: "100%",
                "&:not(:last-child)": {
                    "&:after": {
                        width: "calc(100% - 30px)",
                        content: '""',
                        display: "block",
                        height: "1px",
                        marginLeft: "15px",
                        backgroundColor: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .grayColor[14] */ .X_[14]
                    }
                }
            }
        },
        listItemText: {
            padding: "0 !important"
        },
        navLink: {
            color: "inherit",
            position: "relative",
            padding: "0.9375rem",
            fontWeight: "400",
            fontSize: "12px",
            textTransform: "uppercase",
            lineHeight: "20px",
            textDecoration: "none",
            margin: "0px",
            display: "inline-flex",
            "&:hover,&:focus": {
                color: "inherit"
            },
            "& .fab,& .far,& .fal,& .fas,& .material-icons": {
                position: "relative",
                top: "2px",
                marginTop: "-4px",
                marginRight: "4px",
                marginBottom: "0px",
                fontSize: "1.25rem"
            },
            [theme.breakpoints.down("sm")]: {
                width: "calc(100% - 30px)",
                marginLeft: "15px",
                marginBottom: "8px",
                marginTop: "8px",
                textAlign: "left",
                "& > span:first-child": {
                    justifyContent: "flex-start"
                }
            },
            "& svg": {
                marginRight: "3px",
                width: "20px",
                height: "20px"
            }
        },
        navLinkJustIcon: {
            "& .fab,& .far,& .fal,& .fas,& .material-icons": {
                marginRight: "0px"
            },
            "& svg": {
                marginRight: "0px"
            }
        },
        navButton: {
            position: "relative",
            fontWeight: "400",
            fontSize: "12px",
            textTransform: "uppercase",
            lineHeight: "20px",
            textDecoration: "none",
            margin: "0px",
            display: "inline-flex",
            [theme.breakpoints.down("sm")]: {
                width: "calc(100% - 30px)",
                marginLeft: "15px",
                marginBottom: "5px",
                marginTop: "5px",
                textAlign: "left",
                "& > span:first-child": {
                    justifyContent: "flex-start"
                }
            },
            "& $icons": {
                marginRight: "3px"
            }
        },
        notificationNavLink: {
            [theme.breakpoints.down("md")]: {
                top: "0",
                margin: "5px 15px"
            },
            color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .whiteColor */ .zQ,
            padding: "0.9375rem",
            fontWeight: "400",
            fontSize: "12px",
            textTransform: "uppercase",
            lineHeight: "20px",
            textDecoration: "none",
            margin: "0px",
            display: "inline-flex"
        },
        registerNavLink: {
            [theme.breakpoints.down("md")]: {
                top: "0",
                margin: "5px 15px"
            },
            position: "relative",
            fontWeight: "400",
            fontSize: "12px",
            textTransform: "uppercase",
            lineHeight: "20px",
            textDecoration: "none",
            margin: "0px",
            display: "inline-flex"
        },
        navLinkActive: {
            "&, &:hover, &:focus,&:active ": {
                color: "inherit",
                backgroundColor: "rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .whiteColor */ .zQ) + ", 0.1)"
            }
        },
        icons: {
            width: "20px",
            height: "20px",
            marginRight: "14px"
        },
        dropdownIcons: {
            width: "24px",
            height: "24px",
            marginRight: "14px",
            opacity: "0.5",
            marginTop: "-4px",
            top: "1px",
            verticalAlign: "middle",
            fontSize: "24px",
            position: "relative"
        },
        socialIcons: {
            position: "relative",
            fontSize: "1.25rem",
            maxWidth: "24px"
        },
        dropdownLink: {
            "&,&:hover,&:focus": {
                color: "inherit",
                textDecoration: "none",
                display: "flex",
                padding: "0.75rem 1.25rem 0.75rem 0.75rem"
            }
        },
        ..._styles_jss_nextjs_material_kit_pro_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
        marginRight5: {
            marginRight: "5px"
        },
        collapse: {
            [theme.breakpoints.up("md")]: {
                display: "flex !important",
                MsFlexPreferredSize: "auto",
                flexBasis: "auto"
            },
            WebkitBoxFlex: "1",
            MsFlexPositive: "1",
            flexGrow: "1",
            WebkitBoxAlign: "center",
            MsFlexAlign: "center",
            alignItems: "center"
        },
        mlAuto: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .mlAuto */ .hU
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerLinksStyle);


/***/ }),

/***/ 4016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1194);

const tooltipsStyle = {
    tooltip: {
        padding: "10px 15px",
        minWidth: "130px",
        color: _styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .whiteColor */ .zQ,
        lineHeight: "1.7em",
        background: "rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .grayColor[15] */ .X_[15]) + ",0.9)",
        border: "none",
        borderRadius: "3px",
        boxShadow: "0 8px 10px 1px rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", 0.14), 0 3px 14px 2px rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", 0.12), 0 5px 5px -3px rgba(" + (0,_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToRgb */ .oo)(_styles_jss_nextjs_material_kit_pro_js__WEBPACK_IMPORTED_MODULE_0__/* .blackColor */ .FT) + ", 0.2)",
        maxWidth: "200px",
        textAlign: "center",
        fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
        fontSize: "0.875em",
        fontStyle: "normal",
        fontWeight: "400",
        textShadow: "none",
        textTransform: "none",
        letterSpacing: "normal",
        wordBreak: "normal",
        wordSpacing: "normal",
        wordWrap: "normal",
        whiteSpace: "normal",
        lineBreak: "auto"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltipsStyle);


/***/ })

};
;