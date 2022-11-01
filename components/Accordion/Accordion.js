import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

// @material-ui/icons
import ExpandMore from "@material-ui/icons/ExpandMore";

import styles from "/styles/jss/nextjs-material-kit-pro/components/accordionStyle.js";

const useStyles = makeStyles(styles);

export default function CustomAccordion(props) {
  const [active, setActive] = React.useState(
    props.active.length === undefined ? [props.active] : props.active
  );
  const [single] = React.useState(
    props.active.length === undefined ? true : false
  );
  const handleChange = (panel) => () => {
    let newArray;

    if (single) {
      if (active[0] === panel) {
        newArray = [];
      } else {
        newArray = [panel];
      }
    } else {
      if (active.indexOf(panel) === -1) {
        newArray = [...active, panel];
      } else {
        newArray = [...active];
        newArray.splice(active.indexOf(panel), 1);
      }
    }
    setActive(newArray);
  };
  const { collapses, activeColor } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {collapses.map((prop, key) => {
        return (
          <Accordion
            expanded={active === key || active.indexOf(key) !== -1}
            onChange={handleChange(key)}
            key={key}
            classes={{
              root: classes.accordion,
              expanded: classes.accordionExpanded
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              classes={{
                root: `${classes.accordionSummary} ${
                  classes[activeColor + "AccordionSummary"]
                }`,
                expanded: `${classes.accordionSummaryExpaned} ${
                  classes[activeColor + "AccordionSummaryExpaned"]
                }`,
                content: classes.accordionSummaryContent,
                expandIcon: classes.accordionSummaryExpandIcon
              }}
            >
              <h4 className={classes.title}>{prop.title}</h4>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              {prop.content}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

CustomAccordion.defaultProps = {
  active: -1,
  activeColor: "primary"
};

CustomAccordion.propTypes = {
  // index of the default active collapse
  active: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  collapses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node
    })
  ).isRequired,
  activeColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ])
};
