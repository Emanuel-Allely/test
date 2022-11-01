/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Footer from "/components/Footer/Footer.js";

import styles from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js";

const useStyles = makeStyles(styles);

export default function SectionFooter() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Footer Areas</h3>
        </div>
      </div>
      <div>
        <Footer
          theme="white"
          content={
            <div>
              <div className={classes.left}>
                <a
                  href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmkp-footer-components"
                  target="_blank"
                  className={classes.footerBrand}
                >
                  NextJS Material Kit PRO
                </a>
              </div>
              <div className={classes.pullCenter}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=njsmkp-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation?ref=njsmkp-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="http://blog.creative-tim.com/?ref=njsmkp-footer-components"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license?ref=njsmkp-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.rightLinks}>
                <ul>
                  <li>
                    <Button
                      href="https://twitter.com/CreativeTim?ref=creativetim"
                      target="_blank"
                      color="twitter"
                      justIcon
                      simple
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://dribbble.com/creativetim?ref=creativetim"
                      target="_blank"
                      color="dribbble"
                      justIcon
                      simple
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://instagram.com/CreativeTimOfficial?ref=creativetim"
                      target="_blank"
                      color="google"
                      justIcon
                      simple
                    >
                      <i className="fab fa-google-plus-g" />
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        <br />
        <br />
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=njsmkp-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation?ref=njsmkp-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="http://blog.creative-tim.com/?ref=njsmkp-footer-components"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license?ref=njsmkp-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a
                  href="https://www.creative-tim.com?ref=njsmkp-footer-components"
                  target="_blank"
                  className={classes.aClasses}
                >
                  Creative Tim
                </a>{" "}
                for a better web.
              </div>
            </div>
          }
        />
        <br />
        <br />
        <Footer
          theme="dark"
          content={
            <div>
              <div className={classes.left}>
                <a
                  href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmkp-footer-components"
                  target="_blank"
                  className={classes.footerBrand}
                >
                  NextJS Material Kit PRO
                </a>
              </div>
              <div className={classes.pullCenter}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="http://blog.creative-tim.com/?ref=njsmkp-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation?ref=njsmkp-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Presentation
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="#pablito"
                      onClick={(e) => e.preventDefault()}
                      className={classes.block}
                    >
                      Discover
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="#pablito"
                      onClick={(e) => e.preventDefault()}
                      className={classes.block}
                    >
                      Payment
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/contact-us?ref=njsmkp-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Contact us
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.rightLinks}>
                <ul>
                  <li>
                    <Button
                      href="https://twitter.com/CreativeTim?ref=creativetim"
                      target="_blank"
                      color="white"
                      justIcon
                      simple
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://dribbble.com/creativetim?ref=creativetim"
                      target="_blank"
                      color="white"
                      justIcon
                      simple
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://instagram.com/CreativeTimOfficial?ref=creativetim"
                      target="_blank"
                      color="white"
                      justIcon
                      simple
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        <br />
        <br />
        <Footer
          theme="dark"
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="#pablo"
                      className={classes.block}
                      onClick={(e) => e.preventDefault()}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="#pablo"
                      className={classes.block}
                      onClick={(e) => e.preventDefault()}
                    >
                      Presentation
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="#pablo"
                      className={classes.block}
                      onClick={(e) => e.preventDefault()}
                    >
                      Discover
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="#pablo"
                      className={classes.block}
                      onClick={(e) => e.preventDefault()}
                    >
                      Payment
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="#pablo"
                      className={classes.block}
                      onClick={(e) => e.preventDefault()}
                    >
                      Contact Us
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                Copyright &copy; {1900 + new Date().getYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=njsmkp-footer-components"
                  target="_blank"
                  className={classes.aClasses}
                >
                  Creative Tim
                </a>{" "}
                All Rights Reserved.
              </div>
            </div>
          }
        >
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <h5>About Us</h5>
              <p>
                Creative Tim is a startup that creates design tools that make
                the web development process faster and easier.{" "}
              </p>
              <p>
                We love the web and care deeply for how users interact with a
                digital product. We power businesses and individuals to create
                better looking web projects around the world.{" "}
              </p>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <h5>Social Feed</h5>
              <div className={classes.socialFeed}>
                <div>
                  <i className="fab fa-twitter" />
                  <p>How to handle ethical disagreements with your clients.</p>
                </div>
                <div>
                  <i className="fab fa-twitter" />
                  <p>The tangible benefits of designing at 1x pixel density.</p>
                </div>
                <div>
                  <i className="fab fa-facebook-square" />
                  <p>
                    A collection of 25 stunning sites that you can use for
                    inspiration.
                  </p>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <h5>Instagram Feed</h5>
              <div className={classes.galleryFeed}>
                <img
                  src="/img/faces/card-profile6-square.jpg"
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
                <img
                  src="/img/faces/christian.jpg"
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
                <img
                  src="/img/faces/card-profile4-square.jpg"
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
                <img
                  src="/img/faces/card-profile1-square.jpg"
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
                <img
                  src="/img/faces/marc.jpg"
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
                <img
                  src="/img/faces/kendall.jpg"
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
                <img
                  src="/img/faces/card-profile5-square.jpg"
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
                <img
                  src="/img/faces/card-profile1-square.jpg"
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
              </div>
            </GridItem>
          </GridContainer>
        </Footer>
        <br />
        <br />
        <Footer
          theme="white"
          content={
            <div className={classNames(classes.pullCenter, classes.copyRight)}>
              Copyright &copy; {1900 + new Date().getYear()}{" "}
              <a
                href="https://www.creative-tim.com?ref=njsmkp-footer-components"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              All Rights Reserved.
            </div>
          }
        >
          <div className={classes.footer}>
            <GridContainer>
              <GridItem xs={12} sm={2} md={2}>
                <h5>About Us</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#pablo">Blog</a>
                  </li>
                  <li>
                    <a href="#pablo">About us</a>
                  </li>
                  <li>
                    <a href="#pablo">Presentation</a>
                  </li>
                  <li>
                    <a href="#pablo">Contact Us</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Market</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#pablo">Sales FAQ</a>
                  </li>
                  <li>
                    <a href="#pablo">How to register</a>
                  </li>
                  <li>
                    <a href="#pablo">Sell goods</a>
                  </li>
                  <li>
                    <a href="#pablo">Receive Payment</a>
                  </li>
                  <li>
                    <a href="#pablo">Transactions issues</a>
                  </li>
                  <li>
                    <a href="#pablo">Affiliates program</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <h5>Social Feed</h5>
                <div className={classes.socialFeed}>
                  <div>
                    <i className="fab fa-twitter" />
                    <p>
                      How to handle ethical disagreements with your clients.
                    </p>
                  </div>
                  <div>
                    <i className="fab fa-twitter" />
                    <p>
                      The tangible benefits of designing at 1x pixel density.
                    </p>
                  </div>
                  <div>
                    <i className="fab fa-facebook-square" />
                    <p>
                      A collection of 25 stunning sites that you can use for
                      inspiration.
                    </p>
                  </div>
                </div>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <h5>Follow Us</h5>
                <ul className={classes.socialButtons}>
                  <li>
                    <Button justIcon simple href="#pablo" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                  </li>
                  <li>
                    <Button justIcon simple href="#pablo" color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>
                  </li>
                  <li>
                    <Button justIcon simple href="#pablo" color="dribbble">
                      <i className="fab fa-dribbble" />
                    </Button>
                  </li>
                  <li>
                    <Button justIcon simple href="#pablo" color="google">
                      <i className="fab fa-google-plus-g" />
                    </Button>
                  </li>
                  <li>
                    <Button justIcon simple href="#pablo" color="instagram">
                      <i className="fab fa-instagram" />
                    </Button>
                  </li>
                </ul>
                <h5>Numbers Don{"'"}t Lie</h5>
                <h4>
                  14.521 <small>Freelancers</small>
                </h4>
                <h4>
                  1.423.183 <small>Transactions</small>
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Footer>
        <br />
        <br />
        <Footer
          theme="white"
          content={
            <div>
              <ul className={classes.socialButtons}>
                <li>
                  <Button justIcon simple href="#pablo" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple href="#pablo" color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple href="#pablo" color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple href="#pablo" color="google">
                    <i className="fab fa-google-plus-g" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple href="#pablo" color="youtube">
                    <i className="fab fa-youtube" />
                  </Button>
                </li>
              </ul>
              <div
                className={classNames(classes.pullCenter, classes.copyRight)}
              >
                Copyright &copy; {1900 + new Date().getYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=njsmkp-footer-components"
                  target="_blank"
                >
                  Creative Tim
                </a>{" "}
                All Rights Reserved.
              </div>
            </div>
          }
        >
          <div className={classes.footer}>
            <GridContainer>
              <GridItem xs={12} sm={3} md={3}>
                <a href="#pablo">
                  <h5>Material Kit PRO</h5>
                </a>
                <p>
                  Probably the best UI Kit in the world! We know you{"'"}ve been
                  waiting for it, so don{"'"}t be shy!
                </p>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>About</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#pablo">Blog</a>
                  </li>
                  <li>
                    <a href="#pablo">About us</a>
                  </li>
                  <li>
                    <a href="#pablo">Presentation</a>
                  </li>
                  <li>
                    <a href="#pablo">Contact us</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Market</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#pablo">Sales FAQ</a>
                  </li>
                  <li>
                    <a href="#pablo">How to register</a>
                  </li>
                  <li>
                    <a href="#pablo">Sell Goods</a>
                  </li>
                  <li>
                    <a href="#pablo">Receive Payment</a>
                  </li>
                  <li>
                    <a href="#pablo">Transactions Issues</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Legal</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#pablo">Transactions FAQ</a>
                  </li>
                  <li>
                    <a href="#pablo">Terms & conditions</a>
                  </li>
                  <li>
                    <a href="#pablo">Licenses</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={3} md={3}>
                <h5>Subscribe to Newsletter</h5>
                <p>
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
                </p>
                <form>
                  <CustomInput
                    id="footeremail"
                    formControlProps={{
                      fullWidth: false,
                      className: classes.customFormControl
                    }}
                    inputProps={{
                      placeholder: "Your Email..."
                    }}
                  />
                  <Button color="primary" justIcon>
                    <Mail />
                  </Button>
                </form>
              </GridItem>
            </GridContainer>
          </div>
        </Footer>
      </div>
    </div>
  );
}
