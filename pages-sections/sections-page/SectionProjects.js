/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Build from "@material-ui/icons/Build";
import Subject from "@material-ui/icons/Subject";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import NavPills from "/components/NavPills/NavPills.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import Button from "/components/CustomButtons/Button.js";
import Muted from "/components/Typography/Muted.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import Badge from "/components/Badge/Badge.js";

import projectsStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/projectsStyle.js";

const useStyles = makeStyles(projectsStyle);

export default function SectionProjects({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Project 1 START */}
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>
                Some of Our Awesome Products - 1
              </h2>
              <NavPills
                alignCenter
                color="rose"
                tabs={[
                  { tabButton: "All", tabContent: "" },
                  { tabButton: "Marketing", tabContent: "" },
                  { tabButton: "Development", tabContent: "" },
                  { tabButton: "Productivity", tabContent: "" },
                  { tabButton: "Web Design", tabContent: "" }
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
                  <h6 className={classes.cardCategory}>PRODUCTIVITY</h6>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <h3 className={classes.cardTitleWhite}>
                      The Best Productivity Apps on Market
                    </h3>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <Button round color="danger">
                    <Icon>content_copy</Icon> View App
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{
                  backgroundImage: "url('/img/examples/card-blog3.jpg')"
                }}
              >
                <CardBody background>
                  <h6 className={classes.cardCategory}>DESIGN</h6>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <h3 className={classes.cardTitleWhite}>
                      The Sculpture Where Details Matter
                    </h3>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <Button round color="info">
                    <Build />
                    View Project
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
                  <h6 className={classes.cardCategory}>MARKETING</h6>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <h3 className={classes.cardTitleWhite}>
                      0 to 100.000 Customers in 6 months
                    </h3>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <Button round color="warning">
                    <Subject /> Case study
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 1 END */}
      {/* Project 2 START */}
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <Muted>
                <h6>OUR WORK</h6>
              </Muted>
              <h2 className={classes.title}>
                Some of Our Awesome Products - 2
              </h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your projects. Keep you user engaged by providing meaningful
                information.
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmkp-projects-section-sections"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={
                        "https://s3.amazonaws.com/creativetim_bucket/products/217/original/opt_mk_nextjs_thumbnail.jpg?1525851474"
                      }
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/217/original/opt_mk_nextjs_thumbnail.jpg?1525851474')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmkp-projects-section-sections"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      NextJS Material Kit Free
                    </h4>
                  </a>
                  <h6 className={classes.description}>FREE UI KIT</h6>
                  <p
                    className={classes.description + " " + classes.marginTop20}
                  >
                    It is a Free Material-UI Kit with a fresh, new design
                    inspired by Google's material design. It{"'"}s a great
                    pleasure to introduce to you the material concepts in an
                    easy to use and beautiful set of components.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=njsmkp-projects-section-sections"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src="https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbp_react_thumbnail.jpg?1509466309"
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbp_react_thumbnail.jpg?1509466309')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=njsmkp-projects-section-sections"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Light Bootstrap Dashboard PRO React
                    </h4>
                  </a>
                  <h6 className={classes.description}>Premium Template</h6>
                  <p
                    className={classes.description + " " + classes.marginTop20}
                  >
                    Light Bootstrap Dashboard PRO is a Bootstrap 3 Admin Theme
                    designed to look simple and beautiful. Forget about boring
                    dashboards and grab yourself a copy to kickstart new
                    project!
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=njsmkp-projects-section-sections"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src="https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306"
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=njsmkp-projects-section-sections"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Now UI Dashboard PRO React
                    </h4>
                  </a>
                  <h6 className={classes.description}>Premium Template</h6>
                  <p
                    className={classes.description + " " + classes.marginTop20}
                  >
                    Now UI Dashboard React is an admin dashboard template
                    designed by Invision and coded by Creative Tim. It is built
                    on top of Reactstrap, using Now UI Dashboard and it is fully
                    responsive.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 2 END */}
      {/* Project 3 START */}
      <div
        className={
          classes.projects + " " + classes.sectionDark + " " + classes.projects3
        }
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <Muted>
                <h6>OUR WORK</h6>
              </Muted>
              <h2 className={classes.title}>
                Some of Our Awesome Products - 3
              </h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src="/img/examples/card-project1.jpg" alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>WEB DESIGN</h6>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>
                      Famous Website Redesign
                    </h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src="/img/examples/card-project2.jpg" alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>PRODUCTIVITY TOOLS</h6>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>
                      Beautiful Desktop for Designers
                    </h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src="/img/examples/card-project3.jpg" alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>ANDROID APP</h6>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>Analytics for Android</h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src="/img/examples/card-project4.jpg" alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>WEBSITE</h6>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>Behance Redesign</h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 3 END */}
      {/* Project 4 START */}
      <div className={classes.projects + " " + classes.projects4}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>
                Some of Our Awesome Products - 4
              </h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your projects. Keep you user engaged by providing meaningful
                information.
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card
                background
                className={classes.card4}
                style={{
                  backgroundImage: "url('/img/examples/card-project2.jpg')"
                }}
              >
                <CardBody background className={classes.cardBody4}>
                  <Badge color="rose">Client: Apple</Badge>
                  <a href="#pablo" onClick={(e) => e.preventDefault}>
                    <h3 className={classes.cardTitle}>Beautiful Project</h3>
                    <p className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth.
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <InfoArea
                className={classes.info4}
                title="Graphic Design"
                description="We've created the design of the website using modern Technologies like Sketch. It was a very interesting collaboration."
                icon={FormatPaint}
                iconColor="info"
              />
              <InfoArea
                className={classes.info4}
                title="Fully Coded in HTML5"
                description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                icon={Code}
                iconColor="primary"
              />
              <InfoArea
                className={classes.info4}
                title="CMS Admin Dashboard"
                description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                icon={Dashboard}
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
          <hr />
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <InfoArea
                className={classes.info4}
                title="Marketing"
                description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                icon={Timeline}
                iconColor="rose"
              />
              <InfoArea
                className={classes.info4}
                title="Fully Coded in HTML5"
                description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                icon={Code}
                iconColor="success"
              />
              <InfoArea
                className={classes.info4}
                title="Built Audience"
                description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                icon={Group}
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card
                background
                className={classes.card4}
                style={{
                  backgroundImage: "url('/img/examples/card-project5.jpg')"
                }}
              >
                <CardBody background className={classes.cardBody4}>
                  <Badge color="rose">CLIENT: DJ KHALED</Badge>
                  <a href="#pablo" onClick={(e) => e.preventDefault}>
                    <h3 className={classes.cardTitle}>Another One</h3>
                    <p className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth.
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 4 END */}
    </div>
  );
}
