import React, { Fragment } from "react";
import styled from "react-emotion";
import { unit, colors } from "../styles";
import ListingTitle from "./listing-title";

const listingTitle = "Spirits";
const listingTarget = "spirits";

export default function SpiritListing() {
  return (
    <Fragment>
      <Container>
        <ListingTitle to={listingTarget} title={listingTitle} />
      </Container>
    </Fragment>
  );
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  width: "100%",
  maxWidth: 500,
  margin: "0 auto",
  padding: unit * 3,
  paddingBottom: unit * 5,
  marginBottom: unit * 2,
  marginRight: unit * 10,
  backgroundColor: colors.secondary
});
