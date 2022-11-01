"use strict";
(() => {
var exports = {};
exports.id = 6705;
exports.ids = [6705];
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

/***/ 5920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EcommercePage)
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
// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__(2944);
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);
// EXTERNAL MODULE: external "@material-ui/icons/Mail"
var Mail_ = __webpack_require__(9746);
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);
// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__(9247);
// EXTERNAL MODULE: ./components/Header/HeaderLinks.js
var HeaderLinks = __webpack_require__(5017);
// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__(6680);
// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__(1003);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(6302);
// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__(7403);
// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__(6721);
// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__(7817);
// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__(6103);
// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(9861);
// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__(8864);
// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__(9641);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__(9899);
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/tooltipsStyle.js
var tooltipsStyle = __webpack_require__(4016);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/latestOffersStyle.js


const styles = {
    cardTitle: nextjs_material_kit_pro/* cardTitle */.X5,
    container: nextjs_material_kit_pro/* container */.nC,
    ...tooltipsStyle/* default */.Z,
    section: {
        ...nextjs_material_kit_pro/* section */.qi,
        padding: "70px 0px"
    },
    coloredShadow: nextjs_material_kit_pro/* coloredShadow */.DF,
    cardDescription: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
        textAlign: "center"
    },
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    priceContainer: {
        display: "inline-flex"
    },
    price: {
        fontSize: "18px",
        color: nextjs_material_kit_pro/* grayColor.22 */.X_[22]
    },
    priceOld: {
        fontSize: "16px",
        textDecoration: "line-through"
    },
    priceNew: {
        color: nextjs_material_kit_pro/* dangerColor.0 */.E7[0]
    },
    stats: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    },
    textCenter: {
        textAlign: "center"
    }
};
/* harmony default export */ const latestOffersStyle = (styles);

;// CONCATENATED MODULE: ./pages-sections/ecommerce/SectionLatestOffers.js


// nodejs library that concatenates classes

// core components







// @material-ui/core components


// @material-ui icons


const useStyles = (0,styles_.makeStyles)(latestOffersStyle);
function SectionLatestOffers() {
    const classes = useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Latest Offers"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 4,
                            sm: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                product: true,
                                plain: true,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                        image: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#pablo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/examples/gucci.jpg",
                                                    alt: "..."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.coloredShadow,
                                                style: {
                                                    backgroundImage: "url('/img/examples/gucci.jpg')",
                                                    opacity: 1
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                        className: classes.textCenter,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: classes.cardTitle,
                                                children: "Gucci"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: classes.cardDescription,
                                                children: "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: classes.priceContainer,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: external_classnames_default()(classes.price, classes.priceOld),
                                                        children: [
                                                            " ",
                                                            "€1,430"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: external_classnames_default()(classes.price, classes.priceNew),
                                                        children: [
                                                            " ",
                                                            "€743"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: external_classnames_default()(classes.stats, classes.mlAuto),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                    id: "tooltip-top",
                                                    title: "Saved to Wishlist",
                                                    placement: "top",
                                                    classes: {
                                                        tooltip: classes.tooltip
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        simple: true,
                                                        color: "rose",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {})
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 4,
                            sm: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                product: true,
                                plain: true,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                        image: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#pablo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/examples/dolce.jpg",
                                                    alt: "..."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.coloredShadow,
                                                style: {
                                                    backgroundImage: "url('/img/examples/dolce.jpg')",
                                                    opacity: 1
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                        className: classes.textCenter,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: classes.cardTitle,
                                                children: "Dolce & Gabbana"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: classes.cardDescription,
                                                children: "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: classes.priceContainer,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: external_classnames_default()(classes.price, classes.priceOld),
                                                        children: [
                                                            " ",
                                                            "€1,430"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: external_classnames_default()(classes.price, classes.priceNew),
                                                        children: [
                                                            " ",
                                                            "€743"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: external_classnames_default()(classes.stats, classes.mlAuto),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                    id: "tooltip-top",
                                                    title: "Saved to Wishlist",
                                                    placement: "top",
                                                    classes: {
                                                        tooltip: classes.tooltip
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        simple: true,
                                                        color: "rose",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {})
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 4,
                            sm: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                product: true,
                                plain: true,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                        image: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#pablo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/examples/tom-ford.jpg",
                                                    alt: "..."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.coloredShadow,
                                                style: {
                                                    backgroundImage: "url('/img/examples/tom-ford.jpg')",
                                                    opacity: 1
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                        className: classes.textCenter,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: classes.cardTitle,
                                                children: "Dolce & Gabbana"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: classes.cardDescription,
                                                children: "The structured shoulders and sleek detailing ensure a sharp silhouette. Team it with a silk pocket square and leather loafers."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: classes.priceContainer,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: external_classnames_default()(classes.price, classes.priceOld),
                                                        children: [
                                                            " ",
                                                            "€1,430"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: external_classnames_default()(classes.price, classes.priceNew),
                                                        children: [
                                                            " ",
                                                            "€743"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: external_classnames_default()(classes.stats, classes.mlAuto),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                    id: "tooltip-top",
                                                    title: "Saved to Wishlist",
                                                    placement: "top",
                                                    classes: {
                                                        tooltip: classes.tooltip
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        simple: true,
                                                        color: "rose",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {})
                                                    })
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
    });
};

// EXTERNAL MODULE: external "nouislider"
var external_nouislider_ = __webpack_require__(761);
var external_nouislider_default = /*#__PURE__*/__webpack_require__.n(external_nouislider_);
// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__(8350);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);
// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__(6320);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);
;// CONCATENATED MODULE: external "@material-ui/icons/FavoriteBorder"
const FavoriteBorder_namespaceObject = require("@material-ui/icons/FavoriteBorder");
var FavoriteBorder_default = /*#__PURE__*/__webpack_require__.n(FavoriteBorder_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Cached"
const Cached_namespaceObject = require("@material-ui/icons/Cached");
var Cached_default = /*#__PURE__*/__webpack_require__.n(Cached_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/Subject"
var Subject_ = __webpack_require__(8933);
var Subject_default = /*#__PURE__*/__webpack_require__.n(Subject_);
// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__(9309);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);
// EXTERNAL MODULE: ./components/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(7371);
// EXTERNAL MODULE: ./components/Clearfix/Clearfix.js
var Clearfix = __webpack_require__(8395);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/customCheckboxRadioSwitchStyle.js
var customCheckboxRadioSwitchStyle = __webpack_require__(6233);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js



const productsStyle_styles = {
    ...customCheckboxRadioSwitchStyle/* default */.Z,
    ...tooltipsStyle/* default */.Z,
    checkRoot: {
        padding: "14px",
        "&:hover": {
            backgroundColor: "unset !important"
        }
    },
    coloredShadow: nextjs_material_kit_pro/* coloredShadow */.DF,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    cardTitle: {
        ...nextjs_material_kit_pro/* cardTitle */.X5,
        textAlign: "center",
        marginBottom: "0px !important"
    },
    cardDescription: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
        textAlign: "center"
    },
    container: {
        ...nextjs_material_kit_pro/* container */.nC
    },
    description: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    },
    section: {
        ...nextjs_material_kit_pro/* section */.qi,
        padding: "70px 0px"
    },
    priceContainer: {
        display: "inline-flex"
    },
    price: {
        fontSize: "18px",
        color: nextjs_material_kit_pro/* grayColor.22 */.X_[22]
    },
    pullRight: {
        float: "right"
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
            pointerEvents: "none"
        },
        "& a": {
            display: "block"
        }
    },
    justifyContentBetween: {
        WebkitBoxPack: "justify!important",
        justifyContent: "space-between !important"
    },
    customExpandPanel: {
        maxHeight: "273px",
        overflowY: "scroll",
        "&  label": {
            display: "block"
        }
    },
    priceSlider: {
        fontWeight: "500"
    },
    refineButton: {
        margin: "-3px 0"
    },
    cardBodyRefine: {
        paddingLeft: "15px",
        paddingRight: "15px"
    },
    textLeft: {
        textAlign: "left"
    }
};
/* harmony default export */ const productsStyle = (productsStyle_styles);

;// CONCATENATED MODULE: ./pages-sections/ecommerce/SectionProducts.js


// nodejs library that concatenates classes

// plugin that creates slider

// @material-ui/core components




// @material-ui icons





// core components










const SectionProducts_useStyles = (0,styles_.makeStyles)(productsStyle);
function SectionProducts() {
    const [checked, setChecked] = external_react_default().useState([
        1,
        9,
        27
    ]);
    const [priceRange, setPriceRange] = external_react_default().useState([
        101,
        790
    ]);
    external_react_default().useEffect(()=>{
        if (!document.getElementById("sliderRegular").classList.contains("noUi-target")) {
            external_nouislider_default().create(document.getElementById("sliderRegular"), {
                start: priceRange,
                connect: true,
                range: {
                    min: 30,
                    max: 900
                },
                step: 1
            }).on("update", function(values) {
                setPriceRange([
                    Math.round(values[0]),
                    Math.round(values[1])
                ]);
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
    const classes = SectionProducts_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Find what you need"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 3,
                            sm: 3,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                plain: true,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                    className: classes.cardBodyRefine,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                            className: classes.cardTitle + " " + classes.textLeft,
                                            children: [
                                                "Refine",
                                                /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                    id: "tooltip-top",
                                                    title: "Reset Filter",
                                                    placement: "top",
                                                    classes: {
                                                        tooltip: classes.tooltip
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        link: true,
                                                        justIcon: true,
                                                        size: "sm",
                                                        className: classes.pullRight + " " + classes.refineButton,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Cached_default()), {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Clearfix/* default */.Z, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Accordion/* default */.Z, {
                                            active: [
                                                0,
                                                2
                                            ],
                                            activeColor: "rose",
                                            collapses: [
                                                {
                                                    title: "Price Range",
                                                    content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        className: classes.cardBodyRefine,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                className: external_classnames_default()(classes.pullLeft, classes.priceSlider),
                                                                children: [
                                                                    "€",
                                                                    priceRange[0]
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                className: external_classnames_default()(classes.pullRight, classes.priceSlider),
                                                                children: [
                                                                    "€",
                                                                    priceRange[1]
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                id: "sliderRegular",
                                                                className: "slider-rose"
                                                            })
                                                        ]
                                                    })
                                                },
                                                {
                                                    title: "Clothing",
                                                    content: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: classes.customExpandPanel,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(1),
                                                                        checked: checked.indexOf(1) !== -1 ? true : false,
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Blazers"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
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
                                                                    }),
                                                                    classes: {
                                                                        label: classes.label
                                                                    },
                                                                    label: "Casual Shirts"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
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
                                                                    }),
                                                                    classes: {
                                                                        label: classes.label
                                                                    },
                                                                    label: "Formal Shirts"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
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
                                                                    }),
                                                                    classes: {
                                                                        label: classes.label
                                                                    },
                                                                    label: "Jeans"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
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
                                                                    }),
                                                                    classes: {
                                                                        label: classes.label
                                                                    },
                                                                    label: "Polos"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(6),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Pyjamas"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(7),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Shorts"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(8),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Trousers"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                },
                                                {
                                                    title: "Designer",
                                                    content: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: classes.customExpandPanel,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(9),
                                                                        checked: checked.indexOf(9) !== -1 ? true : false,
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "All"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(10),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Polo Ralph Lauren"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(11),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Wooyoungmi"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(12),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Alexander McQueen"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(13),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Tom Ford"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(14),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "AMI"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(15),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Berena"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(16),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Thom Sweeney"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(17),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Burberry Prorsum"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(18),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Calvin Klein"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(19),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Kingsman"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(20),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Club Monaco"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Dolce & Gabbana"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(22),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Gucci"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(23),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Biglioli"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(24),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Lanvin"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(25),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Loro Piana"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(26),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Massimo Alba"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                },
                                                {
                                                    title: "Colour",
                                                    content: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: classes.customExpandPanel,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(27),
                                                                        checked: checked.indexOf(27) !== -1 ? true : false,
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "All"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(28),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Black"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(29),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Blue"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(30),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Brown"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(31),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Gray"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(32),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Green"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(33),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Neutrals"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                                    control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                                        disableRipple: true,
                                                                        tabIndex: -1,
                                                                        onClick: ()=>handleToggle(34),
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
                                                                        label: classes.label
                                                                    },
                                                                    label: "Purple"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 9,
                            sm: 9,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 4,
                                        sm: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            plain: true,
                                            product: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                    noShadow: true,
                                                    image: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/examples/suit-1.jpg",
                                                            alt: ".."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: "Polo Ralph Lauren"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: classes.description,
                                                            children: "Impeccably tailored in Italy from lightweight navy wool."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                    plain: true,
                                                    className: classes.justifyContentBetween,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.priceContainer,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: classes.price,
                                                                children: " €800"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                            id: "tooltip-top",
                                                            title: "Saved to Wishlist",
                                                            placement: "left",
                                                            classes: {
                                                                tooltip: classes.tooltip
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                justIcon: true,
                                                                simple: true,
                                                                color: "rose",
                                                                className: classes.pullRight,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {})
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 4,
                                        sm: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            plain: true,
                                            product: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                    noShadow: true,
                                                    image: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/examples/suit-2.jpg",
                                                            alt: ".."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: "Wooyoungmi"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: classes.description,
                                                            children: "Dark-grey slub wool, pintucked notch lapels."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                    plain: true,
                                                    className: classes.justifyContentBetween,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.priceContainer,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: classes.price,
                                                                children: " €555"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                            id: "tooltip-top",
                                                            title: "Save to Wishlist",
                                                            placement: "left",
                                                            classes: {
                                                                tooltip: classes.tooltip
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                justIcon: true,
                                                                simple: true,
                                                                color: "rose",
                                                                className: classes.pullRight,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((FavoriteBorder_default()), {})
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 4,
                                        sm: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            plain: true,
                                            product: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                    noShadow: true,
                                                    image: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/examples/suit-3.jpg",
                                                            alt: ".."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: "Tom Ford"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: classes.description,
                                                            children: [
                                                                "Immaculate tailoring is TOM FORD",
                                                                "'",
                                                                "s forte."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                    plain: true,
                                                    className: classes.justifyContentBetween,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.priceContainer,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: classes.price,
                                                                children: " €879"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                            id: "tooltip-top",
                                                            title: "Save to Wishlist",
                                                            placement: "left",
                                                            classes: {
                                                                tooltip: classes.tooltip
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                justIcon: true,
                                                                simple: true,
                                                                color: "rose",
                                                                className: classes.pullRight,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((FavoriteBorder_default()), {})
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 4,
                                        sm: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            plain: true,
                                            product: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                    noShadow: true,
                                                    image: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/examples/suit-4.jpg",
                                                            alt: ".."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: "Thom Sweeney"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: classes.description,
                                                            children: [
                                                                "It",
                                                                "'",
                                                                "s made from lightweight grey wool woven."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                    plain: true,
                                                    className: classes.justifyContentBetween,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.priceContainer,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: classes.price,
                                                                children: " €680"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                            id: "tooltip-top",
                                                            title: "Save to Wishlist",
                                                            placement: "left",
                                                            classes: {
                                                                tooltip: classes.tooltip
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                justIcon: true,
                                                                simple: true,
                                                                color: "rose",
                                                                className: classes.pullRight,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((FavoriteBorder_default()), {})
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 4,
                                        sm: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            plain: true,
                                            product: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                    noShadow: true,
                                                    image: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/examples/suit-5.jpg",
                                                            alt: ".."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: "Kingsman"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: classes.description,
                                                            children: "Crafted from khaki cotton and fully canvassed."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                    plain: true,
                                                    className: classes.justifyContentBetween,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.priceContainer,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: classes.price,
                                                                children: " €725"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                            id: "tooltip-top",
                                                            title: "Saved to Wishlist",
                                                            placement: "left",
                                                            classes: {
                                                                tooltip: classes.tooltip
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                justIcon: true,
                                                                simple: true,
                                                                color: "rose",
                                                                className: classes.pullRight,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {})
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 4,
                                        sm: 4,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            plain: true,
                                            product: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                    noShadow: true,
                                                    image: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/examples/suit-6.jpg",
                                                            alt: ".."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: "Boglioli"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: classes.description,
                                                            children: "Masterfully crafted in Northern Italy."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                    plain: true,
                                                    className: classes.justifyContentBetween,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.priceContainer,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: classes.price,
                                                                children: " €699"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                            id: "tooltip-top",
                                                            title: "Save to Wishlist",
                                                            placement: "left",
                                                            classes: {
                                                                tooltip: classes.tooltip
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                justIcon: true,
                                                                simple: true,
                                                                color: "rose",
                                                                className: classes.pullRight,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((FavoriteBorder_default()), {})
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 3,
                                        sm: 3,
                                        className: external_classnames_default()(classes.mlAuto, classes.mrAuto),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            round: true,
                                            color: "rose",
                                            children: "Load more..."
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "News in fashion"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 4,
                            sm: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                background: true,
                                style: {
                                    backgroundImage: "url('/img/examples/color1.jpg')"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                    background: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: external_classnames_default()(classes.cardCategory, classes.textInfo),
                                            children: "Productivity Apps"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#pablo",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                className: classes.cardTitle,
                                                children: [
                                                    "The best trends in fashion ",
                                                    new Date().getFullYear()
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: classes.description,
                                            children: [
                                                "Don",
                                                "'",
                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            href: "#",
                                            round: true,
                                            color: "white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                " Read"
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 4,
                            sm: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                background: true,
                                style: {
                                    backgroundImage: "url('/img/examples/color3.jpg')"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                    background: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: external_classnames_default()(classes.cardCategory, classes.textInfo),
                                            children: "FASHION NEWS"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#pablo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: classes.cardTitle,
                                                children: "Kanye joins the Yeezy team at Adidas"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: classes.description,
                                            children: [
                                                "Don",
                                                "'",
                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            href: "#",
                                            round: true,
                                            color: "white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                " Read"
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 4,
                            sm: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                background: true,
                                style: {
                                    backgroundImage: "url('/img/examples/color2.jpg')"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                    background: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: external_classnames_default()(classes.cardCategory, classes.textInfo),
                                            children: "Productivity Apps"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#pablo",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                className: classes.cardTitle,
                                                children: [
                                                    "Learn how to use the new colors of",
                                                    " ",
                                                    new Date().getFullYear()
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: classes.description,
                                            children: [
                                                "Don",
                                                "'",
                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            href: "#",
                                            round: true,
                                            color: "white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                " Read"
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 6,
                            sm: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                background: true,
                                style: {
                                    backgroundImage: "url('/img/dg3.jpg')"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                    background: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: external_classnames_default()(classes.cardCategory, classes.textInfo),
                                            children: "Tutorials"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#pablo",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                className: classes.cardTitle,
                                                children: [
                                                    "Trending colors of ",
                                                    new Date().getFullYear()
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: classes.description,
                                            children: [
                                                "Don",
                                                "'",
                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            href: "#",
                                            round: true,
                                            color: "white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                " Read"
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 6,
                            sm: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                background: true,
                                style: {
                                    backgroundImage: "url('/img/dg1.jpg')"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                    background: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: external_classnames_default()(classes.cardCategory, classes.textInfo),
                                            children: "Productivity Style"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#pablo",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                className: classes.cardTitle,
                                                children: [
                                                    "Fashion & Style ",
                                                    new Date().getFullYear()
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: classes.description,
                                            children: [
                                                "Don",
                                                "'",
                                                "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            href: "#",
                                            round: true,
                                            color: "white",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                " Read"
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
    });
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/blogStyle.js

const blogStyle_styles = {
    cardTitle: nextjs_material_kit_pro/* cardTitle */.X5,
    container: nextjs_material_kit_pro/* container */.nC,
    section: {
        ...nextjs_material_kit_pro/* section */.qi,
        padding: "70px 0px"
    },
    coloredShadow: nextjs_material_kit_pro/* coloredShadow */.DF,
    cardDescription: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    },
    cardCategory: {
        marginTop: "10px"
    },
    textRose: {
        color: nextjs_material_kit_pro/* roseColor.0 */.An[0] + " !important"
    }
};
/* harmony default export */ const blogStyle = (blogStyle_styles);

;// CONCATENATED MODULE: ./pages-sections/ecommerce/SectionBlog.js


// nodejs library that concatenates classes

// core components





// @material-ui/core components


const SectionBlog_useStyles = (0,styles_.makeStyles)(blogStyle);
function SectionBlog() {
    const classes = SectionBlog_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: classes.sectionTitle,
                    children: "Latest Articles"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 4,
                            sm: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                blog: true,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                        image: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#pablo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/dg6.jpg",
                                                    alt: "..."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.coloredShadow,
                                                style: {
                                                    backgroundImage: "url('/img/dg6.jpg')",
                                                    opacity: 1
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: external_classnames_default()(classes.cardCategory, classes.textRose),
                                                children: "Trends"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: classes.cardTitle,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    children: "Learn how to wear your scarf with a floral print shirt"
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
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 4,
                            sm: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                blog: true,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                        image: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#pablo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/dg10.jpg",
                                                    alt: "..."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.coloredShadow,
                                                style: {
                                                    backgroundImage: "url('/img/dg10.jpg')",
                                                    opacity: 1
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: external_classnames_default()(classes.cardCategory, classes.textRose),
                                                children: "Fashion Week"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: classes.cardTitle,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    children: "Katy Perry was wearing a Dolce & Gabanna arc dress"
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
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 4,
                            sm: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                blog: true,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                        image: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#pablo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/dg9.jpg",
                                                    alt: "..."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.coloredShadow,
                                                style: {
                                                    backgroundImage: "url('/img/dg9.jpg')",
                                                    opacity: 1
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: external_classnames_default()(classes.cardCategory, classes.textRose),
                                                children: "Fashion Week"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: classes.cardTitle,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    children: "Check the latest fashion events and which are the trends"
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
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/imagesStyles.js
var imagesStyles = __webpack_require__(3055);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js


const ecommerceStyle_styles = {
    ...imagesStyles/* default */.Z,
    title: nextjs_material_kit_pro/* title */.TN,
    main: nextjs_material_kit_pro/* main */.DH,
    mainRaised: nextjs_material_kit_pro/* mainRaised */._p,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    description: nextjs_material_kit_pro/* description */.WL,
    textCenter: {
        textAlign: "center !important"
    },
    container: {
        ...nextjs_material_kit_pro/* container */.nC,
        zIndex: "2"
    },
    brand: {
        "& h1, & h4": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        }
    },
    card: {},
    subscribeButton: {},
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
    subscribeLine: {
        padding: "1.875rem 0px",
        "& $card": {
            marginTop: "30px"
        },
        "& form": {
            margin: "0px"
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
    socialFeed: {
        "& p": {
            display: "table-cell",
            verticalAlign: "top",
            overflow: "hidden",
            paddingBottom: "10px",
            maxWidth: 300
        },
        "& i": {
            fontSize: "20px",
            display: "table-cell",
            paddingRight: "10px"
        }
    },
    img: {
        width: "20%",
        marginRight: "5%",
        marginBottom: "5%",
        float: "left"
    },
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
    left: {
        float: "left!important",
        display: "block"
    },
    right: {
        padding: "15px 0",
        margin: "0",
        float: "right"
    },
    aClass: {
        textDecoration: "none",
        backgroundColor: "transparent"
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
    }
};
/* harmony default export */ const ecommerceStyle = (ecommerceStyle_styles);

;// CONCATENATED MODULE: ./pages/ecommerce.js
/*eslint-disable*/ 

// nodejs library that concatenates classes

// @material-ui/core components




// @material-ui icons

// core components










// sections for this page




const ecommerce_useStyles = (0,styles_.makeStyles)(ecommerceStyle);
function EcommercePage() {
    external_react_default().useEffect(()=>{
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = ecommerce_useStyles();
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
                    height: 300,
                    color: "info"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Parallax/* default */.Z, {
                image: "/img/examples/clark-street-merc.jpg",
                filter: "dark",
                small: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 8,
                            sm: 8,
                            className: external_classnames_default()(classes.mlAuto, classes.mrAuto, classes.textCenter),
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classes.brand,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: classes.title,
                                        children: "Ecommerce Page!"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                        children: [
                                            "Free global delivery for all products. Use coupon",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                children: "25summer"
                                            }),
                                            " for an extra 25% Off"
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()(classes.main, classes.mainRaised),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionLatestOffers, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionProducts, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionBlog, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.subscribeLine, classes.subscribeLineImage),
                style: {
                    backgroundImage: "url('/img/examples/ecommerce-header.jpg')"
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
                                                            color: "rose",
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
                                            href: "http://blog.creative-tim.com/?ref=njsmkp-e-ecommerce",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/presentation?ref=njsmkp-e-ecommerce",
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
                                            href: "https://www.creative-tim.com/contact-us?ref=njsmkp-e-ecommerce",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "Contact us"
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
                                    href: "https://www.creative-tim.com?ref=njsmkp-e-ecommerce",
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
                                            src: "/img/faces/card-profile2-square.jpg",
                                            className: external_classnames_default()(classes.img, classes.imgRaised, classes.imgRounded),
                                            alt: "..."
                                        })
                                    ]
                                })
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

/***/ 7556:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Dns");

/***/ }),

/***/ 5615:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Error");

/***/ }),

/***/ 7806:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ 9899:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ 952:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Fingerprint");

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
var __webpack_exports__ = __webpack_require__.X(0, [2952,1270,1664,1194,7012,6103,9628,1003,7817,9861,3055,8864,6233,7371], () => (__webpack_exec__(5920)));
module.exports = __webpack_exports__;

})();