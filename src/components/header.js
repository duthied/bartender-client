import React from "react";
import styled from "react-emotion";

import { unit } from "../styles";
import { MenuContainer, MenuItemLink } from "./menu-item-link";

const siteTitle = "Bartender";

export default function Header(props) {
  return (
    <Container>
      <div>
        <h2>{siteTitle}</h2>
      </div>
      <MenuContainer>
        <MenuItemLink to="/recipes">Recipes</MenuItemLink>
        <MenuItemLink to="/spirits">Spirits</MenuItemLink>
      </MenuContainer>
    </Container>
  );
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: unit * 3.5,
  marginLeft: unit * 2,
  marginTop: unit * 2
});
