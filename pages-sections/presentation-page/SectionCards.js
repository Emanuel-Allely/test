import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import cardsStyle from "/styles/jss/nextjs-material-kit-pro/pages/presentationSections/cardsStyle.js";

const useStyles = makeStyles(cardsStyle);

export default function SectionCards() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.sectionDark)}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={7} sm={7}>
            <div className={classes.imageContainer}>
              <img src="/img/assets-for-demo/cards-test.png" alt="views" />
            </div>
          </GridItem>
          <GridItem md={4} sm={5} className={classes.mlAuto}>
            <div className={classes.sectionDescription}>
              <h3 className={classes.title}>Unconventional Cards</h3>
              <h6 className={classes.description}>
                One Card for Every Problem
              </h6>
              <h5 className={classes.description}>
                We love cards and everybody on the web seems to. We have gone
                above and beyond with options for you to organise your
                information. From cards designed for blog posts, to product
                cards or user profiles, you will have many options to choose
                from. All the cards follow the material principles and have a
                design that stands out.
              </h5>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
