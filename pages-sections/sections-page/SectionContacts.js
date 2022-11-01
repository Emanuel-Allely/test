import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Button from "/components/CustomButtons/Button.js";

import contactsStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/contactsStyle.js";

const useStyles = makeStyles(contactsStyle);

const RegularMap = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "44.43353";
    let lng = "26.093928";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 14,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "water",
          stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: "#0088ff" }]
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [{ hue: "#ff0000" }, { saturation: -100 }, { lightness: 99 }]
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#808080" }, { lightness: 54 }]
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.fill",
          stylers: [{ color: "#ece2d9" }]
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [{ color: "#ccdca1" }]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#767676" }]
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#ffffff" }]
        },
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        {
          featureType: "landscape.natural",
          elementType: "geometry.fill",
          stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
        },
        { featureType: "poi.park", stylers: [{ visibility: "on" }] },
        {
          featureType: "poi.sports_complex",
          stylers: [{ visibility: "on" }]
        },
        { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
        {
          featureType: "poi.business",
          stylers: [{ visibility: "simplified" }]
        }
      ]
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "NextJS Material Kit PRO!"
    });

    const contentString =
      '<div class="info-window-content"><h2>NextJS Material Kit PRO</h2>' +
      "<p>A premium Admin for React, Material-UI, and React Hooks.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
  return (
    <>
      <div
        style={{
          height: `100%`,
          borderRadius: "6px",
          overflow: "hidden"
        }}
        ref={mapRef}
      ></div>
    </>
  );
};

export default function SectionContacts({ ...rest }) {
  const [checked, setChecked] = React.useState([]);
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
    <div className="cd-section" {...rest}>
      {/* Contact us 1 START */}
      <div
        className={classes.contacts + " " + classes.section}
        style={{ backgroundImage: "url('/img/examples/city.jpg')" }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5}>
              <h2 className={classes.title}>Get in Touch</h2>
              <h5 className={classes.description}>
                You need more information? Check what other persons are saying
                about our product. They are very happy with their purchase.
              </h5>
              <InfoArea
                className={classes.infoArea}
                title="Find us at the office"
                description={
                  <span>
                    Bld Mihail Kogalniceanu, nr. 8,
                    <br /> 7652 Bucharest,
                    <br /> Romania
                  </span>
                }
                icon={PinDrop}
              />
              <InfoArea
                className={classes.infoArea}
                title="Give us a ring"
                description={
                  <span>
                    Michael Jordan
                    <br /> +40 762 321 762
                    <br /> Mon - Fri, 8:00-22:00
                  </span>
                }
                icon={Phone}
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card className={classes.card1}>
                <form>
                  <CardHeader
                    contact
                    color="primary"
                    className={classes.textCenter}
                  >
                    <h4 className={classes.cardTitle}>Contact Us</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="First Name"
                          id="first"
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          labelText="Last Name"
                          id="last"
                          formControlProps={{
                            fullWidth: true
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText="Email Address"
                      id="email-address"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      labelText="Your Message"
                      id="message"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => handleToggle(1)}
                          checkedIcon={
                            <Check className={classes.checkedIcon} />
                          }
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                          }}
                        />
                      }
                      classes={{ label: classes.label }}
                      label="I'm not a robot"
                    />
                    <Button color="primary" className={classes.pullRight}>
                      Send Message
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Contact us 1 END */}
      {/* Contact us 2 START */}
      <div className={classes.contacts2}>
        <div className={classes.map}>
          <RegularMap />
        </div>
        <GridItem xs={12} sm={6} md={6}>
          <Card className={classes.card2}>
            <form>
              <CardHeader contact color="rose" className={classes.textCenter}>
                <h4 className={classes.cardTitle}>Contact Us</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <InfoArea
                      className={classes.infoArea2}
                      title="Give us a ring"
                      description={
                        <span>
                          Michael Jordan
                          <br /> +40 762 321 762
                          <br /> Mon - Fri, 8:00-22:00
                        </span>
                      }
                      icon={Phone}
                      iconColor="rose"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <InfoArea
                      className={classes.infoArea2}
                      title="Find us at the office"
                      description={
                        <span>
                          Bld Mihail Kogalniceanu, nr. 8,
                          <br /> 7652 Bucharest,
                          <br /> Romania
                        </span>
                      }
                      icon={PinDrop}
                      iconColor="rose"
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <CustomInput
                      labelText="Full Name"
                      id="first2"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <CustomInput
                      labelText="Email Address"
                      id="email-address2"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <CustomInput
                  labelText="Your Message"
                  id="message2"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
              </CardBody>
              <CardFooter className={classes.justifyContentBetween}>
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(2)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{ label: classes.label }}
                  label="I'm not a robot"
                />
                <Button color="rose" className={classes.pullRight}>
                  Send Message
                </Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </div>
      {/* Contact us 2 END */}
    </div>
  );
}
