import React, { Fragment } from "react";
import styled from "react-emotion";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { unit, colors } from "../styles";
import ListingTitle from "./listing-title";

const listingTitle = "Recipes";
const listingTarget = "recipes";

export const RECIPE_DATA = gql`
  fragment RecipeItem on Recipe {
    __typename
    id
    name
    glass
    ingredients {
      spirit {
        name
      }
    }
  }
`;

export const GET_RECIPES = gql`
  query getRecipeList {
    recipes {
      ...RecipeItem
    }
  }
  ${RECIPE_DATA}
`;

export default function RecipeListing() {
  const { data, errors } = useQuery(GET_RECIPES);
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
          data.recipes && data.recipes.map(
            recipe =>
              <RecipeTile key={recipe.id} >
                <RecipeTitle>{recipe.name}</RecipeTitle>
                <RecipeBody>
                  Spirits: 
                  <Ingredients>
                    {recipe.ingredients.map(
                      ingredient =>
                        <Fragment key={ingredient.spirit.name}>
                          {ingredient.spirit.name}<br />
                        </Fragment>
                    )}
                  </Ingredients>
                  
                  Glass: {recipe.glass}
                </RecipeBody>
              </RecipeTile>
          )
        }
      </Container>
    </Fragment>
  );
}

// TODO - refactor out
const RecipeTile = styled("div")({
  paddingBottom: unit * 5,
});
const RecipeTitle = styled("div")({
  fontSize: 20,
  fontWeight: 'bold',
  color: colors.black
});
const RecipeBody = styled("div")({
  fontSize: 15,
  color: colors.darkGrey
});
const Ingredients = styled("div")({
  paddingLeft: unit * 1,
  marginBottom: unit * 1
});
// - end TODO

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});
