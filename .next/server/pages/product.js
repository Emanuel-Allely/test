"use strict";
(() => {
var exports = {};
exports.id = 5345;
exports.ids = [5345];
exports.modules = {

/***/ 1034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: external "react-image-gallery"
const external_react_image_gallery_namespaceObject = require("react-image-gallery");
var external_react_image_gallery_default = /*#__PURE__*/__webpack_require__.n(external_react_image_gallery_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__(5811);
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);
// EXTERNAL MODULE: external "@material-ui/core/Select"
var Select_ = __webpack_require__(4614);
var Select_default = /*#__PURE__*/__webpack_require__.n(Select_);
// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__(8250);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(5031);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(6256);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@material-ui/icons/ShoppingCart"
var ShoppingCart_ = __webpack_require__(9637);
var ShoppingCart_default = /*#__PURE__*/__webpack_require__.n(ShoppingCart_);
;// CONCATENATED MODULE: external "@material-ui/icons/LocalShipping"
const LocalShipping_namespaceObject = require("@material-ui/icons/LocalShipping");
var LocalShipping_default = /*#__PURE__*/__webpack_require__.n(LocalShipping_namespaceObject);
// EXTERNAL MODULE: external "@material-ui/icons/VerifiedUser"
var VerifiedUser_ = __webpack_require__(8139);
var VerifiedUser_default = /*#__PURE__*/__webpack_require__.n(VerifiedUser_);
// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__(9899);
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);
// EXTERNAL MODULE: ./components/Header/Header.js + 1 modules
var Header = __webpack_require__(9247);
// EXTERNAL MODULE: ./components/Header/HeaderLinks.js
var HeaderLinks = __webpack_require__(5017);
// EXTERNAL MODULE: ./components/Parallax/Parallax.js + 1 modules
var Parallax = __webpack_require__(1003);
// EXTERNAL MODULE: ./components/Grid/GridContainer.js
var GridContainer = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Grid/GridItem.js
var GridItem = __webpack_require__(6680);
// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__(6103);
// EXTERNAL MODULE: ./components/CustomButtons/Button.js + 1 modules
var Button = __webpack_require__(6302);
// EXTERNAL MODULE: ./components/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(7371);
// EXTERNAL MODULE: ./components/InfoArea/InfoArea.js + 1 modules
var InfoArea = __webpack_require__(3044);
// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__(7403);
// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(9861);
// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__(6721);
// EXTERNAL MODULE: ./components/Card/CardFooter.js + 1 modules
var CardFooter = __webpack_require__(8864);
// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__(9641);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/tooltipsStyle.js
var tooltipsStyle = __webpack_require__(4016);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/imagesStyles.js
var imagesStyles = __webpack_require__(3055);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/customSelectStyle.js
var customSelectStyle = __webpack_require__(7589);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/productStyle.js




const productStyle = {
    mlAuto: nextjs_material_kit_pro/* mlAuto */.hU,
    main: nextjs_material_kit_pro/* main */.DH,
    ...imagesStyles/* default */.Z,
    ...customSelectStyle/* default */.Z,
    ...tooltipsStyle/* default */.Z,
    container: {
        ...nextjs_material_kit_pro/* container */.nC,
        zIndex: 2
    },
    mainRaised: {
        ...nextjs_material_kit_pro/* mainRaised */._p
    },
    section: {
        ...nextjs_material_kit_pro/* section */.qi,
        padding: "70px 0px"
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        marginBottom: 0
    },
    sectionGray: {
        background: nextjs_material_kit_pro/* grayColor.14 */.X_[14]
    },
    mainPrice: {
        margin: "10px 0px 25px"
    },
    textCenter: {
        textAlign: "center!important"
    },
    features: {
        paddingTop: "30px"
    },
    productPage: {
        backgroundColor: nextjs_material_kit_pro/* grayColor.2 */.X_[2],
        "& $mainRaised": {
            margin: "-40vh 0 0",
            padding: "40px"
        },
        "& .image-gallery-slide img": {
            borderRadius: "3px",
            maxWidth: "300px",
            height: "auto"
        },
        "& .image-gallery-swipe": {
            margin: "30px 0px",
            overflow: "hidden",
            width: "100%",
            height: "auto",
            textAlign: "center"
        },
        "& .image-gallery-thumbnails > .image-gallery-thumbnails-container .image-gallery-thumbnail": {
            "&.active > .image-gallery-thumbnail-inner": {
                opacity: "1",
                borderColor: nextjs_material_kit_pro/* grayColor.6 */.X_[6]
            },
            "& > .image-gallery-thumbnail-inner": {
                width: "80%",
                maxWidth: "85px",
                margin: "0 auto",
                padding: "8px",
                display: "block",
                border: "1px solid transparent",
                background: "transparent",
                borderRadius: "3px",
                opacity: ".8"
            },
            "& > .image-gallery-thumbnail-inner img": {
                borderRadius: "3px",
                width: "100%",
                height: "auto",
                textAlign: "center"
            }
        }
    },
    titleRow: {
        marginTop: "-8vh"
    },
    floatRight: {
        float: "right!important"
    },
    pageHeader: {
        minHeight: "60vh",
        maxHeight: "600px",
        height: "auto",
        backgroundPosition: "top center"
    },
    relatedProducts: {
        marginTop: "50px",
        "& $title": {
            marginBottom: "80px"
        }
    },
    pickSize: {
        marginTop: "50px"
    },
    pullRight: {
        float: "right"
    },
    cardCategory: {
        textAlign: "center",
        marginTop: "10px"
    },
    cardTitle: {
        ...nextjs_material_kit_pro/* cardTitle */.X5,
        textAlign: "center"
    },
    cardDescription: {
        textAlign: "center",
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    },
    textRose: {
        color: nextjs_material_kit_pro/* roseColor.0 */.An[0]
    },
    justifyContentBetween: {
        justifyContent: "space-between!important"
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
        top: "3px",
        width: "18px",
        height: "18px",
        position: "relative"
    }
};
/* harmony default export */ const pages_productStyle = (productStyle);

;// CONCATENATED MODULE: ./pages/product.js
/*eslint-disable*/ 

// nodejs library that concatenates classes

// react component used to create nice image meadia player

// @material-ui/core components






// @material-ui/icons




// core components















const useStyles = (0,styles_.makeStyles)(pages_productStyle);
function ProductPage() {
    const [colorSelect, setColorSelect] = external_react_default().useState("0");
    const [sizeSelect, setSizeSelect] = external_react_default().useState("0");
    const classes = useStyles();
    const images = [
        {
            original: "/img/examples/product3.jpg",
            thumbnail: "/img/examples/product3.jpg"
        },
        {
            original: "/img/examples/product4.jpg",
            thumbnail: "/img/examples/product4.jpg"
        },
        {
            original: "/img/examples/product1.jpg",
            thumbnail: "/img/examples/product1.jpg"
        },
        {
            original: "/img/examples/product2.jpg",
            thumbnail: "/img/examples/product2.jpg"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.productPage,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                brand: "NextJS Material Kit PRO",
                links: /*#__PURE__*/ jsx_runtime_.jsx(HeaderLinks/* default */.Z, {
                    dropdownHoverColor: "rose"
                }),
                fixed: true,
                color: "transparent",
                changeColorOnScroll: {
                    height: 100,
                    color: "rose"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Parallax/* default */.Z, {
                image: "/img/bg6.jpg",
                filter: "rose",
                className: classes.pageHeader,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        className: classes.titleRow,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                            md: 4,
                            className: classes.mlAuto,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                color: "white",
                                className: classes.floatRight,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ShoppingCart_default()), {}),
                                    " 0 items"
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()(classes.section, classes.sectionGray),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: external_classnames_default()(classes.main, classes.mainRaised),
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 6,
                                        sm: 6,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_image_gallery_default()), {
                                            showFullscreenButton: false,
                                            showPlayButton: false,
                                            startIndex: 3,
                                            items: images,
                                            showThumbnails: true,
                                            renderLeftNav: (onClick, disabled)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "image-gallery-left-nav",
                                                    disabled: disabled,
                                                    onClick: onClick
                                                });
                                            },
                                            renderRightNav: (onClick, disabled)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "image-gallery-right-nav",
                                                    disabled: disabled,
                                                    onClick: onClick
                                                });
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                        md: 6,
                                        sm: 6,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: classes.title,
                                                children: "Becky Silk Blazer"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: classes.mainPrice,
                                                children: "$335"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Accordion/* default */.Z, {
                                                active: 0,
                                                activeColor: "rose",
                                                collapses: [
                                                    {
                                                        title: "Description",
                                                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Eres",
                                                                "'",
                                                                " daring ",
                                                                "'",
                                                                "Grigri Fortune",
                                                                "'",
                                                                " swimsuit has the fit and coverage of a bikini in a one-piece silhouette. This fuchsia style is crafted from the label",
                                                                "'",
                                                                "s sculpting peau douce fabric and has flattering cutouts through the torso and back. Wear yours with mirrored sunglasses on vacation."
                                                            ]
                                                        })
                                                    },
                                                    {
                                                        title: "Designer Information",
                                                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It girl style. Minkoff burst on the fashion scene with her best-selling ",
                                                                "'",
                                                                "Morning After Bag",
                                                                "'",
                                                                " and later expanded her offering with the Rebecca Minkoff Collection - a range of luxe city staples with a ",
                                                                '"',
                                                                "downtown romantic",
                                                                '"',
                                                                " theme."
                                                            ]
                                                        })
                                                    },
                                                    {
                                                        title: "Details and Care",
                                                        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "Storm and midnight-blue stretch cotton-blend"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal pocket"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "Two button fastening"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "84% cotton, 14% nylon, 2% elastane"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: "Dry clean"
                                                                })
                                                            ]
                                                        })
                                                    }
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                                className: classes.pickSize,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                        md: 6,
                                                        sm: 6,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                children: "Select color"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                                                                fullWidth: true,
                                                                className: classes.selectFormControl,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                                    MenuProps: {
                                                                        className: classes.selectMenu
                                                                    },
                                                                    classes: {
                                                                        select: classes.select
                                                                    },
                                                                    value: colorSelect,
                                                                    onChange: (event)=>setColorSelect(event.target.value),
                                                                    inputProps: {
                                                                        name: "colorSelect",
                                                                        id: "color-select"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            classes: {
                                                                                root: classes.selectMenuItem,
                                                                                selected: classes.selectMenuItemSelected
                                                                            },
                                                                            value: "0",
                                                                            children: "Rose"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            classes: {
                                                                                root: classes.selectMenuItem,
                                                                                selected: classes.selectMenuItemSelected
                                                                            },
                                                                            value: "1",
                                                                            children: "Gray"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            classes: {
                                                                                root: classes.selectMenuItem,
                                                                                selected: classes.selectMenuItemSelected
                                                                            },
                                                                            value: "2",
                                                                            children: "White"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                                        md: 6,
                                                        sm: 6,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                children: "Select size"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((FormControl_default()), {
                                                                fullWidth: true,
                                                                className: classes.selectFormControl,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Select_default()), {
                                                                    MenuProps: {
                                                                        className: classes.selectMenu
                                                                    },
                                                                    classes: {
                                                                        select: classes.select
                                                                    },
                                                                    value: sizeSelect,
                                                                    onChange: (event)=>setSizeSelect(event.target.value),
                                                                    inputProps: {
                                                                        name: "sizeSelect",
                                                                        id: "size-select"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            classes: {
                                                                                root: classes.selectMenuItem,
                                                                                selected: classes.selectMenuItemSelected
                                                                            },
                                                                            value: "0",
                                                                            children: "Small"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            classes: {
                                                                                root: classes.selectMenuItem,
                                                                                selected: classes.selectMenuItemSelected
                                                                            },
                                                                            value: "1",
                                                                            children: "Medium"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                                            classes: {
                                                                                root: classes.selectMenuItem,
                                                                                selected: classes.selectMenuItemSelected
                                                                            },
                                                                            value: "2",
                                                                            children: "Large"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                                                className: classes.pullRight,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                    round: true,
                                                    color: "rose",
                                                    children: [
                                                        "Add to Cart \xa0 ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx((ShoppingCart_default()), {})
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: external_classnames_default()(classes.features, classes.textCenter),
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 4,
                                        sm: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            title: "2 Days Delivery",
                                            description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                            icon: (LocalShipping_default()),
                                            iconColor: "info",
                                            vertical: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 4,
                                        sm: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            title: "Refundable Policy",
                                            description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                            icon: (VerifiedUser_default()),
                                            iconColor: "success",
                                            vertical: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                        md: 4,
                                        sm: 4,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(InfoArea/* default */.Z, {
                                            title: "Popular Item",
                                            description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
                                            icon: (Favorite_default()),
                                            iconColor: "rose",
                                            vertical: true
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: classes.relatedProducts,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: external_classnames_default()(classes.title, classes.textCenter),
                                    children: "You may also be interested in:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                            sm: 6,
                                            md: 3,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                product: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                        image: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/card-product1.jpg",
                                                                alt: "cardProduct"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: external_classnames_default()(classes.cardCategory, classes.textRose),
                                                                children: "Trending"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: "Dolce & Gabbana"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: classes.cardDescription,
                                                                children: [
                                                                    "Dolce & Gabbana",
                                                                    "'",
                                                                    "s ",
                                                                    "'",
                                                                    "Greta",
                                                                    "'",
                                                                    " tote has been crafted in Italy from hard-wearing red textured-leather."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                        className: classes.justifyContentBetween,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.price,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    children: "$1,459"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.stats,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                                    id: "tooltip-top",
                                                                    title: "Save to Wishlist",
                                                                    placement: "top",
                                                                    classes: {
                                                                        tooltip: classes.tooltip
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        color: "rose",
                                                                        simple: true,
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
                                            sm: 6,
                                            md: 3,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                product: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                        image: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/card-product3.jpg",
                                                                alt: "cardProduct3"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: classes.cardCategory,
                                                                children: "Popular"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: "Balmain"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: classes.cardDescription,
                                                                children: [
                                                                    "Balmain",
                                                                    "'",
                                                                    "s mid-rise skinny jeans are cut with stretch to ensure they retain their second-skin fit but move comfortably."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                        className: classes.justifyContentBetween,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.price,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    children: "$459"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.stats,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                                    id: "tooltip-top",
                                                                    title: "Save to Wishlist",
                                                                    placement: "top",
                                                                    classes: {
                                                                        tooltip: classes.tooltip
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        link: true,
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
                                            sm: 6,
                                            md: 3,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                product: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                        image: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/card-product4.jpg",
                                                                alt: "cardProduct4"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: classes.cardCategory,
                                                                children: "Popular"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: "Balenciaga"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: classes.cardDescription,
                                                                children: [
                                                                    "Balenciaga",
                                                                    "'",
                                                                    "s black textured-leather wallet is finished with the label",
                                                                    "'",
                                                                    "s iconic ",
                                                                    "'",
                                                                    "Giant",
                                                                    "'",
                                                                    " studs. This is where you can..."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                        className: classes.justifyContentBetween,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.price,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    children: "$590"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.stats,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                                    id: "tooltip-top",
                                                                    title: "Save to Wishlist",
                                                                    placement: "top",
                                                                    classes: {
                                                                        tooltip: classes.tooltip
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        color: "rose",
                                                                        simple: true,
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
                                            sm: 6,
                                            md: 3,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                                product: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(CardHeader/* default */.Z, {
                                                        image: true,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/examples/card-product2.jpg",
                                                                alt: "cardProduct2"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: external_classnames_default()(classes.cardCategory, classes.textRose),
                                                                children: "Trending"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: classes.cardTitle,
                                                                children: "Dolce & Gabbana"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: classes.cardDescription,
                                                                children: [
                                                                    "Dolce & Gabbana",
                                                                    "'",
                                                                    "s ",
                                                                    "'",
                                                                    "Greta",
                                                                    "'",
                                                                    " tote has been crafted in Italy from hard-wearing red textured-leather."
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardFooter/* default */.Z, {
                                                        className: classes.justifyContentBetween,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.price,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    children: "$1,459"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: classes.stats,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                                                    id: "tooltip-top",
                                                                    title: "Save to Wishlist",
                                                                    placement: "top",
                                                                    classes: {
                                                                        tooltip: classes.tooltip
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                                        justIcon: true,
                                                                        link: true,
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
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                // theme="dark"
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
                                            href: "https://www.creative-tim.com/?ref=njsmkp-pricing",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "Creative Tim"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/presentation?ref=njsmkp-pricing",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "About us"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "http://blog.creative-tim.com/?ref=njsmkp-pricing",
                                            className: classes.block,
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/license?ref=njsmkp-pricing",
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
                                    href: "https://www.creative-tim.com?ref=njsmkp-pricing",
                                    target: "_blank",
                                    className: classes.aClasses,
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
var __webpack_exports__ = __webpack_require__.X(0, [2952,1270,1664,1194,7012,6103,9628,1003,9861,3044,3055,8864,7371,7589], () => (__webpack_exec__(1034)));
module.exports = __webpack_exports__;

})();