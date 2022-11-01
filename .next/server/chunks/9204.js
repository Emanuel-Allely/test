"use strict";
exports.id = 9204;
exports.ids = [9204];
exports.modules = {

/***/ 1054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Media)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/mediaStyle.js

const mediaStyle = (theme)=>({
        media: {
            [theme.breakpoints.down("md")]: {
                display: "block"
            },
            display: "flex",
            WebkitBoxAlign: "start",
            alignItems: "flex-start",
            "& p": {
                color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
                fontSize: "1rem",
                lineHeight: "1.6em"
            },
            "& $media $mediaBody": {
                paddingRight: "0px"
            }
        },
        mediaLink: {
            padding: "10px",
            float: "left !important"
        },
        mediaAvatar: {
            margin: "0 auto",
            width: "64px",
            height: "64px",
            overflow: "hidden",
            borderRadius: "50%",
            marginRight: "15px",
            boxShadow: "0 6px 10px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.14), 0 1px 18px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 3px 5px -1px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.2)",
            "& img": {
                width: "100%"
            }
        },
        mediaBody: {
            paddingRight: "10px",
            WebkitBoxFlex: "1",
            flex: "1"
        },
        mediaHeading: {
            ...nextjs_material_kit_pro/* title */.TN,
            marginTop: "10px",
            marginBottom: "10px",
            "& small": {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
            }
        },
        mediaFooter: {
            "& button, & a": {
                marginBottom: "20px"
            },
            "&:after": {
                display: "table",
                content: '" "',
                clear: "both"
            }
        }
    });
/* harmony default export */ const components_mediaStyle = (mediaStyle);

;// CONCATENATED MODULE: ./components/Media/Media.js


// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons
// core components

const useStyles = (0,styles_.makeStyles)(components_mediaStyle);
function Media(props) {
    const { avatarLink , avatar , avatarAlt , title , body , footer , innerMedias , ...rest } = props;
    const classes = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ...rest,
        className: classes.media,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: avatarLink,
                className: classes.mediaLink,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.mediaAvatar,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: avatar,
                        alt: avatarAlt
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.mediaBody,
                children: [
                    title !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: classes.mediaHeading,
                        children: title
                    }) : null,
                    body,
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.mediaFooter,
                        children: footer
                    }),
                    innerMedias !== undefined ? innerMedias.map((prop)=>{
                        return prop;
                    }) : null
                ]
            })
        ]
    });
};
Media.defaultProps = {
    avatarLink: "#pablo",
    avatarAlt: "..."
};
Media.propTypes = {
    avatarLink: (external_prop_types_default()).string,
    avatar: (external_prop_types_default()).string,
    avatarAlt: (external_prop_types_default()).string,
    title: (external_prop_types_default()).node,
    body: (external_prop_types_default()).node,
    footer: (external_prop_types_default()).node,
    innerMedias: external_prop_types_default().arrayOf((external_prop_types_default()).object)
};


/***/ }),

/***/ 1394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Quote)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8308);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_jss_nextjs_material_kit_pro_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5124);


// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// core components

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(_styles_jss_nextjs_material_kit_pro_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
function Quote(props) {
    const { text , author , authorClassName , textClassName  } = props;
    const classes = useStyles();
    const quoteClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.defaultFontStyle, classes.quote);
    const quoteTextClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        [classes.quoteText]: true,
        [textClassName]: textClassName !== undefined
    });
    const quoteAuthorClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        [classes.quoteAuthor]: true,
        [authorClassName]: authorClassName !== undefined
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
        className: quoteClasses,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: quoteTextClasses,
                children: text
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                className: quoteAuthorClasses,
                children: author
            })
        ]
    });
};
Quote.propTypes = {
    text: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    author: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
    textClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    authorClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};


/***/ })

};
;