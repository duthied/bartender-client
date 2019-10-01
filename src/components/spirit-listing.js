import React, { Fragment } from "react";
import styled from "react-emotion";
import { unit, colors } from "../styles";

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

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
  const { data, error } = useQuery(GET_SPIRITS);
  if (error) return <p>ERROR</p>;

  return (
    <Fragment>
      <Container>
        <ListingTitle to={listingTarget} title={listingTitle} />
        {data.spirits &&
        data.spirits.map(spirit => (
          <h3>{spirit.name}</h3>
        ))}
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
