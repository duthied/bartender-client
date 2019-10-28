import React, { useState } from "react";
import styled from "react-emotion";
import { useMutation, useQuery } from "@apollo/react-hooks";

import { Link } from "@reach/router";
import { unit, colors } from "../styles";

// eslint-disable-next-line no-unused-vars
import { EditSpirit, GetSpiritQuery, GetSpiritTypesQuery } from "../schema";

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

export function SpiritForm({ id, name, type, howMuchLeft }) {
  const [nameInput, setNameInput] = useState(name);
  const [typeInput, setTypeInput] = useState(type);
  const [howMuchLeftInput, setHowMuchLeftInput] = useState(howMuchLeft);

  const [mutate, { loading, errors }] = useMutation(EditSpirit, {
    refetchQueries: ["GetSpiritQuery"]
  });

  const { data } = useQuery(GetSpiritTypesQuery);

  if (loading) return <div>...loading...</div>;
  if (errors) return <p>ERROR: {errors}</p>;

  return (
    <div>
      <input
        className="inputName"
        value={nameInput}
        placeholder="the spirit's name"
        onChange={e => setNameInput(e.target.value)}
      />

      {data && data.__type ? (
        <select onChange={e => setTypeInput(e.target.value)} value={typeInput}>
          {data.__type.enumValues.map(enumValue => (
            <option value={enumValue.name}>{enumValue.name}</option>
          ))}
        </select>
      ) : (
        <select></select>
      )}

      <input
        className="inputHML"
        value={howMuchLeftInput}
        placeholder="how much is left? (%)"
        onChange={e => setHowMuchLeftInput(e.target.value)}
      />

      <button
        onClick={() => {
          mutate({
            variables: {
              id: id,
              name: nameInput,
              type: typeInput,
              howMuchLeft: howMuchLeftInput
            }
          });
        }}
      >
        save
      </button>
    </div>
  );
}

export const SpiritTile = styled("div")({
  paddingBottom: unit * 5,
  marginRight: unit * 2
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
