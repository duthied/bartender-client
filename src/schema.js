import gql from "graphql-tag";

export const SpiritItemSchema = gql`
fragment SpiritItem on Spirit {
  __typename
  id
  name
  type
  howMuchLeft
}
`;

export const RecipeItemSchema = gql`
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