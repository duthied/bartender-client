import React from "react";
import styled from "react-emotion";

import { Link } from "@reach/router";
import { unit, colors } from "../styles";

export function SpiritDetail({ spirit }) {
  return (
    <SpiritTile key={spirit.id}>
      <SpiritTitle to={`/spirit/${spirit.id}`}>{spirit.name}</SpiritTitle>
      <SpiritBody>
        {spirit.type}
        <br />
        {spirit.howMuchLeft ? spirit.howMuchLeft : "0"}% left
      </SpiritBody>
    </SpiritTile>
  );
}

export const SpiritTile = styled("div")({
  paddingBottom: unit * 5
});

export const SpiritTitle = styled(Link)({
  fontSize: 20,
  fontWeight: "bold",
  color: colors.black
});

export const SpiritBody = styled("div")({
  fontSize: 15,
  color: colors.darkGrey
});
