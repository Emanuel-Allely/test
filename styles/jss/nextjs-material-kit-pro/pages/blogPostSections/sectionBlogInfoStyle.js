import { grayColor, cardTitle } from "/styles/jss/nextjs-material-kit-pro.js";
const sectionBlogInfoStyle = {
  section: {
    paddingTop: "30px",
    paddingBottom: "0",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    padding: "70px 0"
  },
  blogTags: {
    marginTop: "8px"
  },
  buttons: {
    marginTop: "0",
    marginBottom: "0",
    float: "right !important"
  },
  card: {
    marginTop: "0",
    textAlign: "left"
  },
  cardTitle,
  description: {
    fontSize: "1rem",
    color: grayColor[0]
  },
  pullRight: {
    marginTop: "25px",
    float: "right"
  }
};

export default sectionBlogInfoStyle;
