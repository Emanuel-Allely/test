"use strict";
(() => {
var exports = {};
exports.id = 5795;
exports.ids = [5795];
exports.modules = {

/***/ 1928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PresentationPage)
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
// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__(9247);
// EXTERNAL MODULE: ./components/Header/HeaderLinks.js
var HeaderLinks = __webpack_require__(5017);
// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__(1003);
// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__(6103);
// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__(6680);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(6302);
// EXTERNAL MODULE: ./components/InfoArea/InfoArea.js + 1 modules
var InfoArea = __webpack_require__(3044);
// EXTERNAL MODULE: external "@material-ui/icons/Apps"
var Apps_ = __webpack_require__(5356);
var Apps_default = /*#__PURE__*/__webpack_require__.n(Apps_);
// EXTERNAL MODULE: external "@material-ui/icons/ViewDay"
var ViewDay_ = __webpack_require__(3806);
var ViewDay_default = /*#__PURE__*/__webpack_require__.n(ViewDay_);
// EXTERNAL MODULE: external "@material-ui/icons/ViewCarousel"
var ViewCarousel_ = __webpack_require__(9081);
var ViewCarousel_default = /*#__PURE__*/__webpack_require__.n(ViewCarousel_);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/presentationSections/descriptionStyle.js

const descriptionStyle = {
    container: nextjs_material_kit_pro/* container */.nC,
    description: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
        textAlign: "center"
    },
    section: {
        ...nextjs_material_kit_pro/* section */.qi,
        padding: "70px 0px",
        "& h4$description": {
            fontSize: "1.5em"
        }
    },
    features: {
        textAlign: "center !important",
        paddingTop: "30px",
        paddingBottom: "0px",
        "& p": {
            fontSize: "16px",
            lineHeight: "1.6em"
        }
    }
};
/* harmony default export */ const presentationSections_descriptionStyle = (descriptionStyle);

;// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionDescription.js


// core components



// @material-ui icons



// @material-ui/core components


const useStyles = (0,styles_.makeStyles)(presentationSections_descriptionStyle);
function SectionDescription() {
    const classes = useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                    justify: "center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 8,
                        sm: 8,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                            className: classes.description,
                            children: [
                                "NextJS Material Kit PRO is a Material-UI and NextJS Kit with a fresh, new design inspired by Google",
                                "'",
                                "s Material Design. You asked for it, so we built it. It",
                                "'",
                                "s a great pleasure to introduce to you the material concepts in an easy to use and beautiful set of components."
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.features,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                md: 4,
                                sm: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                    title: "Huge Number of Components",
                                    description: "Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour.",
                                    icon: (Apps_default()),
                                    iconColor: "danger",
                                    vertical: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                md: 4,
                                sm: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                    title: "Multi-Purpose Sections",
                                    description: "Putting together a page has never been easier than matching together sections. From team presentation to pricing options, you can easily customise and built your pages.",
                                    icon: (ViewDay_default()),
                                    iconColor: "primary",
                                    vertical: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                md: 4,
                                sm: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                    title: "Example Pages",
                                    description: "If you want to get inspiration or just show something directly to your clients, you can jump start your development with our pre-built example pages.",
                                    icon: (ViewCarousel_default()),
                                    iconColor: "success",
                                    vertical: true
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/presentationSections/componentsStyle.js

const reusableStylesForImgs = {
    position: "absolute",
    boxShadow: "0 8px 10px 1px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.14), 0 3px 14px 2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 5px 5px -3px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.2)"
};
const componentsStyle = (theme)=>({
        section: {
            [theme.breakpoints.down("sm")]: {
                overflowX: "hidden"
            }
        },
        container: nextjs_material_kit_pro/* container */.nC,
        mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
        title: {
            ...nextjs_material_kit_pro/* title */.TN,
            marginBottom: "5px",
            marginTop: "60px",
            "& + $description": {
                marginTop: "5px",
                marginBottom: "30px"
            }
        },
        description: {
            color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
        },
        imageContainer: {
            height: "560px",
            position: "relative"
        },
        componentsMacbook: {
            [theme.breakpoints.down("sm")]: {
                maxWidth: "850px!important",
                maxHeight: "480px!important",
                marginTop: "12vh",
                left: "-12px"
            },
            [theme.breakpoints.down(768)]: {
                maxWidth: "350px!important",
                maxHeight: "250px!important",
                marginTop: "12vh",
                left: "-12px"
            },
            width: "auto",
            left: "-100px",
            top: 0,
            height: "100%",
            position: "absolute"
        },
        shoppingCart: {
            [theme.breakpoints.down("md")]: {
                display: "none"
            },
            ...reusableStylesForImgs,
            left: "-13%",
            top: "27%",
            height: "175px",
            borderRadius: "2px",
            WebkitAnimation: "Floatingx 14s ease-in-out infinite",
            float: "left"
        },
        shareButton: {
            [theme.breakpoints.down("md")]: {
                top: "12%"
            },
            [theme.breakpoints.down("sm")]: {
                top: "7%"
            },
            ...reusableStylesForImgs,
            left: "3%",
            top: "-3%",
            height: "25px",
            borderRadius: "3px",
            WebkitAnimation: "Floatingy 11s ease-in-out infinite"
        },
        cardImage: {
            [theme.breakpoints.down("md")]: {
                top: "-2%",
                left: "65%"
            },
            [theme.breakpoints.down("sm")]: {
                top: "-2%"
            },
            ...reusableStylesForImgs,
            left: "35%",
            top: "2%",
            height: "125px",
            borderRadius: "6px",
            WebkitAnimation: "Floatingy 18s ease-in-out infinite"
        },
        twitterImage: {
            [theme.breakpoints.down("md")]: {
                display: "none"
            },
            ...reusableStylesForImgs,
            left: "90%",
            top: "11%",
            height: "90px",
            borderRadius: "2px",
            WebkitAnimation: "Floatingy 10s ease-in-out infinite"
        },
        iconsImage: {
            [theme.breakpoints.down("md")]: {
                left: "47%",
                top: "37%"
            },
            [theme.breakpoints.down("sm")]: {
                left: "-7%",
                top: "37%"
            },
            ...reusableStylesForImgs,
            left: "70%",
            top: "67%",
            height: "40px",
            WebkitAnimation: "Floatingx 16s ease-in-out infinite"
        },
        repostImage: {
            [theme.breakpoints.down("md")]: {
                top: "54%"
            },
            ...reusableStylesForImgs,
            left: "0%",
            top: "68%",
            height: "25px",
            borderRadius: "3px",
            WebkitAnimation: "Floatingy 15s ease-in-out infinite"
        }
    });
/* harmony default export */ const presentationSections_componentsStyle = (componentsStyle);

;// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionComponents.js


// core components


// @material-ui/core components


const SectionComponents_useStyles = (0,styles_.makeStyles)(presentationSections_componentsStyle);
function SectionComponents() {
    const classes = SectionComponents_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                justify: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                        md: 5,
                        lg: 5,
                        sm: 12,
                        xs: 12,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: classes.title,
                                children: "Basic Components"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: classes.description,
                                children: "The core elements of your website"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: classes.description,
                                children: "All the Material-UI components that you need in a development have been re-design with the new look. Besides the numerous basic elements, we have also created additional classes. All these items will help you take your project to the next level."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        xs: 12,
                        sm: 12,
                        md: 6,
                        lg: 6,
                        className: classes.mlAuto,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.imageContainer,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/img/assets-for-demo/presentationViewSectionComponent/laptop-basics.png",
                                    alt: "macbook",
                                    className: classes.componentsMacbook
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/img/assets-for-demo/presentationViewSectionComponent/table.jpg",
                                    alt: "macbook",
                                    className: classes.shoppingCart
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/img/assets-for-demo/presentationViewSectionComponent/share-btn.png",
                                    alt: "macbook",
                                    className: classes.shareButton
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/img/assets-for-demo/presentationViewSectionComponent/coloured-card-with-btn.jpg",
                                    alt: "macbook",
                                    className: classes.cardImage
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/img/assets-for-demo/presentationViewSectionComponent/coloured-card.jpg",
                                    alt: "macbook",
                                    className: classes.twitterImage
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/img/assets-for-demo/presentationViewSectionComponent/social-row.jpg",
                                    alt: "macbook",
                                    className: classes.iconsImage
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/img/assets-for-demo/presentationViewSectionComponent/pin-btn.jpg",
                                    alt: "macbook",
                                    className: classes.repostImage
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/presentationSections/cardsStyle.js

const cardsStyle = {
    section: {
        ...nextjs_material_kit_pro/* section */.qi,
        padding: "50px 0px"
    },
    sectionDark: nextjs_material_kit_pro/* sectionDark */.Yw,
    container: nextjs_material_kit_pro/* container */.nC,
    sectionDescription: nextjs_material_kit_pro/* sectionDescription */.kh,
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        marginTop: "30px",
        marginBottom: "25px",
        minHeight: "32px"
    },
    description: {
        color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ",0.76)"
    },
    imageContainer: {
        maxWidth: "1040px",
        marginTop: "-140px",
        position: "relative",
        height: "660px",
        "& img": {
            maxWidth: "1040px",
            width: "auto",
            position: "absolute",
            right: "0px",
            top: "0px"
        }
    },
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU
};
/* harmony default export */ const presentationSections_cardsStyle = (cardsStyle);

;// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionCards.js


// nodejs library that concatenates classes

// core components


// @material-ui/core components


const SectionCards_useStyles = (0,styles_.makeStyles)(presentationSections_cardsStyle);
function SectionCards() {
    const classes = SectionCards_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()(classes.section, classes.sectionDark),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                justify: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 7,
                        sm: 7,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.imageContainer,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/img/assets-for-demo/cards-test.png",
                                alt: "views"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 4,
                        sm: 5,
                        className: classes.mlAuto,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.sectionDescription,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: classes.title,
                                    children: "Unconventional Cards"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: classes.description,
                                    children: "One Card for Every Problem"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: classes.description,
                                    children: "We love cards and everybody on the web seems to. We have gone above and beyond with options for you to organise your information. From cards designed for blog posts, to product cards or user profiles, you will have many options to choose from. All the cards follow the material principles and have a design that stands out."
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: external "react-animate-on-scroll"
const external_react_animate_on_scroll_namespaceObject = require("react-animate-on-scroll");
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_namespaceObject);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/presentationSections/contentStyle.js

const contentStyle = (theme)=>({
        container: nextjs_material_kit_pro/* container */.nC,
        section: {
            ...nextjs_material_kit_pro/* section */.qi,
            padding: "70px 0px"
        },
        sectionDescription: nextjs_material_kit_pro/* sectionDescription */.kh,
        title: {
            ...nextjs_material_kit_pro/* title */.TN,
            color: nextjs_material_kit_pro/* grayColor.1 */.X_[1],
            marginTop: "30px",
            marginBottom: "5px",
            "& + $description": {
                marginBottom: "10px",
                marginTop: "0px"
            }
        },
        description: {
            color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
            marginTop: "35px",
            marginBottom: "15px"
        },
        imageContainer: {
            maxWidth: "900px",
            position: "relative"
        },
        ipadImg: {
            width: "100%"
        },
        mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
        areaImg: {
            height: "300px",
            width: "250px",
            zIndex: 2,
            top: "10%",
            left: "60%",
            boxShadow: "0 8px 10px 1px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.14), 0 3px 14px 2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 5px 5px -3px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.2)",
            [theme.breakpoints.down("sm")]: {
                maxWidth: "130px",
                maxHeight: "170px"
            }
        },
        infoImg: {
            height: "200px",
            width: "300px",
            top: "50%",
            left: "0%",
            boxShadow: "0 8px 10px 1px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.14), 0 3px 14px 2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 5px 5px -3px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.2)",
            [theme.breakpoints.down("sm")]: {
                maxWidth: "170px",
                maxHeight: "120px"
            }
        },
        animeInfoImg: {
            top: "50%",
            left: "0%",
            position: "absolute"
        },
        animeAreaImg: {
            top: "10%",
            left: "60%",
            position: "absolute"
        }
    });
/* harmony default export */ const presentationSections_contentStyle = (contentStyle);

;// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionContent.js


// core components


// @material-ui/core components

// library used for cool animations


const SectionContent_useStyles = (0,styles_.makeStyles)(presentationSections_contentStyle);
function SectionContent() {
    const classes = SectionContent_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                justify: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.sectionDescription,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: classes.title,
                                    children: "Content Areas"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: classes.description,
                                    children: "For Areas that Need More Space"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                    className: classes.description,
                                    children: [
                                        "If you need elements such as tables, comments, description areas, tabs and many others, we",
                                        "'",
                                        "ve got you covered. We took into consideration multiple use cases and came up with some specific elements that you will love to use. They",
                                        "'",
                                        "re beautiful and easy to use for the end user navigating your website.",
                                        " "
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 7,
                        className: classes.mlAuto,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.imageContainer,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.animeAreaImg,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                                        animateIn: "fadeInUp",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/presentationViewSectionComponent/ipad-comments.jpg",
                                            alt: "iPad comments",
                                            className: classes.areaImg
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.animeInfoImg,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_animate_on_scroll_default()), {
                                        animateIn: "fadeInUp",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/presentationViewSectionComponent/ipad-table.jpg",
                                            alt: "iPad table",
                                            className: classes.infoImg
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: classes.ipadImg,
                                    src: "/img/assets-for-demo/presentationViewSectionComponent/presentation-ipad.jpg",
                                    alt: "iPad"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/presentationSections/sectionsStyle.js

const sectionStyle = {
    sectionSections: {
        ...nextjs_material_kit_pro/* section */.qi,
        padding: "70px 0px",
        paddingBottom: "0px",
        marginBottom: "-35px",
        "& img": {
            width: "100%",
            borderRadius: "3px",
            boxShadow: "0 8px 10px 1px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ",0.14), 0 3px 14px 2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ",0.12), 0 5px 5px -3px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ",0.2)",
            transition: "all .2s cubic-bezier(0.4,0,0.2,1)",
            "&:hover": {
                transform: "scale(1.02)"
            }
        }
    },
    container: nextjs_material_kit_pro/* container */.nC,
    containerFluid: nextjs_material_kit_pro/* containerFluid */.ah,
    sectionDescription: {
        textAlign: "center",
        marginBottom: "60px"
    },
    title: nextjs_material_kit_pro/* title */.TN,
    description: nextjs_material_kit_pro/* description */.WL,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    photoGallery: {
        padding: "7.5px"
    }
};
/* harmony default export */ const sectionsStyle = (sectionStyle);

;// CONCATENATED MODULE: ./public/img/assets-for-demo/sections/imgs.js
const imgs = [
    [
        "h_1",
        "h_2",
        "h_3",
        "h_4"
    ],
    [
        "f_1",
        "f_2",
        "f_3",
        "f_4"
    ],
    [
        "f_5",
        "b_2",
        "b_3",
        "b_4"
    ],
    [
        "b_1",
        "p_2",
        "p_3",
        "p_4"
    ],
    [
        "p_5",
        "p_1",
        "pro_2",
        "pro_3"
    ],
    [
        "m_1",
        "pro_1",
        "t_2",
        "t_3"
    ],
    [
        "team_5",
        "team_1",
        "team_2",
        "team_3"
    ],
    [
        "t_1",
        "team_4",
        "pro_4",
        "m_2"
    ], 
];
/* harmony default export */ const sections_imgs = (imgs);

;// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionSections.js


// react components for routing our app without refresh

// nodejs library that concatenates classes

// core components


// core components

// @material-ui/core components


// images array used in rendering a function for this section

const SectionSections_useStyles = (0,styles_.makeStyles)(sectionsStyle);
function SectionSections() {
    const renderContainerFluid = (cssClass)=>{
        return sections_imgs.map((row)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                children: row.map((el, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 3,
                        sm: 3,
                        xs: 12,
                        className: cssClass,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: `/img/assets-for-demo/sections/${el}.jpg`,
                            alt: el
                        }, el[index])
                    }, el + "_" + index);
                })
            }, row[0]);
        });
    };
    const classes = SectionSections_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.sectionSections,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.container,
                children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                    justify: "center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 8,
                        className: external_classnames_default()(classes.mrAuto, classes.mlAuto),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.sectionDescription,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: classes.title,
                                    children: "Ready to Use Sections"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: classes.description,
                                    children: "Build your page section by section! We have created multiple options for you to put together and customise into pixel perfect pages. From headers to footers, you will be able to choose the best combination for your project."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/sections",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "rose",
                                        target: "_blank",
                                        className: classes.navButton,
                                        round: true,
                                        children: "view all sections"
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.containerFluid,
                children: renderContainerFluid(classes.photoGallery)
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__(7403);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/presentationSections/examplesStyle.js

const examplesStyle = {
    section: {
        ...nextjs_material_kit_pro/* section */.qi,
        padding: "70px 0px"
    },
    sectionDark: {
        ...nextjs_material_kit_pro/* sectionDark */.Yw,
        "& $title": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        },
        "& $description": {
            color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ",0.76)"
        }
    },
    container: nextjs_material_kit_pro/* container */.nC,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    sectionDescription: {
        textAlign: "center",
        marginBottom: "90px"
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        textAlign: "center"
    },
    description: nextjs_material_kit_pro/* description */.WL,
    imgCardExtended: {
        transition: "all .2s cubic-bezier(0.4,0,0.2,1)",
        "&:hover": {
            transform: "translate3d(0, -10px, 0)"
        }
    }
};
/* harmony default export */ const presentationSections_examplesStyle = (examplesStyle);

// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/imagesStyles.js
var imagesStyles = __webpack_require__(3055);
;// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionExamples.js


// react components for routing our app without refresh

// nodejs library that concatenates classes

// core components



// @material-ui/core components



const styles = {
    ...presentationSections_examplesStyle,
    ...imagesStyles/* default */.Z
};
const SectionExamples_useStyles = (0,styles_.makeStyles)(styles);
function SectionExamples() {
    const classes = SectionExamples_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()(classes.section, classes.sectionDark),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                    md: 8,
                    className: external_classnames_default()(classes.mrAuto, classes.mlAuto),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: classes.sectionDescription,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: classes.title,
                                children: "Example Pages"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: classes.description,
                                children: "The easiest way to get started is to use one of our pre-built example pages. From landing pages to e-commerce or blog pages, you will be able jump start your development. Show your clients a quick prototype and get inspired for your next project!"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            md: 4,
                            sm: 4,
                            xs: 12,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: classes.title,
                                    children: "About Us"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    className: classes.imgCardExtended,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about-us",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/example-pages/ex-about-us.jpg",
                                            alt: "About us",
                                            className: classes.imgCard
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: classes.title,
                                    children: "Landing Page"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    className: classes.imgCardExtended,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/landing-page",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/example-pages/ex-landing.jpg",
                                            alt: "Landing Page",
                                            className: classes.imgCard
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: classes.title,
                                    children: "Contact Us"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    className: classes.imgCardExtended,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contact-us",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/example-pages/ex-contact.jpg",
                                            alt: "Contact us",
                                            className: classes.imgCard
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            md: 4,
                            sm: 4,
                            xs: 12,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: classes.title,
                                    children: "Blog Post"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    className: classes.imgCardExtended,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/blog-post",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/example-pages/ex-blog-post.jpg",
                                            alt: "Blog Post",
                                            className: classes.imgCard
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: classes.title,
                                    children: "Product Page"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    className: classes.imgCardExtended,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/product",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/example-pages/ex-product.jpg",
                                            alt: "Product Pge",
                                            className: classes.imgCard
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: classes.title,
                                    children: "Login Page"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    className: classes.imgCardExtended,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/login",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/example-pages/ex-login.jpg",
                                            alt: "Login Page",
                                            className: classes.imgCard
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            md: 4,
                            sm: 4,
                            xs: 12,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: classes.title,
                                    children: "Pricing Pge"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    className: classes.imgCardExtended,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/pricing",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/example-pages/ex-pricing.jpg",
                                            alt: "Pricing Page",
                                            className: classes.imgCard
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: classes.title,
                                    children: "Signup Page"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    className: classes.imgCardExtended,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/signup",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/example-pages/ex-register.jpg",
                                            alt: "Signup Page",
                                            className: classes.imgCard
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: classes.title,
                                    children: "Profile Page"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    className: classes.imgCardExtended,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/profile",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/example-pages/ex-profile.jpg",
                                            alt: "Profile Page",
                                            className: classes.imgCard
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: classes.title,
                                    children: "Blog Posts"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    className: classes.imgCardExtended,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/blog-posts",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/example-pages/ex-blog-posts.jpg",
                                            alt: "Blog Posts",
                                            className: classes.imgCard
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(7501);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__(9309);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);
// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__(6721);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/presentationSections/freeDemoStyle.js

const freeDemoStyle = {
    container: nextjs_material_kit_pro/* container */.nC,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    description: nextjs_material_kit_pro/* description */.WL,
    cardTitle: nextjs_material_kit_pro/* cardTitle */.X5,
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        marginTop: "15px",
        marginBottom: "1rem"
    },
    section: {
        ...nextjs_material_kit_pro/* section */.qi,
        padding: "70px 0px"
    },
    iconGithub: {
        fontSize: "82px",
        color: nextjs_material_kit_pro/* grayColor.10 */.X_[10]
    },
    iframeGithub: {
        top: "11px",
        display: "inline-block",
        position: "relative",
        marginLeft: "10px"
    },
    card: {
        ...nextjs_material_kit_pro/* card */.In,
        border: "0px",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ",0.87)",
        width: "100%",
        "& ul": {
            listStyle: "none",
            padding: "0px",
            maxWidth: "240px",
            margin: "10px auto"
        },
        "& ul li": {
            color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
            padding: "12px 0px",
            borderBottom: "1px solid rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.0 */.X_[0]) + ",0.3)",
            textAlign: "left"
        },
        "& ul li b": {
            minWidth: "24px",
            display: "inline-block",
            textAlign: "center",
            color: nextjs_material_kit_pro/* grayColor.1 */.X_[1]
        }
    },
    cardPricing: {
        boxShadow: "none"
    },
    cardIcons: {
        top: "6px",
        position: "relative"
    },
    dangerColor: {
        color: nextjs_material_kit_pro/* dangerColor.0 */.E7[0]
    },
    successColor: {
        color: nextjs_material_kit_pro/* successColor.0 */.nq[0]
    }
};
/* harmony default export */ const presentationSections_freeDemoStyle = (freeDemoStyle);

;// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionFreeDemo.js


// nodejs library that concatenates classes

// @material-ui/core components

// @material-ui icons


// core components






const SectionFreeDemo_useStyles = (0,styles_.makeStyles)(presentationSections_freeDemoStyle);
function SectionFreeDemo() {
    const classes = SectionFreeDemo_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                justify: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                        md: 5,
                        sm: 8,
                        className: classes.mlAuto + " " + classes.mrAuto,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: classes.iconGithub,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fab fa-github"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "Free Demo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: classes.description,
                                        children: "Do you want to test and see the benefits of this kit before purchasing it? You can give the demo version a try. It features enough basic components for you to get a feel of the design and also test the quality of the code. Get it free on GitHub!"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                href: "https://github.com/creativetimofficial/nextjs-material-kit",
                                color: "rose",
                                target: "_blank",
                                round: true,
                                children: "View demo on github"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 6,
                        sm: 12,
                        className: classes.mlAuto,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    md: 6,
                                    sm: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                        className: external_classnames_default()(classes.card, classes.cardPricing),
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: classes.cardTitle,
                                                    children: "Free Demo"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: "60"
                                                                }),
                                                                " Components"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: "3"
                                                                }),
                                                                " Example Pages"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                    className: external_classnames_default()(classes.cardIcons, classes.dangerColor)
                                                                }),
                                                                " ",
                                                                "Unconventional Cards"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                    className: external_classnames_default()(classes.cardIcons, classes.dangerColor)
                                                                }),
                                                                " ",
                                                                "Sections"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                    className: external_classnames_default()(classes.cardIcons, classes.dangerColor)
                                                                }),
                                                                " ",
                                                                "Photoshop for Prototype"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                    className: external_classnames_default()(classes.cardIcons, classes.dangerColor)
                                                                }),
                                                                " ",
                                                                "Premium Support"
                                                            ]
                                                        })
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
                                        className: external_classnames_default()(classes.card, classes.cardPricing),
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: classes.cardTitle,
                                                    children: "PRO Version"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: "1000+"
                                                                }),
                                                                " Components"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: "12"
                                                                }),
                                                                " Example Pages"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                                    className: external_classnames_default()(classes.cardIcons, classes.successColor)
                                                                }),
                                                                " ",
                                                                "Unconventional Cards"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                                    className: external_classnames_default()(classes.cardIcons, classes.successColor)
                                                                }),
                                                                " ",
                                                                "Sections"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                                    className: external_classnames_default()(classes.cardIcons, classes.successColor)
                                                                }),
                                                                " ",
                                                                "Photoshop for Prototype"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {
                                                                    className: external_classnames_default()(classes.cardIcons, classes.successColor)
                                                                }),
                                                                " ",
                                                                "Premium Support"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(9861);
;// CONCATENATED MODULE: external "@material-ui/icons/GridOn"
const GridOn_namespaceObject = require("@material-ui/icons/GridOn");
var GridOn_default = /*#__PURE__*/__webpack_require__.n(GridOn_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Phonelink"
const Phonelink_namespaceObject = require("@material-ui/icons/Phonelink");
var Phonelink_default = /*#__PURE__*/__webpack_require__.n(Phonelink_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/AccessTime"
var AccessTime_ = __webpack_require__(9615);
var AccessTime_default = /*#__PURE__*/__webpack_require__.n(AccessTime_);
// EXTERNAL MODULE: external "@material-ui/icons/AttachMoney"
var AttachMoney_ = __webpack_require__(9418);
var AttachMoney_default = /*#__PURE__*/__webpack_require__.n(AttachMoney_);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/presentationSections/overviewStyle.js

const overviewStyle = {
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    title: nextjs_material_kit_pro/* title */.TN,
    container: nextjs_material_kit_pro/* container */.nC,
    description: {
        ...nextjs_material_kit_pro/* description */.WL,
        marginBottom: "70px"
    },
    section: {
        ...nextjs_material_kit_pro/* section */.qi,
        padding: "70px 0px"
    },
    sectionTestimonials: {
        paddingTop: "50px",
        paddingBottom: "80px",
        textAlign: "center",
        "& $cardTitle": {
            marginTop: "0px"
        }
    },
    features5: {
        ...nextjs_material_kit_pro/* section */.qi,
        backgroundRepeat: "no-repeat",
        position: "relative",
        padding: "80px 0px",
        textAlign: "center",
        "& $title": {
            zIndex: "2",
            position: "relative",
            marginBottom: "30px",
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        },
        "& p": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        },
        "&:after": {
            background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ",0.65)",
            position: "absolute",
            width: "100%",
            height: "100%",
            content: "''",
            zIndex: "0",
            left: "0px",
            top: "0px"
        }
    },
    features: {
        textAlign: "center",
        paddingTop: "30px",
        pddingBottom: "0px"
    },
    featuresShow: {
        zIndex: 3,
        border: "1px solid rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ",0.35)",
        borderTop: 0,
        borderBottom: 0,
        "&:last-of-type": {
            borderRight: 0
        },
        "&:first-of-type": {
            borderLeft: 0
        },
        "& h4,& p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        },
        "& p": {
            lineHeight: "24px",
            fontSize: "16px"
        }
    },
    ourClients: {
        textAlign: "center",
        "& img": {
            width: "100%",
            maxWidth: "140px",
            margin: "0 auto",
            display: "inline-block"
        }
    },
    cardTitle: {
        ...nextjs_material_kit_pro/* cardTitle */.X5,
        marginTop: 0
    },
    cardDescription: {
        fontSize: "16px",
        lineHeight: "1.6em",
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    },
    coloredShadow: nextjs_material_kit_pro/* coloredShadow */.DF,
    alignLeft: {
        textAlign: "left"
    }
};
/* harmony default export */ const presentationSections_overviewStyle = (overviewStyle);

;// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionOverview.js


// nodejs library that concatenates classes

// core components






// @material-ui icons




// @material-ui/core components


const SectionOverview_useStyles = (0,styles_.makeStyles)(presentationSections_overviewStyle);
function SectionOverview() {
    const classes = SectionOverview_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.section,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.features5,
                style: {
                    backgroundImage: "url('/img/assets-for-demo/features-5.jpg')"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 8,
                        className: external_classnames_default()(classes.mlAuto, classes.mrAuto),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: classes.title,
                            children: "Your work will get much easier"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.container,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            justify: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    sm: 3,
                                    className: classes.featuresShow,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                        title: "Material UI Grid",
                                        description: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Enjoy the fluid grid system based on 12 columns. Material Kit PRO is built over Material-UI and has all the benefits that the framework comes with."
                                        }),
                                        icon: (GridOn_default()),
                                        iconColor: "gray",
                                        vertical: true
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    sm: 3,
                                    className: classes.featuresShow,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                        title: "Fully Responsive",
                                        description: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "This Material UI kit is built mobile-first and looks amazing on any device. Regardless of the screen size, the website content will naturally fit the given resolution."
                                        }),
                                        icon: (Phonelink_default()),
                                        iconColor: "gray",
                                        vertical: true
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    sm: 3,
                                    className: classes.featuresShow,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                        title: "Save Time",
                                        description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Using the Material Kit PRO will save you large amount of time. You don",
                                                "'",
                                                "t have to worry about customising the basic Material-UI design or generating new components."
                                            ]
                                        }),
                                        icon: (AccessTime_default()),
                                        iconColor: "gray",
                                        vertical: true
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    sm: 3,
                                    className: classes.featuresShow,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                        title: "Save Money",
                                        description: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Creating your design from scratch with dedicated designers can be very expensive. Using a kit is the best option to start your development while bootstrapping your budget."
                                        }),
                                        icon: (AttachMoney_default()),
                                        iconColor: "gray",
                                        vertical: true
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.sectionTestimonials,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                md: 8,
                                className: external_classnames_default()(classes.mlAuto, classes.mrAuto),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "Trusted by 879.000+ People"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                        className: classes.description,
                                        children: [
                                            "The UI Kits, Templates and Dashboards that we",
                                            "'",
                                            "ve created are used by",
                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                children: " 879,000+ web developers"
                                            }),
                                            " in over",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                children: " 1.588.000 Web Projects"
                                            }),
                                            ". This is what some of them think:"
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    md: 4,
                                    sm: 4,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                        plain: true,
                                        profile: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    md: 3,
                                                    sm: 3,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                        image: true,
                                                        plain: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/img/assets-for-demo/test1.jpg",
                                                                    alt: "..."
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.coloredShadow,
                                                                style: {
                                                                    backgroundImage: "url('/img/assets-for-demo/test1.jpg')",
                                                                    opacity: "1"
                                                                }
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.coloredShadow,
                                                                style: {
                                                                    backgroundImage: "url('/img/assets-for-demo/test1.jpg')",
                                                                    opacity: "1"
                                                                }
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    md: 9,
                                                    sm: 9,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        plain: true,
                                                        className: classes.alignLeft,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: "Khaldi Yass"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: classes.cardDescription,
                                                                children: [
                                                                    '"',
                                                                    "As soon as I saw this kit, everything else isn",
                                                                    "'",
                                                                    "t the same anymore, I just can",
                                                                    "'",
                                                                    "t describe it guys! Thank you for this work!",
                                                                    '"'
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    md: 4,
                                    sm: 4,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                        plain: true,
                                        profile: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    md: 3,
                                                    sm: 3,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                        image: true,
                                                        plain: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/img/assets-for-demo/test2.jpg",
                                                                    alt: "..."
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.coloredShadow,
                                                                style: {
                                                                    backgroundImage: "url('/img/assets-for-demo/test2.jpg')",
                                                                    opacity: "1"
                                                                }
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.coloredShadow,
                                                                style: {
                                                                    backgroundImage: "url('/img/assets-for-demo/test2.jpg')",
                                                                    opacity: "1"
                                                                }
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    md: 9,
                                                    sm: 9,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        plain: true,
                                                        className: classes.alignLeft,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: "Josh Murray"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: classes.cardDescription,
                                                                children: [
                                                                    '"',
                                                                    "Great kit! Used this for a client already and he is over the moon. Keep up the good work Creative Tim! 10/10 for design, colours, and the feel of the kit.",
                                                                    '"'
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    md: 4,
                                    sm: 4,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                        plain: true,
                                        profile: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    md: 3,
                                                    sm: 3,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                        image: true,
                                                        plain: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/img/assets-for-demo/test3.jpg",
                                                                    alt: "..."
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.coloredShadow,
                                                                style: {
                                                                    backgroundImage: "url('/img/assets-for-demo/test3.jpg')",
                                                                    opacity: "1"
                                                                }
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.coloredShadow,
                                                                style: {
                                                                    backgroundImage: "url('/img/assets-for-demo/test3.jpg')",
                                                                    opacity: "1"
                                                                }
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    md: 9,
                                                    sm: 9,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        plain: true,
                                                        className: classes.alignLeft,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: "Michael Onubogu"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: classes.cardDescription,
                                                                children: [
                                                                    '"',
                                                                    "Damn Daniel!!! This Material UI Kit is fresh AF! Amazing work!",
                                                                    '"'
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.ourClients,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                justify: "center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 3,
                                        sm: 3,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/ourClients/vodafone.jpg",
                                            alt: "vodafone"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 3,
                                        sm: 3,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/ourClients/microsoft.jpg",
                                            alt: "microsoft"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 3,
                                        sm: 3,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/ourClients/harvard.jpg",
                                            alt: "harvard"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 3,
                                        sm: 3,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/assets-for-demo/ourClients/stanford.jpg",
                                            alt: "stanford"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/NavPills/NavPills.js + 1 modules
var NavPills = __webpack_require__(4945);
// EXTERNAL MODULE: external "@material-ui/icons/ShoppingCart"
var ShoppingCart_ = __webpack_require__(9637);
var ShoppingCart_default = /*#__PURE__*/__webpack_require__.n(ShoppingCart_);
// EXTERNAL MODULE: external "@material-ui/icons/Store"
var Store_ = __webpack_require__(4582);
var Store_default = /*#__PURE__*/__webpack_require__.n(Store_);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/presentationSections/pricingStyle.js

const pricingStyle = {
    container: nextjs_material_kit_pro/* container */.nC,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    title: nextjs_material_kit_pro/* title */.TN,
    section: {
        ...nextjs_material_kit_pro/* section */.qi,
        padding: "80px 0",
        zIndex: 3,
        position: "relative",
        textAlign: "center"
    },
    socialLine: {
        padding: ".9375rem 0px",
        textAlign: "center",
        width: "100%"
    },
    marginRight: {
        marginRight: "3px"
    },
    description: {
        ...nextjs_material_kit_pro/* description */.WL,
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    },
    card: {
        ...nextjs_material_kit_pro/* card */.In,
        marginBottom: "30px",
        boxShadow: "0 2px 2px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ",0.14), 0 3px 1px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ",0.2), 0 1px 5px 0 rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ",0.12)",
        "& ul": {
            listStyle: "none",
            padding: 0,
            maxWidth: "240px",
            margin: "10px auto"
        },
        "& ul li": {
            color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
            textAlign: "center",
            padding: "12px 0px",
            borderBottom: "1px solid rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.0 */.X_[0]) + ",0.3)"
        },
        "& ul li b": {
            color: nextjs_material_kit_pro/* grayColor.1 */.X_[1]
        },
        "& ul li:last-child": {
            border: 0
        }
    },
    cardMargin: {
        marginTop: "80px"
    },
    cardCategory: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
        marginTop: "10px"
    },
    cardTitle: {
        marginTop: "30px",
        color: nextjs_material_kit_pro/* grayColor.1 */.X_[1],
        textDecoration: "none",
        fontWeight: "700",
        fontFamily: "Roboto Slab,Times New Roman,serif",
        "& small": {
            position: "relative",
            top: "-17px",
            fontSize: "26px",
            display: "inline-flex",
            height: 0
        }
    },
    cardBody: {
        padding: "15px"
    },
    navPillsContent: {
        padding: "20px 0px 50px 0px"
    }
};
/* harmony default export */ const presentationSections_pricingStyle = (pricingStyle);

;// CONCATENATED MODULE: ./pages-sections/presentation-page/SectionPricing.js


// nodejs library that concatenates classes

// core components






// @material-ui/core components

// @material-ui/icons



const SectionPricing_useStyles = (0,styles_.makeStyles)(presentationSections_pricingStyle);
function SectionPricing() {
    const classes = SectionPricing_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                        md: 8,
                        sm: 10,
                        className: external_classnames_default()(classes.mlAuto, classes.mrAuto),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: classes.title,
                                children: "Ready to grab NextJS Material Kit PRO?"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                href: "https://www.creative-tim.com/product/nextjs-material-kit-pro#pricingCard?ref=njsmkp-presentation",
                                color: "primary",
                                target: "_blank",
                                round: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ShoppingCart_default()), {
                                        className: classes.icons
                                    }),
                                    " buy now"
                                ]
                            }),
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                href: "https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmkp-presentation",
                                color: "white",
                                target: "_blank",
                                round: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Store_default()), {
                                        className: classes.icons
                                    }),
                                    " Check Free Demo"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.socialLine,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.container,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    md: 12,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: classes.title,
                                            children: "Thank you for sharing!"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "twitter",
                                            href: "#pablo",
                                            round: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter " + classes.marginRight
                                                }),
                                                "Twitter"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "facebook",
                                            href: "#pablo",
                                            round: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook " + classes.marginRight
                                                }),
                                                "Facebook"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "google",
                                            href: "#pablo",
                                            round: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-google " + classes.marginRight
                                                }),
                                                "Google"
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js
var footerStyle = __webpack_require__(3769);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/presentationStyle.js


const presentationStyle = {
    ...footerStyle/* default */.Z,
    main: {
        ...nextjs_material_kit_pro/* main */.DH
    },
    mainRaised: nextjs_material_kit_pro/* mainRaised */._p,
    parallax: {
        height: "90vh",
        overflow: "hidden",
        backgroundPosition: "center top"
    },
    container: {
        ...nextjs_material_kit_pro/* container */.nC,
        zIndex: 1
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    brand: {
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        textAlign: "center",
        "& h1": {
            fontSize: "4.2rem",
            fontWeight: "600",
            display: "inline-block",
            position: "relative"
        }
    },
    proBadge: {
        position: "relative",
        fontSize: "22px",
        textTransform: "uppercase",
        fontWeight: "700",
        right: "-10px",
        padding: "10px 18px",
        top: "-30px",
        background: nextjs_material_kit_pro/* whiteColor */.zQ,
        borderRadius: "3px",
        color: nextjs_material_kit_pro/* grayColor.18 */.X_[18],
        lineHeight: "22px",
        boxShadow: "0 5px 5px -2px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* grayColor.25 */.X_[25]) + ",.4)"
    }
};
/* harmony default export */ const pages_presentationStyle = (presentationStyle);

;// CONCATENATED MODULE: ./pages/presentation.js
/*eslint-disable*/ 

// nodejs library that concatenates classes

// @material-ui/core components



// core components







// sections for this page










const presentation_useStyles = (0,styles_.makeStyles)(pages_presentationStyle);
function PresentationPage() {
    external_react_default().useEffect(()=>{
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = presentation_useStyles();
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
                    height: 400,
                    color: "info"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Parallax/* default */.Z, {
                image: "/img/nextjs_header.jpg",
                className: classes.parallax,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classes.brand,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        children: [
                                            "NextJS Material Kit",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: classes.proBadge,
                                                children: "PRO"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: classes.title,
                                        children: "A Badass Material-UI Kit based on Material Design."
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
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionDescription, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionComponents, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionCards, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionContent, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionSections, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionExamples, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionFreeDemo, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionOverview, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionPricing, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                theme: "white",
                content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.left,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmkp-presentation",
                                target: "_blank",
                                className: classes.footerBrand,
                                children: "NextJS Material Kit PRO"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.pullCenter,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                className: classes.list,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/?ref=njsmkp-presentation",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "Creative Tim"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/presentation?ref=njsmkp-presentation",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "About us"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "http://blog.creative-tim.com/?ref=njsmkp-presentation",
                                            className: classes.block,
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/license?ref=njsmkp-presentation",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "Licenses"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.rightLinks,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "https://twitter.com/CreativeTim?ref=creativetim",
                                            target: "_blank",
                                            color: "twitter",
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "https://dribbble.com/creativetim?ref=creativetim",
                                            target: "_blank",
                                            color: "dribbble",
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-dribbble"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "https://instagram.com/CreativeTimOfficial?ref=creativetim",
                                            target: "_blank",
                                            color: "instagram",
                                            justIcon: true,
                                            simple: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-instagram"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 8736:
/***/ ((module) => {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ 2610:
/***/ ((module) => {

module.exports = require("@material-ui/core/Button");

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

/***/ 2301:
/***/ ((module) => {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ 9033:
/***/ ((module) => {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ 5722:
/***/ ((module) => {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 9615:
/***/ ((module) => {

module.exports = require("@material-ui/icons/AccessTime");

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
var __webpack_exports__ = __webpack_require__.X(0, [2952,1270,1664,1194,7012,6103,9628,1003,9861,3044,3055,4945,3769], () => (__webpack_exec__(1928)));
module.exports = __webpack_exports__;

})();