"use strict";
(() => {
var exports = {};
exports.id = 7647;
exports.ids = [7647];
exports.modules = {

/***/ 7984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogPostPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(5031);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(6256);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@material-ui/icons/FormatAlignLeft"
var FormatAlignLeft_ = __webpack_require__(7789);
var FormatAlignLeft_default = /*#__PURE__*/__webpack_require__.n(FormatAlignLeft_);
// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__(9899);
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);
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
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/Typography/Quote.js
var Quote = __webpack_require__(1394);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/imagesStyles.js
var imagesStyles = __webpack_require__(3055);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionTextStyle.js


const sectionTextStyle = {
    container: nextjs_material_kit_pro/* container */.nC,
    title: nextjs_material_kit_pro/* title */.TN,
    section: {
        paddingBottom: "0",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        padding: "70px 0",
        "& p": {
            fontSize: "1.188rem",
            lineHeight: "1.5em",
            color: nextjs_material_kit_pro/* grayColor.15 */.X_[15],
            marginBottom: "30px"
        }
    },
    quoteText: {
        fontSize: "1.5rem !important"
    },
    ...imagesStyles/* default */.Z
};
/* harmony default export */ const blogPostSections_sectionTextStyle = (sectionTextStyle);

;// CONCATENATED MODULE: ./pages-sections/blog-post/SectionText.js


// nodejs library that concatenates classes

// @material-ui/core components

// @material-ui/icons



// core components

const useStyles = (0,styles_.makeStyles)(blogPostSections_sectionTextStyle);
function SectionText() {
    const classes = useStyles();
    const imgClasses = external_classnames_default()(classes.imgRaised, classes.imgRounded, classes.imgFluid);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
            justify: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 8,
                    md: 8,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: classes.title,
                            children: "The Castle Looks Different at Night..."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn",
                                "'",
                                "t scroll to get here. Add a button if you want the user to see more. We are here to make life better.",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "And now I look and look around and there’s so many Kanyes I",
                                "'",
                                "ve been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Quote/* default */.Z, {
                            textClassName: classes.quoteText,
                            text: "“And thank you for turning my personal jean jacket into a couture piece.”",
                            author: "Kanye West, Producer."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 10,
                    md: 10,
                    className: classes.section,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 4,
                                md: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/img/examples/blog4.jpg",
                                    alt: "...",
                                    className: imgClasses
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 4,
                                md: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/img/examples/blog3.jpg",
                                    alt: "...",
                                    className: imgClasses
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 4,
                                md: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/img/examples/blog1.jpg",
                                    alt: "...",
                                    className: imgClasses
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                    xs: 12,
                    sm: 8,
                    md: 8,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: classes.title,
                            children: "Rest of the Story:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "We are here to make life better. And now I look and look around and there’s so many Kanyes I",
                                "'",
                                "ve been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece.",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "I speak yell scream directly at the old guard on behalf of the future. daytime All respect prayers and love to Phife’s family Thank you for so much inspiration."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "Thank you Anna for the invite thank you to the whole Vogue team And I love you like Kanye loves Kanye Pand Pand Panda I",
                                "'",
                                "ve been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...The Pablo pop up was almost a pop up of influence. All respect prayers and love to Phife’s family Thank you for so much inspiration daytime I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I",
                                "'",
                                "m so proud of the nr #1 song in the country. Panda! Good music 2016!"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "I love this new Ferg album! The Life of Pablo is now available for purchase I have a dream. Thank you to everybody who made The Life of Pablo the number 1 album in the world! I",
                                "'",
                                "m so proud of the nr #1 song in the country. Panda! Good music 2016!"
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/Badge/Badge.js + 1 modules
var Badge = __webpack_require__(4672);
// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__(7403);
// EXTERNAL MODULE: ./components/Card/CardAvatar.js + 1 modules
var CardAvatar = __webpack_require__(686);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionBlogInfoStyle.js

const sectionBlogInfoStyle = {
    section: {
        paddingTop: "30px",
        paddingBottom: "0",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        padding: "70px 0"
    },
    blogTags: {
        marginTop: "8px"
    },
    buttons: {
        marginTop: "0",
        marginBottom: "0",
        float: "right !important"
    },
    card: {
        marginTop: "0",
        textAlign: "left"
    },
    cardTitle: nextjs_material_kit_pro/* cardTitle */.X5,
    description: {
        fontSize: "1rem",
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    },
    pullRight: {
        marginTop: "25px",
        float: "right"
    }
};
/* harmony default export */ const blogPostSections_sectionBlogInfoStyle = (sectionBlogInfoStyle);

;// CONCATENATED MODULE: ./pages-sections/blog-post/SectionBlogInfo.js


// @material-ui/core components

// @material-ui/icons
// core components







const SectionBlogInfo_useStyles = (0,styles_.makeStyles)(blogPostSections_sectionBlogInfoStyle);
function SectionBlogInfo() {
    const classes = SectionBlogInfo_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
            justify: "center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                xs: 12,
                sm: 10,
                md: 8,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: classes.blogTags,
                                    children: [
                                        "Tags:",
                                        /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                                            color: "primary",
                                            children: "Photography"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                                            color: "primary",
                                            children: "Stories"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                                            color: "primary",
                                            children: "Castle"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                xs: 12,
                                sm: 6,
                                md: 6,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                        color: "google",
                                        round: true,
                                        className: classes.buttons,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-google"
                                            }),
                                            " 232"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                        color: "twitter",
                                        round: true,
                                        className: classes.buttons,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-twitter"
                                            }),
                                            " 910"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                        color: "facebook",
                                        round: true,
                                        className: classes.buttons,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fab fa-facebook-square"
                                            }),
                                            " 872"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                        plain: true,
                        profile: true,
                        className: classes.card,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 2,
                                    md: 2,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CardAvatar/* default */.Z, {
                                        plain: true,
                                        profile: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/faces/card-profile1-square.jpg",
                                            alt: "..."
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 8,
                                    md: 8,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: classes.cardTitle,
                                            children: "Alec Thompson"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: classes.description,
                                            children: [
                                                "I",
                                                "'",
                                                "ve been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...I like good music from Youtube."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 2,
                                    md: 2,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        round: true,
                                        className: classes.pullRight,
                                        children: "Follow"
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

// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__(9641);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@material-ui/icons/Reply"
var Reply_ = __webpack_require__(5473);
var Reply_default = /*#__PURE__*/__webpack_require__.n(Reply_);
// EXTERNAL MODULE: ./components/Media/Media.js + 1 modules
var Media = __webpack_require__(1054);
// EXTERNAL MODULE: ./components/CustomInput/CustomInput.js + 1 modules
var CustomInput = __webpack_require__(7817);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro/tooltipsStyle.js
var tooltipsStyle = __webpack_require__(4016);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionCommentsStyle.js


const sectionCommentsStyle = {
    ...tooltipsStyle/* default */.Z,
    section: {
        backgroundposition: "50%",
        backgroundSize: "cover",
        padding: "70px 0"
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        marginBottom: "30px",
        textAlign: "center"
    },
    footerButtons: {
        float: "right"
    },
    footerIcons: {
        width: "1.1rem",
        height: "1.1rem",
        position: "relative",
        display: "inline-block",
        top: "0",
        marginTop: "-1em",
        marginBottom: "-1em",
        marginRight: "3px",
        verticalAlign: "middle"
    },
    color555: {
        "&,& *": {
            color: nextjs_material_kit_pro/* grayColor.15 */.X_[15] + " !important"
        }
    }
};
/* harmony default export */ const blogPostSections_sectionCommentsStyle = (sectionCommentsStyle);

;// CONCATENATED MODULE: ./pages-sections/blog-post/SectionComments.js


// @material-ui/core components


// @material-ui/icons


// core components






const SectionComments_useStyles = (0,styles_.makeStyles)(blogPostSections_sectionCommentsStyle);
function SectionComments() {
    const classes = SectionComments_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
            justify: "center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                xs: 12,
                sm: 10,
                md: 8,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: classes.title,
                                children: "3 Comments"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Media/* default */.Z, {
                                avatar: "/img/faces/card-profile4-square.jpg",
                                title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        "Tina Andrew ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "\xb7 7 minutes ago"
                                        })
                                    ]
                                }),
                                body: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: classes.color555,
                                    children: [
                                        "Chance too good. God level bars. I",
                                        "'",
                                        "m so proud of @LifeOfDesiigner #1 song in the country. Panda! Don",
                                        "'",
                                        "t be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!"
                                    ]
                                }),
                                footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                            id: "tooltip-tina",
                                            title: "Reply to comment",
                                            placement: "top",
                                            classes: {
                                                tooltip: classes.tooltip
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                color: "primary",
                                                simple: true,
                                                className: classes.footerButtons,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {
                                                        className: classes.footerIcons
                                                    }),
                                                    " Reply"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            color: "danger",
                                            simple: true,
                                            className: classes.footerButtons,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {
                                                    className: classes.footerIcons
                                                }),
                                                " 243"
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Media/* default */.Z, {
                                avatar: "/img/faces/card-profile1-square.jpg",
                                title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        "John Camber ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: "\xb7 Yesterday"
                                        })
                                    ]
                                }),
                                body: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: classes.color555,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Don",
                                                "'",
                                                "t forget, You",
                                                "'",
                                                "re Awesome!"
                                            ]
                                        })
                                    ]
                                }),
                                footer: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                            id: "tooltip-john",
                                            title: "Reply to comment",
                                            placement: "top",
                                            classes: {
                                                tooltip: classes.tooltip
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                color: "primary",
                                                simple: true,
                                                className: classes.footerButtons,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {
                                                        className: classes.footerIcons
                                                    }),
                                                    " Reply"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                            link: true,
                                            className: classes.footerButtons,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {
                                                    className: classes.footerIcons
                                                }),
                                                " 25"
                                            ]
                                        })
                                    ]
                                }),
                                innerMedias: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Media/* default */.Z, {
                                        avatar: "/img/faces/card-profile4-square.jpg",
                                        title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                "Tina Andrew ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                    children: "\xb7 12 Hours Ago"
                                                })
                                            ]
                                        }),
                                        body: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: classes.color555,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news."
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        "Don",
                                                        "'",
                                                        "t forget, You",
                                                        "'",
                                                        "re Awesome!"
                                                    ]
                                                })
                                            ]
                                        }),
                                        footer: /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                            id: "tooltip-tina2",
                                            title: "Reply to comment",
                                            placement: "top",
                                            classes: {
                                                tooltip: classes.tooltip
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                                color: "primary",
                                                simple: true,
                                                className: classes.footerButtons,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Reply_default()), {
                                                        className: classes.footerIcons
                                                    }),
                                                    " Reply"
                                                ]
                                            })
                                        })
                                    }, Date.now())
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: classes.title,
                        children: "Post your comment"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Media/* default */.Z, {
                        avatar: "/img/faces/card-profile6-square.jpg",
                        body: /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                            labelText: " Write some nice stuff or nothing...",
                            id: "nice",
                            formControlProps: {
                                fullWidth: true
                            },
                            inputProps: {
                                multiline: true,
                                rows: 5
                            }
                        }),
                        footer: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            color: "primary",
                            round: true,
                            className: classes.footerButtons,
                            children: "Post comment"
                        })
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: external "@material-ui/icons/TrendingUp"
var TrendingUp_ = __webpack_require__(9321);
var TrendingUp_default = /*#__PURE__*/__webpack_require__.n(TrendingUp_);
// EXTERNAL MODULE: ./components/Card/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(9861);
// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__(6721);
// EXTERNAL MODULE: ./components/Typography/Info.js
var Info = __webpack_require__(7479);
// EXTERNAL MODULE: ./components/Typography/Success.js
var Success = __webpack_require__(3389);
// EXTERNAL MODULE: ./components/Typography/Danger.js
var Danger = __webpack_require__(1903);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionSimilarStoriesStyle.js

const sectionSimilarStoriesStyle = {
    container: nextjs_material_kit_pro/* container */.nC,
    title: nextjs_material_kit_pro/* title */.TN,
    cardTitle: nextjs_material_kit_pro/* cardTitle */.X5,
    coloredShadow: nextjs_material_kit_pro/* coloredShadow */.DF,
    textCenter: {
        textAlign: "center"
    },
    section: {
        backgroundPosition: "50%",
        backgroundSize: "cover",
        padding: "70px 0"
    },
    description: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    }
};
/* harmony default export */ const blogPostSections_sectionSimilarStoriesStyle = (sectionSimilarStoriesStyle);

;// CONCATENATED MODULE: ./pages-sections/blog-post/SectionSimilarStories.js


// @material-ui/core components

// @material-ui/icons

// core components









const SectionSimilarStories_useStyles = (0,styles_.makeStyles)(blogPostSections_sectionSimilarStoriesStyle);
function SectionSimilarStories() {
    const classes = SectionSimilarStories_useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.section,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classes.container,
            children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                    md: 12,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: classes.title + " " + classes.textCenter,
                            children: "Similar Stories"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridContainer/* default */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(GridItem/* default */.Z, {
                                    xs: 12,
                                    sm: 4,
                                    md: 4,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
                                        blog: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                image: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
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
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Info/* default */.Z, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "ENTERPRISE"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: classes.cardTitle,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Autodesk looks to future of 3D printing with Project Escher"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.description,
                                                        children: [
                                                            "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                children: " Read More "
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
                                        blog: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                image: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
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
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardBody/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Success/* default */.Z, {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "STARTUPS"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: classes.cardTitle,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "Lyft launching cross-platform service this week"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.description,
                                                        children: [
                                                            "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                children: " Read More "
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
                                        blog: true,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CardHeader/* default */.Z, {
                                                image: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pablo",
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
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Danger/* default */.Z, {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((TrendingUp_default()), {}),
                                                                " ENTERPRISE"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: classes.cardTitle,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "#pablo",
                                                            children: "6 insights into the French Fashion landscape"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: classes.description,
                                                        children: [
                                                            "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses.",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#pablo",
                                                                children: " Read More "
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
    });
};

;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/pages/blogPostPageStyle.js

const blogPostPageStyle = {
    container: {
        ...nextjs_material_kit_pro/* container */.nC,
        zIndex: "2"
    },
    textCenter: {
        textAlign: "center"
    },
    title: {
        ...nextjs_material_kit_pro/* title */.TN,
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    subtitle: {
        color: nextjs_material_kit_pro/* whiteColor */.zQ
    },
    main: {
        ...nextjs_material_kit_pro/* main */.DH,
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
/* harmony default export */ const pages_blogPostPageStyle = (blogPostPageStyle);

;// CONCATENATED MODULE: ./pages/blog-post.js
/*eslint-disable*/ 

// nodejs library to set properties for components

// @material-ui/core components



// @material-ui/icons


// core components







// sections for this page





const blog_post_useStyles = (0,styles_.makeStyles)(pages_blogPostPageStyle);
function BlogPostPage() {
    external_react_default().useEffect(()=>{
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = blog_post_useStyles();
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
                image: "/img/bg5.jpg",
                filter: "dark",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: classes.container,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridContainer/* default */.Z, {
                        justify: "center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem/* default */.Z, {
                            md: 8,
                            className: classes.textCenter,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: classes.title,
                                    children: "How We Built the Most Successful Castle Ever"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: classes.subtitle,
                                    children: "The last 48 hours of my life were total madness. This is what I did."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                    color: "rose",
                                    size: "lg",
                                    round: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((FormatAlignLeft_default()), {}),
                                        " Read Article"
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.main,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionText, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionBlogInfo, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionComments, {})
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionSimilarStories, {}),
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
                                            href: "https://www.creative-tim.com/?ref=njsmkp-blog-post",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "Creative Tim"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/presentation?ref=njsmkp-blog-post",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "About us"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://blog.creative-tim.com/?ref=njsmkp-blog-post",
                                            target: "_blank",
                                            className: classes.block,
                                            children: "Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        className: classes.inlineBlock,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.creative-tim.com/license?ref=njsmkp-blog-post",
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
                                    href: "https://www.creative-tim.com?ref=njsmkp-blog-post",
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

/***/ 9899:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ 952:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Fingerprint");

/***/ }),

/***/ 7789:
/***/ ((module) => {

module.exports = require("@material-ui/icons/FormatAlignLeft");

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

/***/ 5473:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Reply");

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

/***/ 9321:
/***/ ((module) => {

module.exports = require("@material-ui/icons/TrendingUp");

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
var __webpack_exports__ = __webpack_require__.X(0, [2952,1270,1664,1194,7012,6103,9628,1003,7817,9861,3055,5124,686,516,4672,9204], () => (__webpack_exec__(7984)));
module.exports = __webpack_exports__;

})();