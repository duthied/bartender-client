import React from "react";
import styled from "react-emotion";

import { unit } from "../styles";
// import { MenuContainer, NavLink } from "./menu-item-link";

const siteTitle = "Bartender";

export default function Header(props) {
  return (
    <Container>
      <div>
        <h2>{siteTitle}</h2>
      </div>
      {/* <MenuContainer>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/spirits">Spirits</NavLink>
      </MenuContainer> */}
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
