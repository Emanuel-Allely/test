/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Parallax from "/components/Parallax/Parallax.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
// sections for this page
import SectionBasics from "/pages-sections/components/SectionBasics.js";
import SectionNavbars from "/pages-sections/components/SectionNavbars.js";
import SectionTabs from "/pages-sections/components/SectionTabs.js";
import SectionPills from "/pages-sections/components/SectionPills.js";
import SectionNotifications from "/pages-sections/components/SectionNotifications.js";
import SectionPreFooter from "/pages-sections/components/SectionPreFooter.js";
import SectionFooter from "/pages-sections/components/SectionFooter.js";
import SectionTypography from "/pages-sections/components/SectionTypography.js";
import SectionCards from "/pages-sections/components/SectionCards.js";
import SectionJavascript from "/pages-sections/components/SectionJavascript.js";
import SectionCarousel from "/pages-sections/components/SectionCarousel.js";

import componentsStyle from "/styles/jss/nextjs-material-kit-pro/pages/componentsStyle.js";

const useStyles = makeStyles(componentsStyle);

export default function Components() {
  React.useEffect(() => {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (window.location.href.lastIndexOf("#") > 0) {
      document.getElementById(href).scrollIntoView();
    }
    window.addEventListener("scroll", updateView);
    updateView();
    return function cleanup() {
      window.removeEventListener("scroll", updateView);
    };
  });
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  const updateView = () => {
    var contentSections = document.getElementsByClassName("cd-section");
    var navigationItems = document
      .getElementById("cd-vertical-nav")
      .getElementsByTagName("a");

    for (let i = 0; i < contentSections.length; i++) {
      var activeSection =
        parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      if (
        contentSections[i].offsetTop -
          window.innerHeight / 2 +
          document.getElementById("main-panel").offsetTop <
          window.pageYOffset &&
        contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 +
          document.getElementById("main-panel").offsetTop >
          window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add("is-selected");
      } else {
        navigationItems[activeSection].classList.remove("is-selected");
      }
    }
  };
  const smoothScroll = (target) => {
    var targetScroll = document.getElementById(target);
    scrollTo(document.documentElement, targetScroll.offsetTop, 900);
  };
  const scrollTo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start + document.getElementById("main-panel").offsetTop,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="NextJS Material Kit PRO"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
      />
      <Parallax image="/img/nextjs_header.jpg" className={classes.parallax}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  NextJS Material Kit{" "}
                  <span className={classes.proBadge}>PRO</span>
                </h1>
                <h3 className={classes.title}>All Components</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div
        className={classNames(classes.main, classes.mainRaised)}
        id="main-panel"
      >
        <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <div
          className={classNames(
            classes.section,
            classes.sectionGray,
            "cd-section"
          )}
          id="footers"
        >
          <SectionPreFooter />
          <SectionFooter />
        </div>
        <SectionTypography />
        <SectionCards />
        <SectionJavascript />
        <SectionCarousel />
      </div>
      <nav id="cd-vertical-nav">
        <ul>
          <li>
            <a
              href="#buttons"
              data-number="1"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("buttons");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Basic Elements</span>
            </a>
          </li>
          <li>
            <a
              href="#navigation"
              data-number="2"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("navigation");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Navigation</span>
            </a>
          </li>
          <li>
            <a
              href="#notifications"
              data-number="3"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("notifications");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Notifications</span>
            </a>
          </li>
          <li>
            <a
              href="#footers"
              data-number="4"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("footers");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Footers</span>
            </a>
          </li>
          <li>
            <a
              href="#typography"
              data-number="5"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("typography");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Typography</span>
            </a>
          </li>
          <li>
            <a
              href="#contentAreas"
              data-number="6"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("contentAreas");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Content Areas</span>
            </a>
          </li>
          <li>
            <a
              href="#cards"
              data-number="7"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("cards");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Cards</span>
            </a>
          </li>
          <li>
            <a
              href="#morphingCards"
              data-number="8"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("morphingCards");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Morphing Cards</span>
            </a>
          </li>
          <li>
            <a
              href="#pablo"
              data-number="9"
              className=""
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("javascriptComponents");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Javascript</span>
            </a>
          </li>
        </ul>
      </nav>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=njsmkp-components"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=njsmkp-components"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="http://blog.creative-tim.com/?ref=njsmkp-components"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=njsmkp-components"
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
                href="https://www.creative-tim.com?ref=njsmkp-components"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
