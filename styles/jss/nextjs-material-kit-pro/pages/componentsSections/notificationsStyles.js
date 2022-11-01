import {
  container,
  title,
  whiteColor,
  section
} from "/styles/jss/nextjs-material-kit-pro.js";

const notificationsStyles = {
  section: {
    backgroundColor: whiteColor,
    display: "block",
    width: "100%",
    position: "relative",
    padding: "70px 0",
    ...section
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  container
};

export default notificationsStyles;
