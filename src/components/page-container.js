import React, { Fragment } from "react";
import styled from "react-emotion";

import { unit, colors } from "../styles";

export default function PageContainer(props) {
  return (
    <Fragment>
      <Bar />
      <Container>{props.children}</Container>
    </Fragment>
  );
}

const Bar = styled("div")({
  flexShrink: 0,
  height: 12,
  backgroundColor: colors.primary
});

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  alignItems: "flex-start",
  width: "100%",
  maxWidth: 800,
  margin: unit * 4,
  padding: unit * 3,
  paddingBottom: unit * 5
});
