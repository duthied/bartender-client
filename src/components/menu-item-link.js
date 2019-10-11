import React from "react";
import styled, { css } from "react-emotion";
import { Link } from "@reach/router";

import { unit, colors } from "../styles";

export const MenuContainer = css({
  display: "flex",
  flexDirection: "row-reverse",
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
  paddingLeft: unit * 5
});

const titleItemClassName = css({
  flexGrow: 1,
  width: 0,
  fontFamily: "inherit",
  fontSize: 30,
  fontWeight: "bold",
  letterSpacing: 1.5,
  textTransform: "uppercase",
  color: "black",
  paddingLeft: unit * 5
});

const MenuItemLink = styled(Link)(menuItemClassName, {
  textDecoration: "none"
});

const TitleItemLink = styled(Link)(titleItemClassName, {
  textDecoration: "none"
});

export const NavLink = props => (
  <MenuItemLink
    {...props}
    getProps={({ isPartiallyCurrent }) => {
      return {
        style: {
          textDecoration: isPartiallyCurrent ? "none" : "underline",
          color: isPartiallyCurrent ? colors.active : colors.inactive,
          cursor: isPartiallyCurrent ? "text" : "pointer"
        }
      };
    }}
  />
);

export const TitleLink = props => (
  <TitleItemLink
    {...props}
    getProps={({ isPartiallyCurrent }) => {
      return {
        style: {
          textDecoration: isPartiallyCurrent ? "none" : "underline"
        }
      };
    }}
  />
);
