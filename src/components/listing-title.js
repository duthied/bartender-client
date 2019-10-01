import React from "react";
import styled, { css } from "react-emotion";
import { Link } from "@reach/router";

export default function ListingTitle(props) {
  return <TitleLink to={props.to}>{props.title}</TitleLink>;
}

export const listingTitleClassName = css({
  flexGrow: 1,
  width: 0,
  fontFamily: "inherit",
  fontSize: 35,
  fontWeight: "bold",
  letterSpacing: 1.5,
  textTransform: "uppercase",
  textAlign: "center",
  // color: "black"
});

const TitleLink = styled("div")(listingTitleClassName, {
  textDecoration: "none"
});
