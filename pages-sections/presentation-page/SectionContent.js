import React from "react";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";

import contentStyle from "/styles/jss/nextjs-material-kit-pro/pages/presentationSections/contentStyle.js";

const useStyles = makeStyles(contentStyle);

export default function SectionContent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={4}>
            <div className={classes.sectionDescription}>
              <h3 className={classes.title}>Content Areas</h3>
              <h6 className={classes.description}>
                For Areas that Need More Space
              </h6>
              <h5 className={classes.description}>
                If you need elements such as tables, comments, description
                areas, tabs and many others, we{"'"}ve got you covered. We took
                into consideration multiple use cases and came up with some
                specific elements that you will love to use. They{"'"}re
                beautiful and easy to use for the end user navigating your
                website.{" "}
              </h5>
            </div>
          </GridItem>
          <GridItem md={7} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <div className={classes.animeAreaImg}>
                <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src="/img/assets-for-demo/presentationViewSectionComponent/ipad-comments.jpg"
                    alt="iPad comments"
                    className={classes.areaImg}
                  />
                </ScrollAnimation>
              </div>
              <div className={classes.animeInfoImg}>
                <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src="/img/assets-for-demo/presentationViewSectionComponent/ipad-table.jpg"
                    alt="iPad table"
                    className={classes.infoImg}
                  />
                </ScrollAnimation>
              </div>
              <img
                className={classes.ipadImg}
                src="/img/assets-for-demo/presentationViewSectionComponent/presentation-ipad.jpg"
                alt="iPad"
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
