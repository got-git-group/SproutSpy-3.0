import { gql } from '@apollo/client';

export const QUERY_PLANTS = gql`
  query plant {
    plants {
      _id
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

export const QUERY_ZONES = gql`
  query zones {
    zones {
      _id
      zoneName
    }
  }
`;

export const QUERY_PLANTS_BY_ZONE = gql`
  query getPlantsByZone($zoneId: ID!) {
    getPlantsByZone(zoneId: $zoneId) {
      _id
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

export const QUERY_RECOMMENDED_PLANTS = gql`
  query getPlants($zoneId: ID!) {
    recommendedPlants: getRecommendedPlants(zoneId: $zoneId) {
      _id
      plantName
      spacing
      seedDepth
      plantImg
      sunlight
      indoorStartCalc
      outdoorStartCalc
      zones {_id}
      recommended
    }
    nonRecommendedPlants: getNonRecommendedPlants(zoneId: $zoneId) {
      _id
      plantName
      spacing
      seedDepth
      plantImg
      sunlight
      indoorStartCalc
      outdoorStartCalc
      zones {_id}
      recommended
    }
  }
`;

// export const QUERY_NON_RECOMMENDED_PLANTS = gql`
//   query getNonRecommendedPlants($zoneId: ID!) {
//     getNonRecommendedPlants(zoneId: $zoneId) {
//       _id
//       plantName
//       spacing
//       seedDepth
//       plantImg
//       sunlight
//       indoorStartCalc
//       outdoorStartCalc
//       zones
//       recommended
//     }
//   }
// `;