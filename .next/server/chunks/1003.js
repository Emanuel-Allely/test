"use strict";
exports.id = 1003;
exports.ids = [1003];
exports.modules = {

/***/ 1003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Parallax)
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
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/parallaxStyle.js

const parallaxStyle = {
    parallax: {
        height: "100vh",
        maxHeight: "1600px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center"
    },
    filter: {},
    primaryColor: {
        "&:before": {
            background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.5)"
        },
        "&:after": {
            background: "linear-gradient(60deg,rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* primaryColor.4 */.lr[4]) + ",.56),rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* primaryColor.5 */.lr[5]) + ",.95))"
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''"
        }
    },
    roseColor: {
        "&:before": {
            background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.5)"
        },
        "&:after": {
            background: "linear-gradient(60deg,rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* roseColor.3 */.An[3]) + ",.56),rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* roseColor.4 */.An[4]) + ",.95))"
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''"
        }
    },
    darkColor: {
        "&:before": {
            background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.5)"
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''"
        }
    },
    infoColor: {
        "&:before": {
            background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.5)"
        },
        "&:after": {
            background: "linear-gradient(60deg,rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* infoColor.6 */.bE[6]) + ",.56),rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* infoColor.7 */.bE[7]) + ",.95))"
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''"
        }
    },
    successColor: {
        "&:before": {
            background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.5)"
        },
        "&:after": {
            background: "linear-gradient(60deg,rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* successColor.6 */.nq[6]) + ",.56),rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* successColor.7 */.nq[7]) + ",.95))"
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''"
        }
    },
    warningColor: {
        "&:before": {
            background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.5)"
        },
        "&:after": {
            background: "linear-gradient(60deg,rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* warningColor.6 */.MA[6]) + ",.56),rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* warningColor.7 */.MA[7]) + ",.95))"
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''"
        }
    },
    dangerColor: {
        "&:before": {
            background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.5)"
        },
        "&:after": {
            background: "linear-gradient(60deg,rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dangerColor.6 */.E7[6]) + ",.56),rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* dangerColor.7 */.E7[7]) + ",.95))"
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''"
        }
    },
    small: {
        height: "65vh",
        minHeight: "65vh",
        maxHeight: "650px"
    }
};
/* harmony default export */ const components_parallaxStyle = (parallaxStyle);

;// CONCATENATED MODULE: ./components/Parallax/Parallax.js


// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// core components

const useStyles = (0,styles_.makeStyles)(components_parallaxStyle);
function Parallax(props) {
    let windowScrollTop = 0;
    const [transform, setTransform] = external_react_default().useState("translate3d(0," + windowScrollTop + "px,0)");
    external_react_default().useEffect(()=>{
        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", resetTransform);
        }
        return function cleanup() {
            if (window.innerWidth >= 768) {
                window.removeEventListener("scroll", resetTransform);
            }
        };
    });
    const resetTransform = ()=>{
        var windowScrollTop = window.pageYOffset / 3;
        setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };
    const { filter , className , children , style , image , small  } = props;
    const classes = useStyles();
    const parallaxClasses = external_classnames_default()({
        [classes.parallax]: true,
        [classes[filter + "Color"]]: filter !== undefined,
        [classes.small]: small,
        [className]: className !== undefined
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: parallaxClasses,
        style: {
            ...style,
            backgroundImage: "url(" + image + ")",
            transform: transform
        },
        children: children
    });
};
Parallax.propTypes = {
    className: (external_prop_types_default()).string,
    filter: external_prop_types_default().oneOf([
        "primary",
        "rose",
        "dark",
        "info",
        "success",
        "warning",
        "danger"
    ]),
    children: (external_prop_types_default()).node,
    style: (external_prop_types_default()).string,
    image: (external_prop_types_default()).string,
    small: (external_prop_types_default()).bool
};


/***/ })

};
;