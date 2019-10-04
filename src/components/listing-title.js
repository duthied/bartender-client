import React from "react";
import styled, { css } from "react-emotion";

import { unit } from "../styles";

export default function ListingTitle(props) {
  return <TitleLink to={props.to}>{props.title}</TitleLink>;
}

export const listingTitleClassName = css({
  width: 0,
  fontFamily: "inherit",
  fontSize: 35,
  fontWeight: "bold",
  letterSpacing: 1.5,
  textTransform: "uppercase",
  textAlign: "center",
  marginBottom: unit * 2
});

const TitleLink = styled("div")(listingTitleClassName, {
  textDecoration: "none"
});
