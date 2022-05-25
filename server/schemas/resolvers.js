const { Plant, Zone } = require('../models');

const resolvers = {
  Query: {
    plant: async () => {
      return await Plant.find({})
    },
    zones: async () => {
      return await Zone.find({})
    },
    getPlantsByZone: async (_, { zoneId }) => {
      return await Plant.find({zones: { $in : [zoneId]} });
    },
    getRecommendedPlants: async (_, { zoneId }) => {
      const results = await Plant.find({zones: { $in : [zoneId]} })
      return results.filter(plant => plant.recommended === true)
    },
    getNonRecommendedPlants: async (_, { zoneId }) => {
      const results = await Plant.find({zones: { $in : [zoneId]} })
      return results.filter(plant => plant.recommended === false)
    },
  },
  // Mutation: {

  // },
};

module.exports = resolvers;