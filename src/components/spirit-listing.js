import React, { Fragment } from "react";
import styled from "react-emotion";

import { useQuery } from "@apollo/react-hooks";

import ListingTitle from "./listing-title";
import { SpiritDetail } from "./spirit-detail";
import { GetSpiritsQuery } from "../schema";

const listingTitle = "Spirits";
const listingTarget = "spirits";

export default function SpiritListing() {
  const { data, errors } = useQuery(GetSpiritsQuery);
  if (errors)
    errors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  return (
    <Fragment>
      <Container>
        <ListingTitle to={listingTarget} title={listingTitle} />
        {data.spirits &&
          data.spirits.map(spirit => (
            <SpiritDetail to="/spirit&id={spirit.id}" key={spirit.id} spirit={spirit} />
          ))}
      </Container>
    </Fragment>
  );
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%"
});
