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
  mutation addPlant($plantId: ID!) {
    addPlant($plantId: ID) {
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