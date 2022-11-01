import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import Button from "/components/CustomButtons/Button.js";
import CustomInput from "/components/CustomInput/CustomInput.js";

import sectionSubscribeLineStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionSubscribeLineStyle.js";

const useStyles = makeStyles(sectionSubscribeLineStyle);

export default function SubscribeLine() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <h3 className={classes.title}>Get Tips & Tricks every Week!</h3>
            <p className={classes.description}>
              Join our newsletter and get news in your inbox every week! We hate
              spam too, so no worries about this.
            </p>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card plain className={classes.cardClasses}>
              <CardBody formHorizontal plain>
                <form>
                  <GridContainer>
                    <GridItem
                      xs={12}
                      sm={8}
                      md={8}
                      className={classes.alignItemsCenter}
                    >
                      <CustomInput
                        id="subscribe"
                        formControlProps={{
                          fullWidth: true,
                          className: classes.formControl
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Mail className={classes.icon} />
                            </InputAdornment>
                          ),
                          placeholder: "Your Email..."
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4} md={4}>
                      <Button round block color="primary">
                        Subscribe
                      </Button>
                    </GridItem>
                  </GridContainer>
                </form>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
