import { gql } from '@apollo/client';

export const QUERY_PLANTS = gql`
  query plants {
    plants {
      _id
      plantName
      spacing
      seedDepth
      plantImg
      sunlight
      indoorStartCalc
      outdoorStartCalc
      zones [Zone]
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
      zones [Zone]
      recommended
    }
  }
`;

export const QUERY_RECOMMENDED_PLANTS = gql`
  query getRecommendedPlants($zoneId: ID!) {
    getRecommendedPlants(zoneId: $zoneId) {
      _id
      plantName
      spacing
      seedDepth
      plantImg
      sunlight
      indoorStartCalc
      outdoorStartCalc
      zones [Zone]
      recommended
    }
  }
`;