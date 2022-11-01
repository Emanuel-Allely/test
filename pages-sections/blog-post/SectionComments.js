import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Reply from "@material-ui/icons/Reply";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Media from "/components/Media/Media.js";
import Button from "/components/CustomButtons/Button.js";
import CustomInput from "/components/CustomInput/CustomInput.js";

import sectionCommentsStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostSections/sectionCommentsStyle.js";

const useStyles = makeStyles(sectionCommentsStyle);

export default function SectionComments() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <div>
            <h3 className={classes.title}>3 Comments</h3>
            <Media
              avatar="/img/faces/card-profile4-square.jpg"
              title={
                <span>
                  Tina Andrew <small>· 7 minutes ago</small>
                </span>
              }
              body={
                <p className={classes.color555}>
                  Chance too good. God level bars. I{"'"}m so proud of
                  @LifeOfDesiigner #1 song in the country. Panda! Don{"'"}t be
                  scared of the truth because we need to restart the human
                  foundation in truth I stand with the most humility. We are so
                  blessed!
                </p>
              }
              footer={
                <div>
                  <Tooltip
                    id="tooltip-tina"
                    title="Reply to comment"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      color="primary"
                      simple
                      className={classes.footerButtons}
                    >
                      <Reply className={classes.footerIcons} /> Reply
                    </Button>
                  </Tooltip>

                  <Button
                    color="danger"
                    simple
                    className={classes.footerButtons}
                  >
                    <Favorite className={classes.footerIcons} /> 243
                  </Button>
                </div>
              }
            />
            <Media
              avatar="/img/faces/card-profile1-square.jpg"
              title={
                <span>
                  John Camber <small>· Yesterday</small>
                </span>
              }
              body={
                <span className={classes.color555}>
                  <p>
                    Hello guys, nice to have you on the platform! There will be
                    a lot of great stuff coming soon. We will keep you posted
                    for the latest news.
                  </p>
                  <p>
                    Don{"'"}t forget, You{"'"}re Awesome!
                  </p>
                </span>
              }
              footer={
                <div>
                  <Tooltip
                    id="tooltip-john"
                    title="Reply to comment"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      color="primary"
                      simple
                      className={classes.footerButtons}
                    >
                      <Reply className={classes.footerIcons} /> Reply
                    </Button>
                  </Tooltip>

                  <Button link className={classes.footerButtons}>
                    <Favorite className={classes.footerIcons} /> 25
                  </Button>
                </div>
              }
              innerMedias={[
                <Media
                  key={Date.now()}
                  avatar="/img/faces/card-profile4-square.jpg"
                  title={
                    <span>
                      Tina Andrew <small>· 12 Hours Ago</small>
                    </span>
                  }
                  body={
                    <span className={classes.color555}>
                      <p>
                        Hello guys, nice to have you on the platform! There will
                        be a lot of great stuff coming soon. We will keep you
                        posted for the latest news.
                      </p>
                      <p>
                        Don{"'"}t forget, You{"'"}re Awesome!
                      </p>
                    </span>
                  }
                  footer={
                    <Tooltip
                      id="tooltip-tina2"
                      title="Reply to comment"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        color="primary"
                        simple
                        className={classes.footerButtons}
                      >
                        <Reply className={classes.footerIcons} /> Reply
                      </Button>
                    </Tooltip>
                  }
                />
              ]}
            />
          </div>
          <h3 className={classes.title}>Post your comment</h3>
          <Media
            avatar="/img/faces/card-profile6-square.jpg"
            body={
              <CustomInput
                labelText=" Write some nice stuff or nothing..."
                id="nice"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
            }
            footer={
              <Button color="primary" round className={classes.footerButtons}>
                Post comment
              </Button>
            }
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
