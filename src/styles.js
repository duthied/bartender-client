import { injectGlobal } from "react-emotion";

export const unit = 8;
export const colors = {
  primary: "#085A7C",
  secondary: "#B7E8FB",
  accent: "#CAB7FB",
  background: "#f7f8fa",
  grey: "#d8d9e0",
  lightGrey: "#ABB2B9",
  text: "#343c5a",
  textSecondary: "#747790",
  inactive: "#ABB2B9",
  active: "#000000"
};

export default () =>
  injectGlobal({
    [["html", "body"]]: {
      height: "100%"
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Source Sans Pro', sans-serif",
      backgroundColor: colors.background,
      color: colors.text
    },
    "#root": {
      display: "flex",
      flexDirection: "column",
      minHeight: "100%"
    },
    "*": {
      boxSizing: "border-box"
    },
    [["h1", "h2", "h3", "h4", "h5", "h6"]]: {
      margin: 0,
      fontWeight: 600
    },
    h1: {
      fontSize: 48,
      lineHeight: 1
    },
    h2: {
      fontSize: 40
    },
    h3: {
      fontSize: 36
    },
    h5: {
      fontSize: 16,
      textTransform: "uppercase",
      letterSpacing: 4
    },
    "#listingContainer": {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      width: "50%",
      maxWidth: 400,
      margin: "0 auto",
      padding: unit * 3,
      paddingBottom: unit * 5,
      marginBottom: unit * 2,
      backgroundColor: colors.secondary
    }
  });
