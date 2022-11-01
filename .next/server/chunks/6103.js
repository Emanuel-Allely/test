"use strict";
exports.id = 6103;
exports.ids = [6103];
exports.modules = {

/***/ 6103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
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
// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(5031);
// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(6256);
// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__(9899);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/footerStyle.js

const footerStyle = {
    left: {
        float: "left!important",
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right"
    },
    rightLinks: {
        float: "right!important",
        "& ul": {
            marginBottom: 0,
            marginTop: 10,
            padding: 0,
            listStyle: "none",
            height: 38,
            "& li": {
                display: "inline-block"
            }
        },
        "& i": {
            fontSize: "20px"
        }
    },
    footer: {
        padding: "0.9375rem 0",
        textAlign: "center",
        display: "flex",
        zIndex: "2",
        position: "relative",
        "& ul": {
            marginBottom: "0",
            padding: 0,
            listStyle: "none"
        }
    },
    big: {
        padding: "1.875rem 0",
        "& h5, & h4": {
            fontWeight: 700,
            fontFamily: "Roboto Slab,Times New Roman,serif",
            marginBottom: "15px"
        },
        "& p": {
            color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
        }
    },
    content: {
        textAlign: "left"
    },
    a: {
        color: nextjs_material_kit_pro/* primaryColor.0 */.lr[0],
        textDecoration: "none",
        backgroundColor: "transparent"
    },
    dark: {
        background: "radial-gradient(ellipse at center," + nextjs_material_kit_pro/* grayColor.4 */.X_[4] + " 0," + nextjs_material_kit_pro/* grayColor.5 */.X_[5] + " 100%)",
        backgroundSize: "550% 450%",
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        "& p": {
            color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
        },
        "& i": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        },
        "& a": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            opacity: ".86",
            "&:visited": {
                color: nextjs_material_kit_pro/* whiteColor */.zQ
            },
            "&:focus, &:hover": {
                opacity: 1
            }
        },
        "& hr": {
            borderColor: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ",0.2)"
        },
        "& $btnTwitter, & $btnDribbble, & $btnInstagram": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        }
    },
    white: {
        backgroundColor: nextjs_material_kit_pro/* whiteColor */.zQ,
        color: nextjs_material_kit_pro/* grayColor.1 */.X_[1],
        textDecoration: "none",
        "& a": {
            "&:visited": {
                color: nextjs_material_kit_pro/* grayColor.1 */.X_[1]
            },
            "&:hover, &:focus": {
                color: nextjs_material_kit_pro/* grayColor.20 */.X_[20]
            }
        }
    },
    container: nextjs_material_kit_pro/* container */.nC,
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto"
    },
    icon: {
        width: "18px",
        height: "18px",
        position: "relative",
        top: "3px"
    },
    iconSocial: {
        width: "41px",
        height: "41px",
        fontSize: "24px",
        minWidth: "41px",
        padding: 0,
        overflow: "hidden",
        position: "relative"
    },
    btnTwitter: {
        ...nextjs_material_kit_pro/* btnLink */.Nt,
        color: nextjs_material_kit_pro/* twitterColor */.QR
    },
    btnDribbble: {
        ...nextjs_material_kit_pro/* btnLink */.Nt,
        color: nextjs_material_kit_pro/* dribbbleColor */.Aj
    },
    btnInstagram: {
        ...nextjs_material_kit_pro/* btnLink */.Nt,
        color: nextjs_material_kit_pro/* instagramColor */.Un
    },
    footerBrand: {
        height: "50px",
        padding: "15px 15px",
        fontSize: "18px",
        lineHeight: "50px",
        marginLeft: "-15px",
        color: nextjs_material_kit_pro/* grayColor.1 */.X_[1],
        textDecoration: "none",
        fontWeight: 700,
        fontFamily: "Roboto Slab,Times New Roman,serif"
    },
    pullCenter: {
        display: "inline-block",
        float: "none"
    },
    clearFix: {
        clear: "both"
    }
};
/* harmony default export */ const components_footerStyle = (footerStyle);

;// CONCATENATED MODULE: ./components/Footer/Footer.js
/* eslint-disable */ 

// nodejs library to set properties for components

// nodejs library that concatenates classes

// @material-ui/core components



// @material-ui/icons


const useStyles = (0,styles_.makeStyles)(components_footerStyle);
function Footer(props) {
    const { children , content , theme , big , className  } = props;
    const classes = useStyles();
    const themeType = theme === "transparent" || theme == undefined ? false : true;
    const footerClasses = external_classnames_default()({
        [classes.footer]: true,
        [classes[theme]]: themeType,
        [classes.big]: big || children !== undefined,
        [className]: className !== undefined
    });
    const aClasses = external_classnames_default()({
        [classes.a]: true
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: footerClasses,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                children !== undefined ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.content,
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
                    ]
                }) : " ",
                content,
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.clearFix
                })
            ]
        })
    });
};
Footer.propTypes = {
    theme: external_prop_types_default().oneOf([
        "dark",
        "white",
        "transparent"
    ]),
    big: (external_prop_types_default()).bool,
    content: (external_prop_types_default()).node.isRequired
};


/***/ })

};
;