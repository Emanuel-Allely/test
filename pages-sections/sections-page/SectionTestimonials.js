import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FormatQuote from "@material-ui/icons/FormatQuote";
import Star from "@material-ui/icons/Star";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import CardAvatar from "/components/Card/CardAvatar.js";
import Muted from "/components/Typography/Muted.js";
import Warning from "/components/Typography/Warning.js";

import testimonialsStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/testimonialsStyle.js";

const useStyles = makeStyles(testimonialsStyle);

export default function SectionTestimonials({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className="cd-section" {...rest}>
      {/* Testimonials 1 START */}
      <div
        className={classes.testimonials + " " + classes.sectionImage}
        style={{ backgroundImage: "url('/img/dg2.jpg')" }}
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
              <h2 className={classes.title}>Our Clients Love Us</h2>
              <h5 className={classes.description}>
                You need more information? Check what other persons are saying
                about our product. They are very happy with their purchase.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial className={classes.card1}>
                <div className={classes.icon}>
                  <FormatQuote />
                </div>
                <CardBody>
                  <h5 className={classes.cardDescription}>
                    Your products, all the kits that I have downloaded from your
                    site and worked with are sooo cool! I love the color
                    mixtures, cards... everything. Keep up the great work!
                  </h5>
                </CardBody>
                <CardFooter testimonial>
                  <h4 className={classes.cardTitle}>Alec Thompson</h4>
                  <h6 className={classes.cardCategory}>@ALECTHOMPSON</h6>
                  <CardAvatar testimonial testimonialFooter>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        src="/img/faces/card-profile1-square.jpg"
                        alt="..."
                      />
                    </a>
                  </CardAvatar>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial className={classes.card1}>
                <div className={classes.icon}>
                  <FormatQuote />
                </div>
                <CardBody>
                  <h5 className={classes.cardDescription}>
                    {'"'}Don{"'"}t be scared of the truth because we need to
                    restart the human foundation in truth. That{"'"}s why I love
                    you like Kanye loves Kanye I love Rick Owens’ bed design but
                    the back is not so attractive{'"'}
                  </h5>
                </CardBody>
                <CardFooter testimonial>
                  <h4 className={classes.cardTitle}>Gina Andrew</h4>
                  <h6 className={classes.cardCategory}>@GINAANDREW</h6>
                  <CardAvatar testimonial testimonialFooter>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        src="/img/faces/card-profile4-square.jpg"
                        alt="..."
                      />
                    </a>
                  </CardAvatar>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial className={classes.card1}>
                <div className={classes.icon}>
                  <FormatQuote />
                </div>
                <CardBody>
                  <h5 className={classes.cardDescription}>
                    {'"'}Your products, all the kits that I have downloaded from
                    your site and worked with are sooo cool! I love the color
                    mixtures, cards... everything. Keep up the great work!{'"'}
                  </h5>
                </CardBody>
                <CardFooter testimonial>
                  <h4 className={classes.cardTitle}>George West</h4>
                  <h6 className={classes.cardCategory}>@GEORGEWEST</h6>
                  <CardAvatar testimonial testimonialFooter>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        src="/img/faces/card-profile2-square.jpg"
                        alt="..."
                      />
                    </a>
                  </CardAvatar>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Testimonials 1 END */}
      {/* Testimonials 2 START */}
      <div
        className={
          classes.testimonials +
          " " +
          classes.sectionDark +
          " " +
          classes.testimonial2
        }
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Carousel {...settings}>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src="/img/faces/kendall.jpg" alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        {'"'}I speak yell scream directly at the old guard on
                        behalf of the future. I gotta say at that time I’d like
                        to meet Kanye I speak yell scream directly at the old
                        guard on behalf of the future. My brother Chance!!!
                        <br />
                        Thank you for letting me work on this masterpiece. One
                        of my favorite people.{'"'}
                      </h5>
                      <h4 className={classes.cardTitle}>Kendall Thompson</h4>
                      <Muted>
                        <h6>CEO @ Marketing Digital Ltd.</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                    </div>
                  </Card>
                </div>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src="/img/faces/christian.jpg" alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        {'"'}Thank you Anna for the invite thank you to the
                        whole Vogue team Called I Miss the Old Kanye At the God
                        {"'"}s last game Chop up the soul Kanye. I promise I
                        will never let the people down. I want a better life for
                        all!!! Pablo Pablo Pablo Pablo! Thank you Anna for the
                        invite thank you to the whole Vogue team.{'"'}
                      </h5>
                      <h4 className={classes.cardTitle}>Christian Louboutin</h4>
                      <Muted>
                        <h6>Designer @ Louboutin & Co.</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                    </div>
                  </Card>
                </div>
              </Carousel>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Testimonials 2 END */}
      {/* Testimonials 3 START */}
      <div className={classes.testimonials}>
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
              <h2 className={classes.title}>What Clients Say</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/faces/card-profile1-square.jpg" alt="..." />
                  </a>
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Mike Andrew</h4>
                  <Muted>
                    <h6>CEO @ MARKETING DIGITAL LTD.</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    {'"'}I speak yell scream directly at the old guard on behalf
                    of the future. I gotta say at that time I’d like to meet
                    Kanye I speak yell scream directly at the old guard on
                    behalf of the future.{'"'}
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/faces/card-profile4-square.jpg" alt="..." />
                  </a>
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Tina Thompson</h4>
                  <Muted>
                    <h6>MARKETING @ APPLE INC.</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    {'"'}I promise I will never let the people down. I want a
                    better life for all!!! Pablo Pablo Pablo Pablo! Thank you
                    Anna for the invite thank you to the whole Vogue team It
                    wasn’t any Kanyes I love Rick Owens’ bed design but the back
                    is too high for the beams and angle of the ceiling{'"'}
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/faces/card-profile6-square.jpg" alt="..." />
                  </a>
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Gina West</h4>
                  <Muted>
                    <h6>CFO @ APPLE INC.</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    {'"'}I{"'"}ve been trying to figure out the bed design for
                    the master bedroom at our Hidden Hills compound... Royère
                    doesn
                    {"'"}t make a Polar bear bed but the Polar bear. This is a
                    very nice testimonial about this company.{'"'}
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Testimonials 3 END */}
    </div>
  );
}
