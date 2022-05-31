const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input ZoneInput {
    zones: [String]
  }

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

  type User {
    _id: ID
    username: String
    zone: Zone
    springFrost: String
  }

  type Query {
    plant: [Plant]
    zones: [Zone]
    getPlantsByZone(zoneId: ID!): [Plant]
    getRecommendedPlants(zoneId: ID!): [Plant]
    getNonRecommendedPlants(zoneId: ID!): [Plant]
    getSinglePlant(plantId: ID!): Plant
  }

  type Mutation {
    addPlant(plantName: String!, spacing: String!, sunlight: String!, indoorStartCalc: Int, outdoorStartCalc: Int, zones: [String]): Plant
    removePlant(plantId: ID!): Plant
    updatePlant(plantId: ID!, plantName: String, spacing: String, seedDepth: String, plantImg: String, sunlight: String, indoorStartCalc: Int, outdoorStartCalc: Int, zones: [String]): Plant
    addUserData(username: String!, zone: String!, springFrost: String!): User
  }
`;

module.exports = typeDefs;