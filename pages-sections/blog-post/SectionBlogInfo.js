import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Badge from "/components/Badge/Badge.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardAvatar from "/components/Card/CardAvatar.js";

import sectionBlogInfoStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionBlogInfoStyle.js";

const useStyles = makeStyles(sectionBlogInfoStyle);

export default function SectionBlogInfo() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.blogTags}>
                Tags:
                <Badge color="primary">Photography</Badge>
                <Badge color="primary">Stories</Badge>
                <Badge color="primary">Castle</Badge>
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Button color="google" round className={classes.buttons}>
                <i className="fab fa-google" /> 232
              </Button>
              <Button color="twitter" round className={classes.buttons}>
                <i className="fab fa-twitter" /> 910
              </Button>
              <Button color="facebook" round className={classes.buttons}>
                <i className="fab fa-facebook-square" /> 872
              </Button>
            </GridItem>
          </GridContainer>
          <hr />
          <Card plain profile className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={2} md={2}>
                <CardAvatar plain profile>
                  <img src="/img/faces/card-profile1-square.jpg" alt="..." />
                </CardAvatar>
              </GridItem>
              <GridItem xs={12} sm={8} md={8}>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>
                  I{"'"}ve been trying to figure out the bed design for the
                  master bedroom at our Hidden Hills compound...I like good
                  music from Youtube.
                </p>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <Button round className={classes.pullRight}>
                  Follow
                </Button>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
