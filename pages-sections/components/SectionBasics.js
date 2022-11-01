import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// react component plugin for creating beatiful tags on an input
import TagsInput from "react-tagsinput";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import CustomLinearProgress from "/components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "/components/Pagination/Pagination.js";
import Badge from "/components/Badge/Badge.js";
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";

import basicsStyle from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(basicsStyle);

export default function SectionBasics() {
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const [multipleSelect, setMultipleSelect] = React.useState([]);
  const [tags, setTags] = React.useState([
    "amsterdam",
    "washington",
    "sydney",
    "beijing"
  ]);
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
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
  const handleSimple = (event) => {
    setSimpleSelect(event.target.value);
  };
  const handleMultiple = (event) => {
    setMultipleSelect(event.target.value);
  };
  const handleTags = (regularTags) => {
    setTags(regularTags);
  };
  const classes = useStyles();
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Basic Elements</h2>
        </div>
        <div id="buttons" className="cd-section">
          <div className={classes.title}>
            <h3>
              Buttons
              <br />
              <small>Pick your style</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={8}>
              <Button color="primary">Default</Button>
              <Button color="primary" round>
                round
              </Button>
              <Button color="primary" round>
                <Favorite className={classes.icons} /> with icon
              </Button>
              <Button color="primary" justIcon round>
                <Favorite />
              </Button>
              <Button color="primary" simple>
                simple
              </Button>
            </GridItem>
          </GridContainer>
          <div className={classes.title}>
            <h3>
              <small>Pick your size</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={8}>
              <Button color="primary" size="sm">
                Small
              </Button>
              <Button color="primary">Regular</Button>
              <Button color="primary" size="lg">
                Large
              </Button>
            </GridItem>
          </GridContainer>
          <div className={classes.title}>
            <h3>
              <small>Pick your color</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={8}>
              <Button>Default</Button>
              <Button color="primary">Primary</Button>
              <Button color="info">Info</Button>
              <Button color="success">Success</Button>
              <Button color="warning">Warning</Button>
              <Button color="danger">Danger</Button>
              <Button color="rose">Rose</Button>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space50} />
        <div id="social-buttons">
          <div className={classes.title}>
            <h3>Social Buttons</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <h3>
                <small>Default</small>
              </h3>
              <Button color="twitter">
                <i className="fab fa-twitter" /> Connect with twitter
              </Button>
              <br />
              <Button color="facebook">
                <i className="fab fa-facebook-square" /> Share · 2.2k
              </Button>
              <br />
              <Button color="instagram">
                <i className="fab fa-instagram" /> Follow on instagram
              </Button>
              <br />
              <Button color="google">
                <i className="fab fa-google-plus-square" /> Share on Google+
              </Button>
              <br />
              <Button color="linkedin">
                <i className="fab fa-linkedin" /> Connect with linkedin
              </Button>
              <br />
              <Button color="pinterest">
                <i className="fab fa-pinterest" /> Pint it · 212
              </Button>
              <br />
              <Button color="youtube">
                <i className="fab fa-youtube" /> View on youtube
              </Button>
              <br />
              <Button color="tumblr">
                <i className="fab fa-tumblr-square" /> Repost
              </Button>
              <br />
              <Button color="github">
                <i className="fab fa-github" /> Connect with github
              </Button>
              <br />
              <Button color="behance">
                <i className="fab fa-behance-square" /> Follow us
              </Button>
              <br />
              <Button color="dribbble">
                <i className="fab fa-dribbble" /> Find us on dribbble
              </Button>
              <br />
              <Button color="reddit">
                <i className="fab fa-reddit" /> Repost · 232
              </Button>
            </GridItem>
            <GridItem xs={6} sm={3} md={3} lg={1}>
              <h3>
                <small>&nbsp;</small>
              </h3>
              <Button color="twitter" justIcon>
                <i className="fab fa-twitter" />
              </Button>
              <br />
              <Button color="facebook" justIcon>
                <i className="fab fa-facebook-f" />
              </Button>
              <br />
              <Button color="instagram" justIcon>
                <i className="fab fa-instagram" />
              </Button>
              <br />
              <Button color="google" justIcon>
                <i className="fab fa-google" />
              </Button>
              <br />
              <Button color="linkedin" justIcon>
                <i className="fab fa-linkedin-in" />
              </Button>
              <br />
              <Button color="pinterest" justIcon>
                <i className="fab fa-pinterest" />
              </Button>
              <br />
              <Button color="youtube" justIcon>
                <i className="fab fa-youtube" />
              </Button>
              <br />
              <Button color="tumblr" justIcon>
                <i className="fab fa-tumblr" />
              </Button>
              <br />
              <Button color="github" justIcon>
                <i className="fab fa-github" />
              </Button>
              <br />
              <Button color="behance" justIcon>
                <i className="fab fa-behance" />
              </Button>
              <br />
              <Button color="dribbble" justIcon>
                <i className="fab fa-dribbble" />
              </Button>
              <br />
              <Button color="reddit" justIcon>
                <i className="fab fa-reddit" />
              </Button>
            </GridItem>
            <GridItem xs={6} sm={2} md={2} lg={1}>
              <h3>
                <small>&nbsp;</small>
              </h3>
              <Button color="twitter" round justIcon>
                <i className="fab fa-twitter" />
              </Button>
              <br />
              <Button color="facebook" round justIcon>
                <i className="fab fa-facebook-f" />
              </Button>
              <br />
              <Button color="instagram" round justIcon>
                <i className="fab fa-instagram" />
              </Button>
              <br />
              <Button color="google" round justIcon>
                <i className="fab fa-google" />
              </Button>
              <br />
              <Button color="linkedin" round justIcon>
                <i className="fab fa-linkedin-in" />
              </Button>
              <br />
              <Button color="pinterest" round justIcon>
                <i className="fab fa-pinterest" />
              </Button>
              <br />
              <Button color="youtube" round justIcon>
                <i className="fab fa-youtube" />
              </Button>
              <br />
              <Button color="tumblr" round justIcon>
                <i className="fab fa-tumblr" />
              </Button>
              <br />
              <Button color="github" round justIcon>
                <i className="fab fa-github" />
              </Button>
              <br />
              <Button color="behance" round justIcon>
                <i className="fab fa-behance" />
              </Button>
              <br />
              <Button color="dribbble" round justIcon>
                <i className="fab fa-dribbble" />
              </Button>
              <br />
              <Button color="reddit" round justIcon>
                <i className="fab fa-reddit" />
              </Button>
            </GridItem>
            <GridItem xs={4} sm={3} md={3} lg={1}>
              <h3>
                <small>Simple</small>
              </h3>
              <Button color="twitter" round justIcon simple>
                <i className="fab fa-twitter" />
              </Button>
              <br />
              <Button color="facebook" round justIcon simple>
                <i className="fab fa-facebook-f" />
              </Button>
              <br />
              <Button color="instagram" round justIcon simple>
                <i className="fab fa-instagram" />
              </Button>
              <br />
              <Button color="google" round justIcon simple>
                <i className="fab fa-google" />
              </Button>
              <br />
              <Button color="linkedin" round justIcon simple>
                <i className="fab fa-linkedin-in" />
              </Button>
              <br />
              <Button color="pinterest" round justIcon simple>
                <i className="fab fa-pinterest" />
              </Button>
              <br />
              <Button color="youtube" round justIcon simple>
                <i className="fab fa-youtube" />
              </Button>
              <br />
              <Button color="tumblr" round justIcon simple>
                <i className="fab fa-tumblr" />
              </Button>
              <br />
              <Button color="github" round justIcon simple>
                <i className="fab fa-github" />
              </Button>
              <br />
              <Button color="behance" round justIcon simple>
                <i className="fab fa-behance" />
              </Button>
              <br />
              <Button color="dribbble" round justIcon simple>
                <i className="fab fa-dribbble" />
              </Button>
              <br />
              <Button color="reddit" round justIcon simple>
                <i className="fab fa-reddit" />
              </Button>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <h3>
                <small>&nbsp;</small>
              </h3>
              <Button color="twitter" simple>
                <i className="fab fa-twitter" /> Connect with twitter
              </Button>
              <br />
              <Button color="facebook" simple>
                <i className="fab fa-facebook-square" /> Share · 2.2k
              </Button>
              <br />
              <Button color="instagram" simple>
                <i className="fab fa-instagram" /> Follow on instagram
              </Button>
              <br />
              <Button color="google" simple>
                <i className="fab fa-google-plus-square" /> Share on Google+
              </Button>
              <br />
              <Button color="linkedin" simple>
                <i className="fab fa-linkedin" /> Connect with linkedin
              </Button>
              <br />
              <Button color="pinterest" simple>
                <i className="fab fa-pinterest" /> Pint it · 212
              </Button>
              <br />
              <Button color="youtube" simple>
                <i className="fab fa-youtube" /> View on youtube
              </Button>
              <br />
              <Button color="tumblr" simple>
                <i className="fab fa-tumblr-square" /> Repost
              </Button>
              <br />
              <Button color="github" simple>
                <i className="fab fa-github" /> Connect with github
              </Button>
              <br />
              <Button color="behance" simple>
                <i className="fab fa-behance-square" /> Follow us
              </Button>
              <br />
              <Button color="dribbble" simple>
                <i className="fab fa-dribbble" /> Find us on dribbble
              </Button>
              <br />
              <Button color="reddit" simple>
                <i className="fab fa-reddit" /> Repost · 232
              </Button>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space50} />
        <div id="inputs">
          <div className={classes.title}>
            <h3>Inputs</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                id="regular"
                inputProps={{
                  placeholder: "Regular"
                }}
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="With floating label"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Success input"
                id="success"
                success
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Error input"
                id="error"
                error
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="With material Icons"
                id="material"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <People />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="With Font Awesome Icons"
                id="font-awesome"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <i className="fas fa-users" />
                    </InputAdornment>
                  )
                }}
              />
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space70} />
        <div id="checkRadios">
          <GridContainer>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Checkboxes</h3>
              </div>
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
                      tabIndex={-1}
                      onClick={() => handleToggle(21)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Unchecked"
                />
              </div>
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
                      tabIndex={-1}
                      onClick={() => handleToggle(22)}
                      checked={checked.indexOf(22) !== -1 ? true : false}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Checked"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Checkbox
                      tabIndex={-1}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    disabled: classes.disabledCheckboxAndRadio,
                    root: classes.labelRoot
                  }}
                  label="Disabled Unchecked"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Checkbox
                      tabIndex={-1}
                      checked={checked.indexOf(24) !== -1 ? true : false}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    disabled: classes.disabledCheckboxAndRadio,
                    root: classes.labelRoot
                  }}
                  label="Disabled Checked"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Radio Buttons</h3>
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "a"}
                      onChange={() => setSelectedEnabled("a")}
                      value="a"
                      name="radio button enabled"
                      aria-label="A"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="First Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "b"}
                      onChange={() => setSelectedEnabled("b")}
                      value="b"
                      name="radio button enabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Second Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Radio
                      checked={false}
                      value="a"
                      name="radio button disabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Disabled Unchecked Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Radio
                      checked={true}
                      value="b"
                      name="radio button disabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Disabled Checked Radio"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Toggle Buttons</h3>
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checkedA}
                      onChange={(event) => setCheckedA(event.target.checked)}
                      value="checkedA"
                      classes={{
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        thumb: classes.switchIcon,
                        track: classes.switchBar
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Toggle is on"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checkedB}
                      onChange={(event) => setCheckedB(event.target.checked)}
                      value="checkedB"
                      classes={{
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        thumb: classes.switchIcon,
                        track: classes.switchBar
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Toggle is off"
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space70} />
        <div id="select">
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.title}>
                <h3>Customizable Select</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6} lg={5}>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
                      Single Select
                    </InputLabel>
                    <Select
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={simpleSelect}
                      onChange={handleSimple}
                      inputProps={{
                        name: "simpleSelect",
                        id: "simple-select"
                      }}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem
                        }}
                      >
                        Single Select
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="2"
                      >
                        Paris
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="3"
                      >
                        Bucharest
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="4"
                      >
                        Rome
                      </MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={5}>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                      htmlFor="multiple-select"
                      className={classes.selectLabel}
                    >
                      Multiple Select
                    </InputLabel>
                    <Select
                      multiple
                      value={multipleSelect}
                      onChange={handleMultiple}
                      MenuProps={{
                        className: classes.selectMenu,
                        classes: { paper: classes.selectPaper }
                      }}
                      classes={{ select: classes.select }}
                      inputProps={{
                        name: "multipleSelect",
                        id: "multiple-select"
                      }}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem
                        }}
                      >
                        Multiple Select
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelectedMultiple
                        }}
                        value="2"
                      >
                        Paris
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelectedMultiple
                        }}
                        value="3"
                      >
                        Bucharest
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelectedMultiple
                        }}
                        value="4"
                      >
                        Rome
                      </MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={4} md={6}>
              <div className={classes.title}>
                <h3>Dropdown & Dropup</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={8} lg={6}>
                  <CustomDropdown
                    dropdownHeader="Dropdown header"
                    buttonText="Multilevel Dropdown"
                    buttonProps={{
                      round: true,
                      block: true,
                      color: "info"
                    }}
                    dropPlacement="bottom"
                    dropdownList={[
                      "Action",
                      "Another action",
                      "Something else here",
                      { divider: true },
                      "Separated link",
                      { divider: true },
                      "One more separated link",
                      <CustomDropdown
                        data-ref="multi"
                        key={96586}
                        innerDropDown
                        buttonText="Submenu"
                        buttonProps={{
                          simple: true,
                          block: true
                        }}
                        dropPlacement="right-start"
                        dropdownList={[
                          "Submenu action",
                          "Submenu action",
                          <CustomDropdown
                            data-ref="multi"
                            key={965816}
                            innerDropDown
                            buttonText="Second submenu"
                            buttonProps={{
                              simple: true
                            }}
                            dropPlacement="right-start"
                            dropdownList={[
                              "Submenu action 1",
                              "Submenu action 2"
                            ]}
                          />
                        ]}
                      />
                    ]}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={8} lg={6}>
                  <CustomDropdown
                    dropup
                    dropPlacement="top"
                    dropdownHeader="Dropup header"
                    buttonText="Dropup"
                    buttonProps={{
                      round: true,
                      block: true,
                      color: "info"
                    }}
                    dropdownList={[
                      "Action",
                      "Another action",
                      "Something else here",
                      { divider: true },
                      "Separated link",
                      { divider: true },
                      "One more separated link"
                    ]}
                  />
                </GridItem>
                <GridItem
                  sm={12}
                  md={8}
                  lg={6}
                  className={classes.mlAuto + " " + classes.mrAuto}
                >
                  <CustomDropdown
                    dropdownHeader="Dropdown header"
                    buttonText="Dropdown"
                    buttonProps={{
                      round: true,
                      block: true,
                      color: "info"
                    }}
                    dropPlacement="bottom"
                    dropdownList={[
                      "Action",
                      "Another action",
                      "Sometjing else here",
                      { divider: true },
                      "Separeted link"
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space70} />
        <div id="textareaTags">
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.title}>
                <h3>Textarea</h3>
              </div>
              <CustomInput
                labelText="You can write your text here..."
                id="textarea-input"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.title}>
                <h3>Tags</h3>
              </div>
              <TagsInput
                value={tags}
                onChange={handleTags}
                tagProps={{ className: "react-tagsinput-tag rose" }}
              />
            </GridItem>
          </GridContainer>
        </div>
        <div id="progress">
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.title}>
                <h3>Progress Bars</h3>
              </div>
              <CustomLinearProgress
                variant="determinate"
                color="primary"
                value={30}
              />
              <CustomLinearProgress
                variant="determinate"
                color="info"
                value={60}
              />
              <CustomLinearProgress
                variant="determinate"
                color="success"
                value={100}
                style={{ width: "35%", display: "inline-block" }}
              />
              <CustomLinearProgress
                variant="determinate"
                color="warning"
                value={100}
                style={{ width: "20%", display: "inline-block" }}
              />
              <CustomLinearProgress
                variant="determinate"
                color="danger"
                value={25}
                style={{ width: "45%", display: "inline-block" }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.title}>
                <h3>Pagination</h3>
              </div>
              <Hidden smDown>
                <Paginations
                  pages={[
                    { text: 1 },
                    { disabled: true, text: "..." },
                    { text: 5 },
                    { text: 6 },
                    { active: true, text: 7 },
                    { text: 8 },
                    { text: 9 },
                    { text: "..." },
                    { text: 12 }
                  ]}
                />
                <Paginations
                  pages={[
                    { text: "PREV" },
                    { text: 1 },
                    { text: 2 },
                    { active: true, text: 3 },
                    { text: 4 },
                    { text: 5 },
                    { text: "NEXT" }
                  ]}
                  color="info"
                />
              </Hidden>
              <Hidden smUp>
                <Paginations
                  pages={[
                    { text: 1 },
                    { disabled: true, text: "..." },
                    { text: 6 },
                    { active: true, text: 7 },
                    { text: 8 },
                    { text: "..." }
                  ]}
                />
                <Paginations
                  pages={[
                    { text: 1 },
                    { text: 2 },
                    { active: true, text: 3 },
                    { text: 4 },
                    { text: 5 }
                  ]}
                  color="info"
                />
              </Hidden>
            </GridItem>
          </GridContainer>
        </div>
        <div id="sliders">
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.title}>
                <h3>Sliders</h3>
              </div>
              <div id="sliderRegular" className="slider-primary" />
              <br />
              <div id="sliderDouble" className="slider-info" />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.title}>
                <h3>Badges</h3>
              </div>
              <Badge>default</Badge>
              <Badge color="primary">primary</Badge>
              <Badge color="info">info</Badge>
              <Badge color="success">success</Badge>
              <Badge color="warning">warning</Badge>
              <Badge color="danger">danger</Badge>
              <Badge color="rose">rose</Badge>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
