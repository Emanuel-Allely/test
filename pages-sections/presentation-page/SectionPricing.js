import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import NavPills from "/components/NavPills/NavPills.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Store from "@material-ui/icons/Store";

import pricingStyle from "/styles/jss/nextjs-material-kit-pro/pages/presentationSections/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem
            md={8}
            sm={10}
            className={classNames(classes.mlAuto, classes.mrAuto)}
          >
            <h2 className={classes.title}>
              Ready to grab NextJS Material Kit PRO?
            </h2>
            <Button
              href="https://www.creative-tim.com/product/nextjs-material-kit-pro#pricingCard?ref=njsmkp-presentation"
              color={"primary"}
              target="_blank"
              round
            >
              <ShoppingCart className={classes.icons} /> buy now
            </Button>{" "}
            <Button
              href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmkp-presentation"
              color={"white"}
              target="_blank"
              round
            >
              <Store className={classes.icons} /> Check Free Demo
            </Button>
          </GridItem>
          <div className={classes.socialLine}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem md={12}>
                  <h4 className={classes.title}>Thank you for sharing!</h4>
                  <Button color="twitter" href="#pablo" round>
                    <i className={"fab fa-twitter " + classes.marginRight} />
                    Twitter
                  </Button>
                  <Button color="facebook" href="#pablo" round>
                    <i className={"fab fa-facebook " + classes.marginRight} />
                    Facebook
                  </Button>
                  <Button color="google" href="#pablo" round>
                    <i className={"fab fa-google " + classes.marginRight} />
                    Google
                  </Button>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </GridContainer>
      </div>
    </div>
  );
}
