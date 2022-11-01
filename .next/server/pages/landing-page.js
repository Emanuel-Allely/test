"use strict";
(() => {
var exports = {};
exports.id = 4545;
exports.ids = [4545];
exports.modules = {

/***/ 512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LandingPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
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
// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__(9899);
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);
// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__(9247);
// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__(6103);
// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__(6680);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(6302);
// EXTERNAL MODULE: ./components/Header/HeaderLinks.js
var HeaderLinks = __webpack_require__(5017);
// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__(1003);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/landingPageStyle.js

const landingPageStyle = {
    container: {
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        ...nextjs_material_kit_pro/* container */.nC,
        zIndex: "2"
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: nextjs_material_kit_pro/* whiteColor */.zQ,
        textDecoration: "none"
    },
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "500px",
        margin: "10px auto 0"
    },
    main: {
        ...nextjs_material_kit_pro/* main */.DH
    },
    mainRaised: {
        ...nextjs_material_kit_pro/* mainRaised */._p
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
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto"
    },
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
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
    icon: {
        width: "18px",
        height: "18px",
        top: "3px",
        position: "relative"
    }
};
/* harmony default export */ const pages_landingPageStyle = (landingPageStyle);

// EXTERNAL MODULE: external "@material-ui/icons/Chat"
var Chat_ = __webpack_require__(1677);
var Chat_default = /*#__PURE__*/__webpack_require__.n(Chat_);
// EXTERNAL MODULE: external "@material-ui/icons/VerifiedUser"
var VerifiedUser_ = __webpack_require__(8139);
var VerifiedUser_default = /*#__PURE__*/__webpack_require__.n(VerifiedUser_);
// EXTERNAL MODULE: external "@material-ui/icons/Fingerprint"
var Fingerprint_ = __webpack_require__(952);
var Fingerprint_default = /*#__PURE__*/__webpack_require__.n(Fingerprint_);
// EXTERNAL MODULE: ./components/InfoArea/InfoArea.js + 1 modules
var InfoArea = __webpack_require__(3044);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/landingPageSections/productStyle.js

const productStyle = {
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    description: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    }
};
/* harmony default export */ const landingPageSections_productStyle = (productStyle);

;// CONCATENATED MODULE: ./pages-sections/landing-page/SectionProduct.js


// @material-ui/core components

// @material-ui/icons



// core components




const useStyles = (0,styles_.makeStyles)(landingPageSections_productStyle);
function SectionProduct() {
    const classes = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                justify: "center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 8,
                    md: 8,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: classes.title,
                            children: [
                                "Let",
                                "'",
                                "s talk product"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                            className: classes.description,
                            children: [
                                "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn",
                                "'",
                                "t scroll to get here. Add a button if you want the user to see more."
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 4,
                            md: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                title: "Free Chat",
                                description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                icon: (Chat_default()),
                                iconColor: "info",
                                vertical: true
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 4,
                            md: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                title: "Verified Users",
                                description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                icon: (VerifiedUser_default()),
                                iconColor: "success",
                                vertical: true
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 4,
                            md: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                title: "Fingerprint",
                                description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                icon: (Fingerprint_default()),
                                iconColor: "danger",
                                vertical: true
                            })
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__(7403);
// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(9861);
// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__(6721);
// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__(8864);
// EXTERNAL MODULE: ./components/Typography/Muted.js
var Muted = __webpack_require__(3278);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle.js
var teamsStyle = __webpack_require__(6156);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/imagesStyles.js
var imagesStyles = __webpack_require__(3055);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/landingPageSections/teamStyle.js


const teamStyle = {
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    ...imagesStyles/* default */.Z,
    itemGrid: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    cardTitle: nextjs_material_kit_pro/* cardTitle */.X5,
    smallTitle: {
        color: nextjs_material_kit_pro/* grayColor.7 */.X_[7]
    },
    description: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    },
    justifyCenter: {
        justifyContent: "center !important"
    },
    socials: {
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    },
    margin5: {
        margin: "5px"
    },
    card3: {
        textAlign: "center"
    }
};
/* harmony default export */ const landingPageSections_teamStyle = (teamStyle);

;// CONCATENATED MODULE: ./pages-sections/landing-page/SectionTeam.js


// @material-ui/core components

// @material-ui/icons
// import  from "@material-ui/icons/";
// core components










const style = {
    ...teamsStyle/* default */.Z,
    ...landingPageSections_teamStyle,
    justifyContentCenter: {
        justifyContent: "center"
    }
};
const SectionTeam_useStyles = (0,styles_.makeStyles)(style);
function SectionTeam() {
    const classes = SectionTeam_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: classes.title,
                children: "Here is our team"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 6,
                            md: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                profile: true,
                                plain: true,
                                className: classes.card3,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 5,
                                            md: 5,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                image: true,
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/faces/card-profile1-square.jpg",
                                                            alt: "..."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: classes.coloredShadow,
                                                        style: {
                                                            backgroundImage: "url('/img/faces/card-profile1-square.jpg')",
                                                            opacity: "1"
                                                        }
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 7,
                                            md: 7,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Alec Thompson"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: classes.cardCategory,
                                                                children: "FOUNDER"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: classes.description,
                                                            children: [
                                                                "Don",
                                                                "'",
                                                                "t be scared of the truth because we need to restart the human foundation in truth..."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                    plain: true,
                                                    className: classes.justifyContentCenter,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "twitter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "facebook",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-facebook-square"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "google",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-google"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 6,
                            md: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                profile: true,
                                plain: true,
                                className: classes.card3,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 5,
                                            md: 5,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                image: true,
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/faces/card-profile6-square.jpg",
                                                            alt: "..."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: classes.coloredShadow,
                                                        style: {
                                                            backgroundImage: "url('/img/faces/card-profile6-square.jpg')",
                                                            opacity: "1"
                                                        }
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 7,
                                            md: 7,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Kendall Andrew"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: classes.cardCategory,
                                                                children: "GRAPHIC DESIGNER"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: classes.description,
                                                            children: [
                                                                "Don",
                                                                "'",
                                                                "t be scared of the truth because we need to restart the human foundation in truth..."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                    plain: true,
                                                    className: classes.justifyContentCenter,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "linkedin",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-linkedin-in"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "facebook",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-facebook-square"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "dribbble",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-dribbble"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "google",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-google"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 6,
                            md: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                profile: true,
                                plain: true,
                                className: classes.card3,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 5,
                                            md: 5,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                image: true,
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/faces/card-profile4-square.jpg",
                                                            alt: "..."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: classes.coloredShadow,
                                                        style: {
                                                            backgroundImage: "url('/img/faces/card-profile4-square.jpg')",
                                                            opacity: "1"
                                                        }
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 7,
                                            md: 7,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Gina Andrew"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: classes.cardCategory,
                                                                children: "WEB DESIGNER"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: classes.description,
                                                            children: [
                                                                "I love you like Kanye loves Kanye. Don",
                                                                "'",
                                                                "t be scared of the truth."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                    plain: true,
                                                    className: classes.justifyContentCenter,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "youtube",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-youtube"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "twitter",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "instagram",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 6,
                            md: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                profile: true,
                                plain: true,
                                className: classes.card3,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 5,
                                            md: 5,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                image: true,
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/faces/card-profile2-square.jpg",
                                                            alt: "..."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: classes.coloredShadow,
                                                        style: {
                                                            backgroundImage: "url('/img/faces/card-profile2-square.jpg')",
                                                            opacity: "1"
                                                        }
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 7,
                                            md: 7,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "George West"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: classes.cardCategory,
                                                                children: "BACKEND HACKER"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: classes.description,
                                                            children: [
                                                                "I love you like Kanye loves Kanye. Don",
                                                                "'",
                                                                "t be scared of the truth."
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                    plain: true,
                                                    className: classes.justifyContentCenter,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "linkedin",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-linkedin-in"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "facebook",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-facebook-square"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                            justIcon: true,
                                                            simple: true,
                                                            color: "google",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-google"
                                                            })
                                                        })
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
    });
};

// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__(7817);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/landingPageSections/workStyle.js

const workStyle = {
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    section: {
        padding: "70px 0"
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        textAlign: "center"
    },
    description: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0],
        textAlign: "center"
    },
    textCenter: {
        textAlign: "center"
    },
    textArea: {
        marginRight: "15px",
        marginLeft: "15px"
    }
};
/* harmony default export */ const landingPageSections_workStyle = (workStyle);

;// CONCATENATED MODULE: ./pages-sections/landing-page/SectionWork.js


// @material-ui/core components

// @material-ui/icons
// core components





const SectionWork_useStyles = (0,styles_.makeStyles)(landingPageSections_workStyle);
function SectionWork() {
    const classes = SectionWork_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
            justify: "center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                cs: 12,
                sm: 8,
                md: 8,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: classes.title,
                        children: "Work with us"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: classes.description,
                        children: "Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                        labelText: "Your Name",
                                        id: "name",
                                        formControlProps: {
                                            fullWidth: true
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                        labelText: "Your Email",
                                        id: "email",
                                        formControlProps: {
                                            fullWidth: true
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                    labelText: "Your Message",
                                    id: "message",
                                    formControlProps: {
                                        fullWidth: true,
                                        className: classes.textArea
                                    },
                                    inputProps: {
                                        multiline: true,
                                        rows: 5
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    className: classes.mrAuto + " " + classes.mlAuto,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        color: "primary",
                                        children: "Send Message"
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

;// CONCATENATED MODULE: ./pages/landing-page.js
/*eslint-disable*/ 

// nodejs library to set properties for components

// nodejs library that concatenates classes

// @material-ui/core components



// @material-ui/icons

// core components








// Sections for this page



const landing_page_useStyles = (0,styles_.makeStyles)(pages_landingPageStyle);
function LandingPage({ ...rest }) {
    external_react_default().useEffect(()=>{
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = landing_page_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                color: "transparent",
                brand: "NextJS Material Kit PRO",
                links: /*#__PURE__*/ jsx_runtime_.jsx(HeaderLinks/* default */.Z, {
                    dropdownHoverColor: "info"
                }),
                fixed: true,
                changeColorOnScroll: {
                    height: 300,
                    color: "info"
                },
                ...rest
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Parallax/* default */.Z, {
                image: "/img/bg8.jpg",
                filter: "dark",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 6,
                            md: 6,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: classes.title,
                                    children: "Your Story Starts With Us."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                    children: [
                                        "Every landing page needs a small description after the big bold title, that",
                                        "'",
                                        "s why we added this text here. Add here all the information that can make you or your product create the first impression."
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                    color: "danger",
                                    size: "lg",
                                    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim",
                                    target: "_blank",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fas fa-play"
                                        }),
                                        "Watch video"
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.main, classes.mainRaised),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionProduct, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionTeam, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionWork, {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
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
                                            href: "https://www.creative-tim.com/?ref=njsmkp-landing",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "Creative Tim"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/presentation?ref=njsmkp-landing",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "About us"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "http://blog.creative-tim.com/?ref=njsmkp-landing",
                                            className: classes.block,
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/license?ref=njsmkp-landing",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "Licenses"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.right,
                            children: [
                                "\xa9 ",
                                1900 + new Date().getYear(),
                                " , made with",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {
                                    className: classes.icon
                                }),
                                " by",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.creative-tim.com/?ref=njsmkp-landing",
                                    target: "_blank",
                                    children: "Creative Tim"
                                }),
                                " ",
                                "for a better web."
                            ]
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

/***/ 5811:
/***/ ((module) => {

module.exports = require("@material-ui/core/FormControl");

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

/***/ 8139:
/***/ ((module) => {

module.exports = require("@material-ui/icons/VerifiedUser");

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
var __webpack_exports__ = __webpack_require__.X(0, [2952,1270,1664,1194,7012,6103,9628,1003,7817,9861,3044,3055,8864,5124,1949], () => (__webpack_exec__(512)));
module.exports = __webpack_exports__;

})();