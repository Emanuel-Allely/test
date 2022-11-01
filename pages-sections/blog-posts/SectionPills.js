import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import NavPills from "/components/NavPills/NavPills.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import Button from "/components/CustomButtons/Button.js";

import sectionPillsStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionPillsStyle.js";

const useStyles = makeStyles(sectionPillsStyle);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
          <NavPills
            alignCenter
            tabs={[
              {
                tabButton: "All",
                tabContent: ""
              },
              {
                tabButton: "World",
                tabContent: ""
              },
              {
                tabButton: "Arts",
                tabContent: ""
              },
              {
                tabButton: "Tech",
                tabContent: ""
              },
              {
                tabButton: "Business",
                tabContent: ""
              }
            ]}
          />
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url('/img/examples/office2.jpg')" }}
          >
            <CardBody background>
              <h6 className={classes.category}>WORLDS</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  The Best Productivity Apps on Market
                </h3>
              </a>
              <p className={classes.category}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} /> Read article
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url('/img/examples/blog8.jpg')" }}
          >
            <CardBody background>
              <h6 className={classes.category}>BUSINESS</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  Working on Wallstreet is Not So Easy
                </h3>
              </a>
              <p className={classes.category}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button round href="#pablo" color="primary">
                <FormatAlignLeft className={classes.icons} /> Read article
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card
            raised
            background
            style={{
              backgroundImage: "url('/img/examples/card-project6.jpg')"
            }}
          >
            <CardBody background>
              <h6 className={classes.category}>MARKETING</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  0 to 100.000 Customers in 6 months
                </h3>
              </a>
              <p className={classes.category}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button round href="#pablo" color="warning">
                <FormatAlignLeft className={classes.icons} /> Read case study
              </Button>
              <Tooltip
                id="tooltip-pocket"
                title="Save to Pocket"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="white" simple justIcon>
                  <i className="fab fa-get-pocket" />
                </Button>
              </Tooltip>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
