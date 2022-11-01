import {
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor
} from "/styles/jss/nextjs-material-kit-pro.js";

const accordionStyle = (theme) => ({
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
    borderBottom: "1px solid " + grayColor[6],
    padding: "25px 10px 5px 0px",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
    color: grayColor[1]
  },
  primaryExpansionPanelSummary: {
    "&:hover": {
      color: primaryColor[0]
    }
  },
  secondaryExpansionPanelSummary: {
    "&:hover": {
      color: secondaryColor[0]
    }
  },
  warningExpansionPanelSummary: {
    "&:hover": {
      color: warningColor[0]
    }
  },
  dangerExpansionPanelSummary: {
    "&:hover": {
      color: dangerColor[0]
    }
  },
  successExpansionPanelSummary: {
    "&:hover": {
      color: successColor[0]
    }
  },
  infoExpansionPanelSummary: {
    "&:hover": {
      color: infoColor[0]
    }
  },
  roseExpansionPanelSummary: {
    "&:hover": {
      color: roseColor[0]
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
    color: primaryColor[0]
  },
  secondaryExpansionPanelSummaryExpaned: {
    color: secondaryColor[0]
  },
  warningExpansionPanelSummaryExpaned: {
    color: warningColor[0]
  },
  dangerExpansionPanelSummaryExpaned: {
    color: dangerColor[0]
  },
  successExpansionPanelSummaryExpaned: {
    color: successColor[0]
  },
  infoExpansionPanelSummaryExpaned: {
    color: infoColor[0]
  },
  roseExpansionPanelSummaryExpaned: {
    color: roseColor[0]
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

export default accordionStyle;
