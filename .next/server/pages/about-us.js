"use strict";
(() => {
var exports = {};
exports.id = 8552;
exports.ids = [8552];
exports.modules = {

/***/ 9076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AboutUsPage)
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
// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__(9899);
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);
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
// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__(6103);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/descriptionStyle.js

const descriptionStyle = {
    container: nextjs_material_kit_pro/* container */.nC,
    textCenter: {
        textAlign: "center"
    },
    aboutDescription: {
        padding: "70px 0 0 0"
    },
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    description: nextjs_material_kit_pro/* description */.WL
};
/* harmony default export */ const aboutUsSections_descriptionStyle = (descriptionStyle);

;// CONCATENATED MODULE: ./pages-sections/about-us/SectionDescription.js


// nodejs library that concatenates classes

// core components


// @material-ui/core components


const useStyles = (0,styles_.makeStyles)(aboutUsSections_descriptionStyle);
function SectionDescription() {
    const classes = useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()(classes.aboutDescription, classes.textCenter),
        children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                md: 8,
                sm: 8,
                className: external_classnames_default()(classes.mrAuto, classes.mlAuto),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                    className: classes.description,
                    children: [
                        "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn",
                        "'",
                        "t scroll to get here. Add a button if you want the user to see more."
                    ]
                })
            })
        })
    });
};

// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__(7403);
// EXTERNAL MODULE: ./components/Card/CardAvatar.js + 1 modules
var CardAvatar = __webpack_require__(686);
// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__(6721);
// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__(8864);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(6302);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/teamStyle.js

const teamStyle = {
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    title: nextjs_material_kit_pro/* title */.TN,
    description: {
        ...nextjs_material_kit_pro/* description */.WL,
        marginBottom: "80px"
    },
    cardTitle: nextjs_material_kit_pro/* cardTitle */.X5,
    cardDescription: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    },
    team: {
        padding: "80px 0px"
    },
    textCenter: {
        textAlign: "center!important"
    },
    img: {
        width: "100%",
        height: "auto"
    },
    textMuted: {
        color: nextjs_material_kit_pro/* grayColor.7 */.X_[7] + " !important"
    },
    justifyContent: {
        justifyContent: "center!important"
    }
};
/* harmony default export */ const aboutUsSections_teamStyle = (teamStyle);

;// CONCATENATED MODULE: ./pages-sections/about-us/SectionTeam.js


// nodejs library that concatenates classes

// core components







// @material-ui/core components


const SectionTeam_useStyles = (0,styles_.makeStyles)(aboutUsSections_teamStyle);
function SectionTeam() {
    const classes = SectionTeam_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.team,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                    md: 8,
                    sm: 8,
                    className: external_classnames_default()(classes.mrAuto, classes.mlAuto, classes.textCenter),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: classes.title,
                            children: "We are nerd rockstars"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: classes.description,
                            children: "This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 3,
                        sm: 3,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                            profile: true,
                            plain: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                    profile: true,
                                    plain: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#pablo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/marc.jpg",
                                            alt: "profile-pic",
                                            className: classes.img
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                    plain: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: classes.cardTitle,
                                            children: "Alec Thompson"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: classes.textMuted,
                                            children: "CEO / Co-Founder"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: classes.cardDescription,
                                            children: "And I love you like Kanye loves Kanye. We need to restart the human foundation."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                    className: classes.justifyContent,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            justIcon: true,
                                            simple: true,
                                            color: "twitter",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            justIcon: true,
                                            simple: true,
                                            color: "facebook",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
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
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 3,
                        sm: 3,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                            profile: true,
                            plain: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                    profile: true,
                                    plain: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#pablo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/kendall.jpg",
                                            alt: "profile-pic",
                                            className: classes.img
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                    plain: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: classes.cardTitle,
                                            children: "Tania Andrew"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: classes.textMuted,
                                            children: "DESIGNER"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: classes.cardDescription,
                                            children: [
                                                "Don",
                                                "'",
                                                "t be scared of the truth because we need to restart the human foundation. And I love you like Kanye loves Kanye."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                    className: classes.justifyContent,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            justIcon: true,
                                            simple: true,
                                            color: "twitter",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            justIcon: true,
                                            simple: true,
                                            color: "dribbble",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-dribbble"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            justIcon: true,
                                            simple: true,
                                            color: "linkedin",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-linkedin-in"
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
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                            profile: true,
                            plain: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                    profile: true,
                                    plain: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#pablo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/christian.jpg",
                                            alt: "profile-pic",
                                            className: classes.img
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                    plain: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: classes.cardTitle,
                                            children: "Christian Mike"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: classes.textMuted,
                                            children: "Web Developer"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: classes.cardDescription,
                                            children: [
                                                "I love you like Kanye loves Kanye. Don",
                                                "'",
                                                "t be scared of the truth because we need to restart the human foundation."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                    className: classes.justifyContent,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            justIcon: true,
                                            simple: true,
                                            color: "facebook",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            justIcon: true,
                                            simple: true,
                                            color: "dribbble",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-dribbble"
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
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                            profile: true,
                            plain: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                    profile: true,
                                    plain: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#pablo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/avatar.jpg",
                                            alt: "profile-pic",
                                            className: classes.img
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                    plain: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: classes.cardTitle,
                                            children: "Rebecca Stormvile"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: classes.textMuted,
                                            children: "WEB DEVELOPER"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: classes.cardDescription,
                                            children: "And I love you like Kanye loves Kanye. We really need to restart the human foundation."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                    className: classes.justifyContent,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            justIcon: true,
                                            simple: true,
                                            color: "google",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-google"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            justIcon: true,
                                            simple: true,
                                            color: "twitter",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: "#pablo",
                                            justIcon: true,
                                            simple: true,
                                            color: "dribbble",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-dribbble"
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
    });
};

;// CONCATENATED MODULE: external "@material-ui/icons/Gesture"
const Gesture_namespaceObject = require("@material-ui/icons/Gesture");
var Gesture_default = /*#__PURE__*/__webpack_require__.n(Gesture_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/Build"
var Build_ = __webpack_require__(504);
var Build_default = /*#__PURE__*/__webpack_require__.n(Build_);
// EXTERNAL MODULE: ./components/InfoArea/InfoArea.js + 1 modules
var InfoArea = __webpack_require__(3044);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/servicesStyle.js

const servicesStyle = {
    title: nextjs_material_kit_pro/* title */.TN,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    services: {
        paddingTop: "10px",
        paddingBottom: "80px"
    },
    textCenter: {
        textAlign: "center"
    },
    description: nextjs_material_kit_pro/* description */.WL
};
/* harmony default export */ const aboutUsSections_servicesStyle = (servicesStyle);

;// CONCATENATED MODULE: ./pages-sections/about-us/SectionServices.js


// nodejs library that concatenates classes

// @material-ui/core components

// @material-ui/icons


// core components




const SectionServices_useStyles = (0,styles_.makeStyles)(aboutUsSections_servicesStyle);
function SectionServices() {
    const classes = SectionServices_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.services,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                    md: 8,
                    sm: 8,
                    className: external_classnames_default()(classes.mlAuto, classes.mrAuto, classes.textCenter),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: classes.title,
                            children: "We build awesome products"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: classes.description,
                            children: "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 4,
                        sm: 4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                            title: "1. Design",
                            description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before.",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#pablo",
                                        children: "Find more..."
                                    })
                                ]
                            }),
                            icon: (Gesture_default()),
                            iconColor: "rose"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 4,
                        sm: 4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                            title: "2. Develop",
                            description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#pablo",
                                        children: "Find more..."
                                    })
                                ]
                            }),
                            icon: (Build_default()),
                            iconColor: "rose"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 4,
                        sm: 4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                            title: "3. Make Edits",
                            description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#pablo",
                                        children: "Find more..."
                                    })
                                ]
                            }),
                            icon: "mode_edit",
                            iconColor: "rose"
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/imagesStyles.js
var imagesStyles = __webpack_require__(3055);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/officeStyle.js


const imgRaised = imagesStyles/* default.imgRaised */.Z.imgRaised;
const rounded = imagesStyles/* default.imgRounded */.Z.imgRounded;
const imgFluid = imagesStyles/* default.imgFluid */.Z.imgFluid;
const officeStyle_servicesStyle = {
    title: nextjs_material_kit_pro/* title */.TN,
    description: nextjs_material_kit_pro/* description */.WL,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    textCenter: {
        textAlign: "center!important"
    },
    office: {
        "& img": {
            margin: "20px 0px"
        }
    },
    imgRaised,
    rounded,
    imgFluid
};
/* harmony default export */ const officeStyle = (officeStyle_servicesStyle);

;// CONCATENATED MODULE: ./pages-sections/about-us/SectionOffice.js


// nodejs library that concatenates classes

// core components


// @material-ui/core components


const SectionOffice_useStyles = (0,styles_.makeStyles)(officeStyle);
function SectionOffice() {
    const classes = SectionOffice_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.office,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                className: classes.textCenter,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                    md: 8,
                    sm: 8,
                    className: external_classnames_default()(classes.mrAuto, classes.mlAuto),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: classes.title,
                            children: "Our office is our second home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: classes.description,
                            children: "Here are some pictures from our office. You can see the place looks like a palace and is fully equiped with everything you need to get the job done."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 4,
                        sm: 4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: external_classnames_default()(classes.imgRaised, classes.imgFluid, classes.rounded),
                            src: "/img/examples/office1.jpg",
                            alt: "office1"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 4,
                        sm: 4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: external_classnames_default()(classes.imgRaised, classes.imgFluid, classes.rounded),
                            src: "/img/examples/office2.jpg",
                            alt: "office2"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 4,
                        sm: 4,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: external_classnames_default()(classes.imgRaised, classes.imgFluid, classes.rounded),
                            src: "/img/examples/office3.jpg",
                            alt: "office3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 6,
                        sm: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: external_classnames_default()(classes.imgRaised, classes.imgFluid, classes.rounded),
                            src: "/img/examples/office4.jpg",
                            alt: "office4"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        md: 6,
                        sm: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: external_classnames_default()(classes.imgRaised, classes.imgFluid, classes.rounded),
                            src: "/img/examples/office5.jpg",
                            alt: "office5"
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__(5811);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(8250);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__(4614);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__(7817);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/customSelectStyle.js
var customSelectStyle = __webpack_require__(7589);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/contactStyle.js


const contactStyle = {
    title: nextjs_material_kit_pro/* title */.TN,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    ...customSelectStyle/* default */.Z,
    description: {
        ...nextjs_material_kit_pro/* description */.WL,
        marginBottom: "70px"
    },
    textCenter: {
        textAlign: "center!important"
    },
    selectUnderlineRoot: {
        "& > div": {
            marginTop: "13px"
        }
    },
    aboutUs: {
        padding: "80px 0px"
    }
};
/* harmony default export */ const aboutUsSections_contactStyle = (contactStyle);

;// CONCATENATED MODULE: ./pages-sections/about-us/SectionContact.js


// nodejs library that concatenates classes

// @material-ui/core components




// @material-ui/icons
// core components





const SectionContact_useStyles = (0,styles_.makeStyles)(aboutUsSections_contactStyle);
function SectionContact() {
    const [specialitySelect, setSpecialitySelect] = external_react_default().useState("1");
    const handleSpeciality = (event)=>{
        setSpecialitySelect(event.target.value);
    };
    const classes = SectionContact_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.aboutUs,
        children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                md: 8,
                sm: 8,
                className: external_classnames_default()(classes.mrAuto, classes.mlAuto),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: external_classnames_default()(classes.title, classes.textCenter),
                        children: "Want to work with us?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: external_classnames_default()(classes.description, classes.textCenter),
                        children: "Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will get back to you in a couple of hours."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 4,
                                        sm: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                            labelText: "Your name",
                                            formControlProps: {
                                                fullWidth: true
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 4,
                                        sm: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                            labelText: "Your email",
                                            formControlProps: {
                                                fullWidth: true
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 4,
                                        sm: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                                            fullWidth: true,
                                            className: classes.selectFormControl + " " + classes.selectUnderlineRoot,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                MenuProps: {
                                                    className: classes.selectMenu
                                                },
                                                classes: {
                                                    select: classes.select
                                                },
                                                value: specialitySelect,
                                                onChange: handleSpeciality,
                                                inputProps: {
                                                    name: "specialitySelect",
                                                    id: "speciality-select"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                        disabled: true,
                                                        classes: {
                                                            root: classes.selectMenuItem
                                                        },
                                                        children: "Speciality"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                                        classes: {
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        },
                                                        value: "1",
                                                        children: [
                                                            "I",
                                                            "'",
                                                            "m a Designer"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                                        classes: {
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        },
                                                        value: "2",
                                                        children: [
                                                            "I",
                                                            "'",
                                                            "m a Developer"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                                        classes: {
                                                            root: classes.selectMenuItem,
                                                            selected: classes.selectMenuItemSelected
                                                        },
                                                        value: "3",
                                                        children: [
                                                            "I",
                                                            "'",
                                                            "m a Hero"
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    md: 4,
                                    sm: 4,
                                    className: external_classnames_default()(classes.mrAuto, classes.mlAuto, classes.textCenter),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                        color: "primary",
                                        round: true,
                                        children: [
                                            "Let",
                                            "'",
                                            "s talk"
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/aboutUsStyle.js

const aboutUsStyle = {
    main: nextjs_material_kit_pro/* main */.DH,
    mainRaised: nextjs_material_kit_pro/* mainRaised */._p,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    container: {
        ...nextjs_material_kit_pro/* container */.nC,
        zIndex: 1
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        "&, & + h4": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        }
    },
    textCenter: {
        textAlign: "center"
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
/* harmony default export */ const pages_aboutUsStyle = (aboutUsStyle);

;// CONCATENATED MODULE: ./pages/about-us.js
/*eslint-disable*/ 

// nodejs library that concatenates classes

// @material-ui/core components



// @material-ui/icons

// core components






// sections for this page






const about_us_useStyles = (0,styles_.makeStyles)(pages_aboutUsStyle);
function AboutUsPage() {
    external_react_default().useEffect(()=>{
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = about_us_useStyles();
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
                image: "/img/bg9.jpg",
                filter: "dark",
                small: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        justify: "center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            md: 8,
                            sm: 8,
                            className: external_classnames_default()(classes.mlAuto, classes.mrAuto, classes.textCenter),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: classes.title,
                                    children: "About Us"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Meet the amazing team behind this project and find out more about how we work."
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
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionDescription, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionTeam, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionServices, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionOffice, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionContact, {})
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
                                            href: "https://www.creative-tim.com/?ref=njsmkp-about-us",
                                            className: classes.block,
                                            target: "_blank",
                                            children: "Creative Tim"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/presentation?ref=njsmkp-about-us",
                                            className: classes.block,
                                            target: "_blank",
                                            children: "About us"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "http://blog.creative-tim.com/?ref=njsmkp-about-us",
                                            className: classes.block,
                                            target: "_blank",
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/license?ref=njsmkp-about-us",
                                            className: classes.block,
                                            target: "_blank",
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
                                    href: "https://www.creative-tim.com?ref=njsmkp-about-us",
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

/***/ 4614:
/***/ ((module) => {

module.exports = require("@material-ui/core/Select");

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
var __webpack_exports__ = __webpack_require__.X(0, [2952,1270,1664,1194,7012,6103,9628,1003,7817,3044,3055,8864,686,7589], () => (__webpack_exec__(9076)));
module.exports = __webpack_exports__;

})();