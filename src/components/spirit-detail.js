import React from "react";
import styled from "react-emotion";
import { unit, colors } from "../styles";

export function SpiritDetail({ spirit }) {
  return (
    <SpiritTile key={spirit.id}>
      <SpiritTitle>{spirit.name}</SpiritTitle>
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

export const SpiritTitle = styled("div")({
  fontSize: 20,
  fontWeight: "bold",
  color: colors.black
});

export const SpiritBody = styled("div")({
  fontSize: 15,
  color: colors.darkGrey
});
