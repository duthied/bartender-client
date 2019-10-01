import React, { Fragment } from "react";
import styled from "react-emotion";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { unit, colors } from "../styles";
import ListingTitle from "./listing-title";

const listingTitle = "Spirits";
const listingTarget = "spirits";

export const SPIRIT_DATA = gql`
  fragment SpiritItem on Spirit {
    __typename
    id
    name
    type
    howMuchLeft
  }
`;

export const GET_SPIRITS = gql`
  query GetSpiritList {
    spirits {
      ...SpiritItem
    }
  }
  ${SPIRIT_DATA}
`;

export default function SpiritListing() {
  const { data, errors } = useQuery(GET_SPIRITS);
  if (errors) 
    errors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  return (
    <Fragment>
      <Container>
        <ListingTitle to={listingTarget} title={listingTitle} />
        {
          data.spirits && data.spirits.map(
            spirit => 
              <SpiritTile key={spirit.id}>
                <SpiritTitle>{spirit.name}</SpiritTitle>
                <SpiritBody>
                  {spirit.type}<br />
                  {spirit.howMuchLeft ? spirit.howMuchLeft : '0' }% left
                </SpiritBody>
              </SpiritTile>
          )
        }
      </Container>
    </Fragment>
  );
}

// TODO - refactor out
const SpiritTile = styled("div")({
  paddingBottom: unit * 5,
});
const SpiritTitle = styled("div")({
  fontSize: 20,
  fontWeight: 'bold',
  color: colors.black
});
const SpiritBody = styled("div")({
  fontSize: 15,
  color: colors.darkGrey
});
// - end TODO

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});
