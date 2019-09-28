import React from "react";
import styled from "react-emotion";
import { unit } from "../styles";

import { SpiritListing, RecipeListing } from "../components";

export default function Listings() {
  return (
    <Container>
      <SpiritListing />
      <RecipeListing />
    </Container>
  );
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
  width: "100%",
  maxWidth: 800,
  margin: "0 auto",
  padding: unit * 3,
  paddingBottom: unit * 5
});
