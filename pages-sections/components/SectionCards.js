import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Schedule from "@material-ui/icons/Schedule";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Subject from "@material-ui/icons/Subject";
import WatchLater from "@material-ui/icons/WatchLater";
import People from "@material-ui/icons/People";
import Business from "@material-ui/icons/Business";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import Delete from "@material-ui/icons/Delete";
import Bookmark from "@material-ui/icons/Bookmark";
import Refresh from "@material-ui/icons/Refresh";
import Receipt from "@material-ui/icons/Receipt";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import CardAvatar from "/components/Card/CardAvatar.js";
import Info from "/components/Typography/Info.js";
import Danger from "/components/Typography/Danger.js";
import Success from "/components/Typography/Success.js";
import Warning from "/components/Typography/Warning.js";
import Rose from "/components/Typography/Rose.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js";

const useStyles = makeStyles(styles);

export default function SectionCards() {
  const [activeRotate1, setActiveRotate1] = React.useState("");
  const [activeRotate2, setActiveRotate2] = React.useState("");
  const [activeRotate3, setActiveRotate3] = React.useState("");
  const classes = useStyles();
  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  return (
    <div className="cd-section" id="cards">
      <div className={classes.sectionGray}>
        <div>
          {/* BLOG CARDS START */}
          <div>
            <div className={classes.container}>
              <div className={classes.title}>
                <h2>Cards</h2>
                <h3>Blog Cards</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6} lg={4}>
                  <Card blog>
                    <CardHeader image>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-blog1.jpg" alt="..." />
                        <div className={classes.cardTitleAbsolute}>
                          This Summer Will be Awesome
                        </div>
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-blog1.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody>
                      <Info>
                        <h6 className={classes.cardCategory}>FASHION</h6>
                      </Info>
                      <div className={classes.cardDescription}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth And I love you
                        like Kanye loves Kanye I love Rick Owens’ bed design but
                        the back is...
                      </div>
                    </CardBody>
                  </Card>
                  <Card color="info">
                    <CardBody color>
                      <h5 className={classes.cardCategorySocialWhite}>
                        <i className="fab fa-twitter" />
                        Twitter
                      </h5>
                      <h4 className={classes.cardTitleWhite}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          {'"'}You Don{"'"}t Have to Sacrifice Joy to Build a
                          Fabulous Business and Life{'"'}
                        </a>
                      </h4>
                    </CardBody>
                    <CardFooter>
                      <div className={classes.authorWhite}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            src="/img/faces/avatar.jpg"
                            alt="..."
                            className={classes.imgRaised + " " + classes.avatar}
                          />
                          <span>Tania Andrew</span>
                        </a>
                      </div>
                      <div
                        className={classes.statsWhite + " " + classes.mlAuto}
                      >
                        <Favorite />
                        2.4K ·
                        <Share />
                        45
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={4}>
                  <Card>
                    <CardBody>
                      <Danger>
                        <h6 className={classes.cardCategory}>
                          <TrendingUp /> TRENDING
                        </h6>
                      </Danger>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          To Grow Your Business Start Focusing on Your Employees
                        </a>
                      </h4>
                    </CardBody>
                    <CardFooter>
                      <div className={classes.author}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            src="/img/faces/christian.jpg"
                            alt="..."
                            className={classes.imgRaised + " " + classes.avatar}
                          />
                          <span>Lord Alex</span>
                        </a>
                      </div>
                      <div className={classes.stats + " " + classes.mlAuto}>
                        <Favorite />
                        345 ·
                        <ChatBubble />
                        45
                      </div>
                    </CardFooter>
                  </Card>
                  <Card blog>
                    <CardHeader image>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-blog2.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-blog2.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody>
                      <Success>
                        <h6 className={classes.cardCategory}>Legal</h6>
                      </Success>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          5 Common Legal Mistakes That Can Trip-Up Your Startup
                        </a>
                      </h4>
                      <p className={classes.cardDescription}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth And I love you
                        like Kanye loves Kanye I love Rick Owens’ bed design but
                        the back is...
                      </p>
                    </CardBody>
                    <CardFooter>
                      <div className={classes.author}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            src="/img/faces/marc.jpg"
                            alt="..."
                            className={classes.imgRaised + " " + classes.avatar}
                          />
                          <span>Mike John</span>
                        </a>
                      </div>
                      <div className={classes.stats + " " + classes.mlAuto}>
                        <Schedule />5 min read
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={4}>
                  <Card blog>
                    <CardHeader image>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/blog8.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: "url('/img/examples/blog8.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody>
                      <Danger>
                        <h6 className={classes.cardCategory}>
                          <TrendingUp /> TRENDING
                        </h6>
                      </Danger>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          To Grow Your Business Start Focusing on Your Employees
                        </a>
                      </h4>
                    </CardBody>
                    <CardFooter>
                      <div className={classes.author}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            src="/img/faces/marc.jpg"
                            alt="..."
                            className={classes.imgRaised + " " + classes.avatar}
                          />
                          <span>Mike John</span>
                        </a>
                      </div>
                      <div className={classes.stats + " " + classes.mlAuto}>
                        <Schedule />5 min read
                      </div>
                    </CardFooter>
                  </Card>
                  <Card color="success">
                    <CardBody color>
                      <h5 className={classes.cardCategorySocialWhite}>
                        <i className="far fa-newspaper" />
                        TechCrunch
                      </h5>
                      <h4 className={classes.cardTitleWhite}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          {'"'}Focus on Your Employees{'"'}
                        </a>
                      </h4>
                      <p className={classes.cardDescriptionWhite}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth And I love you
                        like Kanye loves Kanye I love Rick Owens’ bed design but
                        the back is...
                      </p>
                      <div
                        className={
                          classes.stats + " " + classes.justifyContentCenter
                        }
                      >
                        <Button color="white" round>
                          Read Article
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
          {/* BLOG CARDS END */}
          {/* PROFILE CARDS START */}
          <div>
            <div className={classes.container}>
              <div className={classes.title}>
                <h3>Profile Cards</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <Card profile>
                    <CardHeader image>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-profile4.jpg" alt="..." />
                        <div className={classes.cardTitleAbsolute}>
                          Tania Andrew
                        </div>
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-profile4.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody>
                      <Info>
                        <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                      </Info>
                      <p className={classes.cardDescription}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth And I love you
                        like Kanye loves Kanye I love Rick Owens’ bed design but
                        the back is...
                      </p>
                    </CardBody>
                    <CardFooter
                      profile
                      className={classes.justifyContentCenter}
                    >
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button justIcon simple color="instagram">
                        <i className="fab fa-instagram" />
                      </Button>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card profile>
                    <CardHeader image>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-profile1.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-profile1.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Alec Thompson</h4>
                      <h6
                        className={
                          classes.cardCategory + " " + classes.cardDescription
                        }
                      >
                        CEO / CO-FOUNDER
                      </h6>
                    </CardBody>
                    <CardFooter
                      profile
                      className={classes.justifyContentCenter}
                    >
                      <Button justIcon round color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon round color="facebook">
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button justIcon round color="google">
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card profile>
                    <CardAvatar profile>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src="/img/faces/marc.jpg" alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody>
                      <h6
                        className={
                          classes.cardCategory + " " + classes.cardDescription
                        }
                      >
                        CEO / CO-FOUNDER
                      </h6>
                      <h4 className={classes.cardTitle}>Alec Thompson</h4>
                      <p className={classes.cardDescription}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth And I love you
                        like Kanye loves Kanye I love Rick Owens’ bed design but
                        the back is...
                      </p>
                      <Button round color="info">
                        Follow
                      </Button>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
          {/* PROFILE CARDS END */}
          {/* PRODUCT CARDS START */}
          <div>
            <div className={classes.container}>
              <div className={classes.title}>
                <h3>Full Background Cards</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <Card
                    background
                    style={{
                      backgroundImage: "url('/img/examples/office1.jpg')"
                    }}
                  >
                    <CardBody background>
                      <h6 className={classes.cardCategoryWhite}>
                        PRODUCTIVITY APPS
                      </h6>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <h3 className={classes.cardTitleWhite}>
                          The Best Productivity Apps on Market
                        </h3>
                      </a>
                      <p className={classes.cardDescriptionWhite}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth And I love you
                        like Kanye loves Kanye I love Rick Owens’ bed design but
                        the back is...
                      </p>
                      <Button simple color="white">
                        <Subject /> Read Article
                      </Button>
                      <Button simple color="white">
                        <WatchLater /> Watch Later
                      </Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <Card
                    background
                    style={{
                      backgroundImage: "url('/img/examples/card-blog3.jpg')"
                    }}
                  >
                    <CardBody background>
                      <h6 className={classes.cardCategoryWhite}>MATERIALS</h6>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <h3 className={classes.cardTitleWhite}>
                          The Sculpture Where Details Matter
                        </h3>
                      </a>
                      <p className={classes.cardDescriptionWhite}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth And I love you
                        like Kanye loves Kanye I love Rick Owens’ bed design but
                        the back is...
                      </p>
                      <Button round color="danger">
                        <Subject /> Read Article
                      </Button>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
          {/* PRODUCT CARDS END */}
          {/* PRICING CARDS START */}
          <div>
            <div className={classes.container}>
              <div className={classes.title}>
                <h3>Pricing Cards</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6} lg={3}>
                  <Card pricing>
                    <CardBody pricing>
                      <h6
                        className={
                          classes.cardCategory +
                          " " +
                          classes.cardDescription +
                          " " +
                          classes.marginBottom20
                        }
                      >
                        SMALL COMPANY
                      </h6>
                      <div className={classes.iconWrapper}>
                        <People className={classes.iconInfo} />
                      </div>
                      <h3
                        className={
                          classes.cardTitle + " " + classes.marginTop30
                        }
                      >
                        $29
                      </h3>
                      <p className={classes.cardDescription}>
                        This is good if your company size is between 2 and 10
                        Persons.
                      </p>
                      <Button round color="info">
                        Choose plan
                      </Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={3}>
                  <Card pricing color="primary">
                    <CardBody pricing>
                      <div
                        className={
                          classes.iconWrapper + " " + classes.iconWrapperColor
                        }
                      >
                        <Business className={classes.iconWhite} />
                      </div>
                      <h3
                        className={
                          classes.cardTitleWhite + " " + classes.marginTop30
                        }
                      >
                        $69
                      </h3>
                      <p className={classes.cardDescriptionWhite}>
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
                  <Card
                    pricing
                    background
                    style={{
                      backgroundImage: "url('/img/examples/card-blog3.jpg')"
                    }}
                  >
                    <CardBody pricing background>
                      <h6 className={classes.cardCategoryFullWhite}>PREMIUM</h6>
                      <h1 className={classes.cardTitleWhite}>
                        <small>$</small>89
                      </h1>
                      <ul>
                        <li>
                          <b>100</b> Projects
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
                      <Button color="danger">Get Started</Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={3}>
                  <Card pricing>
                    <CardBody pricing>
                      <Success>
                        <h6 className={classes.cardCategory}>PLATINUM</h6>
                      </Success>
                      <h1 className={classes.cardTitle}>
                        <small>$</small>89
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
                      <Button color="primary" round>
                        Get Started
                      </Button>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
          {/* PRICING CARDS END */}
        </div>

        {/* MORPHING CARDS START */}
        <div id="morphingCards" className="cd-section">
          <div className={classes.container}>
            <div className={classes.title}>
              <h2>Morphing Cards</h2>
              <h3>Rotating Cards</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card background className={classes.cardRotate}>
                    <div
                      className={
                        classes.front + " " + classes.wrapperBackground
                      }
                      style={{
                        backgroundImage: "url('/img/examples/card-blog5.jpg')"
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h6 className={classes.cardCategoryWhite}>
                          Full Background Card
                        </h6>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <h3 className={classes.cardTitleWhite}>
                            This Background Card Will Rotate on Hover
                          </h3>
                        </a>
                        <p className={classes.cardDescriptionWhite}>
                          Don{"'"}t be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                      </CardBody>
                    </div>
                    <div
                      className={classes.back + " " + classes.wrapperBackground}
                      style={{
                        backgroundImage: "url('/img/examples/card-blog5.jpg')"
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>Manage Post</h5>
                        <p className={classes.cardDescriptionWhite}>
                          As an Admin, you have shortcuts to edit, view or
                          delete the posts.
                        </p>
                        <div className={classes.textCenter}>
                          <Button round justIcon color="info">
                            <Subject />
                          </Button>
                          <Button round justIcon color="success">
                            <Icon>mode_edit</Icon>
                          </Button>
                          <Button round justIcon color="danger">
                            <Delete />
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper" />
                            TechCrunch
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            This Card is Doing a Full Rotation on Hover...
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Don{"'"}t be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>Do more...</h5>
                        <p className={classes.cardDescription}>
                          You can read this article or share it with your
                          friends and family on different networks...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject /> Read
                          </Button>
                          <Button round justIcon color="twitter">
                            <i className="fab fa-twitter" />
                          </Button>
                          <Button round justIcon color="dribbble">
                            <i className="fab fa-dribbble" />
                          </Button>
                          <Button round justIcon color="facebook">
                            <i className="fab fa-facebook" />
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card color="rose" className={classes.cardRotate}>
                    <div className={classes.front + " " + classes.wrapperRose}>
                      <CardBody color className={classes.cardBodyRotate}>
                        <h5 className={classes.cardCategorySocialWhite}>
                          <i className="fab fa-dribbble" /> Dribbble
                        </h5>
                        <h4 className={classes.cardTitleWhite}>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            {'"'}Dribbble just acquired Crew, a very interesting
                            startup...{'"'}
                          </a>
                        </h4>
                        <p className={classes.cardDescriptionWhite}>
                          Don{"'"}t be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                      </CardBody>
                      <CardFooter>
                        <div className={classes.authorWhite}>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img
                              src="/img/faces/avatar.jpg"
                              alt="..."
                              className={
                                classes.imgRaised + " " + classes.avatar
                              }
                            />
                            <span>Tania Andrew</span>
                          </a>
                        </div>
                        <div
                          className={classes.statsWhite + " " + classes.mlAuto}
                        >
                          <Favorite />
                          2.4K ·
                          <Share />
                          45
                        </div>
                      </CardFooter>
                    </div>
                    <div className={classes.back + " " + classes.wrapperRose}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardCategorySocialWhite}>
                          <i className="fab fa-dribbble" /> Dribbble
                        </h5>
                        <h4 className={classes.cardTitleWhite}>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            {'"'}Dribbble just acquired Crew, a very interesting
                            startup...{'"'}
                          </a>
                        </h4>
                        <div>
                          <Button round color="white">
                            <Subject /> Read
                          </Button>
                          <Button simple color="white">
                            <Bookmark /> Bookmark
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.title}>
              <h3>Manual Rotating Cards</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div
                  className={
                    classes.rotatingCardContainer +
                    " " +
                    classes.manualRotate +
                    " " +
                    activeRotate1
                  }
                >
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        <Success>
                          <h5 className={classes.cardCategorySocial}>
                            <i className="far fa-newspaper" /> Manual Rotating
                            Card
                          </h5>
                        </Success>
                        <h4 className={classes.cardTitle}>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            {'"'}This card is doing a full rotation, click on
                            the rotate button{'"'}
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                          Don{"'"}t be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                        <div className={classes.textCenter}>
                          <Button
                            round
                            color="success"
                            onClick={() =>
                              setActiveRotate1(classes.activateRotate)
                            }
                          >
                            <Refresh /> Rotate
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>Do more...</h5>
                        <p className={classes.cardDescription}>
                          You can read this article or share it with your
                          friends and family on different networks...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject /> Read
                          </Button>
                          <Button round justIcon color="twitter">
                            <i className="fab fa-twitter" />
                          </Button>
                          <Button round justIcon color="dribbble">
                            <i className="fab fa-dribbble" />
                          </Button>
                          <Button round justIcon color="facebook">
                            <i className="fab fa-facebook" />
                          </Button>
                        </div>
                        <br />
                        <Button link onClick={() => setActiveRotate1("")}>
                          <Refresh /> Back...
                        </Button>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div
                  className={
                    classes.rotatingCardContainer +
                    " " +
                    classes.manualRotate +
                    " " +
                    activeRotate2
                  }
                >
                  <Card className={classes.cardRotate}>
                    <div
                      className={
                        classes.front + " " + classes.wrapperBackground
                      }
                      style={{
                        backgroundImage: "url('/img/examples/card-blog6.jpg')"
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h6 className={classes.cardCategoryWhite}>
                          Full Background Card
                        </h6>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <h3 className={classes.cardTitleWhite}>
                            This card is doing a full rotation, click on the
                            rotate button
                          </h3>
                        </a>
                        <p className={classes.cardDescriptionWhite}>
                          Don{"'"}t be scared of the truth because we need to
                          restart the human...
                        </p>
                        <div className={classes.textCenter}>
                          <Button
                            round
                            color="danger"
                            onClick={() =>
                              setActiveRotate2(classes.activateRotate)
                            }
                          >
                            <Refresh /> Rotate
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                    <div
                      className={classes.back + " " + classes.wrapperBackground}
                      style={{
                        backgroundImage: "url('/img/examples/card-blog6.jpg')"
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>Manage Post</h5>
                        <p className={classes.cardDescriptionWhite}>
                          As an Admin, you have shortcuts to edit, view or
                          delete the posts.
                        </p>
                        <div className={classes.textCenter}>
                          <Button round justIcon color="info">
                            <Subject />
                          </Button>
                          <Button round justIcon color="success">
                            <Icon>mode_edit</Icon>
                          </Button>
                          <Button round justIcon color="danger">
                            <Delete />
                          </Button>
                          <br />
                          <br />
                          <Button
                            round
                            color="danger"
                            onClick={() => setActiveRotate2("")}
                          >
                            <Refresh /> Back...
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div
                  className={
                    classes.rotatingCardContainer +
                    " " +
                    classes.manualRotate +
                    " " +
                    activeRotate3
                  }
                >
                  <Card className={classes.cardRotate}>
                    <div
                      className={classes.front + " " + classes.wrapperWarning}
                    >
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardCategorySocialWhite}>
                          <Receipt /> Manual Rotating Card
                        </h5>
                        <h4 className={classes.cardTitleWhite}>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            {'"'}This card is doing a full rotation, click on
                            the rotate button{'"'}
                          </a>
                        </h4>
                        <p className={classes.cardDescriptionWhite}>
                          Don{"'"}t be scared of the truth because we need to
                          restart the human foundation in truth And I love you
                          like Kanye loves Kanye I love Rick Owens’ bed design
                          but the back is...
                        </p>
                        <div className={classes.textCenter}>
                          <Button
                            round
                            color="white"
                            onClick={() =>
                              setActiveRotate3(classes.activateRotate)
                            }
                          >
                            <Refresh /> Rotate
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                    <div
                      className={classes.back + " " + classes.wrapperWarning}
                    >
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>Do more...</h5>
                        <p className={classes.cardDescriptionWhite}>
                          You can read this article or share it with your
                          friends and family on different networks...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="white">
                            <Subject /> Read
                          </Button>
                          <Button round justIcon color="white">
                            <i className="fab fa-twitter" />
                          </Button>
                          <Button round justIcon color="white">
                            <i className="fab fa-dribbble" />
                          </Button>
                          <Button round justIcon color="white">
                            <i className="fab fa-facebook" />
                          </Button>
                          <br />
                          <br />
                          <Button
                            round
                            color="white"
                            onClick={() => setActiveRotate3("")}
                          >
                            <Refresh /> Rotate
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/* MORPHING CARDS END */}
        {/* DYNAMIC COLORED SHADOWS START */}
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={7} md={7}>
              <div className={classes.title}>
                <h2>Dynamic Shadows™</h2>
                <h4>
                  Material Kit PRO is coming with the famous colored shadows.
                  That means each image from the cards is getting an unique
                  color shadow. You don{"'"}t have to do anything to activate
                  them, just enjoy the new look of your website.
                </h4>
                <br />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/examples/color1.jpg" alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: "url('/img/examples/color1.jpg')",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Warning>
                    <h6 className={classes.cardCategory}>DYNAMIC SHADOWS</h6>
                  </Warning>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      The image from this card is getting a yellow shadow
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/examples/color2.jpg" alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: "url('/img/examples/color2.jpg')",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Rose>
                    <h6 className={classes.cardCategory}>DYNAMIC SHADOWS</h6>
                  </Rose>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      The image from this card is getting a pink shadow
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card blog>
                <CardHeader image>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/examples/color3.jpg" alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: "url('/img/examples/color3.jpg')",
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody>
                  <Info>
                    <h6 className={classes.cardCategory}>DYNAMIC SHADOWS</h6>
                  </Info>
                  <h4 className={classes.cardTitle}>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      The image from this card is getting a blue shadow
                    </a>
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        {/* DYNAMIC COLORED SHADOWS END */}
      </div>
      <div className={classes.sectionWhite}>
        {/* BLOG PLAIN CARDS START */}
        <div>
          <div className={classes.container}>
            <div className={classes.title}>
              <h3>Plain Card</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <Card blog plain>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src="/img/examples/blog5.jpg" alt="..." />
                      <div className={classes.cardTitleAbsolute}>
                        This Summer Will be Awesome
                      </div>
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url('/img/examples/blog5.jpg')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody plain>
                    <Info>
                      <h6 className={classes.cardCategory}>FASHION</h6>
                    </Info>
                    <div className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth And I love you like
                      Kanye loves Kanye I love Rick Owens’ bed design but the
                      back is...
                    </div>
                  </CardBody>
                </Card>
                <Card color="info">
                  <CardBody color>
                    <h5 className={classes.cardCategorySocialWhite}>
                      <i className="fab fa-twitter" />
                      Twitter
                    </h5>
                    <h4 className={classes.cardTitleWhite}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        {'"'}You Don{"'"}t Have to Sacrifice Joy to Build a
                        Fabulous Business and Life{'"'}
                      </a>
                    </h4>
                  </CardBody>
                  <CardFooter>
                    <div className={classes.authorWhite}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          src="/img/faces/avatar.jpg"
                          alt="..."
                          className={classes.imgRaised + " " + classes.avatar}
                        />
                        <span>Tania Andrew</span>
                      </a>
                    </div>
                    <div className={classes.statsWhite + " " + classes.mlAuto}>
                      <Favorite />
                      2.4K ·
                      <Share />
                      45
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <Card blog plain>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src="/img/examples/blog1.jpg" alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url('/img/examples/blog1.jpg')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody plain>
                    <Success>
                      <h6 className={classes.cardCategory}>Legal</h6>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        5 Common Legal Mistakes That Can Trip-Up Your Startup
                      </a>
                    </h4>
                    <p className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth And I love you like
                      Kanye loves Kanye I love Rick Owens’ bed design but the
                      back is...
                    </p>
                  </CardBody>
                  <CardFooter plain>
                    <div className={classes.author}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          src="/img/faces/marc.jpg"
                          alt="..."
                          className={classes.imgRaised + " " + classes.avatar}
                        />
                        <span>Mike John</span>
                      </a>
                    </div>
                    <div className={classes.stats + " " + classes.mlAuto}>
                      <Schedule />5 min read
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <Card blog plain>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src="/img/examples/blog6.jpg" alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url('/img/examples/blog6.jpg')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody plain>
                    <Danger>
                      <h6 className={classes.cardCategory}>
                        <TrendingUp /> TRENDING
                      </h6>
                    </Danger>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        To Grow Your Business Start Focusing on Your Employees
                      </a>
                    </h4>
                  </CardBody>
                  <CardFooter plain>
                    <div className={classes.author}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          src="/img/faces/marc.jpg"
                          alt="..."
                          className={classes.imgRaised + " " + classes.avatar}
                        />
                        <span>Mike John</span>
                      </a>
                    </div>
                    <div className={classes.stats + " " + classes.mlAuto}>
                      <Schedule />5 min read
                    </div>
                  </CardFooter>
                </Card>
                <Card color="danger">
                  <CardBody color>
                    <h5 className={classes.cardCategorySocialWhite}>
                      <i className="far fa-newspaper" /> The Next Web
                    </h5>
                    <h4 className={classes.cardTitleWhite}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        {'"'}Focus on Your Employees{'"'}
                      </a>
                    </h4>
                    <p className={classes.cardDescriptionWhite}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth And I love you like
                      Kanye loves Kanye I love Rick Owens’ bed design but the
                      back is...
                    </p>
                    <div
                      className={
                        classes.stats + " " + classes.justifyContentCenter
                      }
                    >
                      <Button color="white" round>
                        Read Article
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/* BLOG PLAIN CARDS END */}
        {/* PROFILE PLAIN CARDS START */}
        <div>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <Card profile plain>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src="/img/examples/card-profile4.jpg" alt="..." />
                      <div className={classes.cardTitleAbsolute}>
                        Tania Andrew
                      </div>
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('/img/examples/card-profile4.jpg')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody plain>
                    <Info>
                      <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                    </Info>
                    <p className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth And I love you like
                      Kanye loves Kanye I love Rick Owens’ bed design but the
                      back is...
                    </p>
                  </CardBody>
                  <CardFooter
                    profile
                    plain
                    className={classes.justifyContentCenter}
                  >
                    <Button justIcon simple color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="dribbble">
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button justIcon simple color="instagram">
                      <i className="fab fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card profile plain>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src="/img/examples/card-profile1.jpg" alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('/img/examples/card-profile1.jpg')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                    <h6
                      className={
                        classes.cardCategory + " " + classes.cardDescription
                      }
                    >
                      CEO / CO-FOUNDER
                    </h6>
                  </CardBody>
                  <CardFooter
                    profile
                    plain
                    className={classes.justifyContentCenter}
                  >
                    <Button justIcon round color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon round color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button justIcon round color="google">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card profile plain>
                  <CardAvatar profile plain>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src="/img/faces/marc.jpg" alt="..." />
                    </a>
                  </CardAvatar>
                  <CardBody plain>
                    <h6
                      className={
                        classes.cardCategory + " " + classes.cardDescription
                      }
                    >
                      CEO / CO-FOUNDER
                    </h6>
                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                    <p className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth And I love you like
                      Kanye loves Kanye I love Rick Owens’ bed design but the
                      back is...
                    </p>
                    <Button round color="info">
                      Follow
                    </Button>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/* PROFILE PLAIN CARDS END */}
      </div>
    </div>
  );
}
