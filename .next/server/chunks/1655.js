"use strict";
exports.id = 1655;
exports.ids = [1655];
exports.modules = {

/***/ 6048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CustomTable)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
// EXTERNAL MODULE: external "@material-ui/core/Table"
var Table_ = __webpack_require__(4880);
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);
// EXTERNAL MODULE: external "@material-ui/core/TableBody"
var TableBody_ = __webpack_require__(1555);
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);
// EXTERNAL MODULE: external "@material-ui/core/TableCell"
var TableCell_ = __webpack_require__(2740);
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);
// EXTERNAL MODULE: external "@material-ui/core/TableHead"
var TableHead_ = __webpack_require__(6956);
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);
// EXTERNAL MODULE: external "@material-ui/core/TableRow"
var TableRow_ = __webpack_require__(1236);
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);
// EXTERNAL MODULE: ./styles/jss/nextjs-material-kit-pro.js
var nextjs_material_kit_pro = __webpack_require__(1194);
;// CONCATENATED MODULE: ./styles/jss/nextjs-material-kit-pro/components/tableStyle.js

const tableStyle = {
    warning: {
        color: nextjs_material_kit_pro/* warningColor.0 */.MA[0]
    },
    primary: {
        color: nextjs_material_kit_pro/* primaryColor.0 */.lr[0]
    },
    danger: {
        color: nextjs_material_kit_pro/* dangerColor.0 */.E7[0]
    },
    success: {
        color: nextjs_material_kit_pro/* successColor.0 */.nq[0]
    },
    info: {
        color: nextjs_material_kit_pro/* infoColor.0 */.bE[0]
    },
    rose: {
        color: nextjs_material_kit_pro/* roseColor.0 */.An[0]
    },
    gray: {
        color: nextjs_material_kit_pro/* grayColor.0 */.X_[0]
    },
    right: {
        textAlign: "right"
    },
    table: {
        marginBottom: "0",
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "transparent",
        borderSpacing: "0",
        borderCollapse: "collapse",
        overflow: "auto",
        "& > tbody > tr, & > thead > tr": {
            height: "auto"
        }
    },
    tableShoppingHead: {
        fontSize: "0.75em !important",
        textTransform: "uppercase !important"
    },
    tableCell: {
        ...nextjs_material_kit_pro/* defaultFont */.Df,
        lineHeight: "1.5em",
        padding: "12px 8px!important",
        verticalAlign: "middle",
        fontSize: "0.875rem",
        borderBottom: "none",
        borderTop: "1px solid " + nextjs_material_kit_pro/* grayColor.6 */.X_[6],
        position: "relative",
        color: nextjs_material_kit_pro/* grayColor.1 */.X_[1]
    },
    tableHeadCell: {
        fontSize: "1.063rem",
        borderBottomWidth: "1px",
        fontWeight: "300",
        color: nextjs_material_kit_pro/* grayColor.15 */.X_[15],
        borderTopWidth: "0 !important"
    },
    tableCellTotal: {
        fontWeight: "500",
        fontSize: "1.0625rem",
        paddingTop: "20px",
        textAlign: "right"
    },
    tableCellAmount: {
        fontSize: "26px",
        fontWeight: "300",
        marginTop: "5px",
        textAlign: "right"
    },
    tableResponsive: {
        minHeight: "0.1%",
        overflowX: "auto"
    },
    tableStripedRow: {
        backgroundColor: nextjs_material_kit_pro/* grayColor.16 */.X_[16]
    },
    tableRowHover: {
        "&:hover": {
            backgroundColor: nextjs_material_kit_pro/* grayColor.23 */.X_[23]
        }
    },
    warningRow: {
        backgroundColor: nextjs_material_kit_pro/* warningColor.4 */.MA[4],
        "&:hover": {
            backgroundColor: nextjs_material_kit_pro/* warningColor.5 */.MA[5]
        }
    },
    dangerRow: {
        backgroundColor: nextjs_material_kit_pro/* dangerColor.4 */.E7[4],
        "&:hover": {
            backgroundColor: nextjs_material_kit_pro/* dangerColor.5 */.E7[5]
        }
    },
    successRow: {
        backgroundColor: nextjs_material_kit_pro/* successColor.4 */.nq[4],
        "&:hover": {
            backgroundColor: nextjs_material_kit_pro/* successColor.5 */.nq[5]
        }
    },
    infoRow: {
        backgroundColor: nextjs_material_kit_pro/* infoColor.4 */.bE[4],
        "&:hover": {
            backgroundColor: nextjs_material_kit_pro/* infoColor.5 */.bE[5]
        }
    }
};
/* harmony default export */ const components_tableStyle = (tableStyle);

;// CONCATENATED MODULE: ./components/Table/Table.js




// @material-ui/core components







const useStyles = (0,styles_.makeStyles)(components_tableStyle);
function CustomTable(props) {
    const { tableHead , tableData , tableHeaderColor , hover , colorsColls , coloredColls , customCellClasses , customClassesForCells , striped , tableShopping , customHeadCellClasses , customHeadClassesForCells  } = props;
    const classes = useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classes.tableResponsive,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Table_default()), {
            className: classes.table,
            children: [
                tableHead !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx((TableHead_default()), {
                    className: classes[tableHeaderColor],
                    children: /*#__PURE__*/ jsx_runtime_.jsx((TableRow_default()), {
                        className: classes.tableRow,
                        children: tableHead.map((prop, key)=>{
                            const tableCellClasses = classes.tableHeadCell + " " + classes.tableCell + " " + external_classnames_default()({
                                [customHeadCellClasses[customHeadClassesForCells.indexOf(key)]]: customHeadClassesForCells.indexOf(key) !== -1,
                                [classes.tableShoppingHead]: tableShopping
                            });
                            return /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                className: tableCellClasses,
                                children: prop
                            }, key);
                        })
                    })
                }) : null,
                /*#__PURE__*/ jsx_runtime_.jsx((TableBody_default()), {
                    children: tableData.map((prop, key)=>{
                        var rowColor = "";
                        var rowColored = false;
                        if (prop.color !== undefined) {
                            rowColor = prop.color;
                            rowColored = true;
                            prop = prop.data;
                        }
                        const tableRowClasses = external_classnames_default()({
                            [classes.tableRowHover]: hover,
                            [classes[rowColor + "Row"]]: rowColored,
                            [classes.tableStripedRow]: striped && key % 2 === 0
                        });
                        if (prop.total) {
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                hover: hover,
                                className: tableRowClasses,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell,
                                        colSpan: prop.colspan
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell + " " + classes.tableCellTotal,
                                        children: "Total"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell + " " + classes.tableCellAmount,
                                        children: prop.amount
                                    }),
                                    tableHead.length - (prop.colspan - 0 + 2) > 0 ? /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell,
                                        colSpan: tableHead.length - (prop.colspan - 0 + 2)
                                    }) : null
                                ]
                            }, key);
                        }
                        if (prop.purchase) {
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((TableRow_default()), {
                                hover: hover,
                                className: tableRowClasses,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell,
                                        colSpan: prop.colspan
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell + " " + classes.tableCellTotal,
                                        children: "Total"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell + " " + classes.tableCellAmount,
                                        children: prop.amount
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                        className: classes.tableCell + " " + classes.right,
                                        colSpan: prop.col.colspan,
                                        children: prop.col.text
                                    })
                                ]
                            }, key);
                        }
                        return /*#__PURE__*/ jsx_runtime_.jsx((TableRow_default()), {
                            hover: hover,
                            className: classes.tableRow + " " + tableRowClasses,
                            children: prop.map((prop, key)=>{
                                const tableCellClasses = classes.tableCell + " " + external_classnames_default()({
                                    [classes[colorsColls[coloredColls.indexOf(key)]]]: coloredColls.indexOf(key) !== -1,
                                    [customCellClasses[customClassesForCells.indexOf(key)]]: customClassesForCells.indexOf(key) !== -1
                                });
                                return /*#__PURE__*/ jsx_runtime_.jsx((TableCell_default()), {
                                    className: tableCellClasses,
                                    children: prop
                                }, key);
                            })
                        }, key);
                    })
                })
            ]
        })
    });
};
CustomTable.defaultProps = {
    tableHeaderColor: "gray",
    hover: false,
    colorsColls: [],
    coloredColls: [],
    striped: false,
    customCellClasses: [],
    customClassesForCells: [],
    customHeadCellClasses: [],
    customHeadClassesForCells: []
};
CustomTable.propTypes = {
    tableHeaderColor: external_prop_types_default().oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    tableHead: external_prop_types_default().arrayOf((external_prop_types_default()).string),
    // Of(PropTypes.arrayOf(PropTypes.node)) || Of(PropTypes.object),
    tableData: (external_prop_types_default()).array,
    hover: (external_prop_types_default()).bool,
    coloredColls: external_prop_types_default().arrayOf((external_prop_types_default()).number),
    // Of(["warning","primary","danger","success","info","rose","gray"]) - colorsColls
    colorsColls: (external_prop_types_default()).array,
    customCellClasses: external_prop_types_default().arrayOf((external_prop_types_default()).string),
    customClassesForCells: external_prop_types_default().arrayOf((external_prop_types_default()).number),
    customHeadCellClasses: external_prop_types_default().arrayOf((external_prop_types_default()).string),
    customHeadClassesForCells: external_prop_types_default().arrayOf((external_prop_types_default()).number),
    striped: (external_prop_types_default()).bool,
    // this will cause some changes in font
    tableShopping: (external_prop_types_default()).bool
};


/***/ }),

/***/ 7600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const buttonGroupStyle = {
    buttonGroup: {
        position: "relative",
        margin: "10px 1px",
        display: "inline-flex",
        verticalAlign: "middle"
    },
    firstButton: {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        margin: "0",
        position: "relative",
        float: "left",
        "&:hover": {
            zIndex: "2"
        }
    },
    middleButton: {
        borderRadius: "0",
        margin: "0",
        position: "relative",
        float: "left",
        "&:hover": {
            zIndex: "2"
        }
    },
    lastButton: {
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
        margin: "0",
        "&:hover": {
            zIndex: "2"
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonGroupStyle);


/***/ })

};
;