import React from "react";
import styled from "react-emotion";

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
  width: "100%"
});
