import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/core icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Reply from "@material-ui/icons/Reply";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Table from "/components/Table/Table.js";
import Button from "/components/CustomButtons/Button.js";
import Media from "/components/Media/Media.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Paginations from "/components/Pagination/Pagination.js";

import style from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/contentAreas.js";

const useStyles = makeStyles(style);

export default function SectionContentAreas() {
  const [checked, setChecked] = React.useState([1, 3, 5]);
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
  const fillButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });
  const simpleButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button simple justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });
  const roundButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button round justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });
  return (
    <div className="cd-section" id="contentAreas">
      <h2>Content Areas</h2>
      <div id="tables">
        <div className={classes.title}>
          <h3>Tables</h3>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h4>Simple Table</h4>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={8}
            className={classes.mrAuto + " " + classes.mlAuto}
          >
            <h4>
              <small>Simple With Actions</small>
            </h4>
            <Table
              tableHead={[
                "#",
                "Name",
                "Job Position",
                "Since",
                "Salary",
                "Actions"
              ]}
              tableData={[
                [
                  "1",
                  "Andrew Mike",
                  "Develop",
                  "2013",
                  "€ 99,225",
                  fillButtons
                ],
                ["2", "John Doe", "Design", "2012", "€ 89,241", roundButtons],
                ["3", "Alex Mike", "Design", "2010", "€ 92,144", simpleButtons],
                [
                  "4",
                  "Mike Monday",
                  "Marketing",
                  "2013",
                  "€ 49,990",
                  roundButtons
                ],
                [
                  "5",
                  "Paul Dickens",
                  "Communication",
                  "2015",
                  "€ 69,201",
                  fillButtons
                ]
              ]}
              customCellClasses={[
                classes.textCenter,
                classes.textRight,
                classes.textRight
              ]}
              customClassesForCells={[0, 4, 5]}
              customHeadCellClasses={[
                classes.textCenter,
                classes.textRight,
                classes.textRight
              ]}
              customHeadClassesForCells={[0, 4, 5]}
            />
            <h4>
              <small>Striped With Checkboxes</small>
            </h4>
            <Table
              striped
              tableHead={[
                "#",
                "",
                "Product Name",
                "Type",
                "Qty",
                "Price",
                "Amount"
              ]}
              tableData={[
                [
                  "1",
                  <Checkbox
                    key={81267378}
                    checked={checked.indexOf(1) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(1)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "Moleskine Agenda",
                  "Office",
                  "25",
                  "€ 49",
                  "€ 1,225"
                ],
                [
                  "2",
                  <Checkbox
                    key={81267378}
                    checked={checked.indexOf(2) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(2)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "Stabilo Pen",
                  "Office",
                  "30",
                  "€ 10",
                  "€ 300"
                ],
                [
                  "3",
                  <Checkbox
                    key={564267512}
                    checked={checked.indexOf(3) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(3)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "A4 Paper Pack",
                  "Office",
                  "50",
                  "€ 10.99",
                  "€ 109"
                ],
                [
                  "4",
                  <Checkbox
                    key={5642675122}
                    checked={checked.indexOf(4) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(4)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "Apple iPad",
                  "Communication",
                  "10",
                  "€ 499.00",
                  "€ 4,990"
                ],
                [
                  "5",
                  <Checkbox
                    key={56426751223}
                    checked={checked.indexOf(5) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(5)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "Apple iPhone",
                  "Communication",
                  "10",
                  "€ 599.00",
                  "€ 5,999"
                ],
                {
                  total: true,
                  colspan: "5",
                  amount: (
                    <span>
                      <small>€</small>12,999
                    </span>
                  )
                }
              ]}
              customCellClasses={[
                classes.textCenter,
                classes.padding0,
                classes.textRight,
                classes.textRight
              ]}
              customClassesForCells={[0, 1, 5, 6]}
              customHeadCellClasses={[
                classes.textCenter,
                classes.textRight,
                classes.textRight
              ]}
              customHeadClassesForCells={[0, 5, 6]}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h4>Shopping Cart Table</h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Table
              tableHead={[
                "",
                "PRODUCT",
                "COLOR",
                "SIZE",
                "PRICE",
                "QTY",
                "AMOUNT",
                ""
              ]}
              tableData={[
                [
                  <div className={classes.imgContainer} key={875643}>
                    <img
                      src="/img/product1.jpg"
                      alt="..."
                      className={classes.img}
                    />
                  </div>,
                  <span key={8756431}>
                    <a href="#jacket" className={classes.tdNameAnchor}>
                      Spring Jacket
                    </a>
                    <br />
                    <small className={classes.tdNameSmall}>
                      by Dolce&amp;Gabbana
                    </small>
                  </span>,
                  "Red",
                  "M",
                  <span key={8756432}>
                    <small className={classes.tdNumberSmall}>€</small> 549
                  </span>,
                  <span key={8756435}>
                    1{` `}
                    <div className={classes.buttonGroup}>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.firstButton}
                      >
                        <Remove />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.lastButton}
                      >
                        <Add />
                      </Button>
                    </div>
                  </span>,
                  <span key={87564312}>
                    <small className={classes.tdNumberSmall}>€</small> 549
                  </span>,
                  <Tooltip
                    key={8756431234}
                    id="close1"
                    title="Remove item"
                    placement="left"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button link className={classes.actionButton}>
                      <Close />
                    </Button>
                  </Tooltip>
                ],
                [
                  <div className={classes.imgContainer} key={875643}>
                    <img
                      src="/img/product2.jpg"
                      alt="..."
                      className={classes.img}
                    />
                  </div>,
                  <span key={875643}>
                    <a href="#jacket" className={classes.tdNameAnchor}>
                      Short Pants{" "}
                    </a>
                    <br />
                    <small className={classes.tdNameSmall}>by Gucci</small>
                  </span>,
                  "Purple",
                  "M",
                  <span key={875643}>
                    <small className={classes.tdNumberSmall}>€</small> 499
                  </span>,
                  <span key={875643}>
                    2{` `}
                    <div className={classes.buttonGroup}>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.firstButton}
                      >
                        <Remove />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.lastButton}
                      >
                        <Add />
                      </Button>
                    </div>
                  </span>,
                  <span key={875643}>
                    <small className={classes.tdNumberSmall}>€</small> 998
                  </span>,
                  <Tooltip
                    key={875643}
                    id="close2"
                    title="Remove item"
                    placement="left"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button link className={classes.actionButton}>
                      <Close />
                    </Button>
                  </Tooltip>
                ],
                [
                  <div className={classes.imgContainer} key={875643}>
                    <img
                      src="/img/product3.jpg"
                      alt="..."
                      className={classes.img}
                    />
                  </div>,
                  <span key={875643}>
                    <a href="#jacket" className={classes.tdNameAnchor}>
                      Pencil Skirt
                    </a>
                    <br />
                    <small className={classes.tdNameSmall}>by Valentino</small>
                  </span>,
                  "White",
                  "XL",
                  <span key={875643}>
                    <small className={classes.tdNumberSmall}>€</small> 799
                  </span>,
                  <span key={875643}>
                    1{` `}
                    <div className={classes.buttonGroup}>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.firstButton}
                      >
                        <Remove />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.lastButton}
                      >
                        <Add />
                      </Button>
                    </div>
                  </span>,
                  <span key={875643}>
                    <small className={classes.tdNumberSmall}>€</small> 799
                  </span>,
                  <Tooltip
                    key={875643}
                    id="close3"
                    title="Remove item"
                    placement="left"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button link className={classes.actionButton}>
                      <Close />
                    </Button>
                  </Tooltip>
                ],
                {
                  purchase: true,
                  colspan: "3",
                  amount: (
                    <span>
                      <small>€</small>2,346
                    </span>
                  ),
                  col: {
                    colspan: 3,
                    text: (
                      <Button color="info" round>
                        Complete Purchase <KeyboardArrowRight />
                      </Button>
                    )
                  }
                }
              ]}
              tableShopping
              customHeadCellClasses={[
                classes.textCenter,
                classes.description,
                classes.description,
                classes.textCenter,
                classes.textRight,
                classes.textRight
              ]}
              customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
              customCellClasses={[
                classes.tdName,
                classes.customFont,
                classes.customFont,
                classes.tdNumber + " " + classes.textCenter,
                classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                classes.tdNumber + " " + classes.textCenter
              ]}
              customClassesForCells={[1, 2, 3, 4, 5, 6]}
            />
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.space50} />
      <div id="comments">
        <div className={classes.title}>
          <h3>Comments</h3>
        </div>
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={classes.mlAuto + " " + classes.mrAuto}
          >
            <div>
              <h3 className={classes.title + " " + classes.textCenter}>
                10 Comments
              </h3>
              <Media
                avatar="/img/faces/avatar.jpg"
                title={
                  <span>
                    Tina Andrew <small>· 7 minutes ago</small>
                  </span>
                }
                body={
                  <span>
                    <p>
                      Chance too good. God level bars. I{"'"}m so proud of
                      @LifeOfDesiigner #1 song in the country. Panda! Don{"'"}t
                      be scared of the truth because we need to restart the
                      human foundation in truth I stand with the most humility.
                      We are so blessed!
                    </p>
                    <p>
                      All praises and blessings to the families of people who
                      never gave up on dreams. Don{"'"}t forget, You{"'"}re
                      Awesome!
                    </p>
                  </span>
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
                        className={classes.floatRight}
                      >
                        <Reply /> Reply
                      </Button>
                    </Tooltip>
                    <Button
                      color="danger"
                      simple
                      className={classes.floatRight}
                    >
                      <Favorite /> 243
                    </Button>
                  </div>
                }
                innerMedias={[
                  <Media
                    key={Math.random() * Date.now()}
                    avatar="/img/faces/kendall.jpg"
                    body={
                      <CustomInput
                        id="reply"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 4,
                          placeholder: " Write some nice stuff or nothing..."
                        }}
                      />
                    }
                    footer={
                      <Button color="primary" className={classes.floatRight}>
                        <Reply /> Reply
                      </Button>
                    }
                  />
                ]}
              />
              <Media
                avatar="/img/faces/card-profile1-square.jpg"
                title={
                  <span>
                    John Camber <small>· Yesterday</small>
                  </span>
                }
                body={
                  <span>
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
                        className={classes.floatRight}
                      >
                        <Reply /> Reply
                      </Button>
                    </Tooltip>

                    <Button link className={classes.floatRight}>
                      <Favorite /> 25
                    </Button>
                  </div>
                }
                innerMedias={[
                  <Media
                    key={Math.random() * Date.now()}
                    avatar="/img/faces/avatar.jpg"
                    title={
                      <span>
                        Tina Andrew <small>· 2 Days Ago</small>
                      </span>
                    }
                    body={
                      <span>
                        <p>
                          Hello guys, nice to have you on the platform! There
                          will be a lot of great stuff coming soon. We will keep
                          you posted for the latest news.
                        </p>
                        <p>
                          Don{"'"}t forget, You{"'"}re Awesome!
                        </p>
                      </span>
                    }
                    footer={
                      <div>
                        <Tooltip
                          id="tooltip-tina2"
                          title="Reply to comment"
                          placement="top"
                          classes={{ tooltip: classes.tooltip }}
                        >
                          <Button
                            color="primary"
                            simple
                            className={classes.floatRight}
                          >
                            <Reply /> Reply
                          </Button>
                        </Tooltip>
                        <Button
                          simple
                          color="danger"
                          className={classes.floatRight}
                        >
                          <Favorite /> 243
                        </Button>
                      </div>
                    }
                  />
                ]}
              />
              <Media
                key={Math.random() * Date.now()}
                avatar="/img/faces/avatar.jpg"
                title={
                  <span>
                    Rosa Thompson <small>· 2 Days Ago</small>
                  </span>
                }
                body={
                  <span>
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
                  <div>
                    <Tooltip
                      id="tooltip-tina2"
                      title="Reply to comment"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        color="primary"
                        simple
                        className={classes.floatRight}
                      >
                        <Reply /> Reply
                      </Button>
                    </Tooltip>
                    <Button
                      simple
                      color="danger"
                      className={classes.floatRight}
                    >
                      <Favorite /> 243
                    </Button>
                  </div>
                }
              />
              <div>
                <Paginations
                  className={
                    classes.textCenter + " " + classes.justifyContentCenter
                  }
                  pages={[
                    { text: "«" },
                    { text: 1 },
                    { text: 2 },
                    { active: true, text: 3 },
                    { text: 4 },
                    { text: 5 },
                    { text: "»" }
                  ]}
                  color="primary"
                />
              </div>
            </div>
            <h3 className={classes.textCenter}>
              Post your comment <br />
              <small>- Logged In User -</small>
            </h3>
            <Media
              avatar="/img/faces/avatar.jpg"
              body={
                <CustomInput
                  id="logged"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 6,
                    placeholder: " Write some nice stuff or nothing..."
                  }}
                />
              }
              footer={
                <Button color="primary" className={classes.floatRight}>
                  <Reply /> Reply
                </Button>
              }
            />
            <h3 className={classes.textCenter}>
              Post your comment <br />
              <small>- Not Logged In User -</small>
            </h3>
            <Media
              avatar="/img/placeholder.jpg"
              body={
                <div>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                      <CustomInput
                        id="not-logged-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Your Name"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                      <CustomInput
                        id="not-logged-email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Your Email"
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <CustomInput
                    id="not-logged-message"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6,
                      placeholder: " Write some nice stuff or nothing..."
                    }}
                  />
                </div>
              }
              footer={
                <div className={classes.signInButton}>
                  <h6>SIGN IN WITH</h6>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button justIcon round color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <Button justIcon round color="google">
                    <i className="fab fa-google-plus-square" />
                  </Button>
                  <Button color="primary" className={classes.floatRight}>
                    Post comment
                  </Button>
                </div>
              }
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
