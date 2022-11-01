"use strict";
(() => {
var exports = {};
exports.id = 5030;
exports.ids = [5030];
exports.modules = {

/***/ 7491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SectionsPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__(9247);
// EXTERNAL MODULE: ./components/Header/HeaderLinks.js
var HeaderLinks = __webpack_require__(5017);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(5031);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(6256);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@material-ui/icons/Share"
var Share_ = __webpack_require__(4306);
var Share_default = /*#__PURE__*/__webpack_require__.n(Share_);
// EXTERNAL MODULE: external "@material-ui/icons/ShoppingCart"
var ShoppingCart_ = __webpack_require__(9637);
var ShoppingCart_default = /*#__PURE__*/__webpack_require__.n(ShoppingCart_);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(6302);
// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__(6680);
// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__(7403);
// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__(6721);
// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__(7817);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js
var headerLinksStyle = __webpack_require__(9315);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/sectionsSections/headersStyle.js


const headersSection = (theme)=>({
        ...(0,headerLinksStyle/* default */.Z)(theme),
        sectionBlank: {
            height: "70px",
            display: "block"
        },
        container: {
            ...nextjs_material_kit_pro/* container */.nC,
            zIndex: "2",
            position: "relative",
            "& h1, & h4, & h6": {
                color: nextjs_material_kit_pro/* whiteColor */.zQ
            }
        },
        conatinerHeader2: {
            ...nextjs_material_kit_pro/* container */.nC,
            zIndex: "2",
            position: "relative",
            "& h1, & h4, & h6": {
                color: nextjs_material_kit_pro/* whiteColor */.zQ
            },
            paddingTop: "25vh"
        },
        title: nextjs_material_kit_pro/* title */.TN,
        pageHeader: {
            position: "relative",
            minHeight: "100vh",
            maxHeight: "1600px",
            backgroundPosition: "50%",
            backgroundSize: "cover",
            margin: "0",
            padding: "0",
            border: "0",
            display: "flex",
            WebkitBoxAlign: "center",
            MsFlexAlign: "center",
            alignItems: "center",
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
        iframeContainer: {
            "& > iframe": {
                width: "100%",
                boxShadow: "0 16px 38px -12px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.56), 0 4px 25px 0px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.12), 0 8px 10px -5px rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.2)"
            }
        },
        mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
        textCenter: {
            textAlign: "center"
        },
        card: {
            marginTop: "60px"
        },
        formControl: {
            margin: "0",
            padding: "8px 0 0 0"
        },
        textRight: {
            textAlign: "right"
        },
        button: {
            margin: "0 !important"
        }
    });
/* harmony default export */ const headersStyle = (headersSection);

;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionHeaders.js


// nodejs library that concatenates classes

// react component for creating beautiful carousel

// @material-ui/core components



// @material-ui/icons


// core components








const useStyles = (0,styles_.makeStyles)(headersStyle);
function SectionHeaders({ ...rest }) {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };
    return(// we've set the className to cd-section so we can make smooth scroll to it
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cd-section",
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.sectionBlank,
                id: "blanksection"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                        absolute: true,
                        brand: "Creative Tim",
                        color: "transparent",
                        links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.collapse,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                    className: classes.list + " " + classes.mlAuto,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            className: classes.listItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                href: "#pablo",
                                                className: classes.navLink,
                                                onClick: (e)=>e.preventDefault(),
                                                color: "transparent",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            className: classes.listItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                href: "#pablo",
                                                className: classes.navLink,
                                                onClick: (e)=>e.preventDefault(),
                                                color: "transparent",
                                                children: "About us"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            className: classes.listItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                href: "#pablo",
                                                className: classes.navLink,
                                                onClick: (e)=>e.preventDefault(),
                                                color: "transparent",
                                                children: "Products"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            className: classes.listItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                href: "#pablo",
                                                className: classes.navLink,
                                                onClick: (e)=>e.preventDefault(),
                                                color: "transparent",
                                                children: "Contact us"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                    className: classes.list + " " + classes.mlAuto,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            className: classes.listItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                color: "transparent",
                                                href: "https://twitter.com/CreativeTim?ref=creativetim",
                                                target: "_blank",
                                                className: classes.navLink + " " + classes.navLinkJustIcon,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            className: classes.listItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                color: "transparent",
                                                href: "https://www.facebook.com/CreativeTim?ref=creativetim",
                                                target: "_blank",
                                                className: classes.navLink + " " + classes.navLinkJustIcon,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            className: classes.listItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                color: "transparent",
                                                href: "https://www.instagram.com/CreativeTimOfficial?ref=creativetim",
                                                target: "_blank",
                                                className: classes.navLink + " " + classes.navLinkJustIcon,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.pageHeader,
                        style: {
                            backgroundImage: "url('/img/bg12.jpg')"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.container,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 6,
                                        md: 6,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: classes.title,
                                                children: "Tesla Model 3."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    "There",
                                                    "'",
                                                    "s no doubt that Tesla is delighted with the interest, but the data also raises a few questions. How long will it take for Tesla to fulfill all those extra orders?"
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                color: "danger",
                                                size: "lg",
                                                href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim",
                                                target: "_blank",
                                                rel: "",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-ticket-alt"
                                                    }),
                                                    "Order Now"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 5,
                                        md: 5,
                                        className: classes.mlAuto,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.iframeContainer,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                                height: "250",
                                                src: "https://www.youtube.com/embed/IN6QnLpVEPI?ref=creativetim",
                                                frameBorder: "0",
                                                allow: "encrypted-media",
                                                allowFullScreen: "",
                                                title: "Tesla"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                        absolute: true,
                        brand: "Creative Tim",
                        color: "transparent",
                        links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.collapse,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                    className: classes.list + " " + classes.mlAuto,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            className: classes.listItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                href: "#pablo",
                                                className: classes.navLink,
                                                onClick: (e)=>e.preventDefault(),
                                                color: "transparent",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            className: classes.listItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                href: "#pablo",
                                                className: classes.navLink,
                                                onClick: (e)=>e.preventDefault(),
                                                color: "transparent",
                                                children: "About us"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            className: classes.listItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                href: "#pablo",
                                                className: classes.navLink,
                                                onClick: (e)=>e.preventDefault(),
                                                color: "transparent",
                                                children: "Products"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            className: classes.listItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                href: "#pablo",
                                                className: classes.navLink,
                                                onClick: (e)=>e.preventDefault(),
                                                color: "transparent",
                                                children: "Contact us"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                    className: classes.list + " " + classes.mlAuto,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            className: classes.listItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                color: "transparent",
                                                href: "https://twitter.com/CreativeTim?ref=creativetim",
                                                target: "_blank",
                                                className: classes.navLink + " " + classes.navLinkJustIcon,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            className: classes.listItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                color: "transparent",
                                                href: "https://www.facebook.com/CreativeTim?ref=creativetim",
                                                target: "_blank",
                                                className: classes.navLink + " " + classes.navLinkJustIcon,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                            className: classes.listItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                color: "transparent",
                                                href: "https://www.instagram.com/CreativeTimOfficial?ref=creativetim",
                                                target: "_blank",
                                                className: classes.navLink + " " + classes.navLinkJustIcon,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.pageHeader,
                        style: {
                            backgroundImage: "url('/img/examples/office2.jpg')"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: classes.conatinerHeader2,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 8,
                                        md: 8,
                                        className: external_classnames_default()(classes.mlAuto, classes.mrAuto, classes.textCenter),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: classes.title,
                                                children: "You should work with us!"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                children: [
                                                    "Now you have no excuses, it",
                                                    "'",
                                                    "s time to surprise your clients, your competitors, and why not, the world. You probably won",
                                                    "'",
                                                    "t have a better chance to show off all your potential if it",
                                                    "'",
                                                    "s not by designing a website for your own agency or web studio."
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 10,
                                        md: 10,
                                        className: external_classnames_default()(classes.mlAuto, classes.mrAuto),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                            raised: true,
                                            className: classes.card,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(CardBody/* default */.Z, {
                                                formHorizontal: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                                xs: 12,
                                                                sm: 3,
                                                                md: 3,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                                    id: "name",
                                                                    inputProps: {
                                                                        placeholder: "Company name"
                                                                    },
                                                                    formControlProps: {
                                                                        fullWidth: true,
                                                                        className: classes.formControl
                                                                    }
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                                xs: 12,
                                                                sm: 3,
                                                                md: 3,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                                    id: "email",
                                                                    inputProps: {
                                                                        placeholder: "Company email"
                                                                    },
                                                                    formControlProps: {
                                                                        fullWidth: true,
                                                                        className: classes.formControl
                                                                    }
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                                xs: 12,
                                                                sm: 3,
                                                                md: 3,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                                    id: "password",
                                                                    inputProps: {
                                                                        placeholder: "Company password",
                                                                        type: "password",
                                                                        autoComplete: "off"
                                                                    },
                                                                    formControlProps: {
                                                                        fullWidth: true,
                                                                        className: classes.formControl
                                                                    }
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                                xs: 12,
                                                                sm: 3,
                                                                md: 3,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    block: true,
                                                                    color: "primary",
                                                                    className: classes.button,
                                                                    children: "Sign up"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                        absolute: true,
                        brand: "Creative Tim",
                        color: "transparent",
                        links: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                            className: classes.list + " " + classes.mlAuto,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                    className: classes.listItem,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        href: "#pablo",
                                        className: classes.navLink,
                                        onClick: (e)=>e.preventDefault(),
                                        color: "transparent",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                    className: classes.listItem,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        href: "#pablo",
                                        className: classes.navLink,
                                        onClick: (e)=>e.preventDefault(),
                                        color: "transparent",
                                        children: "About us"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                    className: classes.listItem,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        href: "#pablo",
                                        className: classes.navLink,
                                        onClick: (e)=>e.preventDefault(),
                                        color: "transparent",
                                        children: "Products"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                    className: classes.listItem,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        href: "#pablo",
                                        className: classes.navLink,
                                        onClick: (e)=>e.preventDefault(),
                                        color: "transparent",
                                        children: "Contact us"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                        ...settings,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.pageHeader,
                                    style: {
                                        backgroundImage: "url('/img/dg1.jpg')"
                                    },
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
                                                        children: "NextJS Material Kit PRO"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: "Dolce & Gabbana is a luxury Italian fashion house founded in 1985 in Legnano by Italian designers Domenico Dolce and Stefano Gabbana. The two met in Milan in 1980 and designed for the same fashion house."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        color: "danger",
                                                        size: "lg",
                                                        children: "Read more"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        color: "white",
                                                        simple: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        color: "white",
                                                        simple: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-square"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        color: "white",
                                                        simple: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-get-pocket"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.pageHeader,
                                    style: {
                                        backgroundImage: "url('/img/dg2.jpg')"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.container,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 8,
                                                md: 8,
                                                className: external_classnames_default()(classes.mlAuto, classes.mrAuto, classes.textCenter),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: classes.title,
                                                        children: "NextJS Material Kit PRO"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        children: "Dolce & Gabbana is a luxury Italian fashion house founded in 1985 in Legnano by Italian designers Domenico Dolce and Stefano Gabbana. The two met in Milan in 1980 and designed for the same fashion house."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        children: "Connect with us on:"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "white",
                                                                simple: true,
                                                                size: "lg",
                                                                justIcon: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-twitter"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "white",
                                                                simple: true,
                                                                size: "lg",
                                                                justIcon: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-facebook-square"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "white",
                                                                simple: true,
                                                                size: "lg",
                                                                justIcon: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-google-plus-g"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                color: "white",
                                                                simple: true,
                                                                size: "lg",
                                                                justIcon: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-instagram"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classes.pageHeader,
                                    style: {
                                        backgroundImage: "url('/img/dg3.jpg')"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.container,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 7,
                                                md: 7,
                                                className: external_classnames_default()(classes.mlAuto, classes.textRight),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                        className: classes.title,
                                                        children: "New Collection 50% Off"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                        children: [
                                                            "There",
                                                            "'",
                                                            "s no doubt that Tesla is delighted with the interest, but the data also raises a few questions. How long will it take for Tesla to fulfill all those extra orders?"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                color: "white",
                                                                simple: true,
                                                                size: "lg",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Share_default()), {}),
                                                                    " Share Offer"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                                color: "danger",
                                                                size: "lg",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((ShoppingCart_default()), {}),
                                                                    " Shop now"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: external "@material-ui/icons/Chat"
var Chat_ = __webpack_require__(1677);
var Chat_default = /*#__PURE__*/__webpack_require__.n(Chat_);
// EXTERNAL MODULE: external "@material-ui/icons/VerifiedUser"
var VerifiedUser_ = __webpack_require__(8139);
var VerifiedUser_default = /*#__PURE__*/__webpack_require__.n(VerifiedUser_);
// EXTERNAL MODULE: external "@material-ui/icons/Fingerprint"
var Fingerprint_ = __webpack_require__(952);
var Fingerprint_default = /*#__PURE__*/__webpack_require__.n(Fingerprint_);
;// CONCATENATED MODULE: external "@material-ui/icons/GroupWork"
const GroupWork_namespaceObject = require("@material-ui/icons/GroupWork");
var GroupWork_default = /*#__PURE__*/__webpack_require__.n(GroupWork_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Airplay"
const Airplay_namespaceObject = require("@material-ui/icons/Airplay");
var Airplay_default = /*#__PURE__*/__webpack_require__.n(Airplay_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/LocationOn"
var LocationOn_ = __webpack_require__(9616);
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_);
;// CONCATENATED MODULE: external "@material-ui/icons/Extension"
const Extension_namespaceObject = require("@material-ui/icons/Extension");
var Extension_default = /*#__PURE__*/__webpack_require__.n(Extension_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/ChildFriendly"
const ChildFriendly_namespaceObject = require("@material-ui/icons/ChildFriendly");
var ChildFriendly_default = /*#__PURE__*/__webpack_require__.n(ChildFriendly_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/WatchLater"
var WatchLater_ = __webpack_require__(7225);
var WatchLater_default = /*#__PURE__*/__webpack_require__.n(WatchLater_);
// EXTERNAL MODULE: external "@material-ui/icons/Code"
var Code_ = __webpack_require__(752);
var Code_default = /*#__PURE__*/__webpack_require__.n(Code_);
;// CONCATENATED MODULE: external "@material-ui/icons/FormatPaint"
const FormatPaint_namespaceObject = require("@material-ui/icons/FormatPaint");
var FormatPaint_default = /*#__PURE__*/__webpack_require__.n(FormatPaint_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/Dashboard"
var Dashboard_ = __webpack_require__(2857);
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(Dashboard_);
// EXTERNAL MODULE: external "@material-ui/icons/ViewCarousel"
var ViewCarousel_ = __webpack_require__(9081);
var ViewCarousel_default = /*#__PURE__*/__webpack_require__.n(ViewCarousel_);
// EXTERNAL MODULE: external "@material-ui/icons/AccessTime"
var AccessTime_ = __webpack_require__(9615);
var AccessTime_default = /*#__PURE__*/__webpack_require__.n(AccessTime_);
// EXTERNAL MODULE: external "@material-ui/icons/AttachMoney"
var AttachMoney_ = __webpack_require__(9418);
var AttachMoney_default = /*#__PURE__*/__webpack_require__.n(AttachMoney_);
// EXTERNAL MODULE: ./components/InfoArea/InfoArea.js + 1 modules
var InfoArea = __webpack_require__(3044);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/sectionsSections/featuresStyle.js

const features = {
    container: nextjs_material_kit_pro/* container */.nC,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    title: nextjs_material_kit_pro/* title */.TN,
    description: nextjs_material_kit_pro/* description */.WL,
    features1: {
        textAlign: "center",
        padding: "80px 0"
    },
    features2: {
        padding: "80px 0"
    },
    features3: {
        padding: "80px 0",
        "& $phoneContainer": {
            maxWidth: "220px",
            margin: "0 auto"
        }
    },
    features4: {
        padding: "80px 0",
        "& $phoneContainer": {
            maxWidth: "260px",
            margin: "60px auto 0"
        }
    },
    features5: {
        padding: "80px 0",
        backgroundSize: "cover",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        position: "relative",
        "& $title": {
            marginBottom: "30px"
        },
        "& $title,& $container": {
            position: "relative",
            zIndex: "2",
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        },
        "&:after": {
            background: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ",0.55)",
            position: "absolute",
            width: "100%",
            height: "100%",
            content: "''",
            zIndex: "0",
            left: "0px",
            top: "0px"
        },
        "& $container": {
            "& $gridContainer:last-child": {
                "& $gridItem": {
                    borderBottom: "0"
                }
            },
            "& $gridItem": {
                border: "1px solid rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.35)",
                borderTop: "0",
                borderLeft: "0",
                "&:last-child": {
                    borderRight: "0"
                }
            }
        },
        "& $infoArea5": {
            textAlign: "center",
            maxWidth: "310px",
            minHeight: "320px",
            "& h4,& p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
                color: nextjs_material_kit_pro/* whiteColor */.zQ
            }
        }
    },
    gridContainer: {},
    gridItem: {},
    margin0: {
        margin: "0!important"
    },
    textCenter: {
        textAlign: "center"
    },
    phoneContainer: {
        "& img": {
            width: "100%"
        }
    },
    infoArea: {
        maxWidth: "none",
        margin: "0 auto",
        padding: "10px 0 0px"
    },
    infoArea5: {}
};
/* harmony default export */ const featuresStyle = (features);

;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionFeatures.js


// @material-ui/core components

// @material-ui/icons















// core components




const SectionFeatures_useStyles = (0,styles_.makeStyles)(featuresStyle);
function SectionFeatures({ ...rest }) {
    const classes = SectionFeatures_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cd-section",
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: classes.features1,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 8,
                                    md: 8,
                                    className: classes.mlAuto + " " + classes.mrAuto,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: classes.title,
                                            children: "Why our product is the best"
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
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            vertical: true,
                                            icon: (Chat_default()),
                                            title: "Free Chat",
                                            description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough",
                                            iconColor: "info"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            vertical: true,
                                            icon: (VerifiedUser_default()),
                                            title: "Verified Users",
                                            description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                            iconColor: "success"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            vertical: true,
                                            icon: (Fingerprint_default()),
                                            title: "Fingerprint",
                                            description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                            iconColor: "danger"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: classes.features2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 8,
                                    md: 8,
                                    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: classes.title,
                                            children: "Why our product is the best"
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
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            icon: (GroupWork_default()),
                                            title: "Collaborate",
                                            description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: "Find more..."
                                                    })
                                                ]
                                            }),
                                            iconColor: "info"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            icon: (Airplay_default()),
                                            title: "Airplay",
                                            description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: "Find more..."
                                                    })
                                                ]
                                            }),
                                            iconColor: "danger"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 4,
                                        md: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            icon: (LocationOn_default()),
                                            title: "Location Integrated",
                                            description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: "Find more..."
                                                    })
                                                ]
                                            }),
                                            iconColor: "success"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.features3,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.phoneContainer,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/sections/iphone.png",
                                            alt: "..."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: classes.title,
                                            children: "Your life will be much easier"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            className: classes.infoArea,
                                            icon: (Extension_default()),
                                            title: "Hundreds of Components",
                                            description: "The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before.",
                                            iconColor: "primary"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            className: classes.infoArea,
                                            icon: (ChildFriendly_default()),
                                            title: "Easy to Use",
                                            description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                            iconColor: "primary"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            className: classes.infoArea,
                                            icon: (WatchLater_default()),
                                            title: "Fast Prototyping",
                                            description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                            iconColor: "primary"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: classes.features4,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 8,
                                    md: 8,
                                    className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: classes.title,
                                            children: "Your life will be much easier"
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
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        lg: 3,
                                        className: classes.mlAuto,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                icon: (Code_default()),
                                                title: "For Developers",
                                                description: "The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before.",
                                                iconColor: "info"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                icon: (FormatPaint_default()),
                                                title: "For Designers",
                                                description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                                iconColor: "danger"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        lg: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: classes.phoneContainer,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/sections/iphone2.png",
                                                alt: "..."
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        lg: 3,
                                        className: classes.mrAuto,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                icon: (Dashboard_default()),
                                                title: "Material-UI Grid",
                                                description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                                iconColor: "primary"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                icon: (ViewCarousel_default()),
                                                title: "Example Pages Included",
                                                description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                                iconColor: "success"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.features5,
                style: {
                    backgroundImage: "url('/img/bg9.jpg')"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                    className: classes.margin0,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 8,
                            md: 8,
                            className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: classes.title,
                                children: "Your life will be much easier"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.container,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    className: classes.gridContainer,
                                    style: {
                                        margin: "0!important"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 4,
                                            className: classes.gridItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                vertical: true,
                                                className: classes.infoArea5,
                                                icon: (Code_default()),
                                                title: "For Developers",
                                                description: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."
                                                }),
                                                iconColor: "info"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 4,
                                            className: classes.gridItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                vertical: true,
                                                className: classes.infoArea5,
                                                icon: (FormatPaint_default()),
                                                title: "For Designers",
                                                description: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                                }),
                                                iconColor: "danger"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 4,
                                            className: classes.gridItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                vertical: true,
                                                className: classes.infoArea5,
                                                icon: (Dashboard_default()),
                                                title: "Material-UI Grid",
                                                description: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                                }),
                                                iconColor: "primary"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    className: classes.gridContainer,
                                    style: {
                                        margin: "0!important"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 4,
                                            className: classes.gridItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                vertical: true,
                                                className: classes.infoArea5,
                                                icon: (ViewCarousel_default()),
                                                title: "Example Pages Included",
                                                description: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 4,
                                            className: classes.gridItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                vertical: true,
                                                className: classes.infoArea5,
                                                icon: (AccessTime_default()),
                                                title: "Save Time",
                                                description: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 4,
                                            className: classes.gridItem,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                vertical: true,
                                                className: classes.infoArea5,
                                                icon: (AttachMoney_default()),
                                                title: "Save Money",
                                                description: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "The moment you use Material Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."
                                                })
                                            })
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

// EXTERNAL MODULE: external "@material-ui/icons/TrendingUp"
var TrendingUp_ = __webpack_require__(9321);
var TrendingUp_default = /*#__PURE__*/__webpack_require__.n(TrendingUp_);
// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(9861);
// EXTERNAL MODULE: ./components/Typography/Info.js
var Info = __webpack_require__(7479);
// EXTERNAL MODULE: ./components/Typography/Danger.js
var Danger = __webpack_require__(1903);
// EXTERNAL MODULE: ./components/Typography/Success.js
var Success = __webpack_require__(3389);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/sectionsSections/blogsStyle.js

const blogsSection = {
    container: nextjs_material_kit_pro/* container */.nC,
    title: nextjs_material_kit_pro/* title */.TN,
    coloredShadow: nextjs_material_kit_pro/* coloredShadow */.DF,
    cardTitle: nextjs_material_kit_pro/* cardTitle */.X5,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    description: nextjs_material_kit_pro/* description */.WL,
    blog: {
        padding: "50px 0"
    },
    cardCategory: {
        marginBottom: "0",
        marginTop: "10px",
        "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            top: "8px",
            lineHeight: "0"
        }
    },
    description1: {
        ...nextjs_material_kit_pro/* description */.WL,
        lineHeight: "1.313rem"
    },
    author: {
        "& a": {
            color: nextjs_material_kit_pro/* grayColor.1 */.X_[1],
            textDecoration: "none"
        }
    },
    card: {
        marginBottom: "80px"
    },
    card4: {
        marginBottom: "60px",
        textAlign: "center"
    }
};
/* harmony default export */ const blogsStyle = (blogsSection);

;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionBlogs.js


// @material-ui/core components

// @material-ui/icons

// core components










const SectionBlogs_useStyles = (0,styles_.makeStyles)(blogsStyle);
function SectionBlogs({ ...rest }) {
    const classes = SectionBlogs_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cd-section",
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.blog,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 10,
                            md: 10,
                            className: classes.mlAuto + " " + classes.mrAuto,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: classes.title,
                                    children: "Latest Blogposts"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    plain: true,
                                    blog: true,
                                    className: classes.card,
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
                                                            href: "#pablito",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/card-blog4.jpg",
                                                                alt: "..."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-blog4.jpg')",
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
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: classes.cardCategory,
                                                            children: "ENTERPRISE"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: classes.cardTitle,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: "Autodesk looks to future of 3D printing with Project Escher"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.description1,
                                                        children: [
                                                            "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it’s moving to a subscription model. Yet its own business model disruption is only part of the story — and…",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: [
                                                                    " ",
                                                                    "Read More",
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.author,
                                                        children: [
                                                            "by",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: "Mike Butcher"
                                                                })
                                                            }),
                                                            " ",
                                                            ", 2 days ago"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    plain: true,
                                    blog: true,
                                    className: classes.card,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 7,
                                                md: 7,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Danger/* default */.Z, {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                            className: classes.cardCategory,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TrendingUp_default()), {}),
                                                                "TRENDING"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: classes.cardTitle,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: "6 insights into the French Fashion landscape"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.description1,
                                                        children: [
                                                            "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it’s moving to a subscription model. Yet its own business model disruption is only part of the story — and…",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: [
                                                                    " ",
                                                                    "Read More",
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.author,
                                                        children: [
                                                            "by",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: "Mike Butcher"
                                                                })
                                                            }),
                                                            " ",
                                                            ", 2 days ago"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 5,
                                                md: 5,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablito",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/office2.jpg",
                                                                alt: "..."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/office2.jpg')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.blog,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 10,
                            className: classes.mlAuto + " " + classes.mrAuto,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: classes.title,
                                    children: "Latest Blogposts 2"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 4,
                                            md: 4,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                plain: true,
                                                blog: true,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                        plain: true,
                                                        image: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablito",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/img/examples/card-blog4.jpg",
                                                                    alt: "..."
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.coloredShadow,
                                                                style: {
                                                                    backgroundImage: "url('/img/examples/card-blog4.jpg')",
                                                                    opacity: "1"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        plain: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: classes.cardCategory,
                                                                    children: "ENTERPRISE"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: "Autodesk looks to future of 3D printing with Project Escher"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: classes.description,
                                                                children: [
                                                                    "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.",
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: [
                                                                            " ",
                                                                            "Read More",
                                                                            " "
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 4,
                                            md: 4,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                plain: true,
                                                blog: true,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                        plain: true,
                                                        image: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablito",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/img/examples/blog5.jpg",
                                                                    alt: "..."
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.coloredShadow,
                                                                style: {
                                                                    backgroundImage: "url('/img/examples/blog5.jpg')",
                                                                    opacity: "1"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        plain: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                    className: classes.cardCategory,
                                                                    children: "STARTUPS"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: "Lyft launching cross-platform service this week"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: classes.description,
                                                                children: [
                                                                    "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.",
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: [
                                                                            " ",
                                                                            "Read More",
                                                                            " "
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            xs: 12,
                                            sm: 4,
                                            md: 4,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                plain: true,
                                                blog: true,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                        plain: true,
                                                        image: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablito",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "/img/examples/blog7.jpg",
                                                                    alt: "..."
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.coloredShadow,
                                                                style: {
                                                                    backgroundImage: "url('/img/examples/blog7.jpg')",
                                                                    opacity: "1"
                                                                }
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        plain: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Danger/* default */.Z, {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                    className: classes.cardCategory,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((TrendingUp_default()), {}),
                                                                        "ENTERPRISE"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "#pablo",
                                                                    onClick: (e)=>e.preventDefault(),
                                                                    children: "6 insights into the French Fashion landscape"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: classes.description,
                                                                children: [
                                                                    "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.",
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#pablo",
                                                                        onClick: (e)=>e.preventDefault(),
                                                                        children: [
                                                                            " ",
                                                                            "Read More",
                                                                            " "
                                                                        ]
                                                                    })
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
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.blog,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 10,
                            md: 10,
                            className: classes.mlAuto + " " + classes.mrAuto,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: classes.title,
                                    children: "Latest Blogposts 3"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    plain: true,
                                    blog: true,
                                    className: classes.card,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 4,
                                                md: 4,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablito",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/card-blog4.jpg",
                                                                alt: "..."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-blog4.jpg')",
                                                                opacity: "1"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/card-blog4.jpg')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 8,
                                                md: 8,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: classes.cardCategory,
                                                            children: "ENTERPRISE"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: classes.cardTitle,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: "Autodesk looks to future of 3D printing with Project Escher"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.description,
                                                        children: [
                                                            "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it’s moving to a subscription model. Yet its own business model disruption is only part of the story — and…",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: [
                                                                    " ",
                                                                    "Read More",
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.author,
                                                        children: [
                                                            "by",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: "Mike Butcher"
                                                                })
                                                            }),
                                                            " ",
                                                            ", 2 days ago"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    plain: true,
                                    blog: true,
                                    className: classes.card,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 4,
                                                md: 4,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablito",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/office2.jpg",
                                                                alt: "..."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/office2.jpg')",
                                                                opacity: "1"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/office2.jpg')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 8,
                                                md: 8,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Danger/* default */.Z, {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                            className: classes.cardCategory,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TrendingUp_default()), {}),
                                                                "TRENDING"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: classes.cardTitle,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: "6 insights into the French Fashion landscape"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.description,
                                                        children: [
                                                            "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it’s moving to a subscription model. Yet its own business model disruption is only part of the story — and…",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: [
                                                                    " ",
                                                                    "Read More",
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.author,
                                                        children: [
                                                            "by",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: "Mike Butcher"
                                                                })
                                                            }),
                                                            " ",
                                                            ", 2 days ago"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    plain: true,
                                    blog: true,
                                    className: classes.card,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 4,
                                                md: 4,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablito",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/blog8.jpg",
                                                                alt: "..."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/blog8.jpg')",
                                                                opacity: "1"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('/img/examples/blog8.jpg')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                xs: 12,
                                                sm: 8,
                                                md: 8,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: classes.cardCategory,
                                                            children: "STARTUPS"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: classes.cardTitle,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: "Lyft launching cross-platform service this week"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.description,
                                                        children: [
                                                            "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it’s moving to a subscription model. Yet its own business model disruption is only part of the story — and…",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: [
                                                                    " ",
                                                                    "Read More",
                                                                    " "
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.author,
                                                        children: [
                                                            "by",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                onClick: (e)=>e.preventDefault(),
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                    children: "Megan Rose"
                                                                })
                                                            }),
                                                            " ",
                                                            ", 2 days ago"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.blog,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 8,
                            md: 8,
                            className: classes.mlAuto + " " + classes.mrAuto,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: classes.title,
                                    children: "Latest Blogposts 4"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                    plain: true,
                                    blog: true,
                                    className: classes.card4,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                            image: true,
                                            plain: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablito",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/bg5.jpg",
                                                        alt: "..."
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: classes.coloredShadow,
                                                    style: {
                                                        backgroundImage: "url('/img/bg5.jpg')",
                                                        opacity: "1"
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                            plain: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory,
                                                        children: "FASHION"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: classes.cardTitle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: "Autodesk looks to future of 3D"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    className: classes.description,
                                                    children: [
                                                        "Don",
                                                        "'",
                                                        "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out that it’s the first album to go number 1 off of streaming..."
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    round: true,
                                                    color: "primary",
                                                    children: "Read More"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                    plain: true,
                                    blog: true,
                                    className: classes.card4,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                            image: true,
                                            plain: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablito",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/examples/blog6.jpg",
                                                        alt: "..."
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: classes.coloredShadow,
                                                    style: {
                                                        backgroundImage: "url('/img/examples/blog6.jpg')",
                                                        opacity: "1"
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                            plain: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory,
                                                        children: "LIFESTYLE"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: classes.cardTitle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: "We will breathe clean air and exercise"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    className: classes.description,
                                                    children: [
                                                        "Don",
                                                        "'",
                                                        "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out that it’s the first album to go number 1 off of streaming..."
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    round: true,
                                                    color: "primary",
                                                    children: "Read More"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/Card/CardAvatar.js + 1 modules
var CardAvatar = __webpack_require__(686);
// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__(8864);
// EXTERNAL MODULE: ./components/Typography/Muted.js
var Muted = __webpack_require__(3278);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle.js
var teamsStyle = __webpack_require__(6156);
;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionTeams.js


// @material-ui/core components

// @material-ui/icons
// import  from "@material-ui/icons/";
// core components










const SectionTeams_useStyles = (0,styles_.makeStyles)(teamsStyle/* default */.Z);
function SectionTeams({ ...rest }) {
    const classes = SectionTeams_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cd-section",
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.team,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "Our Awesome Team 1"
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
                                    xs: 12,
                                    sm: 3,
                                    md: 3,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        profile: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                profile: true,
                                                plain: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/faces/marc.jpg",
                                                        alt: "...",
                                                        className: classes.img
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: classes.cardTitle,
                                                        children: "Alec Thompson"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: classes.cardCategory,
                                                            children: "CEO / Co-Founder"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: classes.description,
                                                        children: "And I love you like Kanye loves Kanye. We need to restart the human foundation."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                profile: true,
                                                className: classes.justifyContent,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        href: "#pablo",
                                                        justIcon: true,
                                                        simple: true,
                                                        color: "twitter",
                                                        className: classes.btn,
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        href: "#pablo",
                                                        justIcon: true,
                                                        simple: true,
                                                        color: "facebook",
                                                        className: classes.btn,
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        href: "#pablo",
                                                        justIcon: true,
                                                        simple: true,
                                                        color: "google",
                                                        className: classes.btn,
                                                        onClick: (e)=>e.preventDefault(),
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
                                    xs: 12,
                                    sm: 3,
                                    md: 3,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        profile: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                profile: true,
                                                plain: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/faces/kendall.jpg",
                                                        alt: "...",
                                                        className: classes.img
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: classes.cardTitle,
                                                        children: "Tania Andrew"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: classes.cardCategory,
                                                            children: "DESIGNER"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.description,
                                                        children: [
                                                            "Don",
                                                            "'",
                                                            "t be scared of the truth because we need to restart the human foundation. And I love you like Kanye loves Kanye."
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                profile: true,
                                                className: classes.justifyContent,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        href: "#pablo",
                                                        justIcon: true,
                                                        simple: true,
                                                        color: "twitter",
                                                        className: classes.btn,
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        href: "#pablo",
                                                        justIcon: true,
                                                        simple: true,
                                                        color: "dribbble",
                                                        className: classes.btn,
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-dribbble"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        href: "#pablo",
                                                        justIcon: true,
                                                        simple: true,
                                                        color: "linkedin",
                                                        className: classes.btn,
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-linkedin"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 3,
                                    md: 3,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        profile: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                profile: true,
                                                plain: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/faces/christian.jpg",
                                                        alt: "...",
                                                        className: classes.img
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: classes.cardTitle,
                                                        children: "Christian Mike"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: classes.cardCategory,
                                                            children: "Web Developer"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.description,
                                                        children: [
                                                            "I love you like Kanye loves Kanye. Don",
                                                            "'",
                                                            "t be scared of the truth because we need to restart the human foundation."
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                profile: true,
                                                className: classes.justifyContent,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        href: "#pablo",
                                                        justIcon: true,
                                                        simple: true,
                                                        color: "facebook",
                                                        className: classes.btn,
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        href: "#pablo",
                                                        justIcon: true,
                                                        simple: true,
                                                        color: "dribbble",
                                                        className: classes.btn,
                                                        onClick: (e)=>e.preventDefault(),
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
                                    xs: 12,
                                    sm: 3,
                                    md: 3,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        profile: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                profile: true,
                                                plain: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/faces/avatar.jpg",
                                                        alt: "..."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: classes.cardTitle,
                                                        children: "Rebecca Stormvile"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: classes.cardCategory,
                                                            children: "Web Developer"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: classes.description,
                                                        children: "And I love you like Kanye loves Kanye. We really need to restart the human foundation."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                profile: true,
                                                plain: true,
                                                className: classes.justifyContent,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        simple: true,
                                                        color: "google",
                                                        href: "#pablo",
                                                        className: classes.btn,
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-google"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        simple: true,
                                                        color: "twitter",
                                                        href: "#pablo",
                                                        className: classes.btn,
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        simple: true,
                                                        color: "dribbble",
                                                        href: "#pablo",
                                                        className: classes.btn,
                                                        onClick: (e)=>e.preventDefault(),
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
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.team,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "The Executive Team 2"
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
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        plain: true,
                                        profile: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                image: true,
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/examples/card-profile1.jpg",
                                                            alt: "..."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: classes.coloredShadow,
                                                        style: {
                                                            backgroundImage: "url('/img/examples/card-profile1.jpg')",
                                                            opacity: "1"
                                                        }
                                                    })
                                                ]
                                            }),
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
                                                            children: "MANAGING PARTNER"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                profile: true,
                                                plain: true,
                                                className: classes.justifyContent,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
                                                        color: "twitter",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
                                                        color: "facebook",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-square"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
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
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        plain: true,
                                        profile: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                image: true,
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/examples/card-profile2.jpg",
                                                            alt: "..."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: classes.coloredShadow,
                                                        style: {
                                                            backgroundImage: "url('/img/examples/card-profile2.jpg')",
                                                            opacity: "1"
                                                        }
                                                    })
                                                ]
                                            }),
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
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                profile: true,
                                                plain: true,
                                                className: classes.justifyContent,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
                                                        color: "linkedin",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-linkedin-in"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
                                                        color: "facebook",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-square"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
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
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        plain: true,
                                        profile: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                image: true,
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/examples/card-profile4.jpg",
                                                            alt: "..."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: classes.coloredShadow,
                                                        style: {
                                                            backgroundImage: "url('/img/examples/card-profile4.jpg')",
                                                            opacity: "1"
                                                        }
                                                    })
                                                ]
                                            }),
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
                                                            children: "PHOTOGRAPHER"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                profile: true,
                                                plain: true,
                                                className: classes.justifyContent,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
                                                        color: "dribbble",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-dribbble"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
                                                        color: "twitter",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.team,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "The Executive Team 3"
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
                                                            profile: true,
                                                            plain: true,
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
                                                            profile: true,
                                                            plain: true,
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
                                                            profile: true,
                                                            plain: true,
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
                                                            profile: true,
                                                            plain: true,
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
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.team + " " + classes.section,
                style: {
                    backgroundImage: "url('/img/bg7.jpg')"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "The Executive Team 4"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: classes.descriptionWhite,
                                        children: "This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        profile: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                profile: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/faces/card-profile1-square.jpg",
                                                        alt: "..."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: classes.cardTitle,
                                                        children: "Alec Thompson"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: classes.cardCategory,
                                                            children: "CEO / CO-FOUNDER"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.description,
                                                        children: [
                                                            "Don",
                                                            "'",
                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                profile: true,
                                                className: classes.justifyContent,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
                                                        color: "linkedin",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-linkedin-in"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
                                                        color: "twitter",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
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
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        profile: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                profile: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/faces/card-profile2-square.jpg",
                                                        alt: "..."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
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
                                                            "Don",
                                                            "'",
                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                profile: true,
                                                className: classes.justifyContent,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
                                                        color: "dribbble",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-dribbble"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
                                                        color: "twitter",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        profile: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                profile: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/faces/card-profile4-square.jpg",
                                                        alt: "..."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
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
                                                            "Don",
                                                            "'",
                                                            "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                profile: true,
                                                className: classes.justifyContent,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
                                                        color: "dribbble",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-dribbble"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
                                                        color: "twitter",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        justIcon: true,
                                                        round: true,
                                                        color: "pinterest",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-pinterest"
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.team + " " + classes.section,
                style: {
                    backgroundImage: "url('/img/examples/city.jpg')"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "The Executive Team 5"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: classes.descriptionWhite,
                                        children: "This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                        profile: true,
                                        plain: true,
                                        className: classes.card5,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 5,
                                                    md: 5,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                        image: true,
                                                        plain: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/faces/card-profile1-square.jpg",
                                                                alt: "..."
                                                            })
                                                        })
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
                                                            profile: true,
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    justIcon: true,
                                                                    simple: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-twitter"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    justIcon: true,
                                                                    simple: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-facebook-square"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    justIcon: true,
                                                                    simple: true,
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
                                        className: classes.card5,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 5,
                                                    md: 5,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                        image: true,
                                                        plain: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/faces/card-profile6-square.jpg",
                                                                alt: "..."
                                                            })
                                                        })
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
                                                            profile: true,
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    justIcon: true,
                                                                    simple: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-linkedin-in"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    justIcon: true,
                                                                    simple: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-facebook-square"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    justIcon: true,
                                                                    simple: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-dribbble"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    justIcon: true,
                                                                    simple: true,
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
                                        className: classes.card5,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 5,
                                                    md: 5,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                        image: true,
                                                        plain: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/faces/card-profile4-square.jpg",
                                                                alt: "..."
                                                            })
                                                        })
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
                                                            profile: true,
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    justIcon: true,
                                                                    simple: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-youtube"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    justIcon: true,
                                                                    simple: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-twitter"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    justIcon: true,
                                                                    simple: true,
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
                                        className: classes.card5,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                    xs: 12,
                                                    sm: 5,
                                                    md: 5,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                        image: true,
                                                        plain: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/faces/card-profile2-square.jpg",
                                                                alt: "..."
                                                            })
                                                        })
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
                                                            profile: true,
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    justIcon: true,
                                                                    simple: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-linkedin-in"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    justIcon: true,
                                                                    simple: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fab fa-facebook-square"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                    justIcon: true,
                                                                    simple: true,
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
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__(7886);
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);
// EXTERNAL MODULE: external "@material-ui/icons/Build"
var Build_ = __webpack_require__(504);
var Build_default = /*#__PURE__*/__webpack_require__.n(Build_);
// EXTERNAL MODULE: external "@material-ui/icons/Subject"
var Subject_ = __webpack_require__(8933);
var Subject_default = /*#__PURE__*/__webpack_require__.n(Subject_);
// EXTERNAL MODULE: external "@material-ui/icons/Timeline"
var Timeline_ = __webpack_require__(1080);
var Timeline_default = /*#__PURE__*/__webpack_require__.n(Timeline_);
// EXTERNAL MODULE: external "@material-ui/icons/Group"
var Group_ = __webpack_require__(8495);
var Group_default = /*#__PURE__*/__webpack_require__.n(Group_);
// EXTERNAL MODULE: ./components/NavPills/NavPills.js + 1 modules
var NavPills = __webpack_require__(4945);
// EXTERNAL MODULE: ./components/Badge/Badge.js + 1 modules
var Badge = __webpack_require__(4672);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/sectionsSections/projectsStyle.js

const projectsSection = {
    container: nextjs_material_kit_pro/* container */.nC,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    title: nextjs_material_kit_pro/* title */.TN,
    description: nextjs_material_kit_pro/* description */.WL,
    coloredShadow: nextjs_material_kit_pro/* coloredShadow */.DF,
    cardTitle: nextjs_material_kit_pro/* cardTitle */.X5,
    textCenter: {
        textAlign: "center"
    },
    projects: {
        padding: "80px 0"
    },
    tabSpace: {
        padding: "20px 0 50px 0px"
    },
    cardCategory: {
        color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.7) !important",
        marginTop: "10px"
    },
    cardTitleWhite: {
        ...nextjs_material_kit_pro/* cardTitle */.X5,
        color: nextjs_material_kit_pro/* whiteColor */.zQ + "  !important",
        marginTop: "10px !important"
    },
    cardDescription: {
        color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.7) !important"
    },
    sectionSpace: {
        height: "70px",
        display: "block"
    },
    marginTop20: {
        marginTop: "20px"
    },
    card2: {
        textAlign: "center"
    },
    sectionDark: {
        ...nextjs_material_kit_pro/* sectionDark */.Yw,
        backgroundSize: "550% 450%",
        "& $title, & $cardTitle": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        },
        "& $cardCategory": {
            color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.5) !important"
        },
        "& $cardDescription": {
            color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.76) !important"
        }
    },
    projects3: {
        "& $title": {
            marginBottom: "80px",
            marginTop: "5px"
        },
        "& h6": {
            marginBottom: "5px"
        }
    },
    card4: {
        marginTop: "0",
        marginBottom: "0",
        "& $cardTitle": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        }
    },
    cardBody4: {
        paddingTop: "140px",
        paddingBottom: "140px"
    },
    info4: {
        padding: "0"
    },
    projects4: {
        "& hr": {
            margin: "70px auto",
            maxWidth: "970px"
        }
    }
};
/* harmony default export */ const projectsStyle = (projectsSection);

;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionProjects.js
/* eslint-disable */ 

// @material-ui/core components


// @material-ui/icons







// core components











const SectionProjects_useStyles = (0,styles_.makeStyles)(projectsStyle);
function SectionProjects({ ...rest }) {
    const classes = SectionProjects_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cd-section",
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.projects,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "Some of Our Awesome Products - 1"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavPills/* default */.Z, {
                                        alignCenter: true,
                                        color: "rose",
                                        tabs: [
                                            {
                                                tabButton: "All",
                                                tabContent: ""
                                            },
                                            {
                                                tabButton: "Marketing",
                                                tabContent: ""
                                            },
                                            {
                                                tabButton: "Development",
                                                tabContent: ""
                                            },
                                            {
                                                tabButton: "Productivity",
                                                tabContent: ""
                                            },
                                            {
                                                tabButton: "Web Design",
                                                tabContent: ""
                                            }
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.tabSpace
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                        raised: true,
                                        background: true,
                                        style: {
                                            backgroundImage: "url('/img/examples/office2.jpg')"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                            background: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: classes.cardCategory,
                                                    children: "PRODUCTIVITY"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablito",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: classes.cardTitleWhite,
                                                        children: "The Best Productivity Apps on Market"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: classes.cardDescription,
                                                    children: [
                                                        "Don",
                                                        "'",
                                                        "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    round: true,
                                                    color: "danger",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Icon_default()), {
                                                            children: "content_copy"
                                                        }),
                                                        " View App"
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
                                        raised: true,
                                        background: true,
                                        style: {
                                            backgroundImage: "url('/img/examples/card-blog3.jpg')"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                            background: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: classes.cardCategory,
                                                    children: "DESIGN"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablito",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: classes.cardTitleWhite,
                                                        children: "The Sculpture Where Details Matter"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: classes.cardDescription,
                                                    children: [
                                                        "Don",
                                                        "'",
                                                        "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    round: true,
                                                    color: "info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Build_default()), {}),
                                                        "View Project"
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 12,
                                    md: 12,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                        raised: true,
                                        background: true,
                                        style: {
                                            backgroundImage: "url('/img/examples/card-project6.jpg')"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                            background: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: classes.cardCategory,
                                                    children: "MARKETING"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablito",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: classes.cardTitleWhite,
                                                        children: "0 to 100.000 Customers in 6 months"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: classes.cardDescription,
                                                    children: [
                                                        "Don",
                                                        "'",
                                                        "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    round: true,
                                                    color: "warning",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Subject_default()), {}),
                                                        " Case study"
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.projects,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "OUR WORK"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "Some of Our Awesome Products - 2"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: classes.description,
                                        children: "This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.sectionSpace
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        plain: true,
                                        className: classes.card2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmkp-projects-section-sections",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "https://s3.amazonaws.com/creativetim_bucket/products/217/original/opt_mk_nextjs_thumbnail.jpg?1525851474",
                                                            alt: "..."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('https://s3.amazonaws.com/creativetim_bucket/products/217/original/opt_mk_nextjs_thumbnail.jpg?1525851474')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmkp-projects-section-sections",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "NextJS Material Kit Free"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.description,
                                                        children: "FREE UI KIT"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.description + " " + classes.marginTop20,
                                                        children: [
                                                            "It is a Free Material-UI Kit with a fresh, new design inspired by Google's material design. It",
                                                            "'",
                                                            "s a great pleasure to introduce to you the material concepts in an easy to use and beautiful set of components."
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        plain: true,
                                        className: classes.card2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=njsmkp-projects-section-sections",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbp_react_thumbnail.jpg?1509466309",
                                                            alt: "..."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbp_react_thumbnail.jpg?1509466309')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=njsmkp-projects-section-sections",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Light Bootstrap Dashboard PRO React"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.description,
                                                        children: "Premium Template"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: classes.description + " " + classes.marginTop20,
                                                        children: "Light Bootstrap Dashboard PRO is a Bootstrap 3 Admin Theme designed to look simple and beautiful. Forget about boring dashboards and grab yourself a copy to kickstart new project!"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        plain: true,
                                        className: classes.card2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=njsmkp-projects-section-sections",
                                                target: "_blank",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                    image: true,
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306",
                                                            alt: "..."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: classes.coloredShadow,
                                                            style: {
                                                                backgroundImage: "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
                                                                opacity: "1"
                                                            }
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=njsmkp-projects-section-sections",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Now UI Dashboard PRO React"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.description,
                                                        children: "Premium Template"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: classes.description + " " + classes.marginTop20,
                                                        children: "Now UI Dashboard React is an admin dashboard template designed by Invision and coded by Creative Tim. It is built on top of Reactstrap, using Now UI Dashboard and it is fully responsive."
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.projects + " " + classes.sectionDark + " " + classes.projects3,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "OUR WORK"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "Some of Our Awesome Products - 3"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 5,
                                    md: 5,
                                    className: classes.mlAuto,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        plain: true,
                                        className: classes.card2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#pablo",
                                                onClick: (e)=>e.preventDefault(),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                    plain: true,
                                                    image: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/examples/card-project1.jpg",
                                                        alt: "..."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory,
                                                        children: "WEB DESIGN"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Famous Website Redesign"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.cardDescription,
                                                        children: [
                                                            "Don",
                                                            "'",
                                                            "t be scared of the truth because we need to restart the human foundation in truth."
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 5,
                                    md: 5,
                                    className: classes.mrAuto,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        plain: true,
                                        className: classes.card2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#pablo",
                                                onClick: (e)=>e.preventDefault(),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                    plain: true,
                                                    image: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/examples/card-project2.jpg",
                                                        alt: "..."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory,
                                                        children: "PRODUCTIVITY TOOLS"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Beautiful Desktop for Designers"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.cardDescription,
                                                        children: [
                                                            "Don",
                                                            "'",
                                                            "t be scared of the truth because we need to restart the human foundation in truth."
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 5,
                                    md: 5,
                                    className: classes.mlAuto,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        plain: true,
                                        className: classes.card2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#pablo",
                                                onClick: (e)=>e.preventDefault(),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                    plain: true,
                                                    image: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/examples/card-project3.jpg",
                                                        alt: "..."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory,
                                                        children: "ANDROID APP"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Analytics for Android"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.cardDescription,
                                                        children: [
                                                            "Don",
                                                            "'",
                                                            "t be scared of the truth because we need to restart the human foundation in truth."
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 5,
                                    md: 5,
                                    className: classes.mrAuto,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        plain: true,
                                        className: classes.card2,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#pablo",
                                                onClick: (e)=>e.preventDefault(),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                    plain: true,
                                                    image: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/examples/card-project4.jpg",
                                                        alt: "..."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory,
                                                        children: "WEBSITE"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Behance Redesign"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.cardDescription,
                                                        children: [
                                                            "Don",
                                                            "'",
                                                            "t be scared of the truth because we need to restart the human foundation in truth."
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.projects + " " + classes.projects4,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 8,
                                md: 8,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "Some of Our Awesome Products - 4"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: classes.description,
                                        children: "This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.sectionSpace
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 5,
                                    md: 5,
                                    className: classes.mlAuto,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                        background: true,
                                        className: classes.card4,
                                        style: {
                                            backgroundImage: "url('/img/examples/card-project2.jpg')"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                            background: true,
                                            className: classes.cardBody4,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                                                    color: "rose",
                                                    children: "Client: Apple"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "#pablo",
                                                    onClick: (e)=>e.preventDefault,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: classes.cardTitle,
                                                            children: "Beautiful Project"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: classes.cardDescription,
                                                            children: [
                                                                "Don",
                                                                "'",
                                                                "t be scared of the truth because we need to restart the human foundation in truth."
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 5,
                                    md: 5,
                                    className: classes.mrAuto,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            className: classes.info4,
                                            title: "Graphic Design",
                                            description: "We've created the design of the website using modern Technologies like Sketch. It was a very interesting collaboration.",
                                            icon: (FormatPaint_default()),
                                            iconColor: "info"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            className: classes.info4,
                                            title: "Fully Coded in HTML5",
                                            description: "We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.",
                                            icon: (Code_default()),
                                            iconColor: "primary"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            className: classes.info4,
                                            title: "CMS Admin Dashboard",
                                            description: "There is also a Fully Customizable CMS Admin Dashboard for this product.",
                                            icon: (Dashboard_default()),
                                            iconColor: "danger"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 5,
                                    md: 5,
                                    className: classes.mlAuto,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            className: classes.info4,
                                            title: "Marketing",
                                            description: "We've created the marketing campaign of the website. It was a very interesting collaboration.",
                                            icon: (Timeline_default()),
                                            iconColor: "rose"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            className: classes.info4,
                                            title: "Fully Coded in HTML5",
                                            description: "We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.",
                                            icon: (Code_default()),
                                            iconColor: "success"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            className: classes.info4,
                                            title: "Built Audience",
                                            description: "There is also a Fully Customizable CMS Admin Dashboard for this product.",
                                            icon: (Group_default()),
                                            iconColor: "info"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 5,
                                    md: 5,
                                    className: classes.mrAuto,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                        background: true,
                                        className: classes.card4,
                                        style: {
                                            backgroundImage: "url('/img/examples/card-project5.jpg')"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                            background: true,
                                            className: classes.cardBody4,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                                                    color: "rose",
                                                    children: "CLIENT: DJ KHALED"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "#pablo",
                                                    onClick: (e)=>e.preventDefault,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: classes.cardTitle,
                                                            children: "Another One"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: classes.cardDescription,
                                                            children: [
                                                                "Don",
                                                                "'",
                                                                "t be scared of the truth because we need to restart the human foundation in truth."
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
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: external "@material-ui/icons/Weekend"
const Weekend_namespaceObject = require("@material-ui/icons/Weekend");
var Weekend_default = /*#__PURE__*/__webpack_require__.n(Weekend_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Home"
const Home_namespaceObject = require("@material-ui/icons/Home");
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/Business"
var Business_ = __webpack_require__(472);
var Business_default = /*#__PURE__*/__webpack_require__.n(Business_);
// EXTERNAL MODULE: external "@material-ui/icons/AccountBalance"
var AccountBalance_ = __webpack_require__(5201);
var AccountBalance_default = /*#__PURE__*/__webpack_require__.n(AccountBalance_);
// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__(9309);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);
// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__(7501);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/sectionsSections/pricingStyle.js

const pricingSection = {
    container: nextjs_material_kit_pro/* container */.nC,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    title: nextjs_material_kit_pro/* title */.TN,
    cardTitle: nextjs_material_kit_pro/* cardTitle */.X5,
    description: nextjs_material_kit_pro/* description */.WL,
    cardTitleWhite: {
        ...nextjs_material_kit_pro/* cardTitle */.X5,
        color: nextjs_material_kit_pro/* whiteColor */.zQ + "  !important"
    },
    sectionGray: {
        background: nextjs_material_kit_pro/* grayColor.14 */.X_[14]
    },
    section: {
        ...nextjs_material_kit_pro/* section */.qi,
        ...nextjs_material_kit_pro/* sectionDark */.Yw,
        position: "relative",
        "& $container": {
            position: "relative",
            zIndex: "2"
        },
        "& $description": {
            color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.5)"
        },
        "& $cardCategory": {
            color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.76)"
        },
        "& $title": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ,
            marginBottom: "10px"
        },
        "&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''",
            backgroundColor: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.7)"
        }
    },
    pricing1: {
        "&$section:after": {
            backgroundColor: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.8)"
        }
    },
    pricing: {
        padding: "80px 0"
    },
    textCenter: {
        textAlign: "center"
    },
    sectionSpace: {
        height: "70px",
        display: "block"
    },
    cardCategory: {
        ...nextjs_material_kit_pro/* description */.WL
    },
    cardCategoryWhite: {
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    cardDescription: {
        ...nextjs_material_kit_pro/* description */.WL
    },
    justifyContentCenter: {
        WebkitBoxPack: "center !important",
        MsFlexPack: "center !important",
        justifyContent: "center !important"
    },
    icon: {
        color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.76)",
        margin: "10px auto 0",
        width: "130px",
        height: "130px",
        border: "1px solid " + nextjs_material_kit_pro/* grayColor.14 */.X_[14],
        borderRadius: "50%",
        lineHeight: "174px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "55px",
            lineHeight: "55px"
        },
        "& svg": {
            width: "55px",
            height: "55px"
        }
    },
    iconWhite: {
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    iconRose: {
        color: nextjs_material_kit_pro/* roseColor.0 */.An[0]
    },
    marginTop30: {
        marginTop: "30px"
    },
    marginBottom20: {
        marginBottom: "20px"
    },
    marginBottom30: {
        marginBottom: "30px"
    }
};
/* harmony default export */ const pricingStyle = (pricingSection);

;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionPricing.js


// @material-ui/core components

// @material-ui/icons






// core components










const SectionPricing_useStyles = (0,styles_.makeStyles)(pricingStyle);
function SectionPricing({ ...rest }) {
    const classes = SectionPricing_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cd-section",
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.pricing + " " + classes.pricing1 + " " + classes.section,
                style: {
                    backgroundImage: "url('/img/bg11.jpg')"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "Pick the best plan for you"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: classes.description,
                                        children: "You have Free Unlimited Updates and Premium Support on each package."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.sectionSpace
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                        pricing: true,
                                        plain: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                            pricing: true,
                                            plain: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: classes.cardCategory + " " + classes.marginBottom20,
                                                    children: "Freelancer"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: classes.icon,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Weekend_default()), {
                                                        className: classes.iconWhite
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: classes.cardTitleWhite + " " + classes.marginTop30,
                                                    children: "FREE"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.cardCategory,
                                                    children: "This is good if your company size is between 2 and 10 Persons."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    round: true,
                                                    color: "white",
                                                    children: "Choose plan"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                        pricing: true,
                                        raised: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                            pricing: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: classes.cardDescription + " " + classes.marginBottom20,
                                                    children: "SMALL COMPANY"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: classes.icon,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Home_default()), {
                                                        className: classes.iconRose
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: classes.cardTitle + " " + classes.marginTop30,
                                                    children: "$29"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.cardDescription,
                                                    children: "This is good if your company size is between 2 and 10 Persons."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    round: true,
                                                    color: "rose",
                                                    children: "Choose plan"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                        pricing: true,
                                        plain: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                            pricing: true,
                                            plain: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: classes.cardCategory + " " + classes.marginBottom20,
                                                    children: "MEDIUM COMPANY"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: classes.icon,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Business_default()), {
                                                        className: classes.iconWhite
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: classes.cardTitleWhite + " " + classes.marginTop30,
                                                    children: "$69"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.cardCategory,
                                                    children: "This is good if your company size is between 11 and 99 Persons."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    round: true,
                                                    color: "white",
                                                    children: "Choose plan"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 3,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                        pricing: true,
                                        plain: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                            pricing: true,
                                            plain: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: classes.cardCategory + " " + classes.marginBottom20,
                                                    children: "ENTERPRISE"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: classes.icon,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((AccountBalance_default()), {
                                                        className: classes.iconWhite
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: classes.cardTitleWhite + " " + classes.marginTop30,
                                                    children: "$159"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: classes.cardCategory,
                                                    children: "This is good if your company size is 99+ persons."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    round: true,
                                                    color: "white",
                                                    children: "Choose plan"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.pricing,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "Pick the best plan for you"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavPills/* default */.Z, {
                                        alignCenter: true,
                                        color: "rose",
                                        tabs: [
                                            {
                                                tabButton: "Monthly",
                                                tabContent: ""
                                            },
                                            {
                                                tabButton: "Yearly",
                                                tabContent: ""
                                            }
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.sectionSpace
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        pricing: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                pricing: true,
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory,
                                                        children: "FREE"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                        className: classes.cardTitle,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "$"
                                                            }),
                                                            " 0 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "/mo"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "1"
                                                                    }),
                                                                    " Project"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "5"
                                                                    }),
                                                                    " Team Members"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "55"
                                                                    }),
                                                                    " Personal Contacts"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "5.000"
                                                                    }),
                                                                    " Messages"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardFooter/* default */.Z, {
                                                pricing: true,
                                                className: classes.justifyContentCenter,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    color: "rose",
                                                    round: true,
                                                    children: "Get Started"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        pricing: true,
                                        raised: true,
                                        background: true,
                                        style: {
                                            backgroundImage: "url('/img/examples/card-blog3.jpg')"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                pricing: true,
                                                background: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategoryWhite,
                                                        children: "PREMIUM"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                        className: classes.cardTitleWhite,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "$"
                                                            }),
                                                            " 89 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "/mo"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "500"
                                                                    }),
                                                                    " Projects"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "50"
                                                                    }),
                                                                    " Team Members"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "125"
                                                                    }),
                                                                    " Personal Contacts"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "15.000"
                                                                    }),
                                                                    " Messages"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardFooter/* default */.Z, {
                                                pricing: true,
                                                className: classes.justifyContentCenter,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    color: "white",
                                                    round: true,
                                                    children: "Get Started"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        pricing: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                pricing: true,
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory,
                                                        children: "PLATINUM"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                        className: classes.cardTitle,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "$"
                                                            }),
                                                            " 199 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "/mo"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "1000"
                                                                    }),
                                                                    " Projects"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "100"
                                                                    }),
                                                                    " Team Members"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "550"
                                                                    }),
                                                                    " Personal Contacts"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "50.000"
                                                                    }),
                                                                    " Messages"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardFooter/* default */.Z, {
                                                pricing: true,
                                                className: classes.justifyContentCenter,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    color: "rose",
                                                    round: true,
                                                    children: "Get Started"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.pricing + " " + classes.section,
                style: {
                    backgroundImage: "url('/img/examples/city.jpg')"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "Pick the best plan for you"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: classes.description,
                                        children: "You have Free Unlimited Updates and Premium Support on each package."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.sectionSpace
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    className: classes.mlAuto,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        pricing: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                pricing: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardDescription,
                                                        children: "FREE"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                        className: classes.cardTitle,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "$"
                                                            }),
                                                            " 0 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "/mo"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "1"
                                                                    }),
                                                                    " Project"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "5"
                                                                    }),
                                                                    " Team Members"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "55"
                                                                    }),
                                                                    " Personal Contacts"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "5.000"
                                                                    }),
                                                                    " Messages"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardFooter/* default */.Z, {
                                                pricing: true,
                                                className: classes.justifyContentCenter,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    color: "primary",
                                                    round: true,
                                                    children: "Get Started"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    className: classes.mrAuto,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        pricing: true,
                                        color: "primary",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                pricing: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory + " " + classes.marginBottom30,
                                                        children: "PREMIUM"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                        className: classes.cardTitleWhite,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "$"
                                                            }),
                                                            " 199 ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "/mo"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "1000"
                                                                    }),
                                                                    " Projects"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "100"
                                                                    }),
                                                                    " Team Members"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "550"
                                                                    }),
                                                                    " Personal Contacts"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: "50.000"
                                                                    }),
                                                                    " Messages"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardFooter/* default */.Z, {
                                                pricing: true,
                                                className: classes.justifyContentCenter,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    color: "white",
                                                    round: true,
                                                    children: "Get Started"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.pricing,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "Pick the best plan for you"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: classes.description,
                                        children: "You have Free Unlimited Updates and Premium Support on each package."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: classes.sectionSpace
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 3,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        pricing: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                pricing: true,
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory,
                                                        children: "STARTUP"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                        className: classes.cardTitle,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "$"
                                                            }),
                                                            " 0"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {})
                                                                    }),
                                                                    " ",
                                                                    "Sharing Tools"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Danger/* default */.Z, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                                                                    }),
                                                                    " ",
                                                                    "Design Tools"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Danger/* default */.Z, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                                                                    }),
                                                                    " ",
                                                                    "Private Messages"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Danger/* default */.Z, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                                                                    }),
                                                                    " ",
                                                                    "Personal Brand"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardFooter/* default */.Z, {
                                                pricing: true,
                                                className: classes.justifyContentCenter,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    color: "danger",
                                                    round: true,
                                                    children: "Downgrade Plan"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 3,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        pricing: true,
                                        color: "success",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                pricing: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.marginBottom30,
                                                        children: "SMALL COMPANY"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                        className: classes.cardTitleWhite,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "$"
                                                            }),
                                                            " 89"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {}),
                                                                    " Sharing Tools"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {}),
                                                                    " Design Tools"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {}),
                                                                    " Private Messages"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {}),
                                                                    " Personal Brand"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardFooter/* default */.Z, {
                                                pricing: true,
                                                className: classes.justifyContentCenter,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    color: "white",
                                                    round: true,
                                                    disabled: true,
                                                    children: "Current Plan"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 3,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        pricing: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                pricing: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory,
                                                        children: "LARGE COMPANY"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                        className: classes.cardTitle,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "$"
                                                            }),
                                                            " 189"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {})
                                                                    }),
                                                                    " ",
                                                                    "Sharing Tools"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {})
                                                                    }),
                                                                    " ",
                                                                    "Design Tools"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {})
                                                                    }),
                                                                    " ",
                                                                    "Private Messages"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Danger/* default */.Z, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {})
                                                                    }),
                                                                    " ",
                                                                    "Personal Brand"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardFooter/* default */.Z, {
                                                pricing: true,
                                                className: classes.justifyContentCenter,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    color: "success",
                                                    round: true,
                                                    children: "Upgrade Plan"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 3,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        pricing: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                pricing: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory,
                                                        children: "LARGE COMPANY"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                        className: classes.cardTitle,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                children: "$"
                                                            }),
                                                            " 189"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {})
                                                                    }),
                                                                    " ",
                                                                    "Sharing Tools"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {})
                                                                    }),
                                                                    " ",
                                                                    "Design Tools"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {})
                                                                    }),
                                                                    " ",
                                                                    "Private Messages"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Check_default()), {})
                                                                    }),
                                                                    " ",
                                                                    "Personal Brand"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardFooter/* default */.Z, {
                                                pricing: true,
                                                className: classes.justifyContentCenter,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                    color: "success",
                                                    round: true,
                                                    children: "Upgrade Plan"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.pricing + " " + classes.sectionGray,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 4,
                                md: 4,
                                className: classes.mlAuto + " " + classes.mrAuto,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "Choose a plan for your next project"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: classes.description,
                                        children: [
                                            "You have Free Unlimited Updates and Premium Support on each package. You also have 20 days to request a refund if You",
                                            "'",
                                            "re not happy with your purchase."
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 7,
                                md: 7,
                                className: classes.mlAuto + " " + classes.mrAuto,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavPills/* default */.Z, {
                                    alignCenter: true,
                                    color: "primary",
                                    tabs: [
                                        {
                                            tabButton: "Personal",
                                            tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                            pricing: true,
                                                            raised: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    pricing: true,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: classes.cardDescription,
                                                                            children: "HTML PACKAGE"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                                            className: classes.cardTitle,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                                    children: "$"
                                                                                }),
                                                                                " 0"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "1"
                                                                                        }),
                                                                                        " Developer"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "99+"
                                                                                        }),
                                                                                        " Components"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "HTML"
                                                                                        }),
                                                                                        " Elements"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "14"
                                                                                        }),
                                                                                        " Page Examples"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(CardFooter/* default */.Z, {
                                                                    pricing: true,
                                                                    className: classes.justifyContentCenter,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        color: "primary",
                                                                        round: true,
                                                                        children: "FREE DOWNLOAD"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                            pricing: true,
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    pricing: true,
                                                                    plain: true,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: classes.cardDescription,
                                                                            children: "HTML & SKETCH PACKAGE"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                                            className: classes.cardTitle,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                                    children: "$"
                                                                                }),
                                                                                " 79"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "1"
                                                                                        }),
                                                                                        " Developer"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "199+"
                                                                                        }),
                                                                                        " Components"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "HTML & Sketch"
                                                                                        }),
                                                                                        " Elements"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "22"
                                                                                        }),
                                                                                        " Page Examples"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(CardFooter/* default */.Z, {
                                                                    pricing: true,
                                                                    className: classes.justifyContentCenter,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        color: "white",
                                                                        round: true,
                                                                        children: "BUY NOW"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        },
                                        {
                                            tabButton: "Commercial",
                                            tabContent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                            pricing: true,
                                                            raised: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    pricing: true,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: classes.cardDescription,
                                                                            children: "HTML PACKAGE"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                                            className: classes.cardTitle,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                                    children: "$"
                                                                                }),
                                                                                " 159"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "5+"
                                                                                        }),
                                                                                        " Developers"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "199+"
                                                                                        }),
                                                                                        " Components"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "HTML"
                                                                                        }),
                                                                                        " Elements"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "24"
                                                                                        }),
                                                                                        " Page Examples"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(CardFooter/* default */.Z, {
                                                                    pricing: true,
                                                                    className: classes.justifyContentCenter,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        color: "primary",
                                                                        round: true,
                                                                        children: "BUY NOW"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                            pricing: true,
                                                            plain: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                                    pricing: true,
                                                                    plain: true,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                            className: classes.cardDescription,
                                                                            children: "HTML & SKETCH PACKAGE"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                                            className: classes.cardTitle,
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                                    children: "$"
                                                                                }),
                                                                                " 299"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "10+"
                                                                                        }),
                                                                                        " Developers"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "299+"
                                                                                        }),
                                                                                        " Components"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "HTML & Sketch"
                                                                                        }),
                                                                                        " Elements"
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                                            children: "45"
                                                                                        }),
                                                                                        " Page Examples"
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(CardFooter/* default */.Z, {
                                                                    pricing: true,
                                                                    className: classes.justifyContentCenter,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        color: "white",
                                                                        round: true,
                                                                        children: "BUY NOW"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }
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

;// CONCATENATED MODULE: external "@material-ui/icons/FormatQuote"
const FormatQuote_namespaceObject = require("@material-ui/icons/FormatQuote");
var FormatQuote_default = /*#__PURE__*/__webpack_require__.n(FormatQuote_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Star"
const Star_namespaceObject = require("@material-ui/icons/Star");
var Star_default = /*#__PURE__*/__webpack_require__.n(Star_namespaceObject);
// EXTERNAL MODULE: ./components/Typography/Warning.js
var Warning = __webpack_require__(4951);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/sectionsSections/testimonialsStyle.js

const testimonialsSection = {
    container: nextjs_material_kit_pro/* container */.nC,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    mrAuto: nextjs_material_kit_pro/* mrAuto */.kq,
    title: nextjs_material_kit_pro/* title */.TN,
    description: nextjs_material_kit_pro/* description */.WL,
    cardTitle: nextjs_material_kit_pro/* cardTitle */.X5,
    sectionDark: {
        ...nextjs_material_kit_pro/* sectionDark */.Yw,
        "& $cardDescription": {
            color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.76)"
        },
        "& $cardTitle": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        },
        backgroundSize: "550% 450%"
    },
    cardDescription: {
        ...nextjs_material_kit_pro/* description */.WL
    },
    cardCategory: {
        ...nextjs_material_kit_pro/* description */.WL
    },
    sectionImage: {
        ...nextjs_material_kit_pro/* sectionDark */.Yw,
        ...nextjs_material_kit_pro/* section */.qi,
        position: "relative",
        "& $container": {
            zIndex: "2",
            position: "relative"
        },
        "&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''",
            backgroundColor: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.7)"
        },
        "& $title": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        },
        "& $description": {
            color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.76)"
        }
    },
    testimonials: {
        padding: "80px 0",
        "& $cardDescription": {
            fontStyle: "italic"
        }
    },
    textCenter: {
        textAlign: "center"
    },
    icon: {
        marginTop: "30px",
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            fontSize: "40px",
            lineHeight: "40px"
        },
        "& svg": {
            width: "40px",
            height: "40px"
        }
    },
    card1: {
        "& $cardDescription": {
            marginBottom: "50px",
            fontStyle: "italic"
        }
    },
    starIcons: {
        width: "24px",
        height: "24px"
    },
    testimonial2: {
        "& .slick-dots": {
            display: "none !important"
        }
    },
    card2: {
        maxWidth: "650px",
        margin: "60px auto",
        "& $cardDescription": {
            fontStyle: "italic"
        }
    }
};
/* harmony default export */ const testimonialsStyle = (testimonialsSection);

;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionTestimonials.js


// react component for creating beautiful carousel

// @material-ui/core components

// @material-ui/icons


// core components









const SectionTestimonials_useStyles = (0,styles_.makeStyles)(testimonialsStyle);
function SectionTestimonials({ ...rest }) {
    const classes = SectionTestimonials_useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cd-section",
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.testimonials + " " + classes.sectionImage,
                style: {
                    backgroundImage: "url('/img/dg2.jpg')"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "Our Clients Love Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: classes.description,
                                        children: "You need more information? Check what other persons are saying about our product. They are very happy with their purchase."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        testimonial: true,
                                        className: classes.card1,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.icon,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((FormatQuote_default()), {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardBody/* default */.Z, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: classes.cardDescription,
                                                    children: "Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                testimonial: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: classes.cardTitle,
                                                        children: "Alec Thompson"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory,
                                                        children: "@ALECTHOMPSON"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                        testimonial: true,
                                                        testimonialFooter: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/faces/card-profile1-square.jpg",
                                                                alt: "..."
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        testimonial: true,
                                        className: classes.card1,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.icon,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((FormatQuote_default()), {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardBody/* default */.Z, {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    className: classes.cardDescription,
                                                    children: [
                                                        '"',
                                                        "Don",
                                                        "'",
                                                        "t be scared of the truth because we need to restart the human foundation in truth. That",
                                                        "'",
                                                        "s why I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is not so attractive",
                                                        '"'
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                testimonial: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: classes.cardTitle,
                                                        children: "Gina Andrew"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory,
                                                        children: "@GINAANDREW"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                        testimonial: true,
                                                        testimonialFooter: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/faces/card-profile4-square.jpg",
                                                                alt: "..."
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        testimonial: true,
                                        className: classes.card1,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: classes.icon,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((FormatQuote_default()), {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardBody/* default */.Z, {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    className: classes.cardDescription,
                                                    children: [
                                                        '"',
                                                        "Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!",
                                                        '"'
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                testimonial: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: classes.cardTitle,
                                                        children: "George West"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: classes.cardCategory,
                                                        children: "@GEORGEWEST"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                        testimonial: true,
                                                        testimonialFooter: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            onClick: (e)=>e.preventDefault(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/faces/card-profile2-square.jpg",
                                                                alt: "..."
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
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.testimonials + " " + classes.sectionDark + " " + classes.testimonial2,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            xs: 12,
                            sm: 12,
                            md: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                                ...settings,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            testimonial: true,
                                            plain: true,
                                            className: classes.card2,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                    testimonial: true,
                                                    plain: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/faces/kendall.jpg",
                                                            alt: "..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                            className: classes.cardDescription,
                                                            children: [
                                                                '"',
                                                                "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future. My brother Chance!!!",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                "Thank you for letting me work on this masterpiece. One of my favorite people.",
                                                                '"'
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Kendall Thompson"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                children: "CEO @ Marketing Digital Ltd."
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Warning/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                className: classes.starIcons
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Warning/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                className: classes.starIcons
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Warning/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                className: classes.starIcons
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Warning/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                className: classes.starIcons
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Warning/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                className: classes.starIcons
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                            testimonial: true,
                                            plain: true,
                                            className: classes.card2,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                    testimonial: true,
                                                    plain: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
                                                        onClick: (e)=>e.preventDefault(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/img/faces/christian.jpg",
                                                            alt: "..."
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                    plain: true,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                            className: classes.cardDescription,
                                                            children: [
                                                                '"',
                                                                "Thank you Anna for the invite thank you to the whole Vogue team Called I Miss the Old Kanye At the God",
                                                                "'",
                                                                "s last game Chop up the soul Kanye. I promise I will never let the people down. I want a better life for all!!! Pablo Pablo Pablo Pablo! Thank you Anna for the invite thank you to the whole Vogue team.",
                                                                '"'
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                            className: classes.cardTitle,
                                                            children: "Christian Louboutin"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                children: "Designer @ Louboutin & Co."
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Warning/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                className: classes.starIcons
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Warning/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                className: classes.starIcons
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Warning/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                className: classes.starIcons
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Warning/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Star_default()), {
                                                                className: classes.starIcons
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.testimonials,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                className: classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: classes.title,
                                    children: "What Clients Say"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        testimonial: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                testimonial: true,
                                                plain: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/faces/card-profile1-square.jpg",
                                                        alt: "..."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: classes.title,
                                                        children: "Mike Andrew"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "CEO @ MARKETING DIGITAL LTD."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                        className: classes.cardDescription,
                                                        children: [
                                                            '"',
                                                            "I speak yell scream directly at the old guard on behalf of the future. I gotta say at that time I’d like to meet Kanye I speak yell scream directly at the old guard on behalf of the future.",
                                                            '"'
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        testimonial: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                testimonial: true,
                                                plain: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/faces/card-profile4-square.jpg",
                                                        alt: "..."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: classes.title,
                                                        children: "Tina Thompson"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "MARKETING @ APPLE INC."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                        className: classes.cardDescription,
                                                        children: [
                                                            '"',
                                                            "I promise I will never let the people down. I want a better life for all!!! Pablo Pablo Pablo Pablo! Thank you Anna for the invite thank you to the whole Vogue team It wasn’t any Kanyes I love Rick Owens’ bed design but the back is too high for the beams and angle of the ceiling",
                                                            '"'
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        testimonial: true,
                                        plain: true,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                                testimonial: true,
                                                plain: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#pablo",
                                                    onClick: (e)=>e.preventDefault(),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/faces/card-profile6-square.jpg",
                                                        alt: "..."
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                plain: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: classes.title,
                                                        children: "Gina West"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Muted/* default */.Z, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "CFO @ APPLE INC."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                        className: classes.cardDescription,
                                                        children: [
                                                            '"',
                                                            "I",
                                                            "'",
                                                            "ve been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... Roy\xe8re doesn",
                                                            "'",
                                                            "t make a Polar bear bed but the Polar bear. This is a very nice testimonial about this company.",
                                                            '"'
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
            })
        ]
    });
};

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__(8350);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);
// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__(6320);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);
// EXTERNAL MODULE: external "@material-ui/icons/PinDrop"
var PinDrop_ = __webpack_require__(1418);
var PinDrop_default = /*#__PURE__*/__webpack_require__.n(PinDrop_);
// EXTERNAL MODULE: external "@material-ui/icons/Phone"
var Phone_ = __webpack_require__(9069);
var Phone_default = /*#__PURE__*/__webpack_require__.n(Phone_);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/customCheckboxRadioSwitchStyle.js
var customCheckboxRadioSwitchStyle = __webpack_require__(6233);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/sectionsSections/contactsStyle.js


const contactsSection = {
    ...customCheckboxRadioSwitchStyle/* default */.Z,
    container: nextjs_material_kit_pro/* container */.nC,
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    title: nextjs_material_kit_pro/* title */.TN,
    description: nextjs_material_kit_pro/* description */.WL,
    cardTitle: nextjs_material_kit_pro/* cardTitle */.X5,
    section: {
        ...nextjs_material_kit_pro/* sectionDark */.Yw,
        ...nextjs_material_kit_pro/* section */.qi,
        position: "relative",
        "& $container": {
            zIndex: "2",
            position: "relative"
        },
        "&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''",
            backgroundColor: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* blackColor */.FT) + ", 0.7)"
        },
        "& $title": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        },
        "& $description": {
            color: "rgba(" + (0,nextjs_material_kit_pro/* hexToRgb */.oo)(nextjs_material_kit_pro/* whiteColor */.zQ) + ", 0.76)"
        },
        "& $infoArea": {}
    },
    contacts: {
        padding: "80px 0"
    },
    infoArea: {
        padding: "0",
        margin: "0",
        "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        },
        "& h4": {
            marginTop: "20px",
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        }
    },
    card1: {
        marginTop: "30px",
        "& $cardTitle": {
            marginBottom: "0.75rem !important",
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        }
    },
    textCenter: {
        textAlign: "center"
    },
    justifyContentBetween: {
        WebkitBoxPack: "justify !important",
        MsFlexPack: "justify !important",
        justifyContent: "space-between !important"
    },
    pullRight: {
        float: "right"
    },
    card2: {
        "@media (min-width: 991px)": {
            margin: "80px 0 80px 150px"
        },
        maxWidth: "560px",
        float: "left",
        "& $cardTitle": {
            marginBottom: "0.75rem !important",
            color: nextjs_material_kit_pro/* whiteColor */.zQ
        }
    },
    map: {
        overflow: "hidden",
        width: "100%",
        height: "800px",
        position: "absolute"
    },
    contacts2: {
        padding: "0",
        height: "800px"
    },
    infoArea2: {
        padding: "0",
        margin: "0",
        "& h4": {
            fontSize: "1.0625rem",
            lineHeight: "1.55em"
        }
    }
};
/* harmony default export */ const contactsStyle = (contactsSection);

;// CONCATENATED MODULE: ./pages-sections/sections-page/SectionContacts.js


// @material-ui/core components



// @material-ui/icons



// core components










const SectionContacts_useStyles = (0,styles_.makeStyles)(contactsStyle);
const RegularMap = ()=>{
    const mapRef = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        let google = window.google;
        let map = mapRef.current;
        let lat = "44.43353";
        let lng = "26.093928";
        const myLatlng = new google.maps.LatLng(lat, lng);
        const mapOptions = {
            zoom: 14,
            center: myLatlng,
            scrollwheel: false,
            zoomControl: true,
            styles: [
                {
                    featureType: "water",
                    stylers: [
                        {
                            saturation: 43
                        },
                        {
                            lightness: -11
                        },
                        {
                            hue: "#0088ff"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            hue: "#ff0000"
                        },
                        {
                            saturation: -100
                        },
                        {
                            lightness: 99
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            color: "#808080"
                        },
                        {
                            lightness: 54
                        }
                    ]
                },
                {
                    featureType: "landscape.man_made",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#ece2d9"
                        }
                    ]
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#ccdca1"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#767676"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "labels.text.stroke",
                    stylers: [
                        {
                            color: "#ffffff"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "landscape.natural",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            visibility: "on"
                        },
                        {
                            color: "#b8cb93"
                        }
                    ]
                },
                {
                    featureType: "poi.park",
                    stylers: [
                        {
                            visibility: "on"
                        }
                    ]
                },
                {
                    featureType: "poi.sports_complex",
                    stylers: [
                        {
                            visibility: "on"
                        }
                    ]
                },
                {
                    featureType: "poi.medical",
                    stylers: [
                        {
                            visibility: "on"
                        }
                    ]
                },
                {
                    featureType: "poi.business",
                    stylers: [
                        {
                            visibility: "simplified"
                        }
                    ]
                }
            ]
        };
        map = new google.maps.Map(map, mapOptions);
        const marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "NextJS Material Kit PRO!"
        });
        const contentString = '<div class="info-window-content"><h2>NextJS Material Kit PRO</h2>' + "<p>A premium Admin for React, Material-UI, and React Hooks.</p></div>";
        const infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        google.maps.event.addListener(marker, "click", function() {
            infowindow.open(map, marker);
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                height: `100%`,
                borderRadius: "6px",
                overflow: "hidden"
            },
            ref: mapRef
        })
    });
};
function SectionContacts({ ...rest }) {
    const [checked, setChecked] = external_react_default().useState([]);
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
    const classes = SectionContacts_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "cd-section",
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.contacts + " " + classes.section,
                style: {
                    backgroundImage: "url('/img/examples/city.jpg')"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 5,
                                md: 5,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: classes.title,
                                        children: "Get in Touch"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: classes.description,
                                        children: "You need more information? Check what other persons are saying about our product. They are very happy with their purchase."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                        className: classes.infoArea,
                                        title: "Find us at the office",
                                        description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                "Bld Mihail Kogalniceanu, nr. 8,",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " 7652 Bucharest,",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " Romania"
                                            ]
                                        }),
                                        icon: (PinDrop_default())
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                        className: classes.infoArea,
                                        title: "Give us a ring",
                                        description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                "Michael Jordan",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " +40 762 321 762",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " Mon - Fri, 8:00-22:00"
                                            ]
                                        }),
                                        icon: (Phone_default())
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 5,
                                md: 5,
                                className: classes.mlAuto,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    className: classes.card1,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                contact: true,
                                                color: "primary",
                                                className: classes.textCenter,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: classes.cardTitle,
                                                    children: "Contact Us"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                                xs: 12,
                                                                sm: 6,
                                                                md: 6,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                                    labelText: "First Name",
                                                                    id: "first",
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
                                                                    labelText: "Last Name",
                                                                    id: "last",
                                                                    formControlProps: {
                                                                        fullWidth: true
                                                                    }
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                        labelText: "Email Address",
                                                        id: "email-address",
                                                        formControlProps: {
                                                            fullWidth: true
                                                        }
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                        labelText: "Your Message",
                                                        id: "message",
                                                        formControlProps: {
                                                            fullWidth: true
                                                        },
                                                        inputProps: {
                                                            multiline: true,
                                                            rows: 5
                                                        }
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                className: classes.justifyContentBetween,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                                            tabIndex: -1,
                                                            onClick: ()=>handleToggle(1),
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
                                                        label: "I'm not a robot"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                        color: "primary",
                                                        className: classes.pullRight,
                                                        children: "Send Message"
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
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.contacts2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: classes.map,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(RegularMap, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                        xs: 12,
                        sm: 6,
                        md: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                            className: classes.card2,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                        contact: true,
                                        color: "rose",
                                        className: classes.textCenter,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: classes.cardTitle,
                                            children: "Contact Us"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                            className: classes.infoArea2,
                                                            title: "Give us a ring",
                                                            description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    "Michael Jordan",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    " +40 762 321 762",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    " Mon - Fri, 8:00-22:00"
                                                                ]
                                                            }),
                                                            icon: (Phone_default()),
                                                            iconColor: "rose"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                                            className: classes.infoArea2,
                                                            title: "Find us at the office",
                                                            description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    "Bld Mihail Kogalniceanu, nr. 8,",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    " 7652 Bucharest,",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                    " Romania"
                                                                ]
                                                            }),
                                                            icon: (PinDrop_default()),
                                                            iconColor: "rose"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                                        xs: 12,
                                                        sm: 6,
                                                        md: 6,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                            labelText: "Full Name",
                                                            id: "first2",
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
                                                            labelText: "Email Address",
                                                            id: "email-address2",
                                                            formControlProps: {
                                                                fullWidth: true
                                                            }
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                                labelText: "Your Message",
                                                id: "message2",
                                                formControlProps: {
                                                    fullWidth: true
                                                },
                                                inputProps: {
                                                    multiline: true,
                                                    rows: 5
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                        className: classes.justifyContentBetween,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                                                control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
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
                                                label: "I'm not a robot"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                color: "rose",
                                                className: classes.pullRight,
                                                children: "Send Message"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/sectionsPageStyle.js

const sectionsPageStyle = {
    main: {
        ...nextjs_material_kit_pro/* main */.DH
    }
};
/* harmony default export */ const pages_sectionsPageStyle = (sectionsPageStyle);

;// CONCATENATED MODULE: ./pages/sections.js


// @material-ui/core components

// @material-ui/icons
// core components


// sections of this Page









const sections_useStyles = (0,styles_.makeStyles)(pages_sectionsPageStyle);
function SectionsPage() {
    external_react_default().useEffect(()=>{
        var href = window.location.href.substring(window.location.href.lastIndexOf("#") + 1);
        if (window.location.href.lastIndexOf("#") > 0) {
            document.getElementById(href).scrollIntoView();
        }
        window.addEventListener("scroll", updateView);
        updateView();
        return function cleanup() {
            window.removeEventListener("scroll", updateView);
        };
    });
    const updateView = ()=>{
        var contentSections = document.getElementsByClassName("cd-section");
        var navigationItems = document.getElementById("cd-vertical-nav").getElementsByTagName("a");
        for(let i = 0; i < contentSections.length; i++){
            var activeSection = parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
            if (contentSections[i].offsetTop - window.innerHeight / 2 < window.pageYOffset && contentSections[i].offsetTop + contentSections[i].scrollHeight - window.innerHeight / 2 > window.pageYOffset) {
                navigationItems[activeSection].classList.add("is-selected");
            } else {
                navigationItems[activeSection].classList.remove("is-selected");
            }
        }
    };
    const easeInOutQuad = (t, b, c, d)=>{
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    const smoothScroll = (target)=>{
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
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
    const classes = sections_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                color: "info",
                brand: "NextJS Material Kit PRO",
                links: /*#__PURE__*/ jsx_runtime_.jsx(HeaderLinks/* default */.Z, {
                    dropdownHoverColor: "info"
                }),
                fixed: true
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionHeaders, {
                        id: "headers"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionFeatures, {
                        id: "features"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionBlogs, {
                        id: "blogs"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionTeams, {
                        id: "teams"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionProjects, {
                        id: "projects"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionPricing, {
                        id: "pricing"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionTestimonials, {
                        id: "testimonials"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SectionContacts, {
                        id: "contacts"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                id: "cd-vertical-nav",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#headers",
                                "data-number": "1",
                                className: "is-selected",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("headers");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Headers"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#features",
                                "data-number": "2",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("features");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Features"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#blogs",
                                "data-number": "3",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("blogs");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Blogs"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#teams",
                                "data-number": "4",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("teams");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Teams"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#projects",
                                "data-number": "5",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("projects");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Projects"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#pricing",
                                "data-number": "6",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("pricing");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Pricing"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#testimonials",
                                "data-number": "7",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("testimonials");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Testimonials"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#contacts",
                                "data-number": "8",
                                className: "",
                                onClick: (e)=>{
                                    var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
                                    if (isMobile) {
                                    // if we are on mobile device the scroll into view will be managed by the browser
                                    } else {
                                        e.preventDefault();
                                        smoothScroll("contacts");
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-dot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "cd-label",
                                        children: "Contact Us"
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

/***/ 472:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Business");

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

/***/ 752:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Code");

/***/ }),

/***/ 2857:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ 7556:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Dns");

/***/ }),

/***/ 5615:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Error");

/***/ }),

/***/ 952:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Fingerprint");

/***/ }),

/***/ 8495:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Group");

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

/***/ 9069:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Phone");

/***/ }),

/***/ 1418:
/***/ ((module) => {

module.exports = require("@material-ui/icons/PinDrop");

/***/ }),

/***/ 4306:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Share");

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

/***/ 1080:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Timeline");

/***/ }),

/***/ 9321:
/***/ ((module) => {

module.exports = require("@material-ui/icons/TrendingUp");

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

/***/ 7225:
/***/ ((module) => {

module.exports = require("@material-ui/icons/WatchLater");

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

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

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
var __webpack_exports__ = __webpack_require__.X(0, [2952,1270,1664,1194,7012,9628,7817,9861,3044,8864,4945,5124,6233,686,516,4672,1949,4951], () => (__webpack_exec__(7491)));
module.exports = __webpack_exports__;

})();