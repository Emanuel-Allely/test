import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Cached from "@material-ui/icons/Cached";
import Subject from "@material-ui/icons/Subject";
import Check from "@material-ui/icons/Check";
// core components
import Accordion from "/components/Accordion/Accordion.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import Button from "/components/CustomButtons/Button.js";
import Clearfix from "/components/Clearfix/Clearfix.js";

import styles from "/styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionProducts() {
  const [checked, setChecked] = React.useState([1, 9, 27]);
  const [priceRange, setPriceRange] = React.useState([101, 790]);
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: priceRange,
        connect: true,
        range: { min: 30, max: 900 },
        step: 1
      }).on("update", function (values) {
        setPriceRange([Math.round(values[0]), Math.round(values[1])]);
      });
    }
    return function cleanup() {};
  });
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Find what you need</h2>
        <GridContainer>
          <GridItem md={3} sm={3}>
            <Card plain>
              <CardBody className={classes.cardBodyRefine}>
                <h4 className={classes.cardTitle + " " + classes.textLeft}>
                  Refine
                  <Tooltip
                    id="tooltip-top"
                    title="Reset Filter"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      link
                      justIcon
                      size="sm"
                      className={classes.pullRight + " " + classes.refineButton}
                    >
                      <Cached />
                    </Button>
                  </Tooltip>
                  <Clearfix />
                </h4>
                <Accordion
                  active={[0, 2]}
                  activeColor="rose"
                  collapses={[
                    {
                      title: "Price Range",
                      content: (
                        <CardBody className={classes.cardBodyRefine}>
                          <span
                            className={classNames(
                              classes.pullLeft,
                              classes.priceSlider
                            )}
                          >
                            €{priceRange[0]}
                          </span>
                          <span
                            className={classNames(
                              classes.pullRight,
                              classes.priceSlider
                            )}
                          >
                            €{priceRange[1]}
                          </span>
                          <br />
                          <br />
                          <div id="sliderRegular" className="slider-rose" />
                        </CardBody>
                      )
                    },
                    {
                      title: "Clothing",
                      content: (
                        <div className={classes.customExpandPanel}>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(1)}
                                  checked={
                                    checked.indexOf(1) !== -1 ? true : false
                                  }
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Blazers"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(2)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Casual Shirts"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(3)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Formal Shirts"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(4)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Jeans"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(5)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Polos"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(6)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Pyjamas"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(7)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Shorts"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(8)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Trousers"
                            />
                          </div>
                        </div>
                      )
                    },
                    {
                      title: "Designer",
                      content: (
                        <div className={classes.customExpandPanel}>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(9)}
                                  checked={
                                    checked.indexOf(9) !== -1 ? true : false
                                  }
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="All"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(10)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Polo Ralph Lauren"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(11)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Wooyoungmi"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(12)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Alexander McQueen"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(13)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Tom Ford"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(14)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="AMI"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(15)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Berena"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(16)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Thom Sweeney"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(17)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Burberry Prorsum"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(18)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Calvin Klein"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(19)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Kingsman"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(20)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Club Monaco"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(21)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Dolce & Gabbana"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(22)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Gucci"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(23)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Biglioli"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(24)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Lanvin"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(25)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Loro Piana"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(26)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Massimo Alba"
                            />
                          </div>
                        </div>
                      )
                    },
                    {
                      title: "Colour",
                      content: (
                        <div className={classes.customExpandPanel}>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(27)}
                                  checked={
                                    checked.indexOf(27) !== -1 ? true : false
                                  }
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="All"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(28)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Black"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(29)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Blue"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(30)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Brown"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(31)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Gray"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(32)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Green"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(33)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Neutrals"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  disableRipple
                                  tabIndex={-1}
                                  onClick={() => handleToggle(34)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Purple"
                            />
                          </div>
                        </div>
                      )
                    }
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={9} sm={9}>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src="/img/examples/suit-1.jpg" alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Polo Ralph Lauren</h4>
                    </a>
                    <p className={classes.description}>
                      Impeccably tailored in Italy from lightweight navy wool.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €800</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src="/img/examples/suit-2.jpg" alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Wooyoungmi</h4>
                    </a>
                    <p className={classes.description}>
                      Dark-grey slub wool, pintucked notch lapels.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €555</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src="/img/examples/suit-3.jpg" alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Tom Ford</h4>
                    </a>
                    <p className={classes.description}>
                      Immaculate tailoring is TOM FORD{"'"}s forte.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €879</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src="/img/examples/suit-4.jpg" alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Thom Sweeney</h4>
                    </a>
                    <p className={classes.description}>
                      It{"'"}s made from lightweight grey wool woven.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €680</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src="/img/examples/suit-5.jpg" alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Kingsman</h4>
                    </a>
                    <p className={classes.description}>
                      Crafted from khaki cotton and fully canvassed.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €725</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Saved to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain product>
                  <CardHeader noShadow image>
                    <a href="#pablo">
                      <img src="/img/examples/suit-6.jpg" alt=".." />
                    </a>
                  </CardHeader>
                  <CardBody plain>
                    <a href="#pablo">
                      <h4 className={classes.cardTitle}>Boglioli</h4>
                    </a>
                    <p className={classes.description}>
                      Masterfully crafted in Northern Italy.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentBetween}>
                    <div className={classes.priceContainer}>
                      <span className={classes.price}> €699</span>
                    </div>
                    <Tooltip
                      id="tooltip-top"
                      title="Save to Wishlist"
                      placement="left"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        justIcon
                        simple
                        color="rose"
                        className={classes.pullRight}
                      >
                        <FavoriteBorder />
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem
                md={3}
                sm={3}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <Button round color="rose">
                  Load more...
                </Button>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <br />
        <h2>News in fashion</h2>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <Card
              background
              style={{ backgroundImage: "url('/img/examples/color1.jpg')" }}
            >
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Productivity Apps
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    The best trends in fashion {new Date().getFullYear()}
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card
              background
              style={{ backgroundImage: "url('/img/examples/color3.jpg')" }}
            >
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  FASHION NEWS
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    Kanye joins the Yeezy team at Adidas
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card
              background
              style={{ backgroundImage: "url('/img/examples/color2.jpg')" }}
            >
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Productivity Apps
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    Learn how to use the new colors of{" "}
                    {new Date().getFullYear()}
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: "url('/img/dg3.jpg')" }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Tutorials
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    Trending colors of {new Date().getFullYear()}
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: "url('/img/dg1.jpg')" }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Productivity Style
                </h6>
                <a href="#pablo">
                  <h3 className={classes.cardTitle}>
                    Fashion & Style {new Date().getFullYear()}
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href="#" round color="white">
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
