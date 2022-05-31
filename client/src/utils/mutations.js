import { gql } from "@apollo/client";

export const UPDATE_PLANT = gql`
  mutation updatePlant(
    $plantId: ID!
    $plantName: String
    $spacing: String
    $seedDepth: String
    $plantImg: String
    $sunlight: String
    $indoorStartCalc: Int
    $outdoorStartCalc: Int
    ) {
    updatePlant(
      plantId: $plantId
      plantName: $plantName
      spacing: $spacing
      seedDepth: $seedDepth
      plantImg: $plantImg
      sunlight: $sunlight
      indoorStartCalc: $indoorStartCalc
      outdoorStartCalc: $outdoorStartCalc
      ) {
      plantName
      spacing
      seedDepth
      plantImg
      sunlight
      indoorStartCalc
      outdoorStartCalc
    }
  }
`;

export const ADD_PLANT = gql`
  mutation addPlant(
    $plantName: String!
    $spacing: String!
    $seedDepth: String
    $plantImg: String
    $sunlight: String!
    $indoorStartCalc: Int
    $outdoorStartCalc: Int
    $zones: [String]
  ) {
    addPlant(
      plantName: $plantName, 
      spacing: $spacing,
      seedDepth: $seedDepth,
      plantImg: $plantImg, 
      sunlight: $sunlight,
      indoorStartCalc: $indoorStartCalc,
      outdoorStartCalc: $outdoorStartCalc,
      zones {
        _id
      }
      ) {
      plantName
      spacing
      seedDepth
      plantImg
      sunlight
      indoorStartCalc
      outdoorStartCalc
      zones
    }
  }
`;

export const REMOVE_PLANT = gql`
  mutation removePlant($plantId: ID!) {
    removePlant(plantId: $plantId) {
      plantName
    } 
  }
`;
