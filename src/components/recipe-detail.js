import React, { Fragment } from "react";
import styled from "react-emotion";
import { unit, colors } from "../styles";

export function RecipeDetail({ recipe }) {
  return (
    <RecipeTile key={recipe.id}>
      <RecipeTitle>{recipe.name}</RecipeTitle>
      <RecipeBody>
        Spirits:
        <Ingredients>
          {recipe.ingredients.map(ingredient => (
            <Fragment key={ingredient.spirit.name}>
              {ingredient.spirit.name}
              <br />
            </Fragment>
          ))}
        </Ingredients>
        Glass: {recipe.glass}
      </RecipeBody>
    </RecipeTile>
  );
}

// TODO - refactor out
export const RecipeTile = styled("div")({
  paddingBottom: unit * 5
});

export const RecipeTitle = styled("div")({
  fontSize: 20,
  fontWeight: "bold",
  color: colors.black
});

export const RecipeBody = styled("div")({
  fontSize: 15,
  color: colors.darkGrey
});

export const Ingredients = styled("div")({
  paddingLeft: unit * 1,
  marginBottom: unit * 1
});
// - end TODO
