import gql from "graphql-tag";

const SpiritItemSchema = gql`
  fragment SpiritItem on Spirit {
    __typename
    id
    name
    type
    howMuchLeft
  }
`;

export const GetSpiritsQuery = gql`
  query GetSpiritList {
    spirits {
      ...SpiritItem
    }
  }
  ${SpiritItemSchema}
`;

export const GetSpiritQuery = gql`
  query getSpirit($spiritId: ID!) {
    spirit(id: $spiritId) {
      id
      name
      type
      howMuchLeft
    }
  }
`;

const RecipeItemSchema = gql`
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

export const GetRecipesQuery = gql`
  query getRecipeList {
    recipes {
      ...RecipeItem
    }
  }
  ${RecipeItemSchema}
`;

export const GetRecipeQuery = gql`
  query getRecipe($recipeId: ID!) {
    recipe(id: $recipeId) {
      id
      name
      glass
      ingredients {
        spirit {
          name
        }
      }
    }
  }
`;
