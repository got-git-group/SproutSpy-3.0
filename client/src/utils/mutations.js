import { gql } from "@apollo/client";

export const UPDATE_PLANT = gql`
  mutation updatePlant($plantId: ID!) {
    updatePlant(plantName: $plantName) {
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

export const ADD_PLANT = gql`
  mutation addPlant(
    $plantName: String!
    $sunlight: String!
    $spacing: String!
  ) {
    addPlant(plantName: $plantName, spacing: $spacing, sunlight: $sunlight) {
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

export const ADD_USERDATA = gql`
  mutation addUserData($zone: String!, $springFrost: Date!) {
    addUserData(zone: $zone, springFrost: $springFrost) {
      zone
      springFrost
    }
  }
`;

export const UPDATE_USERDATA = gql`
  mutation updateUserData($userId: ID!) {
    updateUserData(userId: $userId) {
      zone
      springFrost
    }
  }
`;