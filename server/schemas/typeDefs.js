const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Plant {
    _id: ID
    plantName: String
    spacing: String
    seedDepth: String
    plantImg: String
    sunlight: String
    indoorStartCalc: Int
    outdoorStartCalc: Int
    zones: [Zone]
    recommended: Boolean
  }

  type Zone {
    _id: ID
    zoneName: String
  }

  type Query {
    plants: [Plant]
    zones: [Zone]
    getPlantsByZone(zoneId: ID!): [Plant]
    getRecommendedPlants(zoneId: ID!): [Plant]
  }
`;

module.exports = typeDefs;