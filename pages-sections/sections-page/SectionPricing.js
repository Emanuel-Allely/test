import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Weekend from "@material-ui/icons/Weekend";
import Home from "@material-ui/icons/Home";
import Business from "@material-ui/icons/Business";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import Button from "/components/CustomButtons/Button.js";
import NavPills from "/components/NavPills/NavPills.js";
import Success from "/components/Typography/Success.js";
import Danger from "/components/Typography/Danger.js";

import pricingStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Pricing 1 START */}
      <div
        className={
          classes.pricing + " " + classes.pricing1 + " " + classes.section
        }
        style={{ backgroundImage: "url('/img/bg11.jpg')" }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Pick the best plan for you</h2>
              <h5 className={classes.description}>
                You have Free Unlimited Updates and Premium Support on each
                package.
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card pricing plain>
                <CardBody pricing plain>
                  <h6
                    className={
                      classes.cardCategory + " " + classes.marginBottom20
                    }
                  >
                    Freelancer
                  </h6>
                  <div className={classes.icon}>
                    <Weekend className={classes.iconWhite} />
                  </div>
                  <h3
                    className={
                      classes.cardTitleWhite + " " + classes.marginTop30
                    }
                  >
                    FREE
                  </h3>
                  <p className={classes.cardCategory}>
                    This is good if your company size is between 2 and 10
                    Persons.
                  </p>
                  <Button round color="white">
                    Choose plan
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card pricing raised>
                <CardBody pricing>
                  <h6
                    className={
                      classes.cardDescription + " " + classes.marginBottom20
                    }
                  >
                    SMALL COMPANY
                  </h6>
                  <div className={classes.icon}>
                    <Home className={classes.iconRose} />
                  </div>
                  <h3 className={classes.cardTitle + " " + classes.marginTop30}>
                    $29
                  </h3>
                  <p className={classes.cardDescription}>
                    This is good if your company size is between 2 and 10
                    Persons.
                  </p>
                  <Button round color="rose">
                    Choose plan
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card pricing plain>
                <CardBody pricing plain>
                  <h6
                    className={
                      classes.cardCategory + " " + classes.marginBottom20
                    }
                  >
                    MEDIUM COMPANY
                  </h6>
                  <div className={classes.icon}>
                    <Business className={classes.iconWhite} />
                  </div>
                  <h3
                    className={
                      classes.cardTitleWhite + " " + classes.marginTop30
                    }
                  >
                    $69
                  </h3>
                  <p className={classes.cardCategory}>
                    This is good if your company size is between 11 and 99
                    Persons.
                  </p>
                  <Button round color="white">
                    Choose plan
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card pricing plain>
                <CardBody pricing plain>
                  <h6
                    className={
                      classes.cardCategory + " " + classes.marginBottom20
                    }
                  >
                    ENTERPRISE
                  </h6>
                  <div className={classes.icon}>
                    <AccountBalance className={classes.iconWhite} />
                  </div>
                  <h3
                    className={
                      classes.cardTitleWhite + " " + classes.marginTop30
                    }
                  >
                    $159
                  </h3>
                  <p className={classes.cardCategory}>
                    This is good if your company size is 99+ persons.
                  </p>
                  <Button round color="white">
                    Choose plan
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Pricing 1 END */}
      {/* Pricing 2 START */}
      <div className={classes.pricing}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Pick the best plan for you</h2>
              <NavPills
                alignCenter
                color="rose"
                tabs={[
                  {
                    tabButton: "Monthly",
                    tabContent: ""
                  },
                  {
                    tabButton: "Yearly",
                    tabContent: ""
                  }
                ]}
              />
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card pricing plain>
                <CardBody pricing plain>
                  <h6 className={classes.cardCategory}>FREE</h6>
                  <h1 className={classes.cardTitle}>
                    <small>$</small> 0 <small>/mo</small>
                  </h1>
                  <ul>
                    <li>
                      <b>1</b> Project
                    </li>
                    <li>
                      <b>5</b> Team Members
                    </li>
                    <li>
                      <b>55</b> Personal Contacts
                    </li>
                    <li>
                      <b>5.000</b> Messages
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="rose" round>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card
                pricing
                raised
                background
                style={{
                  backgroundImage: "url('/img/examples/card-blog3.jpg')"
                }}
              >
                <CardBody pricing background>
                  <h6 className={classes.cardCategoryWhite}>PREMIUM</h6>
                  <h1 className={classes.cardTitleWhite}>
                    <small>$</small> 89 <small>/mo</small>
                  </h1>
                  <ul>
                    <li>
                      <b>500</b> Projects
                    </li>
                    <li>
                      <b>50</b> Team Members
                    </li>
                    <li>
                      <b>125</b> Personal Contacts
                    </li>
                    <li>
                      <b>15.000</b> Messages
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="white" round>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card pricing plain>
                <CardBody pricing plain>
                  <h6 className={classes.cardCategory}>PLATINUM</h6>
                  <h1 className={classes.cardTitle}>
                    <small>$</small> 199 <small>/mo</small>
                  </h1>
                  <ul>
                    <li>
                      <b>1000</b> Projects
                    </li>
                    <li>
                      <b>100</b> Team Members
                    </li>
                    <li>
                      <b>550</b> Personal Contacts
                    </li>
                    <li>
                      <b>50.000</b> Messages
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="rose" round>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Pricing 2 END */}
      {/* Pricing 3 START */}
      <div
        className={classes.pricing + " " + classes.section}
        style={{ backgroundImage: "url('/img/examples/city.jpg')" }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Pick the best plan for you</h2>
              <h5 className={classes.description}>
                You have Free Unlimited Updates and Premium Support on each
                package.
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} className={classes.mlAuto}>
              <Card pricing>
                <CardBody pricing>
                  <h6 className={classes.cardDescription}>FREE</h6>
                  <h1 className={classes.cardTitle}>
                    <small>$</small> 0 <small>/mo</small>
                  </h1>
                  <ul>
                    <li>
                      <b>1</b> Project
                    </li>
                    <li>
                      <b>5</b> Team Members
                    </li>
                    <li>
                      <b>55</b> Personal Contacts
                    </li>
                    <li>
                      <b>5.000</b> Messages
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="primary" round>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} className={classes.mrAuto}>
              <Card pricing color="primary">
                <CardBody pricing>
                  <h6
                    className={
                      classes.cardCategory + " " + classes.marginBottom30
                    }
                  >
                    PREMIUM
                  </h6>
                  <h1 className={classes.cardTitleWhite}>
                    <small>$</small> 199 <small>/mo</small>
                  </h1>
                  <ul>
                    <li>
                      <b>1000</b> Projects
                    </li>
                    <li>
                      <b>100</b> Team Members
                    </li>
                    <li>
                      <b>550</b> Personal Contacts
                    </li>
                    <li>
                      <b>50.000</b> Messages
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="white" round>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Pricing 3 END */}
      {/* Pricing 4 START */}
      <div className={classes.pricing}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Pick the best plan for you</h2>
              <h5 className={classes.description}>
                You have Free Unlimited Updates and Premium Support on each
                package.
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card pricing plain>
                <CardBody pricing plain>
                  <h6 className={classes.cardCategory}>STARTUP</h6>
                  <h1 className={classes.cardTitle}>
                    <small>$</small> 0
                  </h1>
                  <ul>
                    <li>
                      <Success>
                        <Check />
                      </Success>{" "}
                      Sharing Tools
                    </li>
                    <li>
                      <Danger>
                        <Close />
                      </Danger>{" "}
                      Design Tools
                    </li>
                    <li>
                      <Danger>
                        <Close />
                      </Danger>{" "}
                      Private Messages
                    </li>
                    <li>
                      <Danger>
                        <Close />
                      </Danger>{" "}
                      Personal Brand
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="danger" round>
                    Downgrade Plan
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card pricing color="success">
                <CardBody pricing>
                  <h6 className={classes.marginBottom30}>SMALL COMPANY</h6>
                  <h1 className={classes.cardTitleWhite}>
                    <small>$</small> 89
                  </h1>
                  <ul>
                    <li>
                      <Check /> Sharing Tools
                    </li>
                    <li>
                      <Check /> Design Tools
                    </li>
                    <li>
                      <Close /> Private Messages
                    </li>
                    <li>
                      <Close /> Personal Brand
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="white" round disabled>
                    Current Plan
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card pricing plain>
                <CardBody pricing>
                  <h6 className={classes.cardCategory}>LARGE COMPANY</h6>
                  <h1 className={classes.cardTitle}>
                    <small>$</small> 189
                  </h1>
                  <ul>
                    <li>
                      <Success>
                        <Check />
                      </Success>{" "}
                      Sharing Tools
                    </li>
                    <li>
                      <Success>
                        <Check />
                      </Success>{" "}
                      Design Tools
                    </li>
                    <li>
                      <Success>
                        <Check />
                      </Success>{" "}
                      Private Messages
                    </li>
                    <li>
                      <Danger>
                        <Close />
                      </Danger>{" "}
                      Personal Brand
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="success" round>
                    Upgrade Plan
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card pricing plain>
                <CardBody pricing>
                  <h6 className={classes.cardCategory}>LARGE COMPANY</h6>
                  <h1 className={classes.cardTitle}>
                    <small>$</small> 189
                  </h1>
                  <ul>
                    <li>
                      <Success>
                        <Check />
                      </Success>{" "}
                      Sharing Tools
                    </li>
                    <li>
                      <Success>
                        <Check />
                      </Success>{" "}
                      Design Tools
                    </li>
                    <li>
                      <Success>
                        <Check />
                      </Success>{" "}
                      Private Messages
                    </li>
                    <li>
                      <Success>
                        <Check />
                      </Success>{" "}
                      Personal Brand
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="success" round>
                    Upgrade Plan
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Pricing 4 END */}
      {/* Pricing 5 START */}
      <div className={classes.pricing + " " + classes.sectionGray}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={4}
              md={4}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>
                Choose a plan for your next project
              </h2>
              <p className={classes.description}>
                You have Free Unlimited Updates and Premium Support on each
                package. You also have 20 days to request a refund if You{"'"}re
                not happy with your purchase.
              </p>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem
              xs={12}
              sm={7}
              md={7}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Personal",
                    tabContent: (
                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <Card pricing raised>
                            <CardBody pricing>
                              <h6 className={classes.cardDescription}>
                                HTML PACKAGE
                              </h6>
                              <h1 className={classes.cardTitle}>
                                <small>$</small> 0
                              </h1>
                              <ul>
                                <li>
                                  <b>1</b> Developer
                                </li>
                                <li>
                                  <b>99+</b> Components
                                </li>
                                <li>
                                  <b>HTML</b> Elements
                                </li>
                                <li>
                                  <b>14</b> Page Examples
                                </li>
                              </ul>
                            </CardBody>
                            <CardFooter
                              pricing
                              className={classes.justifyContentCenter}
                            >
                              <Button color="primary" round>
                                FREE DOWNLOAD
                              </Button>
                            </CardFooter>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                          <Card pricing plain>
                            <CardBody pricing plain>
                              <h6 className={classes.cardDescription}>
                                HTML & SKETCH PACKAGE
                              </h6>
                              <h1 className={classes.cardTitle}>
                                <small>$</small> 79
                              </h1>
                              <ul>
                                <li>
                                  <b>1</b> Developer
                                </li>
                                <li>
                                  <b>199+</b> Components
                                </li>
                                <li>
                                  <b>HTML & Sketch</b> Elements
                                </li>
                                <li>
                                  <b>22</b> Page Examples
                                </li>
                              </ul>
                            </CardBody>
                            <CardFooter
                              pricing
                              className={classes.justifyContentCenter}
                            >
                              <Button color="white" round>
                                BUY NOW
                              </Button>
                            </CardFooter>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Commercial",
                    tabContent: (
                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <Card pricing raised>
                            <CardBody pricing>
                              <h6 className={classes.cardDescription}>
                                HTML PACKAGE
                              </h6>
                              <h1 className={classes.cardTitle}>
                                <small>$</small> 159
                              </h1>
                              <ul>
                                <li>
                                  <b>5+</b> Developers
                                </li>
                                <li>
                                  <b>199+</b> Components
                                </li>
                                <li>
                                  <b>HTML</b> Elements
                                </li>
                                <li>
                                  <b>24</b> Page Examples
                                </li>
                              </ul>
                            </CardBody>
                            <CardFooter
                              pricing
                              className={classes.justifyContentCenter}
                            >
                              <Button color="primary" round>
                                BUY NOW
                              </Button>
                            </CardFooter>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                          <Card pricing plain>
                            <CardBody pricing plain>
                              <h6 className={classes.cardDescription}>
                                HTML & SKETCH PACKAGE
                              </h6>
                              <h1 className={classes.cardTitle}>
                                <small>$</small> 299
                              </h1>
                              <ul>
                                <li>
                                  <b>10+</b> Developers
                                </li>
                                <li>
                                  <b>299+</b> Components
                                </li>
                                <li>
                                  <b>HTML & Sketch</b> Elements
                                </li>
                                <li>
                                  <b>45</b> Page Examples
                                </li>
                              </ul>
                            </CardBody>
                            <CardFooter
                              pricing
                              className={classes.justifyContentCenter}
                            >
                              <Button color="white" round>
                                BUY NOW
                              </Button>
                            </CardFooter>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Pricing 5 END */}
    </div>
  );
}
