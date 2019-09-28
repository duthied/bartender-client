import React, { Fragment } from "react";
import styled from "react-emotion";

import { unit, colors } from '../styles';
import ListingTitle from './listing-title';

const listingTitle = 'Recipes';
const listingTarget = 'recipes';

export default function RecipeListing() {
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
    maxWidth: 400,
    margin: "0 auto",
    padding: unit * 3,
    paddingBottom: unit * 5,
    marginBottom: unit * 2,
    backgroundColor: colors.secondary
});
