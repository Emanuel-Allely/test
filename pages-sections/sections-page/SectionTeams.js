import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardAvatar from "/components/Card/CardAvatar.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import Button from "/components/CustomButtons/Button.js";
import Muted from "/components/Typography/Muted.js";

import teamsStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle.js";

const useStyles = makeStyles(teamsStyle);

export default function SectionTeams({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Team 1 START */}
      <div className={classes.team}>
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
              <h2 className={classes.title}>Our Awesome Team 1</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      src="/img/faces/marc.jpg"
                      alt="..."
                      className={classes.img}
                    />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Alec Thompson</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>CEO / Co-Founder</h6>
                  </Muted>
                  <p className={classes.description}>
                    And I love you like Kanye loves Kanye. We need to restart
                    the human foundation.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="twitter"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="facebook"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="google"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-google" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      src="/img/faces/kendall.jpg"
                      alt="..."
                      className={classes.img}
                    />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Tania Andrew</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>DESIGNER</h6>
                  </Muted>
                  <p className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation. And I love you like Kanye loves Kanye.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="twitter"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="dribbble"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      src="/img/faces/christian.jpg"
                      alt="..."
                      className={classes.img}
                    />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Christian Mike</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Web Developer</h6>
                  </Muted>
                  <p className={classes.description}>
                    I love you like Kanye loves Kanye. Don{"'"}t be scared of
                    the truth because we need to restart the human foundation.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="facebook"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="dribbble"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/faces/avatar.jpg" alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Rebecca Stormvile</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Web Developer</h6>
                  </Muted>
                  <p className={classes.description}>
                    And I love you like Kanye loves Kanye. We really need to
                    restart the human foundation.
                  </p>
                </CardBody>
                <CardFooter profile plain className={classes.justifyContent}>
                  <Button
                    justIcon
                    simple
                    color="google"
                    href="#pablo"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-google" />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="twitter"
                    href="#pablo"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="dribbble"
                    href="#pablo"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 1 END */}
      {/* Team 2 START */}
      <div className={classes.team}>
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
              <h2 className={classes.title}>The Executive Team 2</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/examples/card-profile1.jpg" alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: "url('/img/examples/card-profile1.jpg')",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Alec Thompson</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>MANAGING PARTNER</h6>
                  </Muted>
                </CardBody>
                <CardFooter profile plain className={classes.justifyContent}>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button justIcon round color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/examples/card-profile2.jpg" alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: "url('/img/examples/card-profile2.jpg')",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>George West</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                  </Muted>
                </CardBody>
                <CardFooter profile plain className={classes.justifyContent}>
                  <Button justIcon round color="linkedin">
                    <i className="fab fa-linkedin-in" />
                  </Button>
                  <Button justIcon round color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/examples/card-profile4.jpg" alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: "url('/img/examples/card-profile4.jpg')",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Gina Andrew</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>PHOTOGRAPHER</h6>
                  </Muted>
                </CardBody>
                <CardFooter profile plain className={classes.justifyContent}>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 2 END */}
      {/* Team 3 START */}
      <div className={classes.team}>
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
              <h2 className={classes.title}>The Executive Team 3</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          src="/img/faces/card-profile1-square.jpg"
                          alt="..."
                        />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/faces/card-profile1-square.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Alec Thompson</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>FOUNDER</h6>
                      </Muted>
                      <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          src="/img/faces/card-profile6-square.jpg"
                          alt="..."
                        />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/faces/card-profile6-square.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>
                          GRAPHIC DESIGNER
                        </h6>
                      </Muted>
                      <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          src="/img/faces/card-profile4-square.jpg"
                          alt="..."
                        />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/faces/card-profile4-square.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Gina Andrew</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                      </Muted>
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don{"'"}t be scared
                        of the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="youtube">
                        <i className="fab fa-youtube" />
                      </Button>
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="instagram">
                        <i className="fab fa-instagram" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          src="/img/faces/card-profile2-square.jpg"
                          alt="..."
                        />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/faces/card-profile2-square.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>George West</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                      </Muted>
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don{"'"}t be scared
                        of the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 3 END */}
      {/* Team 4 START */}
      <div
        className={classes.team + " " + classes.section}
        style={{ backgroundImage: "url('/img/bg7.jpg')" }}
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
              <h2 className={classes.title}>The Executive Team 4</h2>
              <h5 className={classes.descriptionWhite}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/faces/card-profile1-square.jpg" alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Alec Thompson</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                  </Muted>
                  <p className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button justIcon round color="linkedin">
                    <i className="fab fa-linkedin-in" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/faces/card-profile2-square.jpg" alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>George West</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                  </Muted>
                  <p className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/faces/card-profile4-square.jpg" alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Gina Andrew</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                  </Muted>
                  <p className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button justIcon round color="pinterest">
                    <i className="fab fa-pinterest" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 4 END */}
      {/* Team 5 START */}
      <div
        className={classes.team + " " + classes.section}
        style={{ backgroundImage: "url('/img/examples/city.jpg')" }}
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
              <h2 className={classes.title}>The Executive Team 5</h2>
              <h5 className={classes.descriptionWhite}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          src="/img/faces/card-profile1-square.jpg"
                          alt="..."
                        />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Alec Thompson</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>FOUNDER</h6>
                      </Muted>
                      <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple>
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          src="/img/faces/card-profile6-square.jpg"
                          alt="..."
                        />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>
                          GRAPHIC DESIGNER
                        </h6>
                      </Muted>
                      <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple>
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          src="/img/faces/card-profile4-square.jpg"
                          alt="..."
                        />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Gina Andrew</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                      </Muted>
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don{"'"}t be scared
                        of the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple>
                        <i className="fab fa-youtube" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-instagram" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          src="/img/faces/card-profile2-square.jpg"
                          alt="..."
                        />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>George West</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                      </Muted>
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don{"'"}t be scared
                        of the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple>
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 5 END */}
    </div>
  );
}
