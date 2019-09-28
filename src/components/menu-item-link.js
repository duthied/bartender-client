// import React from 'react';
import styled, { css } from "react-emotion";
import { Link } from "@reach/router";
import { unit, colors } from "../styles";

export const MenuContainer = css({
  display: "flex",
  flexDirection: "row-reverse",
  backgroundColor: colors.grey,
  marginLeft: unit * 100
});

const menuItemClassName = css({
  flexGrow: 1,
  width: 0,
  fontFamily: "inherit",
  fontSize: 20,
  fontWeight: "bold",
  letterSpacing: 1.5,
  textTransform: "uppercase",
  color: "black",
  paddingLeft: unit * 5,
  backgroundColor: colors.grey
});

export const MenuItemLink = styled(Link)(menuItemClassName, {
  textDecoration: "none"
});
