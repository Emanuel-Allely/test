"use strict";
exports.id = 7371;
exports.ids = [7371];
exports.modules = {

/***/ 7371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CustomAccordion)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/Accordion"
var Accordion_ = __webpack_require__(3700);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
// EXTERNAL MODULE: external "@material-ui/core/AccordionSummary"
var AccordionSummary_ = __webpack_require__(1467);
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_);
// EXTERNAL MODULE: external "@material-ui/core/AccordionDetails"
var AccordionDetails_ = __webpack_require__(362);
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_);
// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__(7806);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/accordionStyle.js

const accordionStyle = (theme)=>({
        root: {
            flexGrow: 1,
            marginBottom: "20px"
        },
        accordion: {
            boxShadow: "none",
            "&:before": {
                display: "none !important"
            }
        },
        accordionExpanded: {
            margin: "0 !important"
        },
        accordionSummary: {
            minHeight: "auto !important",
            backgroundColor: "transparent",
            borderBottom: "1px solid " + nextjs_material_kit_pro/* grayColor.6 */.X_[6],
            padding: "25px 10px 5px 0px",
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px",
            color: nextjs_material_kit_pro/* grayColor.1 */.X_[1]
        },
        primaryExpansionPanelSummary: {
            "&:hover": {
                color: nextjs_material_kit_pro/* primaryColor.0 */.lr[0]
            }
        },
        secondaryExpansionPanelSummary: {
            "&:hover": {
                color: nextjs_material_kit_pro/* secondaryColor.0 */.dY[0]
            }
        },
        warningExpansionPanelSummary: {
            "&:hover": {
                color: nextjs_material_kit_pro/* warningColor.0 */.MA[0]
            }
        },
        dangerExpansionPanelSummary: {
            "&:hover": {
                color: nextjs_material_kit_pro/* dangerColor.0 */.E7[0]
            }
        },
        successExpansionPanelSummary: {
            "&:hover": {
                color: nextjs_material_kit_pro/* successColor.0 */.nq[0]
            }
        },
        infoExpansionPanelSummary: {
            "&:hover": {
                color: nextjs_material_kit_pro/* infoColor.0 */.bE[0]
            }
        },
        roseExpansionPanelSummary: {
            "&:hover": {
                color: nextjs_material_kit_pro/* roseColor.0 */.An[0]
            }
        },
        accordionSummaryExpaned: {
            "& $accordionSummaryExpandIcon": {
                [theme.breakpoints.up("md")]: {
                    top: "auto !important"
                },
                transform: "rotate(180deg)",
                [theme.breakpoints.down("sm")]: {
                    top: "10px !important"
                },
                // some jss/css to make the cards look a bit better on Internet Explorer
                "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
                    display: "inline-block !important",
                    top: "10px !important"
                }
            }
        },
        primaryExpansionPanelSummaryExpaned: {
            color: nextjs_material_kit_pro/* primaryColor.0 */.lr[0]
        },
        secondaryExpansionPanelSummaryExpaned: {
            color: nextjs_material_kit_pro/* secondaryColor.0 */.dY[0]
        },
        warningExpansionPanelSummaryExpaned: {
            color: nextjs_material_kit_pro/* warningColor.0 */.MA[0]
        },
        dangerExpansionPanelSummaryExpaned: {
            color: nextjs_material_kit_pro/* dangerColor.0 */.E7[0]
        },
        successExpansionPanelSummaryExpaned: {
            color: nextjs_material_kit_pro/* successColor.0 */.nq[0]
        },
        infoExpansionPanelSummaryExpaned: {
            color: nextjs_material_kit_pro/* infoColor.0 */.bE[0]
        },
        roseExpansionPanelSummaryExpaned: {
            color: nextjs_material_kit_pro/* roseColor.0 */.An[0]
        },
        accordionSummaryContent: {
            margin: "0 !important"
        },
        accordionSummaryExpandIcon: {
            [theme.breakpoints.up("md")]: {
                top: "auto !important"
            },
            transform: "rotate(0deg)",
            color: "inherit",
            right: "10px",
            position: "absolute",
            [theme.breakpoints.down("sm")]: {
                top: "10px !important"
            },
            // some jss/css to make the cards look a bit better on Internet Explorer
            "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
                display: "inline-block !important"
            }
        },
        accordionSummaryExpandIconExpanded: {},
        title: {
            fontSize: "15px",
            fontWeight: "bolder",
            marginTop: "0",
            marginBottom: "0",
            color: "inherit"
        },
        accordionDetails: {
            display: "block",
            padding: "15px 0px 5px",
            fontSize: ".875rem"
        }
    });
/* harmony default export */ const components_accordionStyle = (accordionStyle);

;// CONCATENATED MODULE: ./components/Accordion/Accordion.js


// nodejs library to set properties for components

// @material-ui/core components




// @material-ui/icons


const useStyles = (0,styles_.makeStyles)(components_accordionStyle);
function CustomAccordion(props) {
    const [active, setActive] = external_react_default().useState(props.active.length === undefined ? [
        props.active
    ] : props.active);
    const [single] = external_react_default().useState(props.active.length === undefined ? true : false);
    const handleChange = (panel)=>()=>{
            let newArray;
            if (single) {
                if (active[0] === panel) {
                    newArray = [];
                } else {
                    newArray = [
                        panel
                    ];
                }
            } else {
                if (active.indexOf(panel) === -1) {
                    newArray = [
                        ...active,
                        panel
                    ];
                } else {
                    newArray = [
                        ...active
                    ];
                    newArray.splice(active.indexOf(panel), 1);
                }
            }
            setActive(newArray);
        };
    const { collapses , activeColor  } = props;
    const classes = useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.root,
        children: collapses.map((prop, key)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()), {
                expanded: active === key || active.indexOf(key) !== -1,
                onChange: handleChange(key),
                classes: {
                    root: classes.accordion,
                    expanded: classes.accordionExpanded
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((AccordionSummary_default()), {
                        expandIcon: /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {}),
                        classes: {
                            root: `${classes.accordionSummary} ${classes[activeColor + "AccordionSummary"]}`,
                            expanded: `${classes.accordionSummaryExpaned} ${classes[activeColor + "AccordionSummaryExpaned"]}`,
                            content: classes.accordionSummaryContent,
                            expandIcon: classes.accordionSummaryExpandIcon
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: classes.title,
                            children: prop.title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((AccordionDetails_default()), {
                        className: classes.accordionDetails,
                        children: prop.content
                    })
                ]
            }, key);
        })
    });
};
CustomAccordion.defaultProps = {
    active: -1,
    activeColor: "primary"
};
CustomAccordion.propTypes = {
    // index of the default active collapse
    active: external_prop_types_default().oneOfType([
        (external_prop_types_default()).number,
        external_prop_types_default().arrayOf((external_prop_types_default()).number)
    ]),
    collapses: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        title: (external_prop_types_default()).string,
        content: (external_prop_types_default()).node
    })).isRequired,
    activeColor: external_prop_types_default().oneOf([
        "primary",
        "secondary",
        "warning",
        "danger",
        "success",
        "info",
        "rose"
    ])
};


/***/ })

};
;