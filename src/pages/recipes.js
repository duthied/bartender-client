import React, { Fragment } from "react";
import styled from "react-emotion";

import { unit } from "../styles";

export default function Recipes() {
  return (
    <Fragment>
      <Container>Recipe page</Container>
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
  backgroundColor: "white"
});
