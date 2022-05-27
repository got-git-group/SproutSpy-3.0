import { gql } from '@apollo/client';

export const UPDATE_PLANT = gql`
  mutation updatePlant($plantId: ID!) { 
    updatePlant($plantId: ID) {
      plantName
      spacing
      seedDepth
      plantImg
      sunlight
      indoorStartCalc
      outdoorStartCalc
      zones
      recommended
    }
  }
`;

export const ADD_PLANT = gql`
  mutation addPlant($plantName: String!) {
    addPlant($plantName: String!) {
      plantName
      spacing
      seedDepth
      plantImg
      sunlight
      indoorStartCalc
      outdoorStartCalc
      zones
      recommended
    }
  }
`;