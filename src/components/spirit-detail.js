import React, { useState } from "react";
import styled from "react-emotion";
// import { lighten } from 'polished';

import { useMutation } from "@apollo/react-hooks";

import { Link } from "@reach/router";
import { unit, colors } from "../styles";

import { EditSpirit, GetSpiritQuery } from "../schema";

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
  // eslint-disable-next-line no-unused-vars
  let spiritName, spiritType, spiritHowMuchLeft;

  const [nameInput, setNameInput] = useState(name);
  const [typeInput, setTypeInput] = useState(type);
  const [howMuchLeftInput, setHowMuchLeftInput] = useState(howMuchLeft);

  const [mutate, { loading, errors }] = useMutation( EditSpirit, { update: GetSpiritQuery } );

  if (loading) return <div>...loading...</div>;
  if (errors) return <p>ERROR: {errors}</p>;

  return (
    <div>
      <form className="formInput" onSubmit={(e) => {
          e.preventDefault();
          mutate({ variables: { 
            id: id, 
            name: nameInput, 
            type: typeInput,
            howMuchLeft: howMuchLeftInput
          } });
          }}>

      <input
        value={nameInput} 
        placeholder="the spirit's name"
        onChange={ e => (setNameInput(e.target.value)) }
        ref={ n => (spiritName = n) }
      />
      <input
        value={typeInput} 
        placeholder="what type?"
        onChange={ e => (setTypeInput(e.target.value)) }
        ref={ n => (spiritType = n) }
      />
      <input
        value={howMuchLeftInput} 
        placeholder="how much is left? (%)"
        onChange={ e => (setHowMuchLeftInput(e.target.value)) }
        ref={ n => (spiritHowMuchLeft = n) }
      />
      
      </form>
      {/* <button>submit</button> */}
    </div>
  );
};



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


// const height = 50;
// const Button = styled('button')({
//   display: 'block',
//   minWidth: 200,
//   height: 50,
//   margin: '0 auto',
//   padding: `0 ${unit * 4}px`,
//   border: 'none',
//   borderRadius: height / 2,
//   fontFamily: 'inherit',
//   fontSize: 18,
//   lineHeight: `${height}px`,
//   fontWeight: 700,
//   color: 'white',
//   textTransform: 'uppercase',
//   backgroundColor: colors.accent,
//   cursor: 'pointer',
//   outline: 'none',
//   ':hover': {
//     backgroundColor: lighten(0.1, colors.accent),
//   },
//   ':active': {
//     backgroundColor: lighten(0.2, colors.accent),
//   },
// });